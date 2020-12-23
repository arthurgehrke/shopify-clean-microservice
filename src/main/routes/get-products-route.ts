import { Router } from 'express';

import { adaptRoute } from '@/main/adapters/express-route-adapter';
import { makeGetProductsController } from '@/main/factories/controllers/get-products';

export default (router: Router): void => {
  router.post('/get-products', adaptRoute(makeGetProductsController()));
};
