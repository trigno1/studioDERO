
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Sparkles, Sprout, Star, ChevronDown, Users, CheckCircle } from 'lucide-react';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { TestimonialCarousel } from '@/components/shared/TestimonialCarousel';
import { getCategories, getProducts } from '@/lib/cms';
import { GraphQLClient, gql } from 'graphql-request';
import ProductCard from '@/components/shared/ProductCard';
import type { Product } from '@/lib/types';

const PRODUCT_QUERY = gql`
  query GetProducts {
    products {
      id
      name: title
      description
      price
      slug
      images: image {
        id
        url
        width
        height
      }
    }
  }
`;

export default async function Home() {
  const categories = getCategories();
  let products: Product[] = [];

  if (process.env.GRAPHQL_API_URL) {
    try {
      const graphcms = new GraphQLClient(process.env.GRAPHQL_API_URL);
      const { products: cmsProducts } = await graphcms.request<{ products: any[] }>(PRODUCT_QUERY);
      // Map CMS products to our Product type
      products = cmsProducts.map(product => ({
        ...product,
        // The CMS returns an array of image objects, but our type expects strings.
        // We're also aliasing 'title' to 'name'.
        // For now, let's assume the first image is the one we want and our local placeholders have a matching ID.
        // This mapping might need adjustment based on real data structure.
        images: product.images.map((img: { id: string }) => img.id).filter(Boolean),
        category: 'gourmet', // Default category, as it's not in the CMS schema
      }));
    } catch (error) {
      console.error("Failed to fetch products from GraphCMS:", error);
      console.log("Falling back to local product data.");
      products = getProducts();
    }
  } else {
    console.log("GRAPHQL_API_URL not set. Falling back to local product data.");
    products = getProducts();
  }


  const features = [
    {
      icon: <Sprout className="h-10 w-10 text-accent" />,
      title: 'Sustainable & Eco-Friendly',
      description: 'Responsibly sourced materials that are kind to our planet.',
    },
    {
      icon: <Gift className="h-10 w-10 text-accent" />,
      title: 'Handcrafted for Diwali',
      description: 'Artisanal designs that capture the essence of the festival.',
    },
    {
      icon: <Sparkles className="h-10 w-10 text-accent" />,
      title: 'Customizable Options',
      description: 'Personalized solutions to make your gifts truly unique.',
    },
    {
      icon: <Star className="h-10 w-10 text-accent" />,
      title: 'Luxury Finishes',
      description: 'Exquisite details and premium materials for a lasting impression.',
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: 'Corporate & Personal Orders',
      description: 'Perfect for both business clients and individual celebrations.',
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-accent" />,
      title: 'End-to-End Service',
      description: 'Custom orders, concepts, designs, and deliveries handled with care.',
    }
  ];

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
          <a href="#about" aria-label="Scroll down">
            <ChevronDown className="h-10 w-10 animate-bounce text-primary" />
          </a>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
            <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                About Us
                </h2>
                <div className="relative rounded-lg border-2 border-accent p-6">
                    <p className="text-lg text-muted-foreground">
                    We believe that every gift deserves a beautiful story. We
                    specialize in luxury, handcrafted packaging solutions for
                    corporate gifting, festival hampers, and special occasions,
                    designed especially for the Diwali season. Our packaging is
                    eco-friendly, combining elegance with responsibility.
                    </p>
                </div>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg md:h-96">
                <Image
                    src="https://picsum.photos/seed/about-home/800/600"
                    alt="Artisans crafting gifts"
                    data-ai-hint="artisans crafting"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
      </section>

      <section className="bg-secondary py-16 text-secondary-foreground md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-left">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Why Choose DERO?
            </h2>
            <p className="mt-2 text-lg text-secondary-foreground/80">
              Celebrate every occasion in style, where luxury meets sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(feature => (
              <Card
                key={feature.title}
                className="transform border-0 bg-background/5 text-center shadow-lg transition-all duration-300 hover:bg-background/10 hover:shadow-2xl hover:-translate-y-2"
              >
                <CardHeader className="items-center p-6">
                  <div className="rounded-lg bg-background/10 p-4">
                    {React.cloneElement(feature.icon, {
                      className: 'h-10 w-10 text-accent',
                    })}
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardTitle className="font-headline text-2xl text-white">
                    {feature.title}
                  </CardTitle>
                  <p className="mt-4 text-secondary-foreground/90">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="collection" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Our Collections
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Curated gifts for every taste and occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const categoryImage = getPlaceholderImage(category.image);
              return (
              <Link key={category.id} href={`/collection/${category.slug}`}>
                <Card className="group flex h-full flex-col overflow-hidden rounded-lg border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
                  <div className="flex-grow p-4">
                    <h3 className="font-headline text-xl font-bold text-primary">{category.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </Card>
              </Link>
            )})}
          </div>
        </div>
      </section>

      <TestimonialCarousel />
    </div>
  );
}
