"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormLabel,
  FormItem,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import CustomInput from "@/app/joining/_utils/custom-input";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Sun } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CountryCombobox from "@/components/ui/country-combobox";
import { InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { InputOTP } from "@/components/ui/input-otp";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { GetOtp, VerifyOtp } from "@/app/joining/_utils/actions";
import clsx from "clsx";
import { Action___POST__SendMail } from "@/app/contact-us/actions";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  country: z.string().min(1),
  phone: z.string().optional(),
  website: z.string().optional(),
  message: z.string().optional(),
});

type TCTAForm = z.infer<typeof formSchema>;

/**
 * CTAForm component
 * @returns {JSX.Element}
 */
const CTAForm = (): JSX.Element => {
  const form = useForm<TCTAForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      phone: "",
      website: "",
      message: "",
    },
  });
  const [otp, setOtp] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const HandleOnSubmit = async (values: TCTAForm) => {
    const result = await GetOtp(values.email);
    if (result.success) {
      setEmailSent(true);
      toast({
        title: "Verification Code",
        description: result?.message || "Something went wrong!",
      });
    } else {
      toast({
        variant: "error",
        title: "Verification Code",
        description: result?.message || "Something went wrong!",
      });
    }
  };

  const SendFinalEmail = async () => {
    const result = await Action___POST__SendMail(
      {
        ...form.getValues(),
        services: ["google-paid-ads", "social-media-paids", "google-analytics"],
      },
      "contact"
    );
    console.table(result);
    if (result.success) {
      toast({
        title: "Verification",
        description: result?.message || "Something went wrong!",
      });
      form.reset();
      setEmailSent(false);
      setOpen(false);
    } else {
      toast({
        variant: "error",
        title: "Verification",
        description: result?.message || "Something went wrong!",
      });
    }
  };

  const HandleVerify = async () => {
    setLoading(true);
    const email = form.getValues("email");

    const result = await VerifyOtp(parseInt(otp), email);

    if (result.success) {
      toast({
        title: "Verification",
        description: result?.message || "Something went wrong!",
      });
      await SendFinalEmail();
    } else {
      toast({
        variant: "error",
        title: "Verification",
        description: result?.message || "Something went wrong!",
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <ShimmerButton className="w-auto">
            Start Your Free Consultation Now
          </ShimmerButton>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(HandleOnSubmit)}
                className={clsx("space-y-4 py-4 p-1", {
                  hidden: emailSent,
                })}
              >
                <CustomInput name="name" label="Name" />
                <CustomInput name="email" label="Email" />
                <FormField
                  control={form.control}
                  name="country"
                  render={() => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <CountryCombobox
                        onChange={(value: any) => {
                          form.setValue("country", value.target.value);
                        }}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CustomInput name="phone" label="Phone" />
                <CustomInput name="website" label="Your Website Link" />
                <CustomInput name="message" label="Message" type="textarea" />

                <ShimmerButton
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full items-center gap-2 mt-4"
                >
                  {form.formState.isSubmitting ? (
                    <Sun className="w-4 h-4 animate-spin" />
                  ) : null}
                  {form.formState.isSubmitting ? "Submiting" : "Submit"}
                </ShimmerButton>
              </form>
            </Form>
            <div
              className={clsx("space-y-4", {
                hidden: !emailSent,
              })}
            >
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
              <ShimmerButton
                onClick={HandleVerify}
                disabled={loading}
                className="w-full items-center gap-2 mt-4"
              >
                {loading ? "Verifying" : "Verify"}
              </ShimmerButton>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CTAForm;
