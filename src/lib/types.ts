export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string; // This will be the ID from placeholder-images.json
};

export type CartItem = {
  product: Product;
  quantity: number;
};
