
'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Gift, ShieldCheck, Sparkles, Leaf, Users, Truck, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import ProductCard from '@/components/shared/ProductCard';
import type { Product } from '@/lib/types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/shared/ContactForm";


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
      title: "Exquisite Designs",
      description: "Our packaging is thoughtfully designed to create a unique and memorable unboxing experience.",
      gradient: "from-red-100 to-rose-100"
    },
    {
      icon: Sparkles,
      title: "Fully Customizable",
      description: "We offer fully customizable packaging solutions, tailored to your brand's unique needs and vision.",
      gradient: "from-yellow-100 to-amber-100"
    },
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "Our beautiful packaging is eco-friendly, reflecting a commitment to the planet.",
      gradient: "from-green-100 to-emerald-100"
    },
    {
      icon: Users,
      title: "Support for Artisans",
      description: "Your partnership helps support and sustain traditional craft communities across India.",
      gradient: "from-blue-100 to-sky-100"
    },
    {
      icon: ShieldCheck,
      title: "Quality Guaranteed",
      description: "We stand behind the quality of our products, ensuring your complete satisfaction.",
      gradient: "from-indigo-100 to-purple-100"
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Reliable and prompt delivery to ensure your packaging arrives right when you need it.",
      gradient: "from-pink-100 to-fuchsia-100"
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
            The Art of <br /> Premium Packaging
          </h1>
          <p className="max-w-xl text-lg text-primary md:text-xl">
            Elevate your brand with our curated collection of handcrafted packaging solutions, blending tradition with modern elegance.
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
                  From Our Heart to Your Brand
                </h2>
                <p className="text-lg leading-relaxed text-left">
                  We believe that packaging is more than just a box; it's an experience. We specialize in luxury, handcrafted packaging solutions for corporate gifting, premium products, and special occasions.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground text-left">
                   Our packaging is eco-friendly and sustainable, combining elegance with responsibility. We partner with artisans across India, ensuring each piece is not just beautiful, but also ethically sourced and made with time-honored techniques.
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

       <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Why Choose Adorn atelier?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
            We are dedicated to delivering excellence and preserving tradition in every package.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((feature) => (
              <div key={feature.title} className={`rounded-lg border border-transparent bg-gradient-to-br ${feature.gradient} p-6 text-left shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105`}>
                <feature.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-xl font-bold text-primary">{feature.title}</h3>
                <p className="text-primary/80">{feature.description}</p>
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
      
      <section id="contact" className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Contact Us</h1>
              <p className="mt-2 text-lg text-muted-foreground">
                We'd love to hear from you. Everything is custom-made, so on-request orders are welcome!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
              <Card className="col-span-1 border-accent md:col-span-3">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
              
              <div className="md:col-span-2">
                <Card className="space-y-8 border-accent">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Mail className="mt-1 h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-semibold">Email</h3>
                          <a href="mailto:adornatelier1@gmail.com" className="text-muted-foreground hover:text-primary">adornatelier1@gmail.com</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Phone className="mt-1 h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-semibold">Phone</h3>
                          <a href="tel:+919758500022" className="text-muted-foreground hover:text-primary">+91 9758500022</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="mt-1 h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-semibold">Address</h3>
                          <p className="text-muted-foreground">Sushant Lok, Gurgaon</p>
                        </div>
                      </div>
                    </div>
                     <div className="aspect-video w-full overflow-hidden rounded-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112392.35921021484!2d76.96025114335937!3d28.397860400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d238442732953%3A0xc33894411132d01!2sSushant%20Lok%2C%20Sector%2043%2C%20Gurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="space-y-4">
                      <h2 className="font-headline text-2xl font-bold">Follow Us</h2>
                      <div className="flex space-x-4">
                          <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram className="h-6 w-6" /></a>
                          <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-6 w-6" /></a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}
