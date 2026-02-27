import { Request, Response } from 'express';

export function esign(req: Request, res: Response) {
  const { otp } = req.body;
  if (String(otp) === '123456') return res.json({ success: true, applicationId: Number(req.params.applicationId) });
  return res.status(400).json({ success: false, message: 'Invalid OTP' });
}
