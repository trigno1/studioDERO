import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";

export default function AboutPage() {
    const aboutImage1 = getPlaceholderImage("about-1");
    const aboutImage2 = getPlaceholderImage("about-2");

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">Our Story</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Crafting memories, one gift at a time.
        </p>
      </div>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl font-bold text-primary">From Our Heart to Your Home</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            GlowBox was born from a desire to share the joy and warmth of Diwali. We believe that a gift is more than just an object—it's a gesture of love, a shared memory, and a symbol of celebration. Our journey began in a small workshop, with a passion for creating beautiful, meaningful gifts that capture the essence of the festival of lights.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Each GlowBox is a testament to this philosophy. We pour our hearts into every detail, from selecting the finest artisanal products to designing our elegant, eco-friendly packaging.
          </p>
        </div>
        <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg md:h-[500px]">
            {aboutImage1 && (
                <Image
                    src={aboutImage1.imageUrl}
                    alt={aboutImage1.description}
                    data-ai-hint={aboutImage1.imageHint}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
            )}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 items-center gap-12 pt-12 md:grid-cols-2">
         <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg md:order-2 md:h-[500px]">
            {aboutImage2 && (
                <Image
                    src={aboutImage2.imageUrl}
                    alt={aboutImage2.description}
                    data-ai-hint={aboutImage2.imageHint}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
            )}
        </div>
        <div className="space-y-6 md:order-1">
          <h2 className="font-headline text-3xl font-bold text-primary">Craftsmanship & Sustainability</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We are committed to supporting local artisans and preserving traditional crafts. Many of the items in our boxes are handcrafted by skilled makers from across the country, ensuring that each gift is unique and supports local communities.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Sustainability is at the core of our values. We use recyclable materials for our packaging and strive to partner with brands that share our commitment to the planet. We believe that a beautiful gift shouldn't come at the expense of the environment.
          </p>
        </div>
      </div>
    </div>
  );
}
