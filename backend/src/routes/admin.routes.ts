import { Router } from 'express';
import * as controller from '../controllers/admin.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { requireRole } from '../middleware/role.middleware';

const router = Router();
router.get('/applications', authMiddleware, requireRole('Admin'), controller.applications);
router.get('/analytics', authMiddleware, requireRole('Admin'), controller.analytics);
router.get('/retry-stats', authMiddleware, requireRole('Admin'), controller.retryStats);

export default router;
