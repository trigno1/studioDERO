
export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Privacy Policy
          </h1>
          
          <h2 className="font-headline text-2xl font-bold text-primary">1. Overview</h2>
          <p>
            Adorn atelier respects your privacy and is committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
          </p>

          <h2 className="font-headline text-2xl font-bold text-primary">2. Information We Collect</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Personal details such as name, email address, phone number, and shipping address.</li>
            <li>Payment information (processed securely via our payment partners; we do not store card details).</li>
            <li>Analytics data such as IP address, browser type, and time spent on the website (to improve user experience).</li>
          </ul>

          <h2 className="font-headline text-2xl font-bold text-primary">3. How We Use Your Information</h2>
           <ul className="list-disc space-y-2 pl-6">
            <li>To process and deliver orders.</li>
            <li>To send order confirmations and updates.</li>
            <li>To personalize your shopping experience.</li>
            <li>To send occasional promotional emails (you can unsubscribe anytime).</li>
          </ul>

          <h2 className="font-headline text-2xl font-bold text-primary">4. Data Security</h2>
          <p>
            We use secure servers and SSL encryption to protect your data. No online transmission is 100% secure, but we strive to safeguard your information to the best of our ability.
          </p>

          <h2 className="font-headline text-2xl font-bold text-primary">5. Sharing of Information</h2>
          <p>
            We do not sell or rent your data. We only share information with trusted service providers (e.g., payment gateways, delivery partners) necessary for fulfilling your orders.
          </p>
          
          <h2 className="font-headline text-2xl font-bold text-primary">6. Your Rights</h2>
          <p>
            You may request correction, deletion, or review of your personal data at any time by contacting us at <a href="mailto:adornatelier1@gmail.com" className="text-primary hover:underline">adornatelier1@gmail.com</a>.
          </p>

          <h2 className="font-headline text-2xl font-bold text-primary">7. Updates to this Policy</h2>
           <p>
            We may update this policy periodically. Any changes will be reflected on this page. Last Updated: {new Date().toLocaleDateString()}.
          </p>
        </div>
      </div>
    </div>
  );
}
