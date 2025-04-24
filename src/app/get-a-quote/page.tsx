"use client";
import ReCAPTCHA from "react-google-recaptcha";
import SectionHead from "@/components/molecule/section-head";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ErrorMessages from "@/components/molecule/errors-messages";

import Loader from "@/components/molecule/loader";
import { useToast } from "@/components/ui/use-toast";
import ShortReviews from "@/components/molecule/short-reviews";
import CountryCombobox from "@/components/ui/country-combobox";
import { Action___POST__SendMail } from "../contact-us/actions";

// Function to track Get A Get form submissions
function trackGetAQuoteFormSubmission(formData: any) {
  if (typeof window !== "undefined") {
    window[`dataLayer`] = window?.dataLayer || [];

    window.dataLayer.push({
      event: "getAQuoteFormSubmission",
      formName: "get_a_quote_form",
      formData,
    });
  }
}
// Function to track Get A Get form submissions abandoned
function trackGetAQuoteFormSubmissionA(formData: any) {
  if (typeof window !== "undefined") {
    window[`dataLayer`] = window?.dataLayer || [];

    window.dataLayer.push({
      event: "getAQuoteFormSubmissionAbandoned",
      formName: "Quote_form_abandoned",
      formData,
    });
  }
}

const defaultFormData = {
  name: "",
  email: "",
  phone: "",
  country: "",
  companyName: "",
  companyURL: "",
  budgetRange: "",
  services: [],
  message: "",
  subject: "Get a Quote",
  title: "Get a Quote Form Submission",
}

const GetAQuotePage = () => {
  const { toast } = useToast();
  const [currentTab, setCurrentTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>(defaultFormData);
  const [errors, setErrors] = useState<any>({});
  const [captcha, setCaptcha] = useState(false);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    trackGetAQuoteFormSubmissionA(formData);
  }, [formData]);
  const handleOnSubmit = async () => {
    const validationErrors = validation();

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      trackGetAQuoteFormSubmissionA(formData);
      try {
        const result = await Action___POST__SendMail(formData, "quote")
        if (result.success) {
          toast({
            title: "Message Sending",
            description: "Successful! Mail send successfully.",
          });
          trackGetAQuoteFormSubmission({
            ...formData,
            months:
              currentTab === 1
                ? "One month"
                : currentTab === 2
                ? "Half yearly"
                : "Yearly",
          });
          
          setFormData(defaultFormData);
        }
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Messange Sending",
          description: "Something went wrong!",
        });
      } finally {
        setLoading(false);
      }
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
    if (!formData.country.trim()) {
      obj.country = "Country is required!";
    }
    if (!formData.message.trim()) {
      obj.message = "Message is required!";
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
  return (
    <>
      <div className="bg-[url('/images/backgrounds/CircleNest.svg')] bg-cover bg-center">
        <div className="section container">
          <SectionHead
            highlighter=""
            H2={<>Get a Quote</>}
            paragraphs={[
              <>
                Embark on a transformative digital journey with Sociomatic. Our
                tailored solutions redefine success, ensuring your brand&apos;s
                unique needs are precisely met. Request a quote today and
                witness the power of strategic innovation, elevating your brand
                to new heights in the dynamic digital landscape.
              </>,
            ]}
          />
        </div>

        <div className="relative container section grid grid-cols-1 md:grid-cols-2 large-gap backdrop-blur rounded-lg border border-secondarymuted">
          <div className="absolute top-0 left-0 w-full -mt-[20px] md:-mt-[25px]">
            <ul className="flex items-center justify-center">
              {["One Time", "Half Yearly", "Yearly"].map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`px-4 py-2 md:px-8 md:py-3 border  font-medium cursor-pointer ${
                      index + 1 === currentTab
                        ? "bg-secondary text-white hover:bg-blue-600 border-secondary "
                        : "bg-white hover:bg-muted hover:text-secondary border-secondarymuted "
                    } ${index + 1 === 1 ? "rounded-l-[10px]" : ""} ${
                      index + 1 === 3 ? "rounded-r-[10px]" : ""
                    } ${
                      index + 1 === 2
                        ? "border border-l-0 border-r-0"
                        : "border"
                    } transition ease-in-out duration-300`}
                    onClick={() => setCurrentTab(index + 1)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col small-gap">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">
                Name <span className="text-pink-600 font-medium">*</span>
              </Label>
              <Input
                type="name"
                id="name"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleOnChange}
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
                value={formData.email}
                onChange={handleOnChange}
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
                value={formData.phone}
                onChange={handleOnChange}
              />
              <ErrorMessages errors={errors} name="phone" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="country">
                Country <span className="text-pink-600 font-medium">*</span>
              </Label>
              <CountryCombobox onChange={handleOnChange} />
              <ErrorMessages errors={errors} name="country" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                type="companyName"
                id="companyName"
                placeholder="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleOnChange}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="companyURL">Company URL</Label>
              <Input
                type="companyURL"
                id="companyURL"
                placeholder="Company URL"
                name="companyURL"
                value={formData.companyURL}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="flex flex-col small-gap">
            {currentTab !== 1 ? (
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="budget">
                  Probable budget range&nbsp;
                  <span className="text-pink-600 font-medium">*</span>
                </Label>
                <Select
                  onValueChange={(value) => {
                    handleOnChange({
                      target: {
                        name: "budgetRange",
                        value,
                      },
                    });
                  }}
                  value={formData.budgetRange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="$1000-1500">$1000-1500</SelectItem>
                    <SelectItem value="$1500-2000">$1500-2000</SelectItem>
                    <SelectItem value="$2500+">$2500+</SelectItem>
                  </SelectContent>
                </Select>
                <ErrorMessages errors={errors} name="budgetRange" />
              </div>
            ) : null}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">
                Services you are interested on&nbsp;
                <span className="text-pink-600 font-medium">*</span>
              </Label>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-1.5">
                {ServicesList.map((item: any) => {
                  return (
                    <li key={item.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.name}
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
                        checked={formData.services.includes(item.value)}
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
              </ul>
              <ErrorMessages errors={errors} name="services" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">
                Your message&nbsp;
                <span className="text-pink-600 font-medium">*</span>
              </Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                name="message"
                value={formData.message}
                onChange={handleOnChange}
              />
              <ErrorMessages errors={errors} name="message" />
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
              onClick={handleOnSubmit}
            >
              {loading ? <Loader /> : "Submit"}
            </Button>
          </div>
        </div>
      </div>
      <ShortReviews />
    </>
  );
};
export default GetAQuotePage;
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
