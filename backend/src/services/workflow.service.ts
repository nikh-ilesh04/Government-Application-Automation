import { prisma } from '../config/db';

export async function recordWorkflowStep(applicationId: number, stepName: string, status: string) {
  return prisma.workflowStep.create({ data: { applicationId, stepName, status } });
}
