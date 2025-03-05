"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Action___GET__VerifyPayment } from "../_utils/actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function PaymentVerificationContent() {
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
      const data = await Action___GET__VerifyPayment(sessionId);
      if (data.success) {
        setPaymentStatus("success");
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
      {paymentStatus === "success" && (
        <div>
          <div>Payment successful!</div>
          <Link href="/dashboard/orders">
            <Button> View orders</Button>
          </Link>
        </div>
      )}
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

export default function PaymentVerificationPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-8">
          Loading payment verification...
        </div>
      }
    >
      <PaymentVerificationContent />
    </Suspense>
  );
}
