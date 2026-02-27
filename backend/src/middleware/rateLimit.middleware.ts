import { NextFunction, Request, Response } from 'express';

const requestMap = new Map<string, { count: number; ts: number }>();

export function simpleRateLimit(req: Request, res: Response, next: NextFunction) {
  const key = req.ip;
  const now = Date.now();
  const record = requestMap.get(key) || { count: 0, ts: now };

  if (now - record.ts > 60_000) {
    requestMap.set(key, { count: 1, ts: now });
    return next();
  }

  if (record.count >= 120) return res.status(429).json({ message: 'Too many requests' });

  record.count += 1;
  requestMap.set(key, record);
  next();
}
