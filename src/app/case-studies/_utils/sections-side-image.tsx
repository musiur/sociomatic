import Image from "next/image";

const SectionSideImage = ({ image }: { image: string }) => {
  return (
    <div className="p-4">
      <Image
        src={image}
        alt=""
        width={1000}
        height={1000}
        className="max-w-[280px] ms:max-w-[350px] lg:max-w-[450px] h-auto m-auto"
      />
    </div>
  );
};

export default SectionSideImage;
