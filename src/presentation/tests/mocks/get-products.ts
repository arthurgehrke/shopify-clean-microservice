import { ProductModel } from '@/domain/models/product';

import faker from 'faker';

export const mockGetProductsModel = (): ProductModel => ({
  id: faker.random.uuid(),
  name: faker.random.word(),
  price: faker.random.number().toString(),
  showcaseImage: {
    id: faker.random.uuid(),
    url: faker.internet.url()
  },
  galleryImages: {
    items: [
      {
        id: faker.random.uuid(),
        url: faker.internet.url()
      }
    ]
  }
});

export const mockGetProducts = (): ProductModel[] => [
  mockGetProductsModel(),
  mockGetProductsModel(),
  mockGetProductsModel()
];
