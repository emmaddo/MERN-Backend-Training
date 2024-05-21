import express, { Request, Response } from 'express';
import frontRoutes from './FrontRoutes/frontRoutes';
import adminRoutes from './AdminRoutes/adminRoutes';
import authRoutes from './AuthRoutes/authRoutes';
const router = express.Router();

router.use('/api/auth', authRoutes);
router.use('/api/admin', adminRoutes);
router.use('/', frontRoutes);

export default router;
