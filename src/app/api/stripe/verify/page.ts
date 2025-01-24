import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/stripe';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log(session, "<--")
    if (session.payment_status === 'paid') {
      return NextResponse.json({ success: true, session });
    } else {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}