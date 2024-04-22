// import { InteractiveMarquee } from "@/components/framer/marquee/marquee";
"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import ServicesCTA from "@/components/molecule/services-cta";
import Tagline from "@/components/molecule/tagline";
import { Sparkle } from "lucide-react";

const Testimonials = () => {
  return (
    <div className="py-16 bg-muted">
      <div className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text="Testimonials" />
        <h2 className="h2 text-primary text-center">
          Checkout What Our
          <br />
          <span className="text-secondary relative">Customers</span>
          &nbsp;Have To Say
        </h2>
      </div>
      <div className="py-[48px] container">
        <div className="space-y-8">
          <div className="relative">
            <Swiper
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination, Navigation, Mousewheel, Keyboard, Autoplay]}
            >
              {TestimonialCardsData.map((item: any) => {
                return (
                  <SwiperSlide key={item.id} className="pt-4 pb-16 px-4">
                    <TestimonialCard details={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="flex justify-center">
            <ServicesCTA position="center" />
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
    <div className="inline-block min-w-[300px] shadow p-4 rounded-2xl space-y-[16px] border-2 border-white hover:border-secondary hover:scale-105 bg-white transition ease-in-out duration-500 hover:shadow-xl">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((item: number) => {
          return <Sparkle key={item} className="rotate-45" />;
        })}
      </div>
      <p>
        <i>{`"${testimonial}"`}</i>
      </p>
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
