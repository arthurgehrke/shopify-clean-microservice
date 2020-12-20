import { HttpRequest } from '@/data/protocols/http/http-client';

import faker from 'faker';

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['GET', 'POST', 'PUT', 'DELETE']),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement()
});
