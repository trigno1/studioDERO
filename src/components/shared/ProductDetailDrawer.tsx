
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/lib/types";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { ShoppingCart, PackageCheck } from "lucide-react";

interface ProductDetailDrawerProps {
  product: Product;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function ProductDetailDrawer({ product, isOpen, onOpenChange }: ProductDetailDrawerProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const productImage = getPlaceholderImage(product.image);

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    onOpenChange(false);
  };

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
                className="object-cover"
              />
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
