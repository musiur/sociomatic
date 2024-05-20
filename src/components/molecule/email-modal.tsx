"use client";

import { Button } from "@/components/ui/button";
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
import { ReactElement, useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const EmailModal = ({ buttonText }: { buttonText: ReactElement }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const submitEmail = () => {
    setStep(2);
  };

  const verifyEmail = () => {
    console.log("OTP: ", otp);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="bg-secondary text-white text-center h-[38px] rounded-lg border border-secondary hover:bg-secondary/80 flex items-center justify-center px-6 font-medium sm:cursor-pointer">
          {buttonText}
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Image
          src="/images/backgrounds/blue-logo-gradiant-light-bg-tb.svg"
          alt=""
          fill
          className="object-contain object-top"
        />
        <DialogHeader className="space-y-4 pt-[240px] z-10">
          {step === 1 ? (
            <DialogTitle className="text-xl md:text-2xl font-normal">
              Join a small group of&nbsp;
              <span className="font-bold text-xl md:text-2xl">
                elite entrepreneurs
              </span>
              &nbsp;today
            </DialogTitle>
          ) : null}
          <DialogDescription className="text-gray-400 z-10">
            {step === 1
              ? "And finally create the life, freedom, and wealth you want!"
              : "We have sent an OTP to your email. Please Enter the OTP below to verify you email account!"}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 z-10">
          <div className="space-y-4">
            {step === 1 ? (
              <Input
                id="email"
                defaultValue={email}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value: any) => setOtp(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            )}
          </div>
        </div>
        <DialogFooter>
          <div className="w-full space-y-4 z-10">
            <Button
              type="submit"
              variant="secondary"
              className="w-full"
              onClick={step === 1 ? submitEmail : verifyEmail}
            >
              {step === 1 ? "Get Started" : "Verify Email"}
            </Button>
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
