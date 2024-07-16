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
import CustomSelect from "./custom-select";
import CustomInput from "./custom-input";
import CustomRadio from "./custom-radio";
import { FunnelFormAction } from "./actions";
import CountryCombobox from "@/components/ui/country-combobox";
import { Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { DL___FormData } from "./datalayer";
import { useEffect } from "react";

function GoogleAdsForm() {
  const router = useRouter();
  const form = useForm<TGoogleAdsFunnelForm>({
    resolver: zodResolver(GoogleAdsFunnelForm),
  });

  async function onSubmit(data: TGoogleAdsFunnelForm) {
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
        typeof window !== "undefined" &&
          DL___FormData(
            data,
            "joiningGoogleAdsFormSubmission",
            "joining_google_ads_form_submission"
          );
      }
    }
  }

  useEffect(() => {
    DL___FormData(
      form.getValues(),
      "joiningGoogleAdsFormAbandoned",
      "joining_google_ads_form_abandoned"
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
        <CustomInput form={form} name="name" label="Name" />
        <CustomInput form={form} name="websiteUrl" label="Website URL" />
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
          label="What type of business do you currently own?"
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
              label: "Lead generation",
              value: "Lead generation",
            },
            {
              label: "Blog",
              value: "Blog",
            },
            {
              label: "SaaS",
              value: "SaaS",
            },
          ]}
        />
        <CustomSelect
          form={form}
          name="goals"
          label="What are your main advertising goals? (Increase brand awareness, generate leads, drive sales, etc.)"
          options={[
            {
              label: "Increase Traffic",
              value: "Increase Traffic",
            },
            {
              label: "Generate Leads",
              value: "Generate Leads",
            },
            {
              label: "Drive Sales",
              value: "Drive Sales",
            },
            {
              label: "Others",
              value: "Others",
            },
          ]}
        />

        {form.watch("goals") === "Others" ? (
          <CustomInput form={form} name="customGoals" label="Add your own" />
        ) : null}
        <CustomInput
          form={form}
          name="challengesFaced"
          label="Have you ever run Google Ads campaigns before? If so, what were the biggest challenges you faced?"
        />
        <CustomInput
          form={form}
          name="budget"
          label="What's your estimated monthly budget for Google Advestising?"
          type="number"
        />

        <CustomRadio
          form={form}
          name="workExperience"
          label="Have you worked with any marketing agencies before?"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
        />

        {form.watch("workExperience") === "Yes" ? (
          <CustomInput
            form={form}
            name="workExperienceDetails"
            label="If yes, please share the details"
          />
        ) : null}
        <CustomInput
          form={form}
          name="painpoints"
          label=" What are your biggest challenges with attracting customers? (Any pain points)"
        />
        <CustomSelect
          form={form}
          name="commitment"
          label="Considering the program's intensity and the time commitment involved, how committed are you to giving this your all?"
          options={[
            {
              label: "I am Highly Committed",
              value: "I am Highly Committed",
            },
            {
              label: "I still have a few questions on how best to go forward",
              value: "I still have a few questions on how best to go forward",
            },
            {
              label:
                "I am not ready to make this type of commitment, but possibly in the future",
              value:
                "I am not ready to make this type of commitment, but possibly in the future",
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
