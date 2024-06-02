import express from 'express';
import { getUsers } from '../../Controllers/Admin/adminController'; 
import logger from '../../Utility/Logger/Logger'; 
const admin_router = express.Router();

admin_router.get('/users', getUsers);

export default admin_router;
