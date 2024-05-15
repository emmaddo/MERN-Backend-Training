import express, { Request, Response } from 'express';
import frontRoutes from './FrontRoutes/frontRoutes';
import authRoutes from './AuthRoutes/authRoutes';
const router = express.Router();

router.use('/api/auth', authRoutes);
router.use('/api', frontRoutes);
router.use('/', (req: Request, res: Response) => {
    res.status(404).json({error: "Not Found"});
     });


export default router;
