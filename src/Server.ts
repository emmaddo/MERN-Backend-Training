import dotenv from 'dotenv';
import app from './Index';
import { DataBase } from './Config/database';

// Load environment variables from .env file
dotenv.config();

// Create an instance of the database class
const { ConnectDatabase } = new DataBase();

// Connect to the database
ConnectDatabase()
  .then(() => {
    // Database connected, now start listening
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error);
  });
