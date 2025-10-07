import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-headline text-xl font-bold">GlowBox</h3>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Handcrafted Diwali gift boxes to share joy and warmth.
          </p>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/about" className="text-sm text-primary-foreground/80 hover:text-accent">About Us</Link></li>
            <li><Link href="/collection" className="text-sm text-primary-foreground/80 hover:text-accent">Collection</Link></li>
            <li><Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold">Contact & Social</h3>
          <div className="mt-4 space-y-2">
             <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@glowbox.com" className="text-sm text-primary-foreground/80 hover:text-accent">hello@glowbox.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="text-sm text-primary-foreground/80 hover:text-accent">+1 (234) 567-890</a>
              </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-primary-foreground/80 hover:text-accent"><Facebook /></a>
            <a href="#" aria-label="Instagram" className="text-primary-foreground/80 hover:text-accent"><Instagram /></a>
            <a href="#" aria-label="Twitter" className="text-primary-foreground/80 hover:text-accent"><Twitter /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4">
        <p className="container mx-auto px-4 text-center text-sm text-primary-foreground/60">
          © 2025 GlowBox. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
