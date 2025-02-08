import StripePaymentButton from "../gigs/_utils/stripe-payment-button";

const GigDetailsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) => {
  const params = await searchParams;
  return (
    <div className="container section">
      <h3 className="text-2xl font-bold">Gig id: {params.id}</h3>
      {params.id ? <StripePaymentButton gigId={params.id} /> : null}
    </div>
  );
};

export default GigDetailsPage;
