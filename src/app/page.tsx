'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import ProductCard from '@/components/shared/ProductCard';
import type { Product } from '@/lib/types';
import { TestimonialCarousel } from '@/components/shared/TestimonialCarousel';

type ApiData = {
  gourmetGifts: Product[];
  decorDiyaGifts: Product[];
  dryFruitGifts: Product[];
  premiumDiwaliGifts: Product[];
};

const mockData: ApiData = {
  gourmetGifts: [],
  decorDiyaGifts: [],
  dryFruitGifts: [],
  premiumDiwaliGifts: [],
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
        const adaptedData: ApiData = {
          gourmetGifts: (apiData.gourmetGifts || []).map((p: any) => ({ ...p, name: p.title })),
          decorDiyaGifts: (apiData.decorDiyaGifts || []).map((p: any) => ({ ...p, name: p.title })),
          dryFruitGifts: (apiData.dryFruitGifts || []).map((p: any) => ({ ...p, name: p.title })),
          premiumDiwaliGifts: (apiData.premiumDiwaliGifts || []).map((p: any) => ({ ...p, name: p.title })),
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

  const renderProductSection = (title: string, products: Product[], slug: string) => (
    <section className="my-8 md:my-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:text-left">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">{title}</h2>
        </div>
        {error && <p className="text-center text-destructive">{error}</p>}
        {loading ? (
            <p className="text-center text-muted-foreground">Loading products...</p>
        ) : (
            products.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {products.slice(0, 4).map((item) => <ProductCard key={item.id} product={item} />)}
                </div>
            ) : (
                <p className="text-center text-muted-foreground">No products found in this collection.</p>
            )
        )}
         {products.length > 4 && (
            <div className="mt-8 text-center">
                <Link href={`/collection/${slug}`}>
                    <Button variant="secondary">View All {title}</Button>
                </Link>
            </div>
        )}
      </div>
    </section>
  );

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
        {renderProductSection("Gourmet Gifts", data.gourmetGifts, "gourmet")}
        {renderProductSection("Decor & Diya Gifts", data.decorDiyaGifts, "decor")}
        {renderProductSection("Dry Fruit Gifts", data.dryFruitGifts, "dry-fruit")}
        {renderProductSection("Premium Diwali Gifts", data.premiumDiwaliGifts, "premium")}
      </div>
      
      <TestimonialCarousel />
    </div>
  );
}
