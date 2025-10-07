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
      description: "Each box is curated with love and attention to detail.",
    },
    {
      icon: <Gem className="h-10 w-10 text-accent" />,
      title: "Premium Quality",
      description: "We source the finest products to ensure a luxury experience.",
    },
    {
      icon: <Truck className="h-10 w-10 text-accent" />,
      title: "Fast Delivery",
      description: "Get your gifts delivered to your doorstep, on time, every time.",
    },
    {
      icon: <Settings className="h-10 w-10 text-accent" />,
      title: "Customizable",
      description: "Personalize your gift boxes to make them truly special.",
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 px-4 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
            Celebrate Diwali with Handcrafted Gift Boxes
          </h1>
          <p className="max-w-2xl text-lg text-gray-200 md:text-xl">
            Discover our exclusive collection of festive gifts, curated to bring joy and light to your celebrations.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/collection">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Thoughtfully Curated Gift Boxes
          </h2>
          <div className="mx-auto mt-4 max-w-3xl">
            <p className="text-lg text-muted-foreground">
              At GlowBox, we craft memories through thoughtfully curated Diwali gift boxes that bring joy and warmth. Our passion is to create beautiful, high-quality gifts that honor the spirit of the festival of lights.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Choose Us?</h2>
            <p className="mt-2 text-lg text-muted-foreground">The GlowBox Promise</p>
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
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Diwali Collection</h2>
            <p className="mt-2 text-lg text-muted-foreground">Explore our featured gift boxes</p>
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
