import app from '@/main/config/app';

import supertest from 'supertest';

describe('GetProducts Route', () => {
  test('Should return 500 if no credentials has been passed to HttpClient', async () => {
    await supertest(app).get('/api/get-products').expect(500);
  });
});
