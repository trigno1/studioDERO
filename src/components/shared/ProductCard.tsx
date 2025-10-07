
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/lib/types";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Eye, ShoppingCart } from "lucide-react";
import ProductDetailDrawer from "./ProductDetailDrawer";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  return (
    <>
      <Card className="flex flex-col overflow-hidden rounded-lg border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full">
            {getPlaceholderImage(product.images[0]) && (
              <Image
                src={getPlaceholderImage(product.images[0])!.imageUrl}
                alt={product.name}
                data-ai-hint={getPlaceholderImage(product.images[0])!.imageHint}
                fill
                className="object-cover"
              />
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
          <p className="mt-2 font-body text-lg font-semibold text-primary">
            ₹{product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button onClick={() => setIsDrawerOpen(true)} className="w-full" variant="secondary">
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </Button>
        </CardFooter>
      </Card>
      <ProductDetailDrawer 
        product={product}
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      />
    </>
  );
}
