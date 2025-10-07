"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import CartSheet from "@/components/cart/CartSheet";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import { getCategories } from "@/lib/cms";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();
  const categories = getCategories();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-headline text-2xl font-bold text-primary">
          DiwaliGlow
        </Link>
        <div className="flex items-center space-x-2">
          <nav className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                  pathname.startsWith('/collection') ? "text-primary" : "text-muted-foreground"
                )}>
                  Collection <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categories.map((category) => (
                  <DropdownMenuItem key={category.id} asChild>
                    <Link href={`/collection/${category.slug}`}>{category.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <CartSheet>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge
                  variant="default"
                  className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary p-2 text-xs"
                >
                  {cartCount}
                </Badge>
              )}
              <span className="sr-only">Open shopping cart</span>
            </Button>
          </CartSheet>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col space-y-6 pt-10">
                  <Link href="/" className="font-headline text-2xl font-bold text-primary">
                    DiwaliGlow
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          pathname === link.href
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                     <p className="text-lg font-medium text-primary">Collection</p>
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/collection/${category.slug}`}
                          className="pl-4 text-muted-foreground hover:text-primary"
                           onClick={() => setMobileMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
