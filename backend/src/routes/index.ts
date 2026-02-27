import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import applicationRoutes from './application.routes';
import adminRoutes from './admin.routes';
import { authMiddleware } from '../middleware/auth.middleware';
import * as kycController from '../controllers/kyc.controller';
import * as ocrController from '../controllers/ocr.controller';
import { esign } from '../controllers/esign.controller';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/applications', applicationRoutes);
router.use('/admin', adminRoutes);

router.post('/kyc/aadhaar', authMiddleware, kycController.aadhaar);
router.post('/kyc/pan', authMiddleware, kycController.pan);
router.post('/ocr/upload', authMiddleware, ocrController.upload);
router.post('/esign/:applicationId', authMiddleware, esign);

export default router;
