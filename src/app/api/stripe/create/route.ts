
import { createStripeCheckout } from '@/lib/stripe/stripe';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { gigId } = await request.json();
  const url = await createStripeCheckout(gigId);
  return NextResponse.json({ url });
}