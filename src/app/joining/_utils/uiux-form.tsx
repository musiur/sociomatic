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

function UiUxForm() {
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
              label: "Growing Small Business",
              value: "Growing Small Business",
            },
            {
              label: "Expanding Medium-Sized Enterprise",
              value: "Expanding Medium-Sized Enterprise",
            }
          ]}
        />
        <CustomSelect
          form={form}
          name="industryType"
          label="What is your industry?"
          options={[
            {
              label: "ECommerce",
              value: "ECommerce",
            },
            {
              label: "Educational Technology",
              value: "Educational Technology",
            },
            {
              label: "Financial Technology",
              value: "Financial Technology",
            },
            {
              label: "Software as a Service",
              value: "Software as a Service",
            },
            {
              label: "Others",
              value: "Others",
            },
          ]}
        />
        {form.watch("industryType") === "Others" ? (
          <CustomInput form={form} name="customIndustry" label="Add your own" />
        ) : null}
        <CustomSelect
          form={form}
          name="goals"
          label="What objectives do you aim to achieve with UI/UX design? (Select all that apply)"
          options={[
            {
              label: "Boost User Engagement",
              value: "Boost User Engagement",
            },
            {
              label: "Increase Accessibility",
              value: "Increase Accessibility",
            },
            {
              label: "Simplify User Navigation",
              value: "Simplify User Navigation",
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
          label="Have you invested in UI/UX design? What challenges did you encounter?"
        />
        <CustomInput
          form={form}
          name="budget"
          label=" What is your UI/UX design project budget range?"
          type="number"
        />

        <CustomRadio
          form={form}
          name="workExperience"
          label="Have you previously partnered with any company?"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
        />

        {form.watch("workExperience") === "Yes" ? (
          <CustomInput
            form={form}
            name="workExperienceDetails"
            label="Please share your experiences with your former company."
          />
        ) : null}

        <CustomInput
          form={form}
          name="customerAsPersona"
          label="Describe your vision for the ideal user experience. (Include target audience, essential features, preferred design style)"
          type="textarea"
        />

        <CustomInput
          form={form}
          name="painpoints"
          label="What are your biggest challenges with attracting customers? (Any pain points)"
        />
        <CustomSelect
          form={form}
          name="commitment"
          label="Given the program's demands and time investment, how ready are you to embark on this UI/UX design journey?"
          options={[
            {
              label: "Fully Committed",
              value: "Fully Committed",
            },
            {
              label: "Seeking Further Information",
              value: "Seeking Further Information",
            },
            {
              label: "Considering Future Engagement",
              value: "Considering Future Engagement",
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

export default UiUxForm;
