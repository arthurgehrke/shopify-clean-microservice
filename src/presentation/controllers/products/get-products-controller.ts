import { HttpResponse, Controller } from '@/presentation/protocols';
import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helper';
import { GetProducts } from '@/domain/usecases/get-products';

export class GetProductsController implements Controller {
  constructor(private readonly getProducts: GetProducts) {}

  async handle(): Promise<HttpResponse> {
    try {
      const products = await this.getProducts.get();

      return Object.keys(products).length ? ok(products) : noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
