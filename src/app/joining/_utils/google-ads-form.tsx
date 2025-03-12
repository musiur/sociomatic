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
import { GoogleAdsFunnelForm, TGoogleAdsFunnelForm } from "./types";

import CustomInput from "./custom-input";
import CustomRadio from "./custom-radio";
import { FunnelFormAction } from "./actions";
import CountryCombobox from "@/components/ui/country-combobox";
import { Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { DL___FormData } from "./datalayer";
import { useEffect } from "react";
import Checkboxes from "@/components/molecule/checkboxes";

function GoogleAdsForm() {
  const router = useRouter();
  const form = useForm<TGoogleAdsFunnelForm>({
    resolver: zodResolver(GoogleAdsFunnelForm),
  });

  async function onSubmit(data: TGoogleAdsFunnelForm) {
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
              data,
              "joiningFormSubmission",
              "google_ads"
            );
            router.push("/joining/end?type=googleads");
          } else {
            DL___FormData(
              data,
              "joiningFormAbandoned",
              "google_ads"
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
      "google_ads"
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
        <CustomInput name="websiteUrl" label="Website URL" />
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
          label="What type of business do you currently own?"
          options={[
            {
              label: "Startup",
              value: "Startup",
              checked: false,
            },
            {
              label: "Small Business Aiming for Growth",
              value: "Small Business Aiming for Growth",
              checked: false,
            },
            {
              label: "Medium-Sized Business on the Path to Expansion",
              value: "Medium-Sized Business on the Path to Expansion",
              checked: false,
            },
          ]}
        />
        <Checkboxes
          name="industryType"
          label="What is your industry?"
          options={[
            {
              label: "Ecommerce",
              value: "Ecommerce",
              checked: false,
            },
            {
              label: "Lead generation",
              value: "Lead generation",
              checked: false,
            },
            {
              label: "Blog",
              value: "Blog",
              checked: false,
            },
            {
              label: "SaaS",
              value: "SaaS",
              checked: false,
            },
          ]}
        />
        <Checkboxes
          name="goals"
          label="What are your main advertising goals? (Increase brand awareness, generate leads, drive sales, etc.)"
          options={[
            {
              label: "Increase Traffic",
              value: "Increase Traffic",
              checked: false,
            },
            {
              label: "Generate Leads",
              value: "Generate Leads",
              checked: false,
            },
            {
              label: "Drive Sales",
              value: "Drive Sales",
              checked: false,
            },
            {
              label: "Others",
              value: "Others",
              checked: false,
            },
          ]}
        />

        {form.watch("goals")?.includes("others") ? (
          <CustomInput name="customGoals" label="Add your own" />
        ) : null}
        <CustomInput
          name="challengesFaced"
          label="Have you ever run Google Ads campaigns before? If so, what were the biggest challenges you faced?"
        />
        <CustomInput
          name="budget"
          label="What's your estimated monthly budget for Google Advestising?"
          type="number"
        />

        <CustomRadio
          name="workExperience"
          label="Have you worked with any marketing agencies before?"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
        />

        {form.watch("workExperience") === "Yes" ? (
          <CustomInput
            name="workExperienceDetails"
            label="If yes, please share the details"
          />
        ) : null}
        <CustomInput
          name="painpoints"
          label=" What are your biggest challenges with attracting customers? (Any pain points)"
        />
        <Checkboxes
          name="commitment"
          label="Considering the program's intensity and the time commitment involved, how committed are you to giving this your all?"
          options={[
            {
              label: "I am Highly Committed",
              value: "I am Highly Committed",
              checked: false,
            },
            {
              label: "I still have a few questions on how best to go forward",
              value: "I still have a few questions on how best to go forward",
              checked: false,
            },
            {
              label:
                "I am not ready to make this type of commitment, but possibly in the future",
              value:
                "I am not ready to make this type of commitment, but possibly in the future",
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

export default GoogleAdsForm;
