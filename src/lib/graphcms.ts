
import { GraphQLClient, gql } from 'graphql-request';
import type { Product } from './types';

// Ensure you have a .env.local file with these variables
const endpoint = process.env.GRAPHQL_API_URL!;
const token = process.env.HYGRAPH_CONTENT_API_KEY!;

const graphcms = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const PRODUCT_QUERY = gql`
  query GetProducts {
    products {
      id
      title
      description
      price
      slug
      image {
        id
        url
        width
        height
      }
    }
  }
`;

// This type matches the structure of the data returned by your Hygraph query
type CmsProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
  slug: string;
  image: {
    id: string;
    url: string;
    width: number;
    height: number;
  }[];
};


export async function getProductsFromCMS(): Promise<Product[]> {
  if (!endpoint || !token || token === 'your_content_api_key_here') {
    throw new Error('Hygraph endpoint or token is not configured. Please check your .env.local file.');
  }

  const { products: cmsProducts } = await graphcms.request<{ products: CmsProduct[] }>(PRODUCT_QUERY);

  // Map the data from Hygraph to your application's Product type
  const products: Product[] = cmsProducts.map(p => ({
    id: p.id,
    name: p.title, // Aliasing title to name
    description: p.description,
    price: p.price,
    images: p.image.map(img => img.id), // Using the Hygraph asset ID for placeholder mapping
    // The category is missing from your GraphQL schema, so we assign a default.
    // You might want to add this to your Hygraph Product model.
    category: 'gourmet', 
  }));
  
  return products;
}
