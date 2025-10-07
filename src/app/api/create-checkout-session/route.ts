
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import type { CartItem } from '@/lib/types';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    const { cartItems } = (await req.json()) as { cartItems: CartItem[] };

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: 'Cart items not provided' }, { status: 400 });
    }

    const line_items = cartItems.map((item) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.product.name,
        },
        unit_amount: item.product.price * 100, // Amount in paisa
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      ui_mode: 'embedded',
      return_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
