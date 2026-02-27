import dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: Number(process.env.PORT || 5000),
  jwtSecret: process.env.JWT_SECRET || 'dev-secret',
  portalFailureRate: Number(process.env.PORTAL_FAILURE_RATE || 0.3)
};
