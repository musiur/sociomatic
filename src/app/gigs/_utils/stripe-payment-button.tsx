"use client";
import { Button } from "@/components/ui/button";

const StripePaymentButton = ({ gigId }: { gigId: string }) => {
  return (
    <Button onClick={() => handleStripePurchase(gigId)}>Confirm Order</Button>
  );
};

export default StripePaymentButton;

async function handleStripePurchase(gigId: string) {
  try {
    const response = await fetch("/api/stripe/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gigId }),
    });

    const { url } = await response.json();
    window.location.href = url;
  } catch (error) {
    console.error("Error:", error);
  }
}
