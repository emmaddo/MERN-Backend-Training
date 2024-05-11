import express, { Request, Response, NextFunction } from "express";
import routes from './Routes/routes';
import cors from 'cors';
import dotenv from 'dotenv';
import { serve, setup } from 'swagger-ui-express';
import pino, { Logger } from 'pino';


dotenv.config();

const app = express();
const logger: Logger = pino();

// Error handling middleware function
function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err); 

  // Send an appropriate error response to the client
  res.status(500).json({ error: 'Internal Server Error' });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/docs', serve, setup(/* Your Swagger spec */));

// Use the route modules
app.use(routes);
// Register error handling middleware
app.use(errorHandler);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;