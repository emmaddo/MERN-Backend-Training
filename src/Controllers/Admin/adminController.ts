import { Request, Response, NextFunction } from 'express';
import User from '../../Models/User/user';
import jwt from 'jsonwebtoken';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  // Check if a valid token is present
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  const token = req.headers.authorization.split(' ')[1]; // Extract token from Authorization header

  try {
    // Verify the token with the same secret used during login
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };

    // Fetch all users from the database
    User.find()
      .then(users => {
        // If no users found, return empty array or handle as needed
        if (!users || users.length === 0) {
          return res.status(404).json({ message: 'No users found' });
        }

        // Return the users as JSON response
        res.json({ users });
      })
      .catch(error => {
        // Let the error propagate without modifying it
        next(error);
      });
  } catch (error) {
    // Token verification failed
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
