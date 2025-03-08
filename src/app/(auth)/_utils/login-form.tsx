"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import CustomInput from "@/app/joining/_utils/custom-input";
import Link from "next/link";
import { Sun } from "lucide-react";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { A___Auth__Login } from "./actions";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await A___Auth__Login(data);

    if (result?.success) {
      toast.success("Login Successful");
      router.refresh();
    } else {
      toast.error(result?.message || "Something went wrong");
    }
  }

  return (
    <>
      <h3 className="text-lg md:text-2xl font-semibold">
        Sign in to your account
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CustomInput name="email" label="Email" />

          <CustomInput
            name="password"
            label="Password"
            type="password"
          />
          <Link
            href="/forget-password"
            className="inline-block w-full text-right"
          >
            Forget Password?
          </Link>
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
      <div>
        <p>
          New to the Sociomatic?{" "}
          <Link href="/register" className="text-primary underline">
            Create an account
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
