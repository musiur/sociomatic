import CoreBenefits from "@/app/services/_utils/core-benefits";
import Confetti from "../_utils/confetti";
import MeetOurCEO from "@/app/about-us/_utils/meet-our-ceo";
import { E_FormTypes } from "../_utils/types";

const Page = async (props: { searchParams: Promise<{ type: E_FormTypes }> }) => {
  const searchParams = await props.searchParams;
  let data = PageData.googleads;
  if (searchParams.type && Object.keys(PageData)?.includes(searchParams.type)) {
    // @ts-ignore
    data = PageData[searchParams.type];
  }

  const { title } = data;
  return (
    <div className="flex flex-col gap-8 pb-20">
      <div className="container pt-32 [&>*]:text-center flex flex-col items-center justify-center">
        <div className="text-secondary font-bold inline-block text-2xl md:text-3xl lg:text-4xl pb-8">
          Congratulations!
        </div>
        <div className="max-w-[800px] space-y-8">
          <h2 className="text-gray-400 [&>span]:text-primary [&>span]:mx-3">
            {title}
          </h2>
        </div>
      </div>
      <Confetti />
      {/* <MeetOurCEO /> */}
      <CoreBenefits data={CoreBenefitsData} />
    </div>
  );
};
export default Page;

const PageData = {
  googleads: {
    id: 1,
    title: (
      <>
        Hey there! First off, a huge
        <span>congratulations on considering Sociomatic</span>
        for your Google Ads Management Needs
      </>
    ),
  },
  googleanalytics: {
    id: 2,
    title: (
      <>
        Hey there! First off, a huge
        <span>congratulations on considering Sociomatic</span>
        for your Google Analytics Management Needs
      </>
    ),
  },
  socialmediapaidads: {
    id: 3,
    title: (
      <>
        Hey there! First off, a huge
        <span>congratulations on considering Sociomatic</span>
        for your Social Media Paid Ads Management Needs
      </>
    ),
  },
  uiux: {
    id: 4,
    title: (
      <>
        Hey there! First off, a huge
        <span>congratulations on considering Sociomatic</span>
        for your UI/UX and Graphic Design Needs
      </>
    ),
  },
  customwebdev: {
    id: 5,
    title: (
      <>
        Hey there! First off, a huge
        <span>congratulations on considering Sociomatic</span>
        for your Custom Web Development Needs
      </>
    ),
  },
  software: {
    id: 6,
    title: (
      <>
        Hey there! First off, a huge
        <span>congratulations on considering Sociomatic</span>
        for your Software Development Needs
      </>
    ),
  },
  wordpress: {
    id: 7,
    title: (
      <>
        Hey there! First off, a huge
        <span>congratulations on considering Sociomatic</span>
        for your Wordpress Development Needs
      </>
    ),
  },
  shopify: {
    id: 8,
    title: (
      <>
        Hey there! First off, a huge
        <span>congratulations on considering Sociomatic</span>
        for your Shopify Development Needs
      </>
    ),
  },
};

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
