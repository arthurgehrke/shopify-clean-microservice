/* eslint-disable camelcase */
import { ProductModel } from '@/domain/models/product';

export interface ShopifyProductsAdditionalProperties {
  [key: string]: string;
}

export interface ShopifyProductsShowcaseImage {
  id: string;
  src: string;
}

export interface ShopifyProductsGalleryImage {
  id: string;
  src: string;
}

export interface ShopifyProducts {
  id: string;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: string;
  status: string;
  published_scope: string;
  tags: string;
  admin_graphql_api_id: string;
  variants: ShopifyProductsAdditionalProperties;
  options: ShopifyProductsAdditionalProperties;
  image: ShopifyProductsShowcaseImage;
  images: [ShopifyProductsGalleryImage];
}

export interface ShopifyProductsResponse {
  products: ShopifyProducts[] | null;
}

export const shopifyProductsSerializer = (
  httpResponse: ShopifyProductsResponse | null
): ProductModel[] | [] => {
  if (httpResponse?.products) {
    return httpResponse.products.map(shopifyProduct => ({
      id: shopifyProduct.id,
      name: shopifyProduct.title,
      price: '100.00',
      type: shopifyProduct.product_type,
      showcaseImage: {
        id: shopifyProduct.image.id,
        url: shopifyProduct.image.src
      },
      galleryImages: {
        items: []
      }
    }));
  }
  return [];
};
