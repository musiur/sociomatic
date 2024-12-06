/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { useRouter } from "next/navigation";
import { GetOtp, VerifyOtp } from "@/app/joining/_utils/actions";
import { Sun } from "lucide-react";
import ShimmerButton from "../magicui/shimmer-button";
import { toast } from "../ui/use-toast";

const winDow = typeof window !== "undefined";

// Function to track email modal form submissions
function trackEmailModalFormSubmission(formData: any) {
  if (typeof window !== "undefined") {
    window[`dataLayer`] = window?.dataLayer || [];

    window.dataLayer.push({
      event: "funnelEmailSubmission",
      formName: "funnelEmailSubmit",
      formData,
    });
  }
}

// Function to track otp verification modal form submissions
function emailVerified(formData: any) {
  if (typeof window !== "undefined") {
    window[`dataLayer`] = window?.dataLayer || [];

    window.dataLayer.push({
      event: "emailVerified",
      formName: "emailVerified",
      formData,
    });
  }
}

// Function to track email modal form submissions which is abandoned
function emailModalFormProcessing(formData: any) {
  if (typeof window !== "undefined") {
    window[`dataLayer`] = window?.dataLayer || [];

    window.dataLayer.push({
      event: "emailModalFormProcessing",
      formName: "email_modal_form_processing",
      formData,
    });
  }
}

// Function to track otp verification modal form submissions which is abandoned
function otpVerificationAbandoned(formData: any) {
  if (typeof window !== "undefined") {
    window[`dataLayer`] = window?.dataLayer || [];

    window.dataLayer.push({
      event: "otpVerificationAbandoned",
      formName: "otp_verification_abandoned",
      formData,
    });
  }
}

const EmailModal = ({
  buttonText,
  path,
}: {
  buttonText: ReactElement;
  path: string;
}) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [pending, setPending] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const router = useRouter();

  const submitEmail = async () => {
    setPending(true);
    const result = await GetOtp(email);

    if (result.success) {
      setStep(2);
    }
    trackEmailModalFormSubmission({ email });
    setPending(false);
  };

  const verifyEmail = async () => {
    setPending(true);
    const result = await VerifyOtp(parseInt(otp), email);

    if (result.success) {
      if (winDow) {
        localStorage.setItem("user_email", email);
        emailVerified({ email, otp });
      }
      setRedirecting(true);
      router.push(path);
    } else {
      setPending(false);
      winDow && otpVerificationAbandoned({ email, otp });
      toast({
        variant: "error",
        title: "OTP Verification",
        description: result?.message || "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    if (step === 1) {
      email.length > 0 && emailModalFormProcessing({ email });
    }
  }, [email]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ShimmerButton className="w-full sm:w-auto">{buttonText}</ShimmerButton>
      </DialogTrigger>
      <DialogContent className="max-w-[300px] sm:max-w-[425px]">
        <Image
          src="/images/backgrounds/blue-logo-gradiant-light-bg-tb.svg"
          alt=""
          fill
          className="w-full object-contain object-top"
        />
        <DialogHeader className="space-y-2 pt-[180px] md:pt-[240px] z-10">
          <DialogTitle className="text-xl md:text-2xl font-normal">
            {step === 1 ? "Join a small group of" : "Email"}&nbsp;
            <span className="font-medium text-xl md:text-2xl">
              {step === 1 ? "elite entrepreneurs" : "Verification"}
            </span>
            &nbsp;{step === 1 ? "today" : null}
          </DialogTitle>

          <DialogDescription className="text-gray-400 z-10">
            {step === 1
              ? "And finally create the life, freedom, and wealth you want!"
              : "We have sent an OTP to your email. Please Enter the OTP below to verify you email account!"}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pb-4 z-10">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            {step === 1 ? (
              <Input
                id="email"
                defaultValue={email}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <InputOTP
                maxLength={4}
                value={otp}
                onChange={(value: any) => setOtp(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            )}
          </div>
        </div>
        <DialogFooter>
          <div className="w-full space-y-4 z-10">
            <ShimmerButton
              type="submit"
              className="w-full items-center gap-2"
              onClick={step === 1 ? submitEmail : verifyEmail}
              disabled={pending || redirecting}
            >
              {pending ? <Sun className="w-4 h-4 animate-spin" /> : null}
              {step === 1
                ? "Get Started"
                : redirecting
                ? "Redirecting..."
                : "Verify Email"}
            </ShimmerButton>
            <DialogClose className="w-full">
              <span className="bg-white text-center h-[38px] rounded-lg border flex items-center justify-center px-6 font-medium sm:cursor-pointer">
                Close
              </span>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;
