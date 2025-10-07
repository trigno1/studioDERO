import type { Product } from '@/lib/types';

const products: Product[] = [
  {
    id: '1',
    name: 'The Shubh Labh Box',
    description: 'An auspicious collection of handcrafted sweets, diyas, and traditional decor to welcome prosperity.',
    price: 49.99,
    image: 'product-1',
  },
  {
    id: '2',
    name: 'The Royal Diwali Hamper',
    description: 'Experience luxury with this premium hamper featuring gourmet treats, scented candles, and exquisite silver-plated items.',
    price: 99.99,
    image: 'product-2',
  },
  {
    id: '3',
    name: 'The Family Celebration Box',
    description: 'A perfect gift for the whole family, filled with assorted chocolates, nuts, and fun festive activities.',
    price: 79.99,
    image: 'product-3',
  },
  {
    id: '4',
    name: 'The Aura of Lights Box',
    description: 'Illuminate your home with our curated box of handcrafted diyas, aromatic candles, and beautiful rangoli colors.',
    price: 39.99,
    image: 'product-4',
  },
  {
    id: '5',
    name: 'The Sweet Indulgence Box',
    description: 'A delightful assortment of traditional Indian sweets and modern confections for the festive season.',
    price: 59.99,
    image: 'product-5',
  },
  {
    id: '6',
    name: 'The Corporate Sparkler',
    description: 'A sophisticated gift for colleagues and clients, featuring premium dry fruits, a stylish pen, and a personalized diary.',
    price: 69.99,
    image: 'product-6',
  },
];

// Simulate fetching all products
export const getProducts = (): Product[] => {
  return products;
};

// Simulate fetching a single product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
