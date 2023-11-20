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
// import SendEmail from "@/lib/resend";
import Loader from "@/components/molecule/loader";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Building, MessageCircle, Phone } from "lucide-react";

const ContactUs = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(1);
  const [loading, setLoading] = useState(false);
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
  const [errors, setErrors] = useState<any>({});
  const [captcha, setCaptcha] = useState(false);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnSubmit = () => {
    setLoading(true);
    const validationErrors = validation();

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      try {
        // SendEmail(formData);
        toast({
          title: "Messange Sending",
          description: "Successful!",
        });
        setLoading(false);
        // router.refresh();
        setTimeout(() => {
          if (window) {
            window.location.reload();
          }
        }, 3000);
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Messange Sending",
          description: "Something went wrong!",
        });
      }
    } else {
      setErrors(validationErrors);
    }

    setLoading(false);
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
      info: "+24524352",
    },
    {
      id: 1,
      icon: <Building />,
      title: "Main Office",
      info: "Damac Tower by Paramount, Dubai, UAE",
    },
    {
      id: 2,
      icon: <MessageCircle />,
      title: "WhatsApp",
      info: "+91524352382",
    },
  ];
  return (
    <div className="bg-[url('/images/backgrounds/StarBackground.svg')] bg-cover bg-center">
      <div className="container section grid grid-cols-1 md:grid-cols-2 small-gap">
        <div className="flex flex-col bg-primary rounded-xl p-[25px] lg:p-[50px] large-gap">
          <div className="flex flex-col small-gap">
            <h1 className="text-white">Contact Us</h1>
            <p className="text-secondarymuted">
              Sit sit dolore ipsum culpa deserunt sint id. Consectetur aute
              ullamco ut in Lorem deserunt reprehenderit. Dolore qui quis
              officia irure culpa et ullamco laborum fugiat occaecat. Irure
              excepteur amet cupidatat commodo officia id nulla pariatur
            </p>
          </div>
          {ContactInfo.map((item: any) => {
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 gap-[10px] [&>svg]:stroke-white"
              >
                {item.icon}
                <h3 className="text-[16px] lg:text-[20px] font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-white">{item.info}</p>
              </div>
            );
          })}
        </div>
        <div className="mx-auto pt-[50px] grid grid-cols-1 large-gap bg-white">
          <div className="flex flex-col small-gap">
            <h4 className="text-xl md:text-2xl font-bold text-primary">
              Get Touch With Us
            </h4>
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
          </div>
          <div className="flex flex-col small-gap">
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
              {loading ? <Loader /> : "Submit"}
            </Button>
          </div>
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

{
  /* <div className="-mt-[20px] md:-mt-[25px]">
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
      </div> */
}
