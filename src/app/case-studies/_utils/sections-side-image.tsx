import MagnifierImage from "@/components/molecule/magnifier-image";
// import Image from "next/image";

const SectionSideImage = ({ image }: { image: string }) => {
  return (
    <div className="p-4">
      <MagnifierImage
        src={image}
        alt=""
        width={500}
        height={500}
        className="max-w-[450px] max-h-[500px] rounded-[40px]"
      />
    </div>
  );
};

export default SectionSideImage;
