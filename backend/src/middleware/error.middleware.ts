import { NextFunction, Request, Response } from 'express';

export function errorMiddleware(err: Error, _: Request, res: Response, __: NextFunction) {
  return res.status(400).json({ message: err.message });
}
