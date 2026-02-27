import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { canTransition } from '../services/stateMachine.service';
import { recordWorkflowStep } from '../services/workflow.service';
import { submitToGovernmentPortal } from '../services/portal.service';
import { createBillingRecord } from '../services/billing.service';
import { evaluateEligibility } from '../services/eligibility.service';

async function transitionState(appId: number, to: any) {
  const current = await prisma.application.findUniqueOrThrow({ where: { id: appId } });
  if (!canTransition(current.state as any, to)) throw new Error(`Invalid transition ${current.state} -> ${to}`);
  return prisma.application.update({ where: { id: appId }, data: { state: to } });
}

export async function startApplication(req: Request, res: Response) {
  const app = await prisma.application.create({ data: { userId: req.user!.userId, type: req.body.type || 'General', state: 'Draft' } });
  await recordWorkflowStep(app.id, 'start', 'COMPLETED');
  res.status(201).json(app);
}

export async function getApplication(req: Request, res: Response) {
  const app = await prisma.application.findUnique({ where: { id: Number(req.params.id) }, include: { documents: true, workflow: true, retries: true } });
  res.json(app);
}

export async function validateApplication(req: Request, res: Response) {
  const id = Number(req.params.id);
  await transitionState(id, 'DataCollected');
  const eligibility = evaluateEligibility(req.body || {});
  const state = eligibility.eligible ? 'Validated' : 'Failed';
  const app = await transitionState(id, state);
  await recordWorkflowStep(id, 'validate', eligibility.eligible ? 'COMPLETED' : 'FAILED');
  res.json({ app, eligibility });
}

export async function submitApplication(req: Request, res: Response) {
  const id = Number(req.params.id);
  await transitionState(id, 'Submitted');
  const response = submitToGovernmentPortal();
  const app = await prisma.application.update({ where: { id }, data: { state: response.ok ? 'Approved' : 'Failed' } });
  if (response.ok) await createBillingRecord(app.userId, 99.0);
  await recordWorkflowStep(id, 'submit', response.ok ? 'COMPLETED' : 'FAILED');
  res.json({ app, response });
}
