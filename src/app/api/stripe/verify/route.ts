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
    return NextResponse.json({
      success: session.payment_status === 'paid',
      session: session.payment_status === 'paid' ? session : undefined
    });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
};