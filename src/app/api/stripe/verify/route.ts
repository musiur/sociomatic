import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/stripe';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');
  if (!sessionId) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const payment_intent = await stripe.paymentIntents.retrieve(session.payment_intent as string);

    if(payment_intent.status === 'succeeded') {
      return NextResponse.json({
        success: true,
        session: session
      });
    } else {
      return NextResponse.json({
        success: false,
        session: session
      });
    }

  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
};