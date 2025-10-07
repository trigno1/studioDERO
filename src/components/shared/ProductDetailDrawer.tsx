
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/lib/types";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ShoppingCart, PackageCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface ProductDetailDrawerProps {
  product: Product;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function ProductDetailDrawer({ product, isOpen, onOpenChange }: ProductDetailDrawerProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Reset to the first image whenever the drawer is opened or the product changes
    setCurrentImageIndex(0);
  }, [isOpen, product]);

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    onOpenChange(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
  };
  
  const currentImageId = product.images[currentImageIndex];
  const productImage = getPlaceholderImage(currentImageId);

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-4/5 w-full rounded-t-lg p-6 md:h-3/4 lg:h-2/3">
        <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            {productImage && (
              <Image
                src={productImage.imageUrl}
                alt={product.name}
                data-ai-hint={productImage.imageHint}
                fill
                className="object-cover transition-all duration-300"
                key={currentImageIndex}
              />
            )}
             {product.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/50 text-foreground hover:bg-background/80"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/50 text-foreground hover:bg-background/80"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>
          <div className="flex flex-col">
            <SheetHeader>
              <SheetTitle className="mb-2 font-headline text-3xl text-primary md:text-4xl">{product.name}</SheetTitle>
              <SheetDescription className="text-lg text-muted-foreground">
                {product.description}
              </SheetDescription>
            </SheetHeader>

            <div className="my-6">
                <div className="flex items-center gap-2">
                    <PackageCheck className="h-6 w-6 text-accent" />
                    <h3 className="font-headline text-xl font-semibold">What's in the box?</h3>
                </div>
              {/* This is a placeholder for box contents. You can make this dynamic later */}
              <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                <li>Premium Handcrafted Item 1</li>
                <li>Artisanal Chocolate Bar</li>
                <li>Scented Candle</li>
                <li>Personalized Greeting Card</li>
              </ul>
            </div>

            <div className="mt-auto flex flex-col items-start gap-4">
               <p className="font-body text-4xl font-bold text-primary">
                ₹{product.price.toFixed(2)}
              </p>
              <Button onClick={handleAddToCart} size="lg" className="w-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
