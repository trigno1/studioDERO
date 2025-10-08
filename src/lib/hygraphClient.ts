import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;
const API_KEY = process.env.HYGRAPH_CONTENT_API_KEY;

export async function fetchHygraphQuery(query: string) {
  if (!API_URL || !API_KEY) {
    console.error("Hygraph API URL or Key is not defined in environment variables.");
    throw new Error("API configuration is missing.");
  }
  
  try {
    const response = await axios.post(
      API_URL,
      { query },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    
    if (response.data.errors) {
      console.error('GraphQL Errors:', response.data.errors);
      throw new Error(`GraphQL Error: ${response.data.errors.map((e: any) => e.message).join(', ')}`);
    }

    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error fetching data from Hygraph:', error.response?.data || error.message);
    } else {
      console.error('Error fetching products:', error);
    }
    throw new Error('Failed to fetch products from Hygraph.');
  }
}
