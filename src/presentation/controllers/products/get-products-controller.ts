import { HttpResponse } from '@/presentation/protocols/http';
import { noContent } from '@/presentation/helpers/http/http-helper';

export class GetProductsController {
  handle(): Promise<HttpResponse> {
    return new Promise(resolve => resolve(noContent()));
  }
}
