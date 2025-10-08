'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import ProductCard from '@/components/shared/ProductCard';
import type { Product } from '@/lib/types';
import { TestimonialCarousel } from '@/components/shared/TestimonialCarousel';


type ApiData = {
  gourmet_Gifts: Product[];
  decorDiya_Gifts: Product[];
  dryFruit_Gifts: Product[];
  premiumDiwali_Gifts: Product[];
};

const mockData: ApiData = {
  gourmet_Gifts: [],
  decorDiya_Gifts: [],
  dryFruit_Gifts: [],
  premiumDiwali_Gifts: [],
};

export default function Home() {
  const [data, setData] = useState<ApiData>(mockData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/hygraph')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch from API route');
        }
        return res.json();
      })
      .then(apiData => {
        // Adapt the data to match the Product type (title -> name)
        const adapt = (arr: any[] = []) => arr.map((p: any) => ({
          ...p,
          name: p.title,
          images: Array.isArray(p.image) ? p.image.map((img: any) => img.url) : p.image?.url ? [p.image.url] : [],
        }));
        const adaptedData: ApiData = {
          gourmet_Gifts: adapt(apiData.gourmet_Gifts),
          decorDiya_Gifts: adapt(apiData.decorDiya_Gifts),
          dryFruit_Gifts: adapt(apiData.dryFruit_Gifts),
          premiumDiwali_Gifts: adapt(apiData.premiumDiwali_Gifts),
        };
        setData(adaptedData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch Hygraph data:', err);
        setError('Could not load products. Please check the API connection.');
        setLoading(false);
      });
  }, []);

  const renderProductSection = (title: string, products: Product[] | undefined, slug: string) => {
    const safeProducts = products ?? [];
    return (
      <section className="my-8 md:my-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">{title}</h2>
          </div>
          {error && <p className="text-center text-destructive">{error}</p>}
          {loading ? (
              <p className="text-center text-muted-foreground">Loading products...</p>
          ) : (
              safeProducts.length > 0 ? (
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                      {safeProducts.slice(0, 4).map((item) => <ProductCard key={item.id} product={item} />)}
                  </div>
              ) : (
                  <p className="text-center text-muted-foreground">No products found in this collection.</p>
              )
          )}
           {safeProducts.length > 4 && (
              <div className="mt-8 text-center">
                  <Link href={`/collection/${slug}`}>
                      <Button variant="secondary">View All {title}</Button>
                  </Link>
              </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="flex flex-col">
       <section
        className="relative flex h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat text-center text-primary-foreground"
        style={{
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 flex flex-grow flex-col items-center justify-center space-y-6 px-4">
          <h1 className="font-headline text-4xl font-bold leading-tight text-primary md:text-6xl lg:text-7xl">
            The Art of <br /> Festive Gifting
          </h1>
          <p className="max-w-xl text-lg text-primary md:text-xl">
            Discover our curated collection of handcrafted gift boxes, blending
            tradition with modern elegance. Each piece tells a story of
            craftsmanship and celebration.
          </p>
        </div>
        <div className="relative z-10 mb-8 flex flex-col items-center">
          <a href="#collection" aria-label="Scroll down">
            <ChevronDown className="h-10 w-10 animate-bounce text-primary" />
          </a>
        </div>
      </section>

      <div id="collection" className="py-8">
        {renderProductSection("Gourmet Gifts", data.gourmet_Gifts, "gourmet")}
        {renderProductSection("Decor & Diya Gifts", data.decorDiya_Gifts, "decor")}
        {renderProductSection("Dry Fruit Gifts", data.dryFruit_Gifts, "dry-fruit")}
        {renderProductSection("Premium Diwali Gifts", data.premiumDiwali_Gifts, "premium")}
      </div>
      
      <TestimonialCarousel />
    </div>
  );
}
