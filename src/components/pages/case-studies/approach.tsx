import Image from "next/image";
import { ReactElement } from "react";
import FeatureCartIconText from "./feature-card-icon-text";

const Approach = () => {
  const approachesData = [
    {
      id: 1,
      text: (
        <>
          Being delivered in a unique pill shape, this shaker eradicates
          supplement accumulation, creating a dynamic environment.
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          The simplicity of such shakers is what makes ShareSphere unique in the
          industry. No corners means no smell.
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          Being inspired by the idea of revolutionising the shaker bottle market
          and creating products that improve health.
        </>
      ),
    },
  ];
  return (
    <section className="container section space-y-[48px]">
      <div className="max-w-[640px] mx-auto [&>*]:text-center space-y-[32px]">
        <h2>Our Strategic Approaches</h2>
        <p>
          With our easy-to-use solutions, start a smooth Google Ads experience
          to streamline the procedure for newbies to guarantee peak performance
          - the best Return On Investment (ROI)
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-16">
        <div className="max-w-[580px] space-y-[32px]">
          {approachesData.map((para: { id: number; text: ReactElement }) => {
            const { id, text } = para;
            return (
              <FeatureCartIconText
                key={id}
                id={id}
                text={text}
                alignment={id % 2 === 0 ? "right" : "left"}
              />
            );
          })}
        </div>
        <div>
          <Image
            src="https://utfs.io/f/915ff318-de2b-4494-b3df-73a78967133d-9fmvb.png"
            alt=""
            width={1000}
            height={1000}
            className="max-w-[500px] h-auto my-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Approach;
