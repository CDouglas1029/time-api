const request = require('supertest');
const app = require('../src/app');

describe('GET /time', () => {
    test('should return current UTC time', async () => {
        const response = await request(app).get('/time');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('currentTime');
    });

    test('should return adjusted time for valid timezone', async () => {
        const response = await request(app).get('/time?timezone=2');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('adjustedTime');
    });

    test('should return error for invalid timezone', async () => {
        const response = await request(app).get('/time?timezone=20');
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });
});
