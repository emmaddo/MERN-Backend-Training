// Controllers/FrontConn/frontController.ts
import { Request, Response } from 'express';
import { createUser } from '../../Services/FrontConn/frontServices';

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    // Validate compulsory fields
    if (!firstName || !lastName || !username || !email || !password) {
      return res.status(401).json({ message: 'All fields are compulsory' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(401).json({ message: 'Invalid email format' });
    }

    // Validate password strength
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(401).json({ message: 'Weak password. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit' });
    }

    // If all validations pass, create user
    await createUser(req.body);
    return res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
};
