"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    avatar: "PS",
    rating: 5,
    quote: "The gift boxes are absolutely stunning! The quality and attention to detail are unmatched. It was the perfect Diwali gift for my family.",
  },
  {
    name: "Rahul M.",
    avatar: "RM",
    rating: 5,
    quote: "I ordered a corporate hamper and our clients were beyond impressed. DERO is now our go-to for festive gifting.",
  },
  {
    name: "Anjali K.",
    avatar: "AK",
    rating: 5,
    quote: "Beautiful packaging and authentic products. You can feel the love and care that goes into each box. Highly recommended!",
  },
  {
    name: "Vikram T.",
    avatar: "VT",
    rating: 5,
    quote: "A fantastic experience from start to finish. The customer service was excellent and the delivery was prompt. Will definitely order again.",
  }
];

export function TestimonialCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
            <p className="mt-2 text-lg text-muted-foreground">Heartfelt words from our valued clients</p>
            <Quote className="absolute -top-4 right-1/3 h-16 w-16 -translate-y-1/2 text-primary/10" />
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
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="relative flex h-full flex-col justify-between p-6 text-left">
                        <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                      <p className="my-6 text-base italic text-muted-foreground">"{testimonial.quote}"</p>
                      <p className="font-bold">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
