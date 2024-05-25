"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { WebDevelopmentFunnelForm, TWebDevelopmentFunnelForm } from "./types";
import CustomSelect from "./custom-select";
import CustomInput from "./custom-input";
import CustomRadio from "./custom-radio";
import { FunnelFormAction } from "./actions";
import CountryCombobox from "@/components/ui/country-combobox";
import { Sun } from "lucide-react";
import { useRouter } from "next/navigation";

function WebDevelopmentForm() {
  const router = useRouter();
  const form = useForm<TWebDevelopmentFunnelForm>({
    resolver: zodResolver(WebDevelopmentFunnelForm),
  });

  async function onSubmit(data: TWebDevelopmentFunnelForm) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    if (typeof window !== "undefined") {
      console.log("Running");
      const email = localStorage.getItem("user_email") || "dummy@mail.test";
      if (email) {
        const result = await FunnelFormAction({ ...data, email });
        console.log(result);
        toast({
          variant: result?.success ? "default" : "destructive",
          title: "Joining to program",
          description: result?.message || "Thank you for your joining!",
        });
        if (result.success) {
          router.push("/joining/end?type=googleads");
        }
      }
    }
  }

  console.log(form.formState.errors);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 p-4 md:p-8 rounded-lg border-2 shadow-[2px_2px_20px_lightgray]"
      >
        <h4 className="font-semibold">
          Please, fill up the form so that you may get us in painpoint to
          resolve
        </h4>
        <CustomInput form={form} name="name" label="Name" />
        <FormField
          control={form.control}
          name="country"
          render={() => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <CountryCombobox
                onChange={(value: any) => {
                  console.log(value);
                  form.setValue("country", value.target.value);
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <CustomInput form={form} name="phone" label="Phone" />
        <CustomSelect
          form={form}
          name="businessType"
          label="Which industry does your business thrive in?"
          options={[
            {
              label: "Startup",
              value: "Startup",
            },
            {
              label: "Small Business Aiming for Growth",
              value: "Small Business Aiming for Growth",
            },
            {
              label: "Medium-Sized Business on the Path to Expansion",
              value: "Medium-Sized Business on the Path to Expansion",
            },
          ]}
        />
        <CustomSelect
          form={form}
          name="industryType"
          label="What is your industry?"
          options={[
            {
              label: "Ecommerce",
              value: "Ecommerce",
            },
            {
              label: "Educational Technologies",
              value: "Educational Technologies",
            },
            {
              label: "Financial Technologies",
              value: "Financial Technologies",
            },
            {
              label: "Software as a Service",
              value: "Software as a Service",
            },
          ]}
        />
        {form.watch("industryType") === "Others" ? (
          <CustomInput form={form} name="customIndustry" label="Add your own" />
        ) : null}
        <CustomSelect
          form={form}
          name="goals"
          label="What are your core goals for development? (Select your primary focus)"
          options={[
            {
              label: "Boosting Brand Visiblity",
              value: "Boosting Brand Visiblity",
            },
            {
              label: "Lead generation",
              value: "Lead generation",
            },
            {
              label: "Driving Sales Conversions",
              value: "Driving Sales Conversions",
            },
            {
              label: "Others",
              value: "Others",
            },
          ]}
        />

        {form.watch("goals") === "Others" ? (
          <CustomInput
            form={form}
            name="customGoals"
            label="Add your own goals"
          />
        ) : null}
        <CustomInput
          form={form}
          name="challengesFaced"
          label="Have you embarked on web development ventures before? If so, what were your main obstacles?"
        />
        <CustomInput
          form={form}
          name="budget"
          label="What is your projected budget for web development?"
          type="number"
        />

        <CustomRadio
          form={form}
          name="workExperience"
          label="Have you previously partnered with a development company?"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
        />

        {form.watch("workExperience") === "Yes" ? (
          <CustomInput
            form={form}
            name="workExperienceDetails"
            label="Please share your experiences with your former development agency."
          />
        ) : null}

        <CustomInput
          form={form}
          name="customerAsPersona"
          label="Can you describe your perfect customer? (Consider age, location, and interests)"
          type="textarea"
        />

        <CustomInput
          form={form}
          name="painpoints"
          label=" What are your biggest challenges with attracting customers? (Any pain points)"
        />
        <CustomSelect
          form={form}
          name="commitment"
          label=" How ready can you fully engage with our intensive web development program?"
          options={[
            {
              label: "Fully commited",
              value: "Fully commited",
            },
            {
              label: "Seeking more information",
              value: "Seeking more information",
            },
            {
              label: "Considering future commitments",
              value: "Considering future commitments",
            },
          ]}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="items-center gap-2"
        >
          {form.formState.isSubmitting ? (
            <Sun className="w-4 h-4 animate-spin" />
          ) : null}
          {form.formState.isSubmitting ? "Submiting" : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default WebDevelopmentForm;
