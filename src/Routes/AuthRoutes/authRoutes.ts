import express from 'express';
import { login } from '../../Controllers/Auth/authController'; 
import logger from '../../Utility/Logger/Logger'; 
const auth_router = express.Router();

// Apply auth middleware to all routes in this router
//auth_router.use(authMiddleware);

//auth_router.post('login');
auth_router.post('/login', login);

export default auth_router;
