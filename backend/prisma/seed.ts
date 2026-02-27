import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const roles = ['Citizen', 'Agent', 'Admin'];
  for (const name of roles) {
    await prisma.role.upsert({ where: { name }, create: { name }, update: {} });
  }

  const adminRole = await prisma.role.findUniqueOrThrow({ where: { name: 'Admin' } });
  const password = await bcrypt.hash('admin123', 10);

  await prisma.user.upsert({
    where: { email: 'admin@govassist.local' },
    create: { email: 'admin@govassist.local', fullName: 'System Admin', password, roleId: adminRole.id },
    update: {}
  });
}

main().finally(async () => prisma.$disconnect());
