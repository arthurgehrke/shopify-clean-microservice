import { HttpClient, HttpStatusCode } from '@/data/protocols/http/http-client';
import { GetProducts } from '@/domain/usecases/get-products';
import { ProductModel } from '@/domain/models/product';
import { UnexpectedError } from '@/presentation/errors/unexpected-error';

export class ClientGetProducts implements GetProducts {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ProductModel[]>
  ) {}

  async get(): Promise<ProductModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'GET'
    });

    const products = httpResponse.body || [];
    switch (httpResponse.statusCode) {
      case HttpStatusCode.noContent:
        return [];

      case HttpStatusCode.ok:
        return products;

      default:
        throw new UnexpectedError();
    }
  }
}
