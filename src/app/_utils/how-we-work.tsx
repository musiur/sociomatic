import I from "@/components/assets/I";
import II from "@/components/assets/II";
import III from "@/components/assets/III";
import ProjectHandover from "@/components/assets/project-handover";
import Requirements from "@/components/assets/requirements";
import ResearchAndConecptualization from "@/components/assets/research-and-conecptualization";
import SectionHead from "@/components/molecule/section-head";
import WorkCard from "@/components/molecule/work-card";
import { ReactElement } from "react";

const HowWeWork = () => {
  return (
    <section className="bg-[url('/images/backgrounds/StarBackground.svg')] bg-center bg-cover">
      <div className="container section">
        <SectionHead
          highlighter="How we work?"
          H2={<>Getting started with us</>}
          paragraphs={[
            <>
              We&apos;ll listen to <span> your goals</span> and complete a free
              audit to discover if we&apos;re a great fit to work with each
              other.
            </>,
          ]}
        />

        <div className="flex large-gap flex-col pt-[50px]">
          {WorkProcessStepsData.map(
            (item: {
              id: number;
              numberImage: ReactElement;
              image: ReactElement;
              title: string;
              description: ReactElement;
            }) => {
              const { id, numberImage, image, title, description } = item;
              return (
                <WorkCard
                  key={id}
                  id={id}
                  numberImage={numberImage}
                  image={image}
                  title={title}
                  description={description}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};
export default HowWeWork;

const WorkProcessStepsData = [
  {
    id: 1,
    numberImage: (
      <div className="min-w-[59px]">
        <I />
      </div>
    ),
    image: <Requirements />,
    title: "Goal Setting & Free Audit",
    description: (
      <>
        We start by understanding your business goals—whether it&apos;s
        launching high-ROI ad campaigns, optimizing your website, or tracking
        performance with precision. Our free audit identifies the best
        strategies for success.
      </>
    ),
  },
  {
    id: 2,
    numberImage: (
      <div className="min-w-[117px]">
        <II />
      </div>
    ),
    image: <ResearchAndConecptualization />,
    title: "Strategy Development",
    description: (
      <>
        Using data-driven insights, we craft tailored solutions. From creating
        engaging ad campaigns and conversion-focused websites to setting up
        advanced analytics, we design strategies to maximize your results.
      </>
    ),
  },
  {
    id: 3,
    numberImage: (
      <div className="min-w-[175px]">
        <III />
      </div>
    ),
    image: <ProjectHandover />,
    title: "Implementation & Handover",
    description: (
      <>
        We deliver projects seamlessly—whether it&apos;s a fully functional
        website, ad campaign dashboard, or actionable analytics report. We also
        go the extra mile with ongoing support to ensure your continued success.
      </>
    ),
  },
];
