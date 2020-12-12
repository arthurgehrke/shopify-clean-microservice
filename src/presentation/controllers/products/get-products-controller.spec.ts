import { noContent } from '@/presentation/helpers/http/http-helper';
import { GetProductsController } from '@/presentation/controllers/products/get-products-controller';

type SutTypes = {
  sut: GetProductsController;
};

const makeSut = (): SutTypes => {
  const sut = new GetProductsController();

  return {
    sut
  };
};

describe('GetProducts Controller', () => {
  test('Should return 204 if no product is returned', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle();

    expect(httpResponse).toEqual(noContent());
    expect(httpResponse.statusCode).toBe(204);
  });
});
