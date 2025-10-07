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
          Weaving tales of tradition and artistry.
        </p>
      </div>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl font-bold text-primary">From Our Heart to Your Home</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Artisan Heritage was born from a passion for preserving and sharing the rich tapestry of global craftsmanship. We believe that every handmade object tells a story, carrying the legacy of its maker and the culture it comes from. Our journey began with a simple desire to connect discerning individuals with authentic, handcrafted treasures from around the world.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Each piece in our collection is a testament to this philosophy. We travel far and wide to build relationships with artisans, ensuring that every product is not just beautiful, but also ethically sourced and made with traditional techniques.
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
          <h2 className="font-headline text-3xl font-bold text-primary">Craftsmanship & Community</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We are committed to supporting artisan communities and helping them sustain their craft. By bringing their products to a global audience, we empower them to continue their traditions and build a brighter future. We work directly with makers, ensuring fair wages and respectful partnerships.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Sustainability is at the core of our values. We champion natural materials, eco-friendly processes, and timeless designs. We believe that a beautiful product shouldn't come at the expense of our planet or its people.
          </p>
        </div>
      </div>
    </div>
  );
}
