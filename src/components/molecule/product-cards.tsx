import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const ProductCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 small-gap">
      {WordpressProducts.map((col: any, index: number) => {
        return (
          <div key={index} className="grid grid-cols-1 large-gap">
            {col.map((item: any) => {
              const { id, title, description, image, link } = item;
              const background = `bg-[url('/images/projects/${image}')]`;
              return (
                <div key={id} className="flex flex-col gap-4 group">
                  {image ? (
                    <div className="overflow-hidden rounded-[40px]">
                      <div
                        className={`${background} bg-cover bg-center group-hover:scale-[110%] transition ease-linear
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
                    <Link href={link} passHref={true} target="_blank">
                      <Button variant={"outline"} className="group gap-[8px]">
                        Explore&nbsp;
                        <MoveRight className="stroke-[1.3px] w-[16px] stroke-primary group-hover:stroke-secondary" />
                      </Button>
                    </Link>
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
      image: "wordpress/project.png",
      title: "WellDev",
      description:
        "Incididunt minim id dolor et sint esse. Tempor occaecat ex dolore nisi enim nulla labore dolore. In laboris cillum et pariatur ut fugiat dolor ad id occaecat. Et reprehenderit      adipisicing non aliquip.",
      link: "",
    },
    {
      id: 2,
      image: "wordpress/project.png",
      title: "WellDev",
      description:
        "Incididunt minim id dolor et sint esse. Tempor occaecat ex dolore nisi enim nulla labore dolore. In laboris cillum et pariatur ut fugiat dolor ad id occaecat. Et reprehenderit      adipisicing non aliquip.",
      link: "",
    },
  ],
  [
    {
      id: 1,
      image: "wordpress/project.png",
      title: "WellDev",
      description:
        "Incididunt minim id dolor et sint esse. Tempor occaecat ex dolore nisi enim nulla labore dolore. In laboris cillum et pariatur ut fugiat dolor ad id occaecat. Et reprehenderit      adipisicing non aliquip.",
      link: "",
    },
    {
      id: 2,
      image: "wordpress/project.png",
      title: "WellDev",
      description:
        "Incididunt minim id dolor et sint esse. Tempor occaecat ex dolore nisi enim nulla labore dolore. In laboris cillum et pariatur ut fugiat dolor ad id occaecat. Et reprehenderit      adipisicing non aliquip.",
      link: "",
    },
  ],
];
