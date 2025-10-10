"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/lib/types";
import { Eye } from "lucide-react";
import ProductDetailDrawer from "./ProductDetailDrawer";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // The API now provides a full URL, so we use it directly.
  // Always use product.images (array of URLs)
  const imageUrl = Array.isArray(product.images) && product.images.length > 0
    ? product.images[0]
    : 'https://picsum.photos/seed/placeholder/500/500';

  return (
    <>
      <Card className="flex h-full flex-col overflow-hidden rounded-lg border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full">
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
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
