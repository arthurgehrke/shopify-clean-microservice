import { ClientGetProducts } from '@/data/usecases/client-get-products';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode
} from '@/data/protocols/http/http-client';
import { ProductModel } from '@/domain/models/product';
import { mockClientGetProducts } from '@/data/tests/mocks/client-get-products';
import faker from 'faker';

class HttpClientSpy<R = any> implements HttpClient<R> {
  url?: string;

  method?: string;

  body?: any;

  headers?: any;

  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  };

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url;
    this.method = data.method;
    this.body = data.body;
    this.headers = data.headers;
    return this.response;
  }
}

type SutTypes = {
  sut: ClientGetProducts;
  httpClientSpy: HttpClientSpy<ProductModel[]>;
};

const makeSut = (url: string): SutTypes => {
  const httpClientSpy = new HttpClientSpy<ProductModel[]>();
  const sut = new ClientGetProducts(url, httpClientSpy);

  return {
    sut,
    httpClientSpy
  };
};

describe('ClientGetProducts', () => {
  test('Should call HttpClient with correct url and method', async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    await sut.get();

    expect(httpClientSpy.url).toBe(url);
    expect(httpClientSpy.method).toBe('GET');
  });

  test('Should return an empty array if HttpClient returns 204', async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    httpClientSpy.response = {
      statusCode: HttpStatusCode.noContent
    };

    const products = await sut.get();

    expect(products).toEqual([]);
  });

  test('Should return at least one ProductModel if HttpClient returns 200', async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    const httpResult = mockClientGetProducts();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    };

    const products = await sut.get();

    expect(products.length).toBeGreaterThanOrEqual(1);

    expect(products[0]).toHaveProperty('id');
    expect(products[0]).toHaveProperty('name');
    expect(products[0]).toHaveProperty('price');
    expect(products[0]).toHaveProperty('showcaseImage');
    expect(products[0]).toHaveProperty('galleryImages');
  });
});
