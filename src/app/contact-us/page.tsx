"use client";

import ReCAPTCHA from "react-google-recaptcha";
import SectionHead from "@/components/molecule/section-head";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ErrorMessages from "@/components/molecule/errors-messages";
import SendEmail from "@/lib/resend";

const ContactUs = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    country: "",
    companyName: "",
    companyURL: "",
    budgetRange: "",
    services: [],
  });
  const [errors, setErrors] = useState<any>(formData);
  const [captcha, setCaptcha] = useState(false);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnSubmit = () => {
    const validationErrors = validation(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      SendEmail(formData);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validation = (data: any) => {
    let obj: any = {};
    if (!data.name.trim()) {
      obj.name = "Name is required!";
    }
    if (!data.email.trim()) {
      obj.email = "Email is required!";
    }
    if (!data.phone.trim()) {
      obj.phone = "Phone is required!";
    }

    if (data.services.length < 1) {
      obj.services = "Choose at least one!";
    }

    return obj;
  };
  return (
    <div>
      <div className="section border-b border-secondarymuted container">
        <SectionHead
          highlighter="Contact Us"
          H2={<>Get Touch with Us</>}
          paragraphs={[
            <>
              Anim et laborum consequat incididunt consequat ex incididunt
              laborum. Pariatur veniam minim Lorem et officia qui esse nisi est
              irure voluptate enim consequat. Eiusmod ad et consequat in. Dolor
              ea exercitation pariatur non Lorem et consectetur quis quis veniam
              aliqua ut. Culpa sint qui irure Lorem dolor ex cupidatat dolor.
              Laboris eu velit ex irure nulla fugiat aute ipsum.
            </>,
          ]}
        />
      </div>
      <div className="-mt-[20px] md:-mt-[25px]">
        <ul className="flex items-center justify-center">
          {["One Time", "Quarterly", "Yearly"].map((item, index) => {
            return (
              <li
                key={index}
                className={`px-4 py-2 md:px-8 md:py-3 border  font-bold cursor-pointer ${
                  index + 1 === currentTab
                    ? "bg-secondary text-white hover:bg-blue-600 border-secondary "
                    : "bg-white hover:bg-muted hover:text-secondary border-secondarymuted "
                } ${index + 1 === 1 ? "rounded-l-[10px]" : ""} ${
                  index + 1 === 3 ? "rounded-r-[10px]" : ""
                } ${
                  index + 1 === 2 ? "border border-l-0 border-r-0" : "border"
                } transition ease-in-out duration-300`}
                onClick={() => setCurrentTab(index + 1)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container section grid grid-cols-1 md:grid-cols-2 large-gap bg-white">
        <div className="flex flex-col small-gap">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">
              Name <span className="text-pink-600 font-bold">*</span>
            </Label>
            <Input
              type="name"
              id="name"
              placeholder="Name"
              name="name"
              onChange={handleOnChange}
            />
            <ErrorMessages errors={errors} name="name" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">
              Email <span className="text-pink-600 font-bold">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              onChange={handleOnChange}
            />
            <ErrorMessages errors={errors} name="email" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="phone">
              Phone <span className="text-pink-600 font-bold">*</span>
            </Label>
            <Input
              type="phone"
              id="phone"
              placeholder="Phone"
              name="phone"
              onChange={handleOnChange}
            />
            <ErrorMessages errors={errors} name="phone" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="country">Country</Label>
            <Input
              type="country"
              id="country"
              placeholder="Country"
              name="country"
              onChange={handleOnChange}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              type="companyName"
              id="companyName"
              placeholder="Company Name"
              name="companyName"
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
              onChange={handleOnChange}
            />
          </div>
          {currentTab !== 1 ? (
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">
                Probable budget range&nbsp;
                <span className="text-pink-600 font-bold">*</span>
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
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="$500-1000">$500-1000</SelectItem>
                  <SelectItem value="$1000-1500">$1000-1500</SelectItem>
                  <SelectItem value="$2000+">$2000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col small-gap overflow-hidden">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message">
              Services you are interested on&nbsp;
              <span className="text-pink-600 font-bold">*</span>
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
            <Label htmlFor="message">Your message</Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              name="message"
              onChange={handleOnChange}
            />
          </div>
          <ReCAPTCHA
            sitekey={process.env.siteKey!}
            onChange={(e: any) => {
              console.log(e);
              e ? setCaptcha(true) : setCaptcha(false);
            }}
          />

          <Button
            variant={"secondary"}
            className="mt-5 max-w-[300px]"
            disabled={!captcha}
            onClick={handleOnSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
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
