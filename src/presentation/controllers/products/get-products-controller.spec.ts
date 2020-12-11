import { GetProductsController } from './get-products-controller';

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
  test('Should return 204 if no product is returned', () => {
    const { sut } = makeSut();
    const httpResponse = sut.handle();

    expect(httpResponse.statusCode).toBe(204);
  });
});
