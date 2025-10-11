
export default function TermsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Terms & Conditions
          </h1>
          <p>Welcome to Adorn atelier. By using our website and purchasing our products, you agree to the following terms and conditions:</p>

          <h2 className="font-headline text-2xl font-bold text-primary">1. General</h2>
          <p>Adorn atelier (“we”, “our”, or “us”) operates this website to provide luxury gifting products and hampers. By accessing or using our site, you agree to comply with these Terms & Conditions.</p>

          <h2 className="font-headline text-2xl font-bold text-primary">2. Orders & Payments</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>All prices are listed in INR and are subject to change without prior notice.</li>
            <li>Once an order is confirmed and payment is made, cancellations may not be possible, especially for customized products.</li>
            <li>We reserve the right to refuse or cancel any order due to incorrect pricing or availability.</li>
          </ul>

          <h2 className="font-headline text-2xl font-bold text-primary">3. Shipping & Delivery</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>We aim to deliver within the estimated time frame displayed at checkout.</li>
            <li>Delivery timelines may vary based on location and festive season demand.</li>
            <li>Adorn atelier is not liable for delays caused by third-party courier services or unforeseen events.</li>
          </ul>

          <h2 className="font-headline text-2xl font-bold text-primary">4. Returns & Refunds</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Due to the perishable and customized nature of our products, we do not accept returns once the product has been shipped.</li>
            <li>In the case of damaged or defective items, please contact us within 24 hours of delivery with supporting images for review.</li>
          </ul>

          <h2 className="font-headline text-2xl font-bold text-primary">5. Intellectual Property</h2>
          <p>All content, designs, images, and trademarks displayed on this website are owned by Adorn atelier and may not be reproduced without permission.</p>

          <h2 className="font-headline text-2xl font-bold text-primary">6. Limitation of Liability</h2>
          <p>Adorn atelier shall not be held responsible for any direct, indirect, incidental, or consequential damages resulting from use of our website or products.</p>

          <h2 className="font-headline text-2xl font-bold text-primary">7. Contact Information</h2>
          <p>For questions or concerns, please contact us at:</p>
          <a href="mailto:adornatelier1@gmail.com" className="text-primary hover:underline">adornatelier1@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
