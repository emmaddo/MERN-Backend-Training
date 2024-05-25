import express, { Request, Response } from 'express';
import {signup} from '../../Controllers/Front/frontController'; 
const front_router = express.Router();

front_router.get("", (req: Request, res: Response) => {
        res.json({ 
        success: true,
        data: {
            message: "Hello Home Page",
            
        }
    });
});

front_router.get("/about", (req: Request, res: Response) => {
    res.json({ 
        success: true,
        data: {
            message: "Hello About Us Page",
            
        }
    });
 });

// front_router.get("/about", (req: Request, res: Response) => {
//     res.send("Hello About Us Page");
// });

front_router.post('/api/auth/signup', signup);

//front_router.use('/api/signup', signup);
//front_router.post('/api/auth', login);
//front_router.use('/api/auth', login);
// Add wildcard route to handle any other URLs
front_router.all('*', (req: Request, res: Response) => {
res.status(404).json({error: "Not Foundfrrrrrr"});
 });

export default front_router;
