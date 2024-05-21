import express from 'express';
import { getUsers } from '../../Controllers/Admin/adminController'; 
const admin_router = express.Router();

admin_router.get('/users', getUsers);

export default admin_router;
