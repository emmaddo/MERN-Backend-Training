import express, { Request, Response } from 'express';

const front_router = express.Router();

front_router.get("/", (req: Request, res: Response) => {
    // Handle the root path request
    res.json({message: "Hello Home Page"});
});

front_router.get("/About", (req: Request, res: Response) => {
    // Handle the root path request
    res.json({message: "Hello About Us Page"});
});

front_router.post('/', (req: Request, res: Response) => {
    // Handle POST request for users
});

// More routes related to users...

export default front_router;
