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
    title: "Quality & Experience",
    details: (
      <>
        Our skill <span>qualities</span> and experience are a strong match for
        the job requirements.Which means we are <span>ready made</span> for this
        job.
      </>
    ),
    image: <Quality />,
  },
  {
    id: 2,
    title: "Commercial Awareness",
    details: (
      <>
        We are commercially <span>aware</span>.We will always work hard to help
        you <span>increase sales</span> whilst at the same time helping you to
        save money by being <span>frugal</span> with our resources and supplies.
      </>
    ),
    image: <Dollar />,
  },
  {
    id: 3,
    title: "Ownership",
    details: (
      <>
        We always take ownership of our <span>professional</span> development.
        We will always improve and grow in the role so that you see it{" "}
        <span>sustained.</span>
      </>
    ),
    image: <Centralized />,
  },
];
