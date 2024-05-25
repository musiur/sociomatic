import CoreBenefits from "@/components/pages/services/core-benefits";
import Confetti from "../_utils/confetti";

const Page = () => {
  return (
    <div className="container section flex flex-col items-center justify-center gap-8">
      <div className="px-8 py-4 rounded-md bg-secondary text-white font-bold inline-block mx-auto text-2xl md:text-3xl lg:text-4xl">
        Congratulations!
      </div>
      <div className="max-w-[800px] mx-auto space-y-8">
        <h2 className="text-gray-400 text-center">
          You have <span className="text-primary">successfully joined</span> to
          our program.&nbsp;<span>We will be back to you soon!</span>
        </h2>
        <p className="text-center leading-loose text-gray-600">
          Pariatur qui et do excepteur voluptate eiusmod excepteur aute.
          Occaecat aliquip quis minim officia mollit commodo et adipisicing ea.
          Ut incididunt laborum velit eu commodo labore cupidatat laborum esse.
          Elit velit consequat amet pariatur dolore nisi esse nostrud mollit
          culpa. Est ut qui enim quis non cillum ipsum commodo reprehenderit
          mollit.
        </p>
      </div>
      <Confetti />
      <CoreBenefits data={CoreBenefitsData} />
    </div>
  );
};
export default Page;

const CoreBenefitsData = {
  tagline: <>Innovation meets excellence</>,
  title: (
    <>
      Additionally, When You&apos;re,
      <span>Part Of The Sociomatic Family</span>
    </>
  ),
  body: {
    para: (
      <>
        <span>
          We will Work Together, Learn together ,Build Together and Implement.
        </span>{" "}
        Joining Sociomatic Google Ads Family goes beyond powerful advertising
        strategies. Our community is dedicated to your success, offering a
        unique blend of expert guidance, results-driven support, and exclusive
        networking opportunities.
      </>
    ),
    benefits: [
      {
        id: 1,
        title: <>Direct Access & Measurable Results</>,
        icon: <></>,
        para: (
          <>
            Focus on running your business while Yeatiq(CEO) and his team handle
            the heavy lifting of Google Ads, ensuring you get the most out of
            your advertising budget. Plus, you can contact Yeatiq directly
            through WhatsApp or email.
          </>
        ),
      },
      {
        id: 2,
        title: <>Get the Support You Deserve</>,
        icon: <></>,
        para: (
          <>
            Stay aware of the crowd. We are here to answer your questions and
            address any concerns
          </>
        ),
      },
      {
        id: 3,
        title: <>Ongoing Campaign Optimization</>,
        icon: <></>,
        para: (
          <>
            continuously analyze data and refine your campaigns to maximize ROI
            and keep you ahead of the competition.
          </>
        ),
      },
      {
        id: 4,
        title: <>Your Success is Our CEO&apos;s Passion</>,
        icon: <></>,
        para: (
          <>
            Yeatiq is invested in your success and is always available to
            provide direct support and strategic insights.
          </>
        ),
      },
    ],
  },
};
