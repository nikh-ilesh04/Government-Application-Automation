import { Request, Response } from 'express';
import { prisma } from '../config/db';

export async function getUser(req: Request, res: Response) {
  const user = await prisma.user.findUnique({ where: { id: Number(req.params.id) }, include: { role: true } });
  res.json(user);
}

export async function recordConsent(req: Request, res: Response) {
  const consent = await prisma.consentRecord.create({
    data: { userId: req.user!.userId, consentGiven: Boolean(req.body.consentGiven) }
  });
  res.status(201).json(consent);
}
