"use client";

import { useState } from "react";
import { A___Auth__Verify } from "./actions";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Shield } from "lucide-react";

const TokenVerify = ({ email, token }: { email: string; token: string }) => {
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    loading: boolean;
  }>({
    success: false,
    message: "",
    loading: false,
  });
  const router = useRouter();

  const verifyToken = async () => {
    const response = await A___Auth__Verify(email, token);
    if (response?.success) {
      toast.success("Verification Successful");
    } else {
      toast.error("Verification went wrong!");
    }
    setResult({ ...response, loading: false });
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 [&>*]:text-center">
      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center relative z-[1]">
        <div className="w-16 h-16 rounded-full bg-secondary absolute top-0 left-0 animate-ping -z-[1]"></div>
        <Shield className="stroke-white w-8 h-8" />
      </div>
      <h3 className="text-lg md:text-2xl font-semibold">
        Account verification
      </h3>
      <p className="text-gray-500">Click on Verify button in order to verify your account now! After verification we will redirect you to the login page within a short moment.</p>
      <ShimmerButton
        onClick={() => {
          setResult({ success: false, message: "", loading: true });
          verifyToken();
        }}
        disabled={result.loading}
      >
        {result.loading ? "Verifying..." : "Verify"}
      </ShimmerButton>
      <Link href="/login" className="underline">
        Back to login
      </Link>
    </div>
  );
};

export default TokenVerify;
