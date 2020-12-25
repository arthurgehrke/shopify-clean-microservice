import { GetProductsController } from '@/presentation/controllers/products/get-products-controller';
import { ClientGetProducts } from '@/data/usecases/client-get-products';
import { Axios } from '@/infra/http/axios/axios';
import env from '@/main/config/env';

export const makeGetProductsController = (): GetProductsController => {
  const url = `https://${env.shopify_api_key}:${env.shopify_api_password}@${env.shopify_store_name}.myshopify.com/admin/api/2020-07/products.json`;
  const axios = new Axios();
  const clientGetProducts = new ClientGetProducts(url, axios);
  const getProductsController = new GetProductsController(clientGetProducts);

  return getProductsController;
};
