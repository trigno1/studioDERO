export type ProductCategory = 'gourmet' | 'dry-fruit' | 'premium' | 'decor';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[]; // This will be the ID from placeholder-images.json
  category: ProductCategory;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Category = {
  id: string;
  name: string;
  slug: ProductCategory;
  description: string;
  image: string;
}
