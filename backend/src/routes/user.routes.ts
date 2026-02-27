import { Router } from 'express';
import * as controller from '../controllers/user.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
router.get('/:id', authMiddleware, controller.getUser);
router.post('/consent', authMiddleware, controller.recordConsent);

export default router;
