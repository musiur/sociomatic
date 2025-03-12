/* eslint-disable react-hooks/exhaustive-deps */
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

import CustomInput from "./custom-input";
import CustomRadio from "./custom-radio";
import { FunnelFormAction } from "./actions";
import CountryCombobox from "@/components/ui/country-combobox";
import { Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { DL___FormData } from "./datalayer";
import { useEffect } from "react";
import Checkboxes from "@/components/molecule/checkboxes";

function ShopifyDevelopmentForm() {
  const router = useRouter();
  const form = useForm<TWebDevelopmentFunnelForm>({
    resolver: zodResolver(WebDevelopmentFunnelForm),
  });

  async function onSubmit(data: TWebDevelopmentFunnelForm) {
    if (typeof window !== "undefined") {
      const email = localStorage.getItem("user_email") || "dummy@mail.test";
      if (email) {
        const result = await FunnelFormAction({ ...data, email });
        toast({
          variant: result?.success ? "default" : "destructive",
          title: "Joining to program",
          description: result?.message || "Thank you for your joining!",
        });
        if (typeof window !== "undefined") {
          if (result.success) {
            
            DL___FormData(
              form.getValues(),
              "joiningFormSubmission",
              "shopify"
            );
            router.push("/joining/end?type=shopify");
          } else {
            DL___FormData(
              form.getValues(),
              "joiningFormAbandoned",
              "shopify"
            );
          }
        }
      }
    }
  }

  useEffect(() => {
    DL___FormData(
      form.getValues(),
      "joiningFormProcessing",
      "shopify"
    );
  }, [form.getValues()]);

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
        <CustomInput name="name" label="Name" />
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
        <Checkboxes
          name="businessType"
          label="Which industry does your business thrive in?"
          options={[
            {
              label: "Innovative Startup",
              value: "Innovative Startup",
              checked: false,
            },
            {
              label: "Growth-Oriented Small Business",
              value: "Growth-Oriented Small Business",
              checked: false,
            },
          ]}
        />
        <Checkboxes
          name="industryType"
          label="What is your industry?"
          options={[
            {
              label: "Digital Commerce",
              value: "Digital Commerce",
              checked: false,
            },
            {
              label: "Content Creation",
              value: "Content Creation",
              checked: false,
            },
            {
              label: "Others",
              value: "Others",
              checked: false,
            },
          ]}
        />
        {form.watch("industryType")?.includes("Others") ? (
          <CustomInput name="customIndustry" label="Add your own" />
        ) : null}
        <Checkboxes
          name="goals"
          label="What are your core goals for development? (Select your primary focus)"
          options={[
            {
              label: "Boost Sales Performance",
              value: "Boost Sales Performance",
              checked: false,
            },
            {
              label: "Elevate User Experience",
              value: "Elevate User Experience",
              checked: false,
            },
            {
              label: "Optimize for Mobile Devices",
              value: "Optimize for Mobile Devices",
              checked: false,
            },
            {
              label: "Others",
              value: "Others",
              checked: false,
            },
          ]}
        />

        {form.watch("goals")?.includes("Others") ? (
          <CustomInput
            name="customGoals"
            label="Add your own goals"
          />
        ) : null}
        <CustomInput
          name="challengesFaced"
          label="Have you embarked on shopify development ventures before? If so, what were your main obstacles?"
        />
        <CustomInput
          name="budget"
          label="What is your projected budget for shopify development?"
          type="number"
        />

        <CustomRadio
          name="workExperience"
          label="Have you previously partnered with a development company?"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
        />

        {form.watch("workExperience") === "Yes" ? (
          <CustomInput
            name="workExperienceDetails"
            label="Please share your experiences with your former development company."
          />
        ) : null}

        <CustomInput
          name="customerAsPersona"
          label="Can you describe your perfect customer? (Consider age, location, and interests)"
          type="textarea"
        />

        <CustomInput
          name="painpoints"
          label="What are your biggest challenges with attracting customers? (Any pain points)"
        />
        <Checkboxes
          name="commitment"
          label="How ready can you fully engage with our intensive shopify development program?"
          options={[
            {
              label: "Fully commited",
              value: "Fully commited",
              checked: false,
            },
            {
              label: "Seeking more information",
              value: "Seeking more information",
              checked: false,
            },
            {
              label: "Considering future commitments",
              value: "Considering future commitments",
              checked: false,
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

export default ShopifyDevelopmentForm;
