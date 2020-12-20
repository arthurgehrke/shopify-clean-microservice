/* eslint-disable @typescript-eslint/no-unused-vars */
import { noContent, ok } from '@/presentation/helpers/http/http-helper';
import { GetProductsController } from '@/presentation/controllers/products/get-products-controller';
import { mockGetProducts } from '@/presentation/tests/mocks/get-products';
import { GetProducts } from '@/domain/usecases/get-products';
import { ProductModel } from '@/domain/models/product';

class GetProductsSpy<R = any> implements GetProducts {
  products: ProductModel[] = mockGetProducts();

  async get(): Promise<ProductModel[]> {
    return this.products;
  }
}

type SutTypes = {
  sut: GetProductsController;
  getProductsSpy: GetProductsSpy<ProductModel[]>;
};

const makeSut = (): SutTypes => {
  const getProductsSpy = new GetProductsSpy<ProductModel[]>();
  const sut = new GetProductsController(getProductsSpy);

  return {
    sut,
    getProductsSpy
  };
};

describe('GetProducts Controller', () => {
  test('Should return 204 if no product is returned', async () => {
    const { sut, getProductsSpy } = makeSut();
    getProductsSpy.products = [];
    const httpResponse = await sut.handle();

    expect(httpResponse).toEqual(noContent());
    expect(httpResponse.statusCode).toBe(204);
  });

  test('Should return 200 if at least one product is returned', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle();

    expect(httpResponse).toEqual(ok(httpResponse.body));
  });
});
