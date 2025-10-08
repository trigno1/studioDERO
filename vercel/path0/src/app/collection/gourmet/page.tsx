import ProductCard from "@/components/shared/ProductCard";
import { getCategoryBySlug } from "@/lib/cms";
import { notFound } from "next/navigation";
import { fetchHygraphQuery } from "@/lib/hygraphClient";
import { GET_GOURMET_GIFTS } from "@/lib/queries";
import type { Product } from "@/lib/types";

type CmsProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: {
    id: string;
    url: string;
    width: number;
    height: number;
  }[];
};

async function getGourmetProducts(): Promise<Product[]> {
  try {
    const { gourmetGifts } = await fetchHygraphQuery(GET_GOURMET_GIFTS) as { gourmetGifts: CmsProduct[] };
    
    if (!gourmetGifts) {
      return [];
    }

    return gourmetGifts.map(p => ({
      id: p.id,
      name: p.title,
      description: p.description,
      price: p.price,
      images: p.image.map(img => img.url),
      category: 'gourmet',
    }));
  } catch (error) {
    console.error("Failed to fetch gourmet products:", error);
    return [];
  }
}

export default async function GourmetCollectionPage() {
  const category = getCategoryBySlug('gourmet');
  if (!category) {
    notFound();
  }
  const products = await getGourmetProducts();

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">{category.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {category.description}
          </p>
        </div>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
           <div className="text-center text-muted-foreground">
            <p>Could not load products. Please ensure your HYGRAPH_CONTENT_API_KEY is correct and that products exist in your CMS.</p>
          </div>
        )}
      </div>
    </div>
  );
}
