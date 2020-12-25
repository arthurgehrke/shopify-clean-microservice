import app from '@/main/config/app';

import supertest from 'supertest';

describe('GetProducts Route', () => {
  test('Should not return 200 if at least one product is returned', async () => {
    await supertest(app).get('/api/get-products').expect(200);
  });
});
