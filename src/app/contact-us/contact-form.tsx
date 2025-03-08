"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import ErrorMessages from "@/components/molecule/errors-messages";
import Loader from "@/components/molecule/loader";
import { useToast } from "@/components/ui/use-toast";
import { Building, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { Action___POST__SendMail } from "./actions";

// Function to track contact form submissions
function trackContactFormSubmission(formData: any) {
  if (typeof window !== "undefined") {
    window[`dataLayer`] = window?.dataLayer || [];

    window.dataLayer.push({
      event: "contactFormSubmission",
      formName: "contact_form",
      formData,
    });
  }
}

// Function to track contact form submissions which is abandoned
function trackContactFormSubmissionA(formData: any) {
  if (typeof window !== "undefined") {
    window[`dataLayer`] = window?.dataLayer || [];

    window.dataLayer.push({
      event: "contactFormSubmissionAbandoned",
      formName: "Contact_form_abandoned",
      formData,
    });
  }
}

const ContactUs = () => {
  const { toast } = useToast();
  const [currentTab, setCurrentTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
    subject: "Contact Us",
    title: "Contact Us Form Submission",
  });
  const [errors, setErrors] = useState<any>({});
  const [captcha, setCaptcha] = useState(false);

  // testing api route
  const SendEmail = async (formData: any) => {
    setLoading(true);
    try {
      const result = await Action___POST__SendMail(formData, "contact");
      if (result?.success) {
        toast({
          title: "Message Sending",
          description: "Successful! Mail send successfully.",
        });
        setLoading(false);
        trackContactFormSubmission(formData);
        setFormData({
          name: "",
          email: "",
          phone: "",
          services: [],
          message: "",
          subject: "Contact Us",
          title: "Contact Us Form Submission",
        });
      }
    } catch (error) {
      setLoading(false);
      toast({
        variant: "error",
        title: "Message Sending",
        description: "Failed! Something went wrong.",
      });
    }
  };

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    trackContactFormSubmissionA(formData);
  }, [formData]);
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const validationErrors = validation();

    if (Object.keys(validationErrors).length === 0) {
      trackContactFormSubmissionA(formData);
      SendEmail(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validation = () => {
    let obj: any = {};
    if (!formData.name.trim()) {
      obj.name = "Name is required!";
    }
    if (!formData.email.trim()) {
      obj.email = "Email is required!";
    }

    if (!formData.phone.trim()) {
      obj.phone = "Phone is required!";
    }

    if (
      formData.services.length < 1 ||
      (formData.services.length > 1 && !Array.isArray(formData.services))
    ) {
      obj.services = "Choose at least one!";
    }

    if (currentTab !== 1) {
      if (!formData.budgetRange.trim()) {
        obj.budgetRange = "Budget range is required!";
      }
    }

    return obj;
  };
  const ContactInfo = [
    {
      id: 0,
      icon: <Phone />,
      title: "Make a Call",
      info: "+971507477541",
    },
    {
      id: 1,
      icon: <Building />,
      title: "Main Office",
      info: "Business Center 1, M Floor, Nad Al Sheba, Dubai, U.A.E",
    },
    {
      id: 2,
      icon: <MessageCircle />,
      title: "WhatsApp",
      info: "+971507477541",
    },
  ];
  return (
    <form
      onSubmit={handleOnSubmit}
      className="mx-auto pt-[50px] grid grid-cols-1 large-gap"
    >
      <div className="flex flex-col small-gap">
        <h4 className="text-xl md:text-2xl font-medium text-primary">
          Get in Touch With Us
        </h4>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">
            Name <span className="text-pink-600 font-medium">*</span>
          </Label>
          <Input
            type="name"
            id="name"
            placeholder="Name"
            name="name"
            onChange={handleOnChange}
            value={formData.name}
          />
          <ErrorMessages errors={errors} name="name" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">
            Email <span className="text-pink-600 font-medium">*</span>
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={handleOnChange}
            value={formData.email}
          />
          <ErrorMessages errors={errors} name="email" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="phone">
            Phone <span className="text-pink-600 font-medium">*</span>
          </Label>
          <Input
            type="phone"
            id="phone"
            placeholder="Phone"
            name="phone"
            onChange={handleOnChange}
            value={formData.phone}
          />
          <ErrorMessages errors={errors} name="phone" />
        </div>
      </div>
      <div className="flex flex-col small-gap">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="message">
            Services you are interested on&nbsp;
            <span className="text-pink-600 font-medium">*</span>
          </Label>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5">
            {ServicesList.map((item: any) => {
              return (
                <li key={item.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={item.name}
                    checked={formData.services.includes(item.value)}
                    onCheckedChange={(value) =>
                      setFormData({
                        ...formData,
                        services: value
                          ? [...formData.services, item.value]
                          : [
                              ...formData.services.filter(
                                (service: any) => service !== item.value
                              ),
                            ],
                      })
                    }
                  />
                  <label
                    htmlFor={item.name}
                    className="peer-disabled:opacity-70 cursor-pointer"
                  >
                    {item.value}
                  </label>
                </li>
              );
            })}
          </div>
          <ErrorMessages errors={errors} name="services" />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message"
            name="message"
            onChange={handleOnChange}
            value={formData.message}
          />
        </div>
        <ReCAPTCHA
          sitekey={process.env.siteKey!}
          onChange={(e: any) => {
            e ? setCaptcha(true) : setCaptcha(false);
          }}
        />

        <Button
          variant={"secondary"}
          className="mt-5 max-w-[300px]"
          disabled={!captcha}
          // onClick={handleOnSubmit}
          type="submit"
        >
          {loading ? <Loader /> : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ContactUs;

const ServicesList = [
  {
    id: 1,
    value: "Google Paid Ads",
    name: "googlePaidAds",
  },
  {
    id: 2,
    value: "Data Analytics",
    name: "dataAnalytics",
  },
  {
    id: 3,
    value: "Custom Web Development",
    name: "customWebDevelopment",
  },
  {
    id: 4,
    value: "Wordpress Development",
    name: "wordpressDevelopment",
  },
  {
    id: 5,
    value: "Social Media Paid Ads",
    name: "socialMediaPaidAds",
  },
  {
    id: 6,
    value: "Software Development",
    name: "softwareDevelopment",
  },
  {
    id: 7,
    value: "Shopify Store Development",
    name: "shopifyStoreDevelopment",
  },
  {
    id: 8,
    value: "UI/UX & Graphic Design",
    name: "uiUxAndGraphicDesign",
  },
];
