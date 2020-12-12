import { HttpResponse } from '@/presentation/protocols/http';

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
});
