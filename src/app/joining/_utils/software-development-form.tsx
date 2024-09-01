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

function SoftwareDevelopmentForm() {
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
            router.push("/joining/end?type=software");
            DL___FormData(
              form.getValues(),
              "joiningSoftwareFormSubmission",
              "joining_software_form_submission"
            );
          } else {
            DL___FormData(
              form.getValues(),
              "joiningSoftwareFormAbandoned",
              "joining_software_form_abandoned"
            );
          }
        }
      }
    }
  }

  useEffect(() => {
    DL___FormData(
      form.getValues(),
      "joiningSoftwareFormProcessing",
      "joining_software_form_processing"
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

        <CustomInput form={form} name="phone" label="Phone" />
        <Checkboxes
          form={form}
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
            {
              label: "Medium-Sized Business Looking to Scale",
              value: "Medium-Sized Business Looking to Scale",
              checked: false,
            },
          ]}
        />
        <Checkboxes
          form={form}
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
          <CustomInput form={form} name="customIndustry" label="Add your own" />
        ) : null}
        <Checkboxes
          form={form}
          name="goals"
          label="Primary Objectives for Software Development"
          options={[
            {
              label: "Enhance Efficiency",
              value: "Enhance Efficiency",
              checked: false,
            },
            {
              label: "Amplify User Experience",
              value: "Amplify User Experience",
              checked: false,
            },
            {
              label: "System Integration",
              value: "System Integration",
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
            form={form}
            name="customGoals"
            label="Add your own goals"
          />
        ) : null}
        <CustomInput
          form={form}
          name="challengesFaced"
          label="Have you previously invested in software development? If yes, what were the major hurdles you encountered?"
        />
        <CustomInput
          form={form}
          name="budget"
          label="Your Budget for Development"
          type="number"
        />

        <CustomRadio
          form={form}
          name="workExperience"
          label="Have you collaborated with a development firm before?"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
        />

        {form.watch("workExperience") === "Yes" ? (
          <CustomInput
            form={form}
            name="workExperienceDetails"
            label="Please describe your experience with your previous development partner. (Text box for description)
            "
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
          label="What are your biggest challenges with attracting customers? (Any pain points)"
        />
        <Checkboxes
          form={form}
          name="commitment"
          label="How ready can you fully engage with our intensive web development program?"
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

export default SoftwareDevelopmentForm;
