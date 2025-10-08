
'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Gift, ShieldCheck, Sparkles, Leaf, Users, Truck } from 'lucide-react';
import Link from 'next/link';
import ProductCard from '@/components/shared/ProductCard';
import type { Product } from '@/lib/types';
import { TestimonialCarousel } from '@/components/shared/TestimonialCarousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';


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

const whyChooseUs = [
    {
      icon: Gift,
      title: "Exquisite Curation",
      description: "Each gift is thoughtfully selected to ensure a unique and memorable experience.",
    },
    {
      icon: Sparkles,
      title: "Handcrafted Elegance",
      description: "We prioritize artisanal quality and exceptional craftsmanship in every product.",
    },
    {
      icon: Leaf,
      title: "Sustainable Packaging",
      description: "Our beautiful packaging is eco-friendly, reflecting our commitment to the planet.",
    },
    {
      icon: Users,
      title: "Support for Artisans",
      description: "Your purchase helps support and sustain traditional craft communities across India.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Guaranteed",
      description: "We stand behind the quality of our products, ensuring your complete satisfaction.",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Reliable and prompt delivery to ensure your gifts arrive when you need them.",
    },
];

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
        if (apiData.error) {
          throw new Error(apiData.error);
        }
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
    if (loading || error || safeProducts.length === 0) {
      return (
        <section id={`collection-${slug}`} className="my-8 md:my-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center md:text-left">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">{title}</h2>
            </div>
            {loading && <p className="text-center text-muted-foreground">Loading products...</p>}
            {error && !loading && <p className="text-center text-destructive">{error}</p>}
            {!loading && !error && safeProducts.length === 0 && <p className="text-center text-muted-foreground">No products found in this collection.</p>}
          </div>
        </section>
      );
    }

    return (
      <section id={`collection-${slug}`} className="my-8 md:my-16">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <div>
                <h2 className="font-headline text-3xl font-bold md:text-4xl">{title}</h2>
              </div>
            </div>
           <Carousel
            opts={{
              align: "start",
              loop: safeProducts.length > 4,
            }}
            className="mt-8 w-full"
          >
            <CarouselContent className="-ml-4">
              {safeProducts.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <ProductCard product={item} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 transform text-primary" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 transform text-primary" />
          </Carousel>
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
          <h1 className="font-headline text-6xl font-bold leading-tight text-primary md:text-8xl lg:text-9xl">
            The Art of <br /> Festive Gifting
          </h1>
          <p className="max-w-xl text-lg text-primary md:text-xl">
            Discover our curated collection of handcrafted gift boxes, blending
            tradition with modern elegance. Each piece tells a story of
            craftsmanship and celebration.
          </p>
        </div>
        <div className="relative z-10 mb-8 flex flex-col items-center">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown className="h-10 w-10 animate-bounce text-primary" />
          </a>
        </div>
      </section>

      <section id="about" className="bg-background py-16 md:py-24">
         <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative rounded-lg border-2 border-accent p-8">
              <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold text-primary">
                  From Our Heart to Your Home
                </h2>
                <p className="text-lg leading-relaxed text-left">
                  We believe that every gift deserves a beautiful story. We specialize in luxury, handcrafted, and packaging solution for corporate gifting, festival hampers, and special occasion design, especially for the Diwali season. 
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground text-left">
                   Our packaging is eco-friendly, sustainable, and combines elegance with responsibility towards the planet, from premium trays to custom boxes. We partner with artisans across India, ensuring each product is not just beautiful, but also ethically sourced and made with time-honored techniques.
                </p>
              </div>
            </div>
            <div className="relative hidden h-full min-h-[400px] overflow-hidden rounded-lg lg:block">
              <Image 
                src="https://picsum.photos/seed/about1/600/800"
                alt="Craftsmanship"
                fill
                className="object-cover"
                data-ai-hint="crafting hands diwali"
              />
            </div>
          </div>
        </div>
      </section>

       <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold text-accent md:text-4xl">Why Choose DERO?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-secondary-foreground/80">
            We are dedicated to delivering excellence and preserving tradition in every gift.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-accent/20 bg-background/5 p-6 text-left shadow-sm transition-all duration-300 ease-in-out hover:bg-accent/10 hover:shadow-accent/40 hover:shadow-lg">
                <feature.icon className="mb-4 h-10 w-10 text-accent" />
                <h3 className="mb-2 text-xl font-bold text-secondary-foreground">{feature.title}</h3>
                <p className="text-secondary-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
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
