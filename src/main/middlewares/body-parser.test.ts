import app from '@/main/config/app';

import supertest from 'supertest';

describe('BodyParser Middleware', () => {
  test('Should return response parsed as json', () => {
    app.post('test_body_parser', async (req, res) => {
      res.send(req.body);

      await supertest(app)
        .post('test_body_parser')
        .send({ name: 'any_name' })
        .expect({ name: 'any_name' });
    });
  });
});
