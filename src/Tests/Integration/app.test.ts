import request from 'supertest';
import app from '../../Index'; 

describe('GET /', () => {
  it('should return Hello Home Page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, data: { message: "Hello Home Page" } });
  });
});

describe('GET /about', () => {
  it('should return Hello About Us Page', async () => {
    const response = await request(app).get('/about');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, data: { message: "Hello About Us Page" } });
  });
});
