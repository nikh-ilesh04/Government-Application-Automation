import jwt from 'jsonwebtoken';
import { prisma } from '../config/db';
import { env } from '../config/env';
import { compareValue, hashValue } from '../utils/encrypt';

export async function register(fullName: string, email: string, password: string, roleName = 'Citizen') {
  const role = await prisma.role.findUniqueOrThrow({ where: { name: roleName } });
  const hashed = await hashValue(password);
  const user = await prisma.user.create({ data: { fullName, email, password: hashed, roleId: role.id }, include: { role: true } });
  return user;
}

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email }, include: { role: true } });
  if (!user || !user.password || !(await compareValue(password, user.password))) throw new Error('Invalid credentials');
  const token = jwt.sign({ userId: user.id, role: user.role.name }, env.jwtSecret, { expiresIn: '1d' });
  return { token, user };
}
