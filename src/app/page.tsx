import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem, Hand, Settings, Truck } from "lucide-react";
import ProductCard from "@/components/shared/ProductCard";
import { getProducts } from "@/lib/cms";
import { getPlaceholderImage } from "@/lib/placeholder-images";

export default function Home() {
  const featuredProducts = getProducts().slice(0, 4);
  const heroImage = getPlaceholderImage("hero-1");

  const features = [
    {
      icon: <Hand className="h-10 w-10 text-accent" />,
      title: "Handcrafted",
      description: "Each piece is made with love and traditional techniques.",
    },
    {
      icon: <Gem className="h-10 w-10 text-accent" />,
      title: "Authentic Quality",
      description: "We source the finest materials for a genuine experience.",
    },
    {
      icon: <Truck className="h-10 w-10 text-accent" />,
      title: "Worldwide Shipping",
      description: "Get your treasures delivered to your doorstep, anywhere.",
    },
    {
      icon: <Settings className="h-10 w-10 text-accent" />,
      title: "Ethically Sourced",
      description: "Supporting artisans and their communities directly.",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] w-full text-white md:h-[80vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 px-4 text-center">
          <p className="font-body text-sm font-bold uppercase tracking-widest text-gray-200">
            Handcrafted with love
          </p>
          <h1 className="font-headline text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Discover <span className="text-primary">Authentic</span><br />
            Ethnic Treasures
          </h1>
          <p className="max-w-2xl text-lg text-gray-200 md:text-xl">
            Explore our curated collection of handcrafted artisan products,
            traditional textiles, and cultural artifacts from around the world.
            Each piece tells a unique story.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/collection">Shop Collection</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Curated with Care and Craftsmanship
          </h2>
          <div className="mx-auto mt-4 max-w-3xl">
            <p className="text-lg text-muted-foreground">
              At Artisan Heritage, we are passionate about connecting you with authentic, handcrafted treasures. We travel the globe to bring you unique pieces that tell a story of culture, tradition, and artistry.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Choose Us?</h2>
            <p className="mt-2 text-lg text-muted-foreground">The Artisan Heritage Promise</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="transform border-0 bg-transparent text-center shadow-none transition-transform duration-300 hover:-translate-y-2">
                <CardHeader className="items-center">
                  {feature.icon}
                  <CardTitle className="mt-4 font-headline text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="collection" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Featured Collection</h2>
            <p className="mt-2 text-lg text-muted-foreground">Handpicked just for you</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/collection">View All Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
