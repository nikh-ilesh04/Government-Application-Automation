import { Router } from 'express';
import * as controller from '../controllers/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/profile', authMiddleware, controller.profile);

export default router;
