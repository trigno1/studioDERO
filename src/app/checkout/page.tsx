
"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { Loader2 } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function CheckoutForm() {
  const searchParams = useSearchParams();
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    const secret = searchParams.get('client_secret');
    if (secret) {
      setClientSecret(secret);
    }
  }, [searchParams]);

  if (!clientSecret) {
    return (
      <div className="flex h-[80vh] w-full flex-col items-center justify-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-lg text-muted-foreground">Loading Checkout...</p>
      </div>
    );
  }

  return (
    <div id="checkout">
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
        >
            <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
    </div>
  );
}


export default function CheckoutPage() {
  return (
    <div className="container mx-auto py-12">
      <Suspense fallback={
        <div className="flex h-[80vh] w-full flex-col items-center justify-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-lg text-muted-foreground">Loading Checkout...</p>
        </div>
      }>
        <CheckoutForm />
      </Suspense>
    </div>
  );
}
