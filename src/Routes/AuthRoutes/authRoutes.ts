// routes/auth.ts
import express from 'express';
//import authMiddleware from '../../Middlewares/Auth/authMiddleware'; 
import { login } from '../../Controllers/Auth/authController'; 
const auth_router = express.Router();

// Apply auth middleware to all routes in this router
//auth_router.use(authMiddleware);

//auth_router.post('login');
//auth_router.post('/login', login);

export default auth_router;
