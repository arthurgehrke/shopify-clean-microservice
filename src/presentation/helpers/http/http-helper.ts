import { HttpResponse } from '@/presentation/protocols/http';
import { ServerError } from '@/presentation/errors';

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack || '')
});
