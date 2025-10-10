
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
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
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCollectionDropdownOpen, setCollectionDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();
  const categories = getCategories();

  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home and then scroll
      window.location.href = `/#${targetId}`;
    }
    setMobileMenuOpen(false); // Close mobile menu on click
  };


  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Adorn atelier logo" width={100} height={40} className="h-10 w-auto" />
        </Link>
        
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <a
              href="/#about"
              onClick={(e) => handleScrollLink(e, 'about')}
              className={cn(
                "cursor-pointer text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              )}
            >
              About
            </a>
             <a
              href="/#contact"
              onClick={(e) => handleScrollLink(e, 'contact')}
              className={cn(
                "cursor-pointer text-sm font-medium transition-colors hover:text-primary",
                 "text-muted-foreground"
              )}
            >
              Contact
            </a>
             <DropdownMenu open={isCollectionDropdownOpen} onOpenChange={setCollectionDropdownOpen}>
              <DropdownMenuTrigger asChild>
                 <Button
                  variant="ghost"
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                    pathname.startsWith('/collection') ? "text-primary" : "text-muted-foreground"
                  )}>
                  Collection <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.id} asChild>
                    <a href={`/#collection-${category.slug}`} onClick={(e) => handleScrollLink(e, `collection-${category.slug}`)}>{category.name}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

           <CartSheet>
            <Button variant="ghost" size="icon" className="relative ml-4 h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge
                  variant="secondary"
                  className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full p-2 text-xs"
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
                  <Link href="/">
                    <Image src="/logo.png" alt="Adorn atelier logo" width={120} height={48} />
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "cursor-pointer text-lg font-medium transition-colors hover:text-primary",
                          pathname === link.href
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                        onClick={(e) => {
                          const targetId = link.href.startsWith('/#') ? link.href.substring(2) : 'top';
                          handleScrollLink(e, targetId);
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                    <a
                      href="/#contact"
                      className={cn(
                        "cursor-pointer text-lg font-medium transition-colors hover:text-primary",
                        "text-muted-foreground"
                      )}
                      onClick={(e) => handleScrollLink(e, 'contact')}
                    >
                      Contact
                    </a>
                     <p className="text-lg font-medium text-primary">Collection</p>
                      {categories.map((category) => (
                        <a
                          key={category.id}
                          href={`/#collection-${category.slug}`}
                          className="pl-4 text-muted-foreground hover:text-primary"
                           onClick={(e) => handleScrollLink(e, `collection-${category.slug}`)}
                        >
                          {category.name}
                        </a>
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
