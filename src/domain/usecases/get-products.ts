import { ProductModel } from '@/domain/models/product';

export interface GetProducts {
  get: () => Promise<ProductModel[]>;
}
