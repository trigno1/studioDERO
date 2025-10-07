
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';

export default function CancelPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-background text-center">
      <XCircle className="h-24 w-24 text-destructive" />
      <h1 className="mt-6 font-headline text-4xl font-bold text-primary">
        Payment Cancelled
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Your order was not processed. You can try again or continue shopping.
      </p>
      <Link href="/collection/gourmet" className="mt-8">
        <Button>Back to Collection</Button>
      </Link>
    </div>
  );
}
