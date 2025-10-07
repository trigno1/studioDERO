
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import type { Product } from '@/lib/types';

// Ensure the secret key is defined
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    const { product } = (await req.json()) as { product: Product };

    if (!product) {
        return NextResponse.json({ error: 'Product not provided' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: product.name,
              // You can add more details like images here
              // images: [product.images[0]],
            },
            unit_amount: product.price * 100, // Amount in paisa
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
