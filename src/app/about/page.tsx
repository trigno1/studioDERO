import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";

export default function AboutPage() {
    const aboutImage1 = getPlaceholderImage("about-1");
    const aboutImage2 = getPlaceholderImage("about-2");

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Our Story</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Weaving tales of tradition, artistry, and light.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold text-primary">From Our Heart to Your Home</h2>
            <p className="text-lg leading-relaxed">
              DiwaliGlow was born from a passion for preserving the magic of Diwali. We believe every gift should be a vessel of joy, carrying the legacy of Indian craftsmanship and the spirit of the festival of lights.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our journey is to bring you authentic, handcrafted treasures that illuminate your celebrations. We partner with artisans across India, ensuring each product is not just beautiful, but also ethically sourced and made with time-honored techniques.
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

        <div className="mt-16 grid grid-cols-1 items-center gap-12 pt-12 md:grid-cols-2 lg:gap-16">
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
            <p className="text-lg leading-relaxed">
              We are committed to supporting artisan communities and helping them sustain their craft. By bringing their products to a global audience, we empower them to continue their traditions and build a brighter future for generations to come.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Sustainability is at the core of our values. We champion natural materials, eco-friendly processes, and timeless designs that you can cherish for years. We believe a beautiful product shouldn't come at the expense of our planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
