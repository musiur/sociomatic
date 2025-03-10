"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
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

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
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
    },
  });

  const HandleOnSubmit = (values: TCTAForm) => {
    console.log(values);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <ShimmerButton className="w-auto">
            Get Started Right Away
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(HandleOnSubmit)} className="space-y-4 py-4">
              <CustomInput name="name" label="Name" />
              <CustomInput name="email" label="Email" />
              <ShimmerButton
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full items-center gap-2"
              >
                {form.formState.isSubmitting ? (
                  <Sun className="w-4 h-4 animate-spin" />
                ) : null}
                {form.formState.isSubmitting ? "Submiting" : "Submit"}
              </ShimmerButton>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CTAForm;
