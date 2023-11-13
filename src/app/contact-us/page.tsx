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

const ContactUs = () => {
  const [currentTab, setCurrentTab] = useState(1);
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
      <div className="-mt-[30px]">
        <ul className="flex items-center justify-center">
          {["One Time", "6 Months", "1 Year"].map((item, index) => {
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
      <div className="container section grid grid-cols-1 md:grid-cols-2 large-gap">
        <div className="flex flex-col small-gap">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="name" id="name" placeholder="Name" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              type="companyName"
              id="companyName"
              placeholder="Company Name"
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="companyUrl">Company URL</Label>
            <Input
              type="companyUrl"
              id="companyUrl"
              placeholder="Company URL"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message">Probable budget range</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="$0-500" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="$0-500">$0-500</SelectItem>
                <SelectItem value="$501-999">$501-999</SelectItem>
                <SelectItem value="$1000+">$1000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col small-gap">
          <Label htmlFor="message">Services you are interested on</Label>
          <ul className="grid grid-cols-2 gap-1.5">
            {ServicesList.map((item: any) => {
              return (
                <li key={item.id} className="flex items-center space-x-2">
                  <Checkbox id={item.name} />
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

          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
          {process.env.siteKey ? (
            <ReCAPTCHA
              sitekey={process.env.siteKey}
              onChange={(e: any) => console.log(e)}
            />
          ) : null}

          <Button variant={"secondary"} className="mt-5">
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
