import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const OurReview = () => {
  return (
    <section className="bg-gradient-to-tr from-primary to-secondary [&>*]:text-white">
      <div className="container section space-y-[48px]">
        <div className="max-w-[640px] mx-auto [&>*]:text-center space-y-[32px]">
          <h2>Trust That We Gain</h2>
          <p>
            With our easy-to-use solutions, start a smooth Google Ads experience
            to streamline the procedure for newbies to guarantee peak
            performance - the best Return On Investment (ROI)
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-16">
          <div className="max-w-[500px] space-y-[32px]">
            <p className="text-lg md:text-xl xl:text-2xl text-right italic">
              &quot;&nbsp; Being delivered in a unique pill shape, this shaker
              eradicates supplement accumulation, creating a dynamic environment
              for a superior mix that doesn&apos;t require a mixing ball or mesh
              grid. The simplicity of such shakers is what makes ShareSphere
              unique in the industry. No corners means no smell, less and easier
              cleaning, and completely no wastage&nbsp;&quot;
            </p>
            <div className="flex items-center justify-end gap-4 [&>*]:text-right">
              <div className="space-y-1">
                <Link
                  href="/"
                  className="hover:underline font-semibold text-lg md:text-xl"
                >
                  Hanna Sillitoe
                </Link>
                <p>Skin Healing Expert, BBC Dragon&apos;s Den Brand</p>
              </div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="max-w-[500px] h-auto p-4 rounded-lg bg-white/90 backdrop-blur-xl">
            <Image
              src="https://utfs.io/f/915ff318-de2b-4494-b3df-73a78967133d-9fmvb.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-auto my-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurReview;
