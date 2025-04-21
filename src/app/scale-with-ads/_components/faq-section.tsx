import Faq from "@/app/_utils/faq";
import AdvertisementCTA from "./advertisement-cta";

const FaqSection = () => {
  return (
    <div>
      <Faq data={FaqData} />
      <div className="w-full flex justify-center pb-24">
        <AdvertisementCTA
          text="Experience Risk-Free Growth Today"
          section="Frequently Asked Questions"
        />
      </div>
    </div>
  );
};

export default FaqSection;

const FaqData = {
  title: <>Frequently Asked Questions</>,
  faqs: [
    {
      id: 1,
      question: <>What if I cancel before 90 days?</>,
      answer: (
        <>
          The refund guarantee applies only after completing the full 3-month
          challenge. We need time to optimize properly.
        </>
      ),
    },
    {
      id: 2,
      question: <>How do you define &apos;failure&apos; for the refund?</>,
      answer: (
        <>
          We&apos;ll agree on clear KPIs upfront (e.g., 20% ROAS, 50
          leads/month). If we miss them, you get 100% back.
        </>
      ),
    },
    {
      id: 3,
      question: <>What if I ignore your optimization suggestions?</>,
      answer: (
        <>
          The guarantee requires collaboration. If you reject critical
          strategies, the refund terms may not apply
        </>
      ),
    },
    {
      id: 4,
      question: <>How do I know you won&apos;t waste my budget?</>,
      answer: (
        <>
          We use AI bid strategies + manual optimizations. You&apos;ll approve
          every campaign.
        </>
      ),
    },
    {
      id: 5,
      question: <>What industries do you work with?</>,
      answer: (
        <>
          E-commerce, local services, SaaS—if you sell online, we can scale it.
        </>
      ),
    },
  ],
};
