import express, { Request, Response } from 'express';
import frontRoutes from './FrontRoutes/frontRoutes';
const router = express.Router();

router.use(frontRoutes);
// More related route
//router.use(backRoutes);

export default router;
