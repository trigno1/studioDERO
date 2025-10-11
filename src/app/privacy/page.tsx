
export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Privacy Policy
          </h1>
          <p>
            Your privacy is important to us. It is Adorn atelier's policy to respect your privacy regarding any information we may collect from you across our website.
          </p>

          <h2 className="font-headline text-2xl font-bold text-primary">1. Information We Collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>
          
          <h2 className="font-headline text-2xl font-bold text-primary">2. How We Use Your Information</h2>
          <p>
            We may use the information we collect to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Process and fulfill your orders.</li>
            <li>Communicate with you about your orders, products, services, and promotional offers.</li>
            <li>Respond to your inquiries.</li>
            <li>Improve our website and services.</li>
          </ul>

          <h2 className="font-headline text-2xl font-bold text-primary">3. Security</h2>
          <p>
            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
          </p>

          <h2 className="font-headline text-2xl font-bold text-primary">4. Links to Other Sites</h2>
          <p>
            Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
          
          <h2 className="font-headline text-2xl font-bold text-primary">Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:adornatelier1@gmail.com" className="text-primary hover:underline">adornatelier1@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
