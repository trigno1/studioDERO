"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    location: "Mumbai",
    rating: 5,
    quote: "The gift boxes are absolutely stunning! The quality and attention to detail are unmatched. It was the perfect Diwali gift for my family.",
  },
  {
    name: "Rahul M.",
    location: "Delhi",
    rating: 5,
    quote: "I ordered a corporate hamper and our clients were beyond impressed. DiwaliGlow is now our go-to for festive gifting.",
  },
  {
    name: "Anjali K.",
    location: "Bangalore",
    rating: 5,
    quote: "Beautiful packaging and authentic products. You can feel the love and care that goes into each box. Highly recommended!",
  },
  {
    name: "Vikram T.",
    location: "Kolkata",
    rating: 5,
    quote: "A fantastic experience from start to finish. The customer service was excellent and the delivery was prompt. Will definitely order again.",
  }
];

export function TestimonialCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
            <p className="mt-2 text-lg text-muted-foreground">Heartfelt words from our valued clients</p>
            <Quote className="absolute -top-4 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-primary/5" />
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="h-full rounded-lg border bg-background shadow-sm">
                    <CardContent className="relative flex h-full flex-col p-6 text-left">
                        <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                            ))}
                        </div>
                      <p className="my-6 flex-grow text-base italic text-muted-foreground">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-4" />
          <CarouselNext className="mr-4" />
        </Carousel>
      </div>
    </section>
  );
}
