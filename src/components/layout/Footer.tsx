
import Link from "next/link";
import { Instagram, Mail, Phone, Facebook, Heart } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Adorn atelier logo" width={120} height={48} />
          </Link>
          <p className="mt-2 text-sm text-primary-foreground/80">
            The Art of Premium Packaging.
          </p>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/" className="text-sm text-primary-foreground/80 hover:text-white">Home</Link></li>
            <li><Link href="/about" className="text-sm text-primary-foreground/80 hover:text-white">About Us</Link></li>
            <li><Link href="/#collection" className="text-sm text-primary-foreground/80 hover:text-white">Collection</Link></li>
            <li><Link href="/#contact" className="text-sm text-primary-foreground/80 hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold">Contact</h3>
           <div className="mt-4 space-y-2">
             <a href="mailto:adornatelier1@gmail.com" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-white">
                <Mail className="h-4 w-4" />
                <span>adornatelier1@gmail.com</span>
              </a>
              <a href="tel:+919758500022" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-white">
                <Phone className="h-4 w-4" />
                <span>+91 9758500022</span>
              </a>
          </div>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold">Social</h3>
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Instagram" className="text-primary-foreground/80 hover:text-white"><Instagram /></a>
            <a href="#" aria-label="Facebook" className="text-primary-foreground/80 hover:text-white"><Facebook /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-4 px-4 text-sm text-primary-foreground/60 md:flex-row">
          <div className="flex gap-4">
              <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
          <p className="text-center md:text-left">
              © 2025 Adorn atelier. All rights reserved.
          </p>
        </div>
      </div>
      <div className="bg-primary/80 py-2">
        <div className="container mx-auto text-center text-xs text-primary-foreground/50">
           <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 fill-current" /> by 
            <a 
              href="https://www.linkedin.com/in/tanish-sunita-pareek" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-white"
            >
              Tanish S Pareek
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
