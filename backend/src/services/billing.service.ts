import { prisma } from '../config/db';

export async function createBillingRecord(userId: number, amount: number) {
  return prisma.billingRecord.create({ data: { userId, amount, status: 'Pending' } });
}
