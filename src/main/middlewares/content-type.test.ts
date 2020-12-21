import app from '@/main/config/app';

import supertest from 'supertest';

describe('ContentType Middleware', () => {
  test('Should return default content type as json', async () => {
    app.get('/test_content_type', (req, res) => res.send(''));

    await supertest(app).get('/test_content_type').expect('content-type', /json/);
  });
});
