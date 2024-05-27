// src/Tests/Integration/frontController.test.ts
import request from 'supertest';
import app from '../../Index';
import { createUser } from '../../Services/FrontConn/frontServices';

jest.mock('../../Services/FrontConn/frontServices');

describe('FrontController - Signup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 400 if any compulsory field is missing', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({ firstName: 'John', lastName: 'Doe', username: 'johndoe', password: 'password123' });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('All fields are compulsory');
  });

  it('should return 400 if email format is invalid', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({ firstName: 'John', lastName: 'Doe', username: 'johndoe', email: 'invalidemail', password: 'password123' });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid email format');
  });

  it('should return 400 if password is weak', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({ firstName: 'John', lastName: 'Doe', username: 'johndoe', email: 'john@example.com', password: 'weak' });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Weak password. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit');
  });

  it('should return 201 if signup is successful', async () => {
    (createUser as jest.Mock).mockResolvedValueOnce(undefined); // Providing an empty resolved value
  
    const response = await request(app)
      .post('/api/auth/signup')
      .send({ firstName: 'John', lastName: 'Doe', username: 'johndoe', email: 'john@example.com', password: 'StrongPassword123' });
  
    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User created successfully');
  });
  
});
