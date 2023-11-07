import BlueGoogle from "@/components/assets/blue-google";
import Campaigns from "@/components/assets/campaigns";
import CodeCloud from "@/components/assets/code-cloud";
import Contents from "@/components/assets/contents";
import Feather from "@/components/assets/feather";
import GoogleAnalytics from "@/components/assets/google-analytics";
import PenTool from "@/components/assets/pen-tool";
import Shopify from "@/components/assets/shopify";
import Wordpress from "@/components/assets/wordpress";
import FeatureCard from "@/components/molecule/feature-card";
import LinkButton from "@/components/molecule/link-button";
import SectionHead from "@/components/molecule/section-head";
import HeroSection from "@/components/pages/home/herosection";

import ProjectIdea from "@/components/pages/home/project-idea-banner";

import Testimonial from "@/components/pages/home/testimonial";

const Home = () => {
  return (
    <main>
      <HeroSection
        H1={
          <>
            We Craft <span>Solution</span> on Demand to Go Online and Grow
            Business
          </>
        }
        P={
          <>
            Being digital <span>agency</span>, the sociomatic&nbsp;
            <span>specialized with A to Z</span> to help improving
            business&nbsp;
            <span>analytics</span>, software <span>development</span>,&nbsp;
            <span>campaigns</span>, and extensive <span>maintenance</span>
          </>
        }
        videoLink="https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ"
        brands={true}
      />
      <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
        <div className="container section flex flex-col large-gap">
          <SectionHead
            highlighter="Our Services"
            H2={<>Understanding Your Business</>}
            paragraphs={[
              <>
                We&apos;ll listen to <span>your goals</span> and complete a free
                audit to discover if we&apos;re a great fit to work with each
                other.
              </>,
            ]}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start large-gap">
            {FeaturesData.slice(0, 6).map((item: any) => {
              const { id, image, title, description, list, link } = item;
              return (
                <FeatureCard
                  key={id}
                  image={image}
                  title={title}
                  description={description}
                  list={list}
                  link={link}
                />
              );
            })}
          </div>
          <LinkButton />
        </div>
      </section>

      <ProjectIdea />


      <Testimonial />

    </main>
  );
};


export default Home;

export const FeaturesData = [
  {
    id: 1,
    image: <BlueGoogle />,
    title: "Google Paid Advertising",
    description: (
      <>
        Enhance Google platform ad strategies for effective{" "}
        <span>demand-driven</span> results.
      </>
    ),
    list: ["Google search PPC and display", "Google shopping", "YouTube Ads"],
    link: "/services/google-paid-ads",
  },
  {
    id: 2,
    image: <CodeCloud />,
    title: "Software Development",
    description: (
      <>
        We <span>craft quality software</span> for Mobile, Web, and Desktop,
        applications with embracing any challenge.
      </>
    ),
    list: [
      "We approach with MVP for SDLC",
      "Agile for project management",
      "MVC, Clean and other architectures",
    ],
    link: "/services/software-development",
  },
  {
    id: 3,
    image: <Campaigns />,
    title: "Social Media Paid Advertising",
    description: (
      <>
        We leverage data to boost your social media ad <span>ROI</span>{" "}
        and&nbsp;
        <span>increase</span> your revenue
      </>
    ),
    list: ["Facebook & Instagram Ads", "Meta Pixel", "Facebook Shopping Ads"],
    link: "/services/social-media-paid-ads",
  },
  {
    id: 4,
    image: <GoogleAnalytics />,
    title: "Data Analytics",
    description: (
      <>
        Obtain your <span>personalized</span> real-time dashboard for live
        performance updates
      </>
    ),
    list: [
      "Event & Target Setup",
      "User Behaviour",
      "Google Analytics",
      "Google Tag Manager",
      "Looker Studio",
    ],
    link: "/services/data-analytics",
  },
  {
    id: 5,
    image: <Wordpress />,
    title: "Wordpress Development",
    description: (
      <>
        Crafting <span>custom</span>, user-friendly websites using the power of
        WordPress
      </>
    ),
    list: [
      "Custom Design and Development",
      "Plugin Integration and Functionality",
      "Security and Maintenance",
    ],
    link: "/services/wordpress-development",
  },
  {
    id: 6,
    image: <Shopify />,
    title: "Shopify Store Development",
    description: (
      <>
        Crafting <span>high-converting</span> Shopify stores for your e-commerce
        success.
      </>
    ),
    list: [
      "Custom Store Design",
      "Product and Inventory Management",
      "Payment and Security Integration",
    ],
    link: "/services/shopify-store-development",
  },
  {
    id: 7,
    image: <PenTool />,
    title: "UI/UX & Graphic Design",
    description: (
      <>
        Crafting experiences that leave users spellbound and&nbsp;
        <span>corporate branding</span>
      </>
    ),
    list: ["Research on project", "Wireframe & prototype", "Responsive design"],
    link: "/services/shopify-store-development",
  },
  {
    id: 8,
    image: <Feather />,
    title: "Search Engine Optimization (SEO)",
    description: (
      <>
        Crafting <span>custom</span>, user-friendly websites using the power of
        WordPress
      </>
    ),
    list: [
      "Custom Design and Development",
      "Plugin Integration and Functionality",
      "Security and Maintenance",
    ],
    link: "/services/shopify-store-development",
  },
  {
    id: 9,
    image: <Contents />,
    title: "Content Development",
    description: (
      <>
        Crafting <span>high-converting</span> Shopify stores for your e-commerce
        success.
      </>
    ),
    list: [
      "Custom Store Design",
      "Product and Inventory Management",
      "Payment and Security Integration",
    ],
    link: "/services/shopify-store-development",
  },
];
