
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-background text-center">
      <CheckCircle className="h-24 w-24 text-green-500" />
      <h1 className="mt-6 font-headline text-4xl font-bold text-primary">
        Payment Successful!
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Thank you for your purchase. Your order is being processed.
      </p>
      <Link href="/" className="mt-8">
        <Button>Continue Shopping</Button>
      </Link>
    </div>
  );
}
