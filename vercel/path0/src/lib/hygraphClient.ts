
export async function fetchHygraphQuery(query: string, variables = {}) {
  const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API_URL as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_CONTENT_API_KEY}`,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 }, // Cache every 60s for faster loads
  });

  const json = await response.json();
  if (json.errors) {
    console.error("Hygraph Error:", JSON.stringify(json.errors, null, 2));
    throw new Error("Failed to fetch data from Hygraph");
  }

  return json.data;
}
