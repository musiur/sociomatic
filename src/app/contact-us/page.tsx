"use client";

import SectionHead from "@/components/molecule/section-head";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Services = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <div>
      <div className="section border-b border-secondarymuted">
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
                className={`px-4 py-3 md:px-8 md:py-5 border  font-bold cursor-pointer ${
                  index + 1 === currentTab
                    ? "bg-secondary text-white hover:opacity-75 border-secondary "
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
      <div className="container section grid grid-cols-1 md:grid-cols-2 small-gap">
        <div className="grid grid-cols-1 small-gap">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="name" id="name" placeholder="Name" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              type="companyName"
              id="companyName"
              placeholder="Company Name"
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="companyUrl">Company URL</Label>
            <Input
              type="companyUrl"
              id="companyUrl"
              placeholder="Company URL"
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
