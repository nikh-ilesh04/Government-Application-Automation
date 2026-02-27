import { Request, Response } from 'express';
import { prisma } from '../config/db';

export async function applications(_: Request, res: Response) {
  const rows = await prisma.application.findMany({ include: { user: true } });
  res.json(rows);
}

export async function analytics(_: Request, res: Response) {
  const [total, approved, failed] = await Promise.all([
    prisma.application.count(),
    prisma.application.count({ where: { state: 'Approved' } }),
    prisma.application.count({ where: { state: 'Failed' } })
  ]);
  res.json({ total, approved, failed });
}

export async function retryStats(_: Request, res: Response) {
  const stats = await prisma.retryLog.groupBy({ by: ['status'], _count: true });
  res.json(stats);
}
