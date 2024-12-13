const request = require('supertest');
const app = require('./app');

describe('Integration Tests for Node.js App', () => {
    it('GET / - should respond with "Hello, World!"', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, World!');
    });

    it('POST /data - should respond with the sent data', async () => {
        const data = { name: 'Test User', age: 25 };
        const res = await request(app).post('/data').send(data);
        expect(res.statusCode).toBe(201);
        expect(res.body).toMatchObject(data);
    });

    it('POST /data - should fail when name or age is missing', async () => {
        const res = await request(app).post('/data').send({});
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('error', 'Name and age are required');
    });

    it('GET /data/:id - should return data for the given ID', async () => {
        const res = await request(app).get('/data/123');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ id: '123', name: 'Test User', age: 25 });
    });
});
