import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;
const TOKEN = process.env.HYGRAPH_CONTENT_API_KEY;

export async function GET() {
  try {
    const query = `
      query GetAllCollections {
        gourmetGifts: gourmet_Gifts(stage: PUBLISHED) { id title description price image { url } }
        decorDiyaGifts(stage: PUBLISHED) { id title description price image { url } }
        dryFruitGifts: dryFruit_Gifts(stage: PUBLISHED) { id title description price image { url } }
        premiumDiwaliGifts(stage: PUBLISHED) { id title description price image { url } }
      }
    `;

    const res = await fetch(API_URL!, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 },
    });

    if (!res.ok) {
        const errorBody = await res.text();
        console.error('Hygraph API request failed with status:', res.status, 'and body:', errorBody);
        throw new Error(`Hygraph API request failed with status ${res.status}`);
    }

    const data = await res.json();

    if (data.errors) {
        console.error('Hygraph GraphQL errors:', data.errors);
        throw new Error('GraphQL query returned errors.');
    }

    return NextResponse.json(data.data);
  } catch (err) {
    console.error('API Route Error:', err);
    return NextResponse.json({ error: 'Failed to fetch data from Hygraph' }, { status: 500 });
  }
}
