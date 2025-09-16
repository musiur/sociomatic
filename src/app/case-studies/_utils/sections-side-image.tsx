import { ImageZoom } from "@/components/molecule/image-zoom";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SectionSideImage = ({ image }: { image: string }) => {
  return (
    <ImageZoom
      backdropClassName={cn(
        '[&_[data-rmiz-modal-overlay="visible"]]:bg-black/80'
      )}
    >
      <Image
        alt="Placeholder image"
        className="h-auto w-96 rounded-xl md:rounded-2xl overflow-hidden"
        height={800}
        src={image}
        width={1200}
      />
    </ImageZoom>
  );
};

export default SectionSideImage;
