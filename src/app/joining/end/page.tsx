import CoreBenefits from "@/app/services/_utils/core-benefits";
import Confetti from "../_utils/confetti";
import MeetOurCEO from "@/app/about-us/_utils/meet-our-ceo";

const Page = ({ searchParams }: { searchParams: { type: "googleads" } }) => {
  let data = PageData.googleads;
  if (searchParams.type && Object.keys(PageData)?.includes(searchParams.type)) {
    data = PageData[searchParams.type];
  }

  const { title, paragraphs } = data;
  return (
    <div className="flex flex-col gap-8 pb-20">
      <div className="container pt-32">
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
      <MeetOurCEO />
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
    paragraphs: [
      <>
        Now you&apos;re on the application page... (we can all take a deep
        breath together here) ... and maybe a few questions are swirling in your
        mind:
        <span>
          Is Sociomatic the right fit for me? Can my business truly achieve
          success with Google Ads?
        </span>
      </>,
      <>
        <span>Believe us, you&apos;re not alone.</span> Many who&apos;ve joined
        our <span>Google Ads management service</span> (and seen amazing
        results) felt the exact same way. It&apos;s totally normal to have
        doubts.
      </>,
      <>
        <span>But here&apos;s the thing: </span> Sociomatic is built to take the
        reins of your Google Ads campaigns, allowing you to focus on what you do
        best - running your business. Our team of
        <span>
          Google Ads experts will handle the strategy, optimization, and
          campaign management, ensuring your ads reach the right audience and
          deliver powerful results
        </span>
      </>,
      <>
        <span>
          Before you submit your application, take a moment to watch the short
          video above.
        </span>
        It features real businesses, just like yours, who saw amazing results by
        letting Sociomatic handle their Google Ads. Their success stories can be
        your inspiration!
      </>,
      <>
        Watch the video, and then fill out that application with a surge of
        confidence! Sociomatic is designed for YOU, and we&apos;re here to help
        you succeed.
      </>,
      <>
        <span>Onwards and Upwards!</span>
      </>,
      <>
        P.S. We&apos;re not just saying that! Check out our stellar client
        <span>testimonials</span> - you won&apos;t be disappointed!
      </>,
      <>Sincerely,</>,
      <>
        Yeatiq
        <br />
        CEO | Top Rated Seller
      </>,
    ],
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
