import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Sparkles, Sprout, Star } from "lucide-react";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel";
import { getCategories } from "@/lib/cms";

export default function Home() {
  const heroImage = getPlaceholderImage("hero-1");
  const heroBgImage = getPlaceholderImage("hero-bg");
  const categories = getCategories();

  const features = [
    {
      icon: <Gift className="h-10 w-10 text-accent" />,
      title: "Exquisite Hampers",
      description: "Curated with premium products for a luxurious feel.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-accent" />,
      title: "Elegant & Festive",
      description: "Designs that capture the luminous spirit of Diwali.",
    },
    {
      icon: <Sprout className="h-10 w-10 text-accent" />,
      title: "Sustainably Sourced",
      description: "Ethically sourced materials that honor nature.",
    },
    {
      icon: <Star className="h-10 w-10 text-accent" />,
      title: "Unmatched Quality",
      description: "Committed to the highest standards of craftsmanship.",
    },
  ];

  return (
    <div className="flex flex-col">
       <section className="relative w-full overflow-hidden bg-background">
        {heroBgImage && (
          <Image
            src={heroBgImage.imageUrl}
            alt={heroBgImage.description}
            data-ai-hint={heroBgImage.imageHint}
            fill
            className="object-cover opacity-10"
          />
        )}
        <div className="container relative mx-auto grid min-h-[80vh] grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
            <div className="relative z-10 flex flex-col items-start justify-center space-y-6 text-left">
              <h1 className="font-headline text-4xl font-bold leading-tight text-primary md:text-6xl lg:text-7xl">
                The Art of <br /> Festive Gifting
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                Discover our curated collection of handcrafted Diwali gift boxes, 
                blending tradition with modern elegance. Each piece tells a story of craftsmanship and celebration.
              </p>
            </div>
            <div className="relative h-full w-full min-h-[40vh]">
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
            </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Discover Aesthetic & Ethic Treasures
          </h2>
          <div className="mx-auto mt-4 max-w-3xl">
            <p className="text-lg text-muted-foreground">
              At DiwaliGlow, we believe Diwali is more than a festival; it’s an emotion. Our mission is to encapsulate this feeling in beautifully designed gift boxes that speak volumes of your affection. We blend timeless traditions with contemporary aesthetics to create gifts that are not just objects, but cherished memories.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-secondary py-16 text-secondary-foreground md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-left">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Choose DiwaliGlow?</h2>
            <p className="mt-2 text-lg text-secondary-foreground/80">Our Commitment to Excellence</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
               <Card key={feature.title} className="transform border-0 bg-background/5 text-center shadow-lg transition-all duration-300 hover:bg-background/10 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader className="items-center p-6">
                   <div className="rounded-lg bg-background/10 p-4">
                    {React.cloneElement(feature.icon, { className: 'h-10 w-10 text-accent' })}
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardTitle className="font-headline text-2xl text-white">{feature.title}</CardTitle>
                  <p className="mt-4 text-secondary-foreground/90">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="collection" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Collections</h2>
            <p className="mt-2 text-lg text-muted-foreground">Curated gifts for every taste and occasion.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const categoryImage = getPlaceholderImage(category.image);
              return (
              <Card key={category.id} className="group flex flex-col overflow-hidden rounded-lg border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                 <CardHeader className="p-0">
                    <div className="relative aspect-square w-full">
                      {categoryImage && (
                        <Image
                          src={categoryImage.imageUrl}
                          alt={category.name}
                          data-ai-hint={categoryImage.imageHint}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-4">
                    <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                  <div className="p-4 pt-0">
                    <Button asChild className="w-full">
                      <Link href={`/collection/${category.slug}`}>Explore</Link>
                    </Button>
                  </div>
              </Card>
            )})}
          </div>
        </div>
      </section>
      
      <TestimonialCarousel />
    </div>
  );
}
