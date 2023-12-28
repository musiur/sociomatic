"use client";

import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import GetAQuote from "./get-a-quote";

const ProductCards = ({ params }: { params: { slug: string } }) => {
  let data: any = WordpressProducts;
  if (params.slug.includes("wordpress-development")) {
    data = WordpressProducts;
  } else if (params.slug.includes("custom-web-development")) {
    data = CustomWebProducts;
  } else if (params.slug.includes("software-development")) {
    data = SoftwareProducts;
  } else if (params.slug.includes("ui-ux-and-graphic-design")) {
    data = UiUxProducts;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 small-gap">
      {data.map((col: any, index: number) => {
        return (
          <div key={index} className="grid grid-cols-1 large-gap">
            {col.map((item: any) => {
              const { id, title, description, image, link } = item;
              return (
                <div key={id} className="flex flex-col gap-4 group">
                  {image ? (
                    <div className="overflow-hidden rounded-[40px] border border-secondarymuted">
                      <div
                        className={`${image} bg-cover bg-center group-hover:scale-[110%] transition ease-linear
                      ${
                        (index === 1 && item.id === 1) ||
                        (index === 0 && item.id === 2)
                          ? "min-h-[400px]"
                          : "min-h-[400px] md:min-h-[500px]"
                      }
                      `}
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-col gap-4">
                    <h5 className="text-[16px] lg:text-[20px] font-semibold text-primary">
                      {title}
                    </h5>
                    <p>{description}</p>
                    <div className="flex items-center small-gap">
                      <GetAQuote />
                      {!params.slug.includes("ui-ux-and-graphic-design") ? (
                        <Link href={link} passHref={true} target="_blank">
                          <Button
                            variant={"outline"}
                            className="group gap-[8px]"
                          >
                            Explore&nbsp;
                            <MoveRight className="stroke-[1.3px] w-[16px] stroke-primary group-hover:stroke-secondary" />
                          </Button>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;

const WordpressProducts = [
  [
    {
      id: 1,
      image: "bg-[url('/images/projects/wordpress/pest.png')]",
      title: "Erase Pest Control Australia",
      description:
        "Erase Pest Control's website is a one-stop solution for pest management services in Australia. The site showcases their expertise, services, and commitment to a pest-free environment.",
      link: "https://www.erasepestcontrol.com.au/?utm_source=google&utm_medium=organic",
    },
    {
      id: 2,
      image: "bg-[url('/images/projects/wordpress/health.png')]",
      title: "Sante Family Dental Canada",
      description:
        "Sante Family Dental's website is a friendly digital space reflecting their dental care services in Canada. The site emphasizes family-friendly dentistry and highlights its commitment to oral health.",
      link: "https://santefamilydental.ca/?utm_source=google&utm_medium=organic",
    },
  ],
  [
    {
      id: 1,
      image: "bg-[url('/images/projects/wordpress/furniture.png')]",
      title: "John Sankey UK",
      description:
        "John Sankey's website is a virtual showcase of bespoke furniture craftsmanship in the UK. The site captures the essence of its high-quality, handcrafted furniture, portraying a blend of tradition and contemporary design.",
      link: "https://www.johnsankey.co.uk/?utm_source=google&utm_medium=organic",
    },
    {
      id: 2,
      image: "bg-[url('/images/projects/wordpress/fish.png')]",
      title: "One Fisherman UK",
      description:
        "One Fisherman's website immerses visitors in the UK fishing world. From fishing gear to tips and insights, the site is a haven for fishing enthusiasts, providing valuable information and a sense of community.",
      link: "https://onefisherman.co.uk/?utm_source=google&utm_medium=organic",
    },
  ],
];
const UiUxProducts = [
  [
    {
      id: 1,
      image: "bg-[url('/images/projects/uiux/uiuxDashboard.png')]",
      title: "Dashboard Design",
      description:
        "Comprehensive Dashboard UI design with multi function of any sorts of software field e.g. Ecommerce, Fintech, Edtech etc.",
      link: "",
    },
    {
      id: 2,
      image: "bg-[url('/images/projects/uiux/uiuxDoyos.png')]",
      title: "Doyos",
      description:
        "A Robust UI and UX for a Trading Company having several landing pages and feature pages ensuring customer centric design principles",
      link: "",
    },
  ],
  [
    {
      id: 1,
      image: "bg-[url('/images/projects/uiux/uiuxSociomatic.png')]",
      title: "Sociomatic",
      description:
        "This is the site where you are right now designed with care and built with keen details to the minimalistic design approach.",
      link: "",
    },
    {
      id: 2,
      image: "bg-[url('/images/projects/uiux/uiuxEssential.png')]",
      title: "Essential",
      description:
        "An API providing platform landing page with modern UI and UX design",
      link: "",
    },
  ],
];
const CustomWebProducts = [
  [
    {
      id: 1,
      image: "bg-[url('/images/projects/custom-web/easypay.png')]",
      title: "Doyos",
      description:
        "Doyos provide the proper trading environment to the clients. Doyos offer high quality order execution, no commission on deposits and withdrawals and wide selection of instruments as we believe that these are the base of the best trading strategies.",
      link: "https://doyos.vercel.app",
    },
    {
      id: 2,
      image: "bg-[url('/images/projects/custom-web/houses.png')]",
      title: "Emaar Decor",
      description:
        "Step into a world of refined luxury with EmaarDecor! Elevate your space with our exquisite range - from chic curtains to lush artificial grass, plush sofas, dazzling lights, and more. Our design expertise extends from villas to events. Redefine your style with EmaarDecor, where every detail tells a captivating story!",
      link: "https://emaardecor.vercel.app",
    },
  ],
  [
    {
      id: 1,
      image: "bg-[url('/images/projects/custom-web/laundrycare.png')]",
      title: "LaundryCare",
      description:
        "We, Laundry Care, dedicated group of people working for goodness and make easier to manage laundry services in Bashundhara Residential Area. Any shop can join us to provide services and anybody can be a Rider Partner with us. We are making a HUB that will connect all the Laundry services provider around the Residential Area.",
      link: "https://laundrycare.vercel.app/en/user",
    },
    {
      id: 2,
      image: "bg-[url('/images/projects/custom-web/wsl.png')]",
      title: "1link",
      description:
        "The one link your readers will need to find you and your books. Showcase your books on a page with the colors and style you want.",
      link: "https://1linkf.vercel.app",
    },
  ],
];
const SoftwareProducts = [
  [
    {
      id: 1,
      image: "bg-[url('/images/projects/custom-web/easypay.png')]",
      title: "Doyos",
      description:
        "Doyos provide the proper trading environment to the clients. Doyos offer high quality order execution, no commission on deposits and withdrawals and wide selection of instruments as we believe that these are the base of the best trading strategies.",
      link: "https://doyos.vercel.app",
    },
    {
      id: 2,
      image: "bg-[url('/images/projects/custom-web/houses.png')]",
      title: "Emaar Decor",
      description:
        "Step into a world of refined luxury with EmaarDecor! Elevate your space with our exquisite range - from chic curtains to lush artificial grass, plush sofas, dazzling lights, and more. Our design expertise extends from villas to events. Redefine your style with EmaarDecor, where every detail tells a captivating story!",
      link: "https://emaardecor.vercel.app",
    },
  ],
  [
    {
      id: 1,
      image: "bg-[url('/images/projects/custom-web/laundrycare.png')]",
      title: "LaundryCare",
      description:
        "We, Laundry Care, dedicated group of people working for goodness and make easier to manage laundry services in Bashundhara Residential Area. Any shop can join us to provide services and anybody can be a Rider Partner with us. We are making a HUB that will connect all the Laundry services provider around the Residential Area.",
      link: "https://laundrycare.vercel.app/en/user",
    },
    {
      id: 2,
      image: "bg-[url('/images/projects/custom-web/wsl.png')]",
      title: "1link",
      description:
        "The one link your readers will need to find you and your books. Showcase your books on a page with the colors and style you want.",
      link: "https://1linkf.vercel.app",
    },
  ],
];
