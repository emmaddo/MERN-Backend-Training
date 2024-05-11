import express, { Request, Response } from 'express';

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    // Handle the root path request
    res.send("Helloo Home Page!");
});

router.post('/', (req: Request, res: Response) => {
    // Handle POST request for users
});

// More routes related to users...

export default router;
