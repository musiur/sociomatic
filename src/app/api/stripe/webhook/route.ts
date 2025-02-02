import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/stripe';
import { headers } from 'next/headers';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('Stripe-Signature')!;
  console.log("\nwebhook hit\n")
  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      // Handle successful payment here (update database, send email, etc.)
      console.log('Payment succeeded:', session.id);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
  }
}