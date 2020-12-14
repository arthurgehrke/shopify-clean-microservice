export type ProductModel = {
  id: string;
  name: string;
  type?: string;
  price: string;
  showcaseImage?: ProductShowcaseImageModel;
  galleryImages?: ProductGalleryImages;
};

export type ProductShowcaseImageModel = {
  id: string;
  url: string;
};

export type ProductGalleryImages = {
  items: Array<ProductShowcaseImageModel>;
};
