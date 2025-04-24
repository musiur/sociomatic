import { BrandCarousel } from "@/app/_utils/carousel";

const BrandsSection = () => {
  return (
    <section className="section space-y-[48px]">
      <h2 className="container h2 text-center mb-12">
        Trusted by 850+ Businesses Since 2019 <br className="hidden md:inline-block"/>
        with 500 plus fiver star real reviews
      </h2>
      <BrandCarousel />
    </section>
  );
};

export default BrandsSection;
