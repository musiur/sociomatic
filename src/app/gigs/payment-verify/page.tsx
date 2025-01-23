"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentVerificationPage() {
  const searchParams = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState("verifying");

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    const success = searchParams.get("success");

    if (sessionId && success) {
      verifyPayment(sessionId);
    } else {
      setPaymentStatus("invalid");
    }
  }, [searchParams]);

  async function verifyPayment(sessionId: string) {
    try {
      const response = await fetch(
        `/api/verify-payment?session_id=${sessionId}`
      );
      const data = await response.json();

      if (data.success) {
        setPaymentStatus("success");
        // You can show order details here
      } else {
        setPaymentStatus("failed");
      }
    } catch (error) {
      setPaymentStatus("error");
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {paymentStatus === "verifying" && <p>Verifying payment...</p>}
      {paymentStatus === "success" && <p>Payment successful!</p>}
      {paymentStatus === "failed" && (
        <p>Payment verification failed. Please contact support.</p>
      )}
      {paymentStatus === "invalid" && (
        <p>Invalid session. Please contact support.</p>
      )}
      {paymentStatus === "error" && (
        <p>Error verifying payment. Please contact support.</p>
      )}
    </div>
  );
}
