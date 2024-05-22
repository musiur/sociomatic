"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { GoogleAdsFormSchema, TGoogleAdsFormSchema } from "./types";
import CustomSelect from "./custom-select";
import { Input } from "@/components/ui/input";
import CustomInput from "./custom-input";
import CustomRadio from "./custom-radio";

export function GoogleAdsForm() {
  const form = useForm<TGoogleAdsFormSchema>({
    resolver: zodResolver(GoogleAdsFormSchema),
  });

  function onSubmit(data: TGoogleAdsFormSchema) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-4 md:p-8 rounded-lg border"
      >
        <CustomSelect
          form={form}
          name="businessType"
          label="What type of business do you currently own?"
          options={[
            {
              label: "Small business to grow",
              value: "Small business to grow",
            },
            {
              label: "Medium business want to grow",
              value: "Medium business want to grow",
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
          name="advertisingGoals"
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

        {form.watch("advertisingGoals") === "Others" ? (
          <CustomInput
            form={form}
            name="advertisingGoalCustom"
            label="Add your own"
          />
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default GoogleAdsForm;
