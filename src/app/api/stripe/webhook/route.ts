import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/stripe';
import { headers } from 'next/headers';

export async function POST(req: Request) {
  const body = await req.json();
  const signature = (await headers()).get('Stripe-Signature')!;
  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
  }
}