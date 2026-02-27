import { prisma } from '../config/db';

export async function canRetry(applicationId: number) {
  const count = await prisma.retryLog.count({ where: { applicationId } });
  return count < 3;
}
