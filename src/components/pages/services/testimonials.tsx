import LunarCircle from "@/components/assets/lunar-circle";
import Springle from "@/components/assets/springle";
import { InteractiveMarquee } from "@/components/framer/marquee/marquee";
import Tagline from "@/components/molecule/tagline";
import { Button } from "@/components/ui/button";
import { Sparkle, StarIcon } from "lucide-react";

const Testimonials = () => {
  const TestimonialCardsData = [
    {
      id: 1,
      testimonial:
        "It's intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
      customer: {
        name: "John Smith",
        company: "Marketing Manager @RabbitQ",
        image: "",
        rating: 5,
      },
    },
    {
      id: 2,
      testimonial:
        "It's intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
      customer: {
        name: "John Smith",
        company: "Marketing Manager @RabbitQ",
        image: "",
        rating: 5,
      },
    },
    {
      id: 3,
      testimonial:
        "It's intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
      customer: {
        name: "John Smith",
        company: "Marketing Manager @RabbitQ",
        image: "",
        rating: 5,
      },
    },
    {
      id: 4,
      testimonial:
        "It's intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
      customer: {
        name: "John Smith",
        company: "Marketing Manager @RabbitQ",
        image: "",
        rating: 5,
      },
    },
    {
      id: 5,
      testimonial:
        "It's intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
      customer: {
        name: "John Smith",
        company: "Marketing Manager @RabbitQ",
        image: "",
        rating: 5,
      },
    },
    {
      id: 6,
      testimonial:
        "It's intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
      customer: {
        name: "John Smith",
        company: "Marketing Manager @RabbitQ",
        image: "",
        rating: 5,
      },
    },
    {
      id: 7,
      testimonial:
        "It's intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
      customer: {
        name: "John Smith",
        company: "Marketing Manager @RabbitQ",
        image: "",
        rating: 5,
      },
    },
    {
      id: 8,
      testimonial:
        "It's intuitive, functional, easy-to-setup and presents content in an interactive and interesting way.",
      customer: {
        name: "John Smith",
        company: "Marketing Manager @RabbitQ",
        image: "",
        rating: 5,
      },
    },
  ];
  return (
    <div className="py-16">
      <div className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text="Testimonials" />
        <h2 className="h2 text-primary text-center">
          Checkout what our
          <br />
          <span className="text-secondary relative">
            customers
            {/* <Springle className="absolute bottom-[-16px] left-0 z-[-1] w-full" /> */}
          </span>
          &nbsp;have to say
        </h2>
      </div>
      <div className="py-[48px]">
        <div className="flex flex-col gap-[48px]">
          <div className="relative">
            <div className="absolute top-0 left-0 w-[5%] h-full z-[2] bg-gradient-to-r from-white to-white/0" />
            <div className="absolute top-0 right-0 w-[5%] h-full z-[2] bg-gradient-to-l from-white to-white/0" />
            <div className="pt-[32px] space-y-8">
              <InteractiveMarquee speed={1}>
                <div className="flex items-center gap-8">
                  {TestimonialCardsData.map((item: any) => {
                    return item.id % 2 !== 0 ? (
                      <TestimonialCard key={item.id} details={item} />
                    ) : null;
                  })}
                </div>
              </InteractiveMarquee>
              <InteractiveMarquee>
                <div className="flex items-center gap-8">
                  {TestimonialCardsData.map((item: any) => {
                    return item.id % 2 === 0 ? (
                      <TestimonialCard key={item.id} details={item} />
                    ) : null;
                  })}
                </div>
              </InteractiveMarquee>
            </div>
          </div>
          <div className="container grid grid-cols-1 sm:flex flex-wrap items-center justify-center gap-[12px]">
            <Button variant="secondary">Get Started right away</Button>
            <Button variant="outline">Get a free consultation</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

export const TestimonialCard = ({
  details,
}: {
  details: {
    id: number;
    testimonial: string;
    customer: { name: string; company: string; image: string; rating: number };
  };
}) => {
  const { testimonial, customer } = details;
  const { name, company, image, rating } = customer;
  return (
    <div className="inline-block min-w-[300px] max-w-[450px] shadow p-4 rounded-2xl space-y-[16px]">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((item: number) => {
          return <Sparkle key={item} className="rotate-45" />;
        })}
      </div>
      <p><i>{`"${testimonial}"`}</i></p>
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
};
