/* eslint-disable no-case-declarations */
import { HttpClient, HttpStatusCode } from '@/data/protocols/http/http-client';
import { GetProducts } from '@/domain/usecases/get-products';
import { ProductModel } from '@/domain/models/product';
import { UnexpectedError } from '@/presentation/errors/unexpected-error';
import {
  shopifyProductsSerializer,
  ShopifyProductsResponse
  // ShopifyProducts
} from '@/data/helpers/serializers/shopify-products-serializer';

export class ClientGetProducts implements GetProducts {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ShopifyProductsResponse>
  ) {}

  async get(): Promise<ProductModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'GET'
    });

    // const productsResponse: HttpResponse<ShopifyProductsResponse> = {
    //   body: {
    //     products: httpResponse.body
    //   }
    // };
    const productsResponse: ShopifyProductsResponse = {
      products: httpResponse.body?.products || null
    };
    // console.error(productsResponse.products);
    // const products = productsResponse.body || [];
    switch (httpResponse.statusCode) {
      case HttpStatusCode.noContent:
        return [];

      case HttpStatusCode.ok:
        const parsedProducts: ProductModel[] = shopifyProductsSerializer(productsResponse);
        // console.error(parsedProducts);
        return parsedProducts;

      default:
        throw new UnexpectedError();
    }
  }
}
