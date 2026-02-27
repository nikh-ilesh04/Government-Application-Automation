import { Request, Response } from 'express';
import { submitToGovernmentPortal } from '../services/portal.service';

export function simulatePortal(_: Request, res: Response) {
  res.json(submitToGovernmentPortal());
}
