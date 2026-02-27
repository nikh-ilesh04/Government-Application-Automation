import { Request, Response } from 'express';
import { prisma } from '../config/db';

export async function getWorkflow(req: Request, res: Response) {
  const steps = await prisma.workflowStep.findMany({ where: { applicationId: Number(req.params.id) } });
  res.json(steps);
}
