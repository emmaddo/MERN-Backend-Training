import request from 'supertest';
import app from '../../Index'; 
import User from '../../Models/User/user';
import mockUser from '../../Tests/Mocks/MockUser/mockUser'; 

// Mock the User model
jest.mock('../../Models/User/user');

describe('AuthController - Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 401 if email is missing', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ password: process.env.TEST_USER_PASSWORD });
  
    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Email and password are required');
  });
  

  it('should return 401 if password is missing', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: process.env.TEST_USER_EMAIL, password: '' }); // Provide an empty password

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Email and password are required');
  });

  it('should return 401 if email format is invalid', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'invalidemail', password: process.env.TEST_USER_PASSWORD });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Invalid email format');
  });

  it('should return 401 if email or password is incorrect', async () => {
    (User.findOne as jest.Mock).mockResolvedValue(null); // Mock no user found

    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'wrong@example.com', password: process.env.TEST_USER_PASSWORD });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Invalid email or password');
  });

  it('should return 200 if login is successful', async () => {
    (User.findOne as jest.Mock).mockResolvedValue(mockUser);

    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: process.env.TEST_USER_EMAIL, password: process.env.TEST_USER_PASSWORD });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});
