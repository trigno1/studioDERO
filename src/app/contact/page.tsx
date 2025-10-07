import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

export default function ContactPage() {

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Contact Us</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          <Card className="col-span-1 md:col-span-3">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          
          <div className="space-y-8 md:col-span-2">
              <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:xxxx@gmail.com" className="text-muted-foreground hover:text-primary">xxxx@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+91xxxxxxxxxx" className="text-muted-foreground hover:text-primary">+91 XXX-XXX-XXXX</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">123 Artisan Way, Craftsville, 45678</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="font-headline text-2xl font-bold">Follow Us</h2>
                <div className="flex space-x-4">
                    <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram className="h-6 w-6" /></a>
                    <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="h-6 w-6" /></a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
