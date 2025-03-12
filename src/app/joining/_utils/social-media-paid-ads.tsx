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
import {
  SocialMediaAdsServicePageDataForm,
  TSocialMediaAdsServicePageDataForm,
} from "./types";

import CustomInput from "./custom-input";
import CustomRadio from "./custom-radio";
import { FunnelFormAction } from "./actions";
import CountryCombobox from "@/components/ui/country-combobox";
import { Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { DL___FormData } from "./datalayer";
import { useEffect } from "react";
import Checkboxes from "@/components/molecule/checkboxes";

function SocialMediaPaidAdsForm() {
  const router = useRouter();
  const form = useForm<TSocialMediaAdsServicePageDataForm>({
    resolver: zodResolver(SocialMediaAdsServicePageDataForm),
  });

  async function onSubmit(data: TSocialMediaAdsServicePageDataForm) {
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
              "social_media_ads"
            );
            router.push("/joining/end?type=socialmediapaidads");
          } else {
            DL___FormData(
              form.getValues(),
              "joiningFormAbandoned",
              "social_media_ads"
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
      "social_media_ads"
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
          name="platformType"
          label="Which social media platforms are most relevant to your target audience? (Select all that apply)"
          options={[
            {
              label: "Facebook",
              value: "Facebook",
              checked: false,
            },
            {
              label: "Instagram",
              value: "Instagram",
              checked: false,
            },
            {
              label: "Linkedin",
              value: "Linkedin",
              checked: false,
            },
            {
              label: "Others",
              value: "Others",
              checked: false,
            },
          ]}
        />
        {form.watch("platformType")?.includes("Others") ? (
          <CustomInput name="customPlatform" label="Add your own" />
        ) : null}
        <Checkboxes
          name="goals"
          label="What are your primary goals for social media advertising? (Select all that apply)"
          options={[
            {
              label: "Increase brand awareness",
              value: "Increase brand awareness",
              checked: false,
            },
            {
              label: "Generate leads",
              value: "Generate leads",
              checked: false,
            },
            {
              label: "Drive sales",
              value: "Drive sales",
              checked: false,
            },
            {
              label: "Website traffic",
              value: "Website traffic",
              checked: false,
            },
            {
              label: "Improve brand engagement",
              value: "Improve brand engagement",
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
          label="Have you embarked on web development ventures before? If so, what were your main obstacles?"
          type="textarea"
        />
        <CustomInput
          
          name="budget"
          label="Do you currently have a dedicated budget for social media advertising, or are you still exploring options?"
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
            label="Do you have any prior experience with social media advertising?"
          />
        ) : null}

        <CustomInput
          
          name="partnerYouWant"
          label="What are the top 2-3 things you look for in a social media advertising partner?"
          type="textarea"
        />

        <CustomInput
          
          name="painpoints"
          label="Briefly describe your biggest challenge in reaching your target audience on social media."
          type="textarea"
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

export default SocialMediaPaidAdsForm;
