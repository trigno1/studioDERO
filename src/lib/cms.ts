import type { Product, Category, ProductCategory } from '@/lib/types';

const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'Gourmet Gifts',
    slug: 'gourmet',
    description: 'Delicious assortments of fine foods and treats.',
    image: 'category-gourmet'
  },
  {
    id: 'cat-2',
    name: 'Dry Fruit Gifts',
    slug: 'dry-fruit',
    description: 'Healthy and traditional selections of premium dry fruits.',
    image: 'category-dry-fruit'
  },
  {
    id: 'cat-3',
    name: 'Premium Diwali Gifts',
    slug: 'premium',
    description: 'Exquisite silver items and divine idols for a blessed celebration.',
    image: 'category-premium'
  },
  {
    id: 'cat-4',
    name: 'Decor and Diya Gifts',
    slug: 'decor',
    description: 'Illuminate homes with beautiful diyas, candles, and decor.',
    image: 'category-decor'
  }
];

const products: Product[] = [
  // Gourmet
  {
    id: '1',
    name: 'The Shubh Labh Box',
    description: 'An auspicious collection of handcrafted sweets, diyas, and traditional decor to welcome prosperity.',
    price: 49.99,
    images: ['product-1', 'product-1-alt1', 'product-1-alt2'],
    category: 'gourmet',
  },
  {
    id: '5',
    name: 'The Sweet Indulgence Box',
    description: 'A delightful assortment of traditional Indian sweets and modern confections for the festive season.',
    price: 59.99,
    images: ['product-5'],
    category: 'gourmet',
  },
  // Dry Fruit
  {
    id: 'prod-df-1',
    name: 'Classic Dry Fruit Box',
    description: 'A classic assortment of almonds, cashews, pistachios, and raisins.',
    price: 35.99,
    images: ['product-dry-fruit-1'],
    category: 'dry-fruit',
  },
  {
    id: 'prod-df-2',
    name: 'Exotic Dry Fruit Hamper',
    description: 'An exotic mix including walnuts, apricots, and figs.',
    price: 45.99,
    images: ['product-dry-fruit-2'],
    category: 'dry-fruit',
  },
   // Premium
  {
    id: '2',
    name: 'The Royal Diwali Hamper',
    description: 'Experience luxury with this premium hamper featuring gourmet treats, scented candles, and exquisite silver-plated items.',
    price: 99.99,
    images: ['product-2'],
    category: 'premium',
  },
  {
    id: 'prod-prem-1',
    name: 'Silver Plated Lakshmi Ganesh',
    description: 'A beautiful silver-plated idol set for worship and blessings.',
    price: 129.99,
    images: ['product-premium-1'],
    category: 'premium',
  },
   // Decor
  {
    id: '4',
    name: 'The Aura of Lights Box',
    description: 'Illuminate your home with our curated box of handcrafted diyas, aromatic candles, and beautiful rangoli colors.',
    price: 39.99,
    images: ['product-4'],
    category: 'decor',
  },
   {
    id: 'prod-decor-1',
    name: 'Ceramic Diya Set',
    description: 'Set of 12 exquisitely handcrafted ceramic diyas.',
    price: 25.99,
    images: ['product-decor-1'],
    category: 'decor',
  },
  {
    id: '6',
    name: 'The Corporate Sparkler',
    description: 'A sophisticated gift for colleagues and clients, featuring premium dry fruits, a stylish pen, and a personalized diary.',
    price: 69.99,
    images: ['product-6'],
    category: 'dry-fruit',
  },
];

// Simulate fetching all categories
export const getCategories = (): Category[] => {
  return categories;
};

// Simulate fetching a single category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
}

// Simulate fetching all products
export const getProducts = (): Product[] => {
  return products;
};

// Simulate fetching products by category
export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(p => p.category === category);
}

// Simulate fetching a single product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
