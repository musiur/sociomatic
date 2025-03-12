
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "dummy_sk_key", {
  apiVersion: '2025-02-24.acacia',
  typescript: true,
});

export async function createStripeCheckout(gigId: number) {
  // const gig = GigsData.find(g => g.id === gigId);
  const metadata = {
    userId: "test_user_43634563",
    gigId: gigId.toString(),
  }
  if(!stripe){
    return "/"
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: "test",
        },
        unit_amount: 100,
      },
      quantity: 1,
    }],
    mode: 'payment',
    metadata,
    payment_intent_data: { metadata },
    success_url: `${process.env.FRONTEND_URL}/gigs/payment-verify?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.FRONTEND_URL}/gigs/payment-verify?success=false&session_id={CHECKOUT_SESSION_ID}`,
  });

  return session.url;
}