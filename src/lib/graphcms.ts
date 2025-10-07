
import { GraphQLClient, gql } from 'graphql-request';

// Make sure to create a .env.local file and add your GraphCMS endpoint
// GRAPHQL_API_URL=https://api-eu-central-1.graphcms.com/v2/your_project_id/master
const graphcms = new GraphQLClient(process.env.GRAPHQL_API_URL!);

export const PRODUCT_QUERY = gql`
  query GetProducts {
    products {
      id
      name: title
      description
      price
      slug
      images: image {
        url
        width
        height
      }
    }
  }
`;

export async function getProductsFromCMS() {
  const { products } = await graphcms.request<{ products: any[] }>(PRODUCT_QUERY);
  
  // This is a temporary mapping to fit the existing Product type.
  // You might want to adjust your types to match the GraphQL schema.
  return products.map(product => ({
    ...product,
    images: product.images.map((img: { url: string }) => img.url), // Just return urls for now
    category: 'gourmet', // Default category
  }));
}
