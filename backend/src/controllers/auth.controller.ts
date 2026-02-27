import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import { prisma } from '../config/db';

export async function register(req: Request, res: Response) {
  const { fullName, email, password, role } = req.body;
  const user = await authService.register(fullName, email, password, role);
  res.status(201).json(user);
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const result = await authService.login(email, password);
  res.json(result);
}

export async function profile(req: Request, res: Response) {
  const user = await prisma.user.findUnique({ where: { id: req.user!.userId }, include: { role: true } });
  res.json(user);
}
