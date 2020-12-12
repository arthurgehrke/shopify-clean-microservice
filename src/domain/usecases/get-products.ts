import { ProductModel } from '@/domain/models/product';

export interface GetProducts {
  get: () => Promise<GetProductsResult.Result>;
}

export namespace GetProductsResult {
  export type Result = ProductModel;
}
