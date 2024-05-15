import express, { Request, Response } from 'express';
import { signup, login } from '../../Controllers/Auth/authController'; 
const front_router = express.Router();

front_router.get("/", (req: Request, res: Response) => {
    // Handle the root path request
    //res.json({message: "Hello Home Page"});
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

front_router.post('/signup', signup);
front_router.post('/login', login);
front_router.post('/', (req: Request, res: Response) => {
    // Handle POST requests
});


// Add wildcard route to handle any other URLs
front_router.all('*', (req: Request, res: Response) => {
res.status(404).json({error: "Not Found"});
 });



export default front_router;
