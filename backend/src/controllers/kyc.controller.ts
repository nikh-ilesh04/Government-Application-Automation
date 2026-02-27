import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { verifyAadhaar, verifyPan } from '../services/kyc.service';

export async function aadhaar(req: Request, res: Response) {
  const result = verifyAadhaar(req.body.aadhaar);
  await prisma.verificationLog.create({ data: { userId: req.user!.userId, verificationType: 'aadhaar', status: result.valid ? 'VALID' : 'INVALID', responseData: result } });
  res.json(result);
}

export async function pan(req: Request, res: Response) {
  const result = verifyPan(req.body.pan);
  await prisma.verificationLog.create({ data: { userId: req.user!.userId, verificationType: 'pan', status: result.valid ? 'VALID' : 'INVALID', responseData: result } });
  res.json(result);
}
