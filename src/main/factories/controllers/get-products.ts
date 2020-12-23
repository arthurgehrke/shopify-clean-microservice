import { GetProductsController } from '@/presentation/controllers/products/get-products-controller';
import { ClientGetProducts } from '@/data/usecases/client-get-products';
import { Axios } from '@/infra/http/axios/axios';

export const makeGetProductsController = (): GetProductsController => {
  const url = 'shopify_url/products';
  const axios = new Axios();
  const clientGetProducts = new ClientGetProducts(url, axios);
  const getProductsController = new GetProductsController(clientGetProducts);

  return getProductsController;
};
