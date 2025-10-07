
import Image from 'next/image';
import { getPlaceholderImage } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutImage1 = getPlaceholderImage('about-1');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-left">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            About Us
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Weaving tales of tradition, artistry, and light.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12">
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
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 pt-12">
          <div className="relative rounded-lg border-2 border-accent p-8">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-bold text-primary">
                Craftsmanship & Community
              </h2>
              <p className="text-lg leading-relaxed text-left">
                We are committed to supporting artisan communities and helping them
                sustain their craft. By bringing their products to a global
                audience, we empower them to continue their traditions and build a
                brighter future for generations to come.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground text-left">
                Sustainability is at the core of our values. We champion natural
                materials, eco-friendly processes, and timeless designs that you
                can cherish for years. We believe a beautiful product shouldn't
                come at the expense of our planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
