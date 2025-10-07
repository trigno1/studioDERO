import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="font-headline text-xl font-bold">DERO</h3>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Discover Authentic Ethnic Treasures.
          </p>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/" className="text-sm text-primary-foreground/80 hover:text-white">Home</Link></li>
            <li><Link href="/about" className="text-sm text-primary-foreground/80 hover:text-white">About Us</Link></li>
            <li><Link href="/collection" className="text-sm text-primary-foreground/80 hover:text-white">Our Collection</Link></li>
            <li><Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold">Contact</h3>
           <div className="mt-4 space-y-2">
             <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:xxxx@gmail.com" className="text-sm text-primary-foreground/80 hover:text-white">xxxx@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+91xxxxxxxxxx" className="text-sm text-primary-foreground/80 hover:text-white">+91 XXX-XXX-XXXX</a>
              </div>
          </div>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold">Social</h3>
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Instagram" className="text-primary-foreground/80 hover:text-white"><Instagram /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-4 px-4 text-sm text-primary-foreground/60 md:flex-row">
            <div className="flex gap-4">
                <Link href="#" className="hover:text-white">Terms & Conditions</Link>
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Cookie Settings</Link>
            </div>
            <p className="text-center md:text-right">
                © 2025 DERO. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
