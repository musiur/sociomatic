import SectionHead from "@/components/molecule/section-head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BadgeDollarSign,
  FastForward,
  HelpCircle,
  MessageCircle,
  RocketIcon,
  Stars,
} from "lucide-react";

const AboutUS = () => {
  const NumberCards = [
    {
      id: 1,
      numbers: "400+",
      title: "Projects Completed",
      desc: <>We&apos;ve helped build over 400 projects with great companies</>,
    },
    {
      id: 2,
      numbers: "600%",
      title: "Return on Investment",
      desc: <>We&apos;ve helped build over 400 projects with great companies</>,
    },
    {
      id: 3,
      numbers: "10K",
      title: "Projects Completed",
      desc: <>We&apos;ve helped build over 400 projects with great companies</>,
    },
  ];
  const Values = [
    {
      id: 1,
      icon: <MessageCircle />,
      title: "Share team inboxes",
      desc: (
        <>
          Ea excepteur laborum irure consectetur cillum ad sint velit pariatur.
          Ut laboris eiusmod exercitation qui elit cupidatat elit officia
          eiusmod nulla. Eu ad cillum velit nulla voluptate laboris do sunt
          amet. Ut eu voluptate consequat cillum proident irure culpa minim et.
        </>
      ),
    },
    {
      id: 2,
      icon: <BadgeDollarSign />,
      title: "Return on Investment",
      desc: (
        <>
          Ea excepteur laborum irure consectetur cillum ad sint velit pariatur.
          Ut laboris eiusmod exercitation qui elit cupidatat elit officia
          eiusmod nulla. Eu ad cillum velit nulla voluptate laboris do sunt
          amet. Ut eu voluptate consequat cillum proident irure culpa minim et.
        </>
      ),
    },
    {
      id: 3,
      icon: <Stars />,
      title: "Projects Completed",
      desc: (
        <>
          Ea excepteur laborum irure consectetur cillum ad sint velit pariatur.
          Ut laboris eiusmod exercitation qui elit cupidatat elit officia
          eiusmod nulla. Eu ad cillum velit nulla voluptate laboris do sunt
          amet. Ut eu voluptate consequat cillum proident irure culpa minim et.
        </>
      ),
    },
    {
      id: 4,
      icon: <RocketIcon />,
      title: "Share team inboxes",
      desc: (
        <>
          Ea excepteur laborum irure consectetur cillum ad sint velit pariatur.
          Ut laboris eiusmod exercitation qui elit cupidatat elit officia
          eiusmod nulla. Eu ad cillum velit nulla voluptate laboris do sunt
          amet. Ut eu voluptate consequat cillum proident irure culpa minim et.
        </>
      ),
    },
    {
      id: 5,
      icon: <HelpCircle />,
      title: "Return on Investment",
      desc: (
        <>
          Ea excepteur laborum irure consectetur cillum ad sint velit pariatur.
          Ut laboris eiusmod exercitation qui elit cupidatat elit officia
          eiusmod nulla. Eu ad cillum velit nulla voluptate laboris do sunt
          amet. Ut eu voluptate consequat cillum proident irure culpa minim et.
        </>
      ),
    },
    {
      id: 6,
      icon: <FastForward />,
      title: "Projects Completed",
      desc: (
        <>
          Ea excepteur laborum irure consectetur cillum ad sint velit pariatur.
          Ut laboris eiusmod exercitation qui elit cupidatat elit officia
          eiusmod nulla. Eu ad cillum velit nulla voluptate laboris do sunt
          amet. Ut eu voluptate consequat cillum proident irure culpa minim et.
        </>
      ),
    },
  ];
  return (
    <>
      <section className="bg-muted">
        <div className="bg-[url('/images/backgrounds/WhiteGrid.svg')] bg-cover bg-center">
          <div className="container section flex flex-col large-gap">
            <SectionHead
              highlighter="About us"
              H2={<>We Do Things Differently</>}
              paragraphs={[
                <>
                  We focus on the details of everything we do. All to help
                  businesses around the world focus on what&apos;s most
                  important to them. We take pride in this.
                </>,
              ]}
            />
            <div className="w-full bg-[url('/images/pages/about-us/about.jpg')] bg-center bg-cover grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 large-gap p-[25px] md:p-[50px] rounded-[10px]">
              {NumberCards.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className={`backdrop-blur-lg bg-white/30 border border-secondarymuted rounded-[10px] px-4 py-8 flex flex-col small-gap text-center items-center justify-center ${
                      item.id === 3
                        ? "col-span-1 sm:col-span-2 lg:col-span-1"
                        : "col-span-1"
                    }`}
                  >
                    <span className="text-6xl font-bold text-white">
                      {item.numbers}
                    </span>
                    <h3 className="text-white text-[16px] md:text-[20px] font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-white">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="section flex flex-col large-gap bg-[url('/images/backgrounds/StarBackground.svg')]">
        <SectionHead
          highlighter="Our Values"
          H2={<>We&apos;re an ambitious and smart team with a shared mission</>}
          paragraphs={[
            <>Our shared values keep us connected and guide us as one team</>,
          ]}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 large-gap container">
          {Values.map((item: any) => {
            return (
              <div
                key={item.id}
                className={`flex flex-col small-gap text-center items-center justify-center ${
                  item.id % 3 === 0 ? "col-span-1 sm:col-span-2 " : "col-span-1"
                } bg-white/5 backdrop-blur border rounded-[10px] border-secondarymuted  hover:shadow-lg p-[25px] transition ease-in-out duration-750`}
              >
                <div className="[&>svg]:stroke-secondary border border-secondary border-dashed rounded inline-block mx-auto p-3">{item.icon}</div>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-primary">
          <div className="container section flex flex-col md:flex-row justify-between large-gap">
            <div className="flex flex-col small-gap">
              <h2 className="text-muted">Join Our Newsletter</h2>
              <p className="text-muted">We&apos;ll send you a nice letter once per week. No spam.</p>
            </div>
            <div className="flex flex-col small-gap min-w-[300px]">
              <Input placeholder="Enter your email"/>
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
      </section>
    </>
  );
};

export default AboutUS;
