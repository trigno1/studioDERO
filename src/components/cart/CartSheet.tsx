
"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getPlaceholderImage } from "@/lib/placeholder-images";
import { Trash2 } from "lucide-react";

export default function CartSheet({ children }: { children: React.ReactNode }) {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, cartCount } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({cartCount})</SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="flex-grow pr-6">
              <div className="mt-4 flex flex-col gap-6">
                {cartItems.map(item => {
                  const productImage = getPlaceholderImage(item.product.images[0]);
                  return (
                    <div key={item.product.id} className="flex items-start gap-4">
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                         {productImage && (
                          <Image
                            src={productImage.imageUrl}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground">₹{item.product.price.toFixed(2)}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                            className="h-9 w-16"
                          />
                           <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)}>
                            <Trash2 className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </div>
                      </div>
                      <p className="font-semibold">₹{(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
            <SheetFooter className="mt-6">
              <div className="flex w-full flex-col gap-4">
                <div className="flex items-center justify-between font-bold">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <Button size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-grow flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground">Add some gifts to get started!</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
