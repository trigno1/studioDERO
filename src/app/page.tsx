import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem, Hand, Settings, Truck } from "lucide-react";
import ProductCard from "@/components/shared/ProductCard";
import { getProducts } from "@/lib/cms";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel";

const LeafTopRight = () => (
    <svg
      width="200"
      height="150"
      viewBox="0 0 200 150"
      className="absolute top-0 right-0 -z-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 50 50 C 70 20, 100 20, 120 50 S 150 80, 120 100 C 100 120, 70 120, 50 100 S 30 80, 50 50"
        fill="#a3b18a"
        opacity="0.6"
      />
      <path
        d="M 60 30 C 80 0, 110 0, 130 30 S 160 60, 130 80 C 110 100, 80 100, 60 80 S 40 60, 60 30"
        fill="#dda15e"
        opacity="0.5"
      />
      <path
        d="M 80 40 C 100 10, 130 10, 150 40 S 180 70, 150 90 C 130 110, 100 110, 80 90 S 60 70, 80 40"
        fill="#a3b18a"
        opacity="0.6"
      />
      <path
        d="M 100 20 C 120 -10, 150 -10, 170 20 S 200 50, 170 70 C 150 90, 120 90, 100 70 S 80 50, 100 20"
        fill="#dda15e"
        opacity="0.5"
      />
    </svg>
  );
  
  const Lantern = ({ top, right, size = 60 }: { top: number; right: number; size?: number }) => (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 100 150"
      className="absolute -z-10"
      style={{ top: `${top}px`, right: `${right}px` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="50" y1="0" x2="50" y2="40" stroke="#c9a227" strokeWidth="2" />
      <path
        d="M 30 40 Q 50 30, 70 40 L 80 50 Q 50 45, 20 50 L 30 40"
        fill="#f4a261"
      />
      <path d="M 20 50 H 80 V 100 H 20 V 50" fill="#f4a261" />
      <rect x="25" y="55" width="50" height="40" fill="#fde4a0" />
      <path
        d="M 20 100 L 80 100 Q 50 110, 20 100"
        fill="#f4a261"
      />
    </svg>
  );

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
       <section className="relative w-full overflow-hidden bg-background">
        <div className="container mx-auto grid h-[60vh] grid-cols-1 items-center gap-8 px-4 md:h-[80vh] md:grid-cols-2">
            <div className="relative z-10 flex flex-col items-start justify-center space-y-6 text-left">
              <p className="font-body text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Handcrafted with love
              </p>
              <h1 className="font-headline text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Discover <span className="text-primary">Authentic</span><br />
                Ethnic Treasures
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                Explore our curated collection of handcrafted artisan products,
                traditional textiles, and cultural artifacts from around the world.
                Each piece tells a unique story.
              </p>
            </div>
            <div className="relative h-full w-full">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    fill
                    className="object-contain"
                    priority
                  />
                )}
                <div className="absolute inset-0">
                    <LeafTopRight />
                    <Lantern top={50} right={80} />
                    <Lantern top={200} right={50} size={80} />
                </div>
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
              At DERO, we are passionate about connecting you with authentic, handcrafted treasures. We travel the globe to bring you unique pieces that tell a story of culture, tradition, and artistry.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Choose Us?</h2>
            <p className="mt-2 text-lg text-muted-foreground">The DERO Promise</p>
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
      
      <TestimonialCarousel />
    </div>
  );
}
