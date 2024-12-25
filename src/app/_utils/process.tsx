import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import Centralized from "@/components/assets/centralize";
import Dollar from "@/components/assets/dollar";
import Quality from "@/components/assets/quality";
import ProcessCard from "@/components/molecule/process-card";
import SectionHead from "@/components/molecule/section-head";
import { ReactElement } from "react";

const OurProcess = () => {
  return (
    <section className="bg-muted">
      <div className="bg-[url('/images/backgrounds/ProcessBackgrid.svg')] bg-center bg-cover">
        <div className="container section">
          <SectionHead
            highlighter="Our Process"
            H2={<>Why should you hire us?</>}
            paragraphs={[
              <>
                You Should hire us for <span>3 reasons</span>
              </>,
            ]}
          />
          <ANIM__FadeInOutOnScroll className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  content-center gap-[34px] pt-[50px]  sm:[&>*:last-child]:col-span-2 lg:[&>*:last-child]:col-span-1">
            {ProcessData.map(
              (item: {
                id: number;
                title: string;
                details: ReactElement;
                image: ReactElement;
              }) => {
                const { id, title, details, image } = item;
                return (
                  <div key={id}>
                    <ProcessCard
                      title={title}
                      details={details}
                      image={image}
                    />
                  </div>
                );
              }
            )}
          </ANIM__FadeInOutOnScroll>
        </div>
      </div>
    </section>
  );
};
export default OurProcess;

const ProcessData = [
  {
    id: 1,
    title: "Proven Expertise Worldwide",
    details: (
      <>
        Trusted by clients across the globe, we&apos;ve delivered 700+
        successful projects with 500+ glowing feedbacks. Our results-driven
        approach ensures your business gets the growth it deserves.
      </>
    ),
    image: <Quality />,
  },
  {
    id: 2,
    title: "Unmatched ROI Performance",
    details: (
      <>
        Our tailored strategies consistently drive 3x-4x ROI. From scaling
        sales/leads to optimizing costs, we deliver real growth backed by
        data.We build websites that not only captivate your audience but also
        convert visitors into loyal customers, ensuring measurable growth for
        your business.
      </>
    ),
    image: <Dollar />,
  },
  {
    id: 3,
    title: "Your Dedicated Growth Partner",
    details: (
      <>
        We&apos;re not just service providers; we&apos;re partners in your
        success. Count on us for personalized solutions, ongoing support, and a
        relentless focus on scaling your business
      </>
    ),
    image: <Centralized />,
  },
];
