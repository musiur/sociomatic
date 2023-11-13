import HeroSection from "@/components/pages/home/herosection";
import Link from "next/link";

const CaseStudies = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <HeroSection
        H1={
          <>
            We Craft <span className="text-secondary">Solution</span> on Demand
            to Go Online and Grow Business
          </>
        }
        P={
          <>
            Being digital <span>agency</span>, the sociomatic
            <span>specialized with A to Z</span> to help improving business
            <span>analytics</span>, software <span>development</span>,
            <span>campaigns</span>, and extensive <span>maintenance</span>
          </>
        }
        videoLink="https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ"
        brands={false}
        background="HeroBackground"
      />
      <section className="section grid grid-cols-1 large-gap">
        <div className="max-w-[600px] mx-auto px-5 flex flex-col small-gap items-center justify-center text-center">
          <h4 className="text-[16px] lg:text-[20px] font-semibold text-secondary">
            Case Studies
          </h4>
          <h2 className="text-primary">
            Let the <span className="text-secondary">Numbers</span> <br /> Do
            the Talking.
          </h2>
          <p className="">
            As you brows through the case studies, you will understand that we
            don&apos;t require a “budget”, there is no “expense” as such. We are
            revenue and profit generators, so the sooner you start working with
            us, the faster you will get ahead of your competition.
          </p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 large-gap">
          {[1, 2, 3, 4].map((item) => {
            return (
              <div
                key={item}
                className="rounded-[10px] border border-secondary-muted hover:border-secondary bg-white/5 backdrop-blur-[8px] hover:backdrop-blur-[8px] w-full shadow-[0_4px_25px_0_rgba(89,86,255,0.05)] transition ease-in-out duration-500 overflow-hidden"
              >
                <div className="bg-[url('/images/pages/case-studies/image1.jpg')] min-h-[300px] w-full bg-cover bg-center"></div>
                <div className="flex flex-col items-start justify-start small-gap px-[25px] py-[50px]">
                  <ul className="flex flex-wrap items-center justify-start gap-[10px]">
                    {[
                      "Ecommerce",
                      "Entertainment",
                      "Digital Marketing",
                      "EdTech",
                      "FinTech",
                    ].map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="p-3 py-1 rounded-full bg-muted text-secondary font-medium text-[12px] md:text-[14px] lg:text-[16px]"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                  <h4 className="font-bold text-primary text-[16px] md:text-[20px]">
                    Sit deserunt id ex ipsum ea labore non enim officia eiusmod
                  </h4>
                  <p className="[&>span]:font-medium [&>span]:text-primary">
                    Sit mollit esse occaecat fugiat ea aliqua do sint consequat
                    ea nulla aliqua. Amet sunt laborum quis non irure id labore
                    magna consectetur do pariatur elit in magna.
                  </p>
                  <div className="w-full flex items-center justify-between small-gap pt-[25px] border-t">
                    <p className="text-primary text-xl md:text-2xl font-bold">
                      26X Revenue
                    </p>
                    <p className="text-primary text-xl md:text-2xl font-bold">
                      -87% CPA
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
