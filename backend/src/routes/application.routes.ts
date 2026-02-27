import { Router } from 'express';
import * as controller from '../controllers/application.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { prisma } from '../config/db';
import { canRetry } from '../services/retry.service';

const router = Router();

router.post('/start', authMiddleware, controller.startApplication);
router.get('/:id', authMiddleware, controller.getApplication);
router.post('/:id/validate', authMiddleware, controller.validateApplication);
router.post('/:id/submit', authMiddleware, controller.submitApplication);
router.post('/:id/retry', authMiddleware, async (req, res) => {
  const id = Number(req.params.id);
  const allowed = await canRetry(id);
  if (!allowed) return res.status(400).json({ message: 'Retry limit exceeded' });
  const currentAttempts = await prisma.retryLog.count({ where: { applicationId: id } });
  await prisma.retryLog.create({ data: { applicationId: id, attemptNumber: currentAttempts + 1, status: 'RETRY_STARTED' } });
  const app = await prisma.application.update({ where: { id }, data: { state: 'Retrying' } });
  return res.json(app);
});

export default router;
