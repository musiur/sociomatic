import Faq from "@/app/_utils/faq";

const FaqSection = () => {
  return (
    <div>
      <Faq data={FaqData} />
    </div>
  );
};

export default FaqSection;

const FaqData = {
  title: <>Frequently Asked Questions</>,
  faqs: [
    {
      id: 1,
      question: <>What is Sociomatic, and what is your primary mission?</>,
      answer: (
        <>
          The Sociomatic is a digital marketing organization with a primary
          mission to help businesses succeed online. We&apos;re dedicated to
          enhancing our online presence and achieving growth for our clients.
        </>
      ),
    },
    {
      id: 2,
      question: (
        <>
          How does The Sociomatic stand out in the digital marketing industry?
        </>
      ),
      answer: (
        <>
          We differentiate ourselves by offering various services, providing
          comprehensive solutions for our client&apos;s digital marketing needs,
          and delivering tangible results.
        </>
      ),
    },
    {
      id: 3,
      question: <>What is your approach to client success?</>,
      answer: (
        <>
          We&apos;re committed to ensuring the success of our clients by
          identifying new digital marketing opportunities and implementing
          strategies to help them become market leaders and achieve an
          outstanding return on investment (ROI).
        </>
      ),
    },
    {
      id: 4,
      question: <>What values drive The Sociomatic&apos;s operations?</>,
      answer: (
        <>
          Our core values include innovation, dedication, excellence, and
          client-centricity. We strive to bring fresh ideas and solutions,
          ensuring the best possible service.
        </>
      ),
    },
    {
      id: 5,
      question: (
        <>How can I contact The Sociomatic for inquiries or collaboration?</>
      ),
      answer: (
        <>
          You can contact us through our website or our customer support team to
          discuss how we can assist your business. We&apos;re here to help you
          navigate digital marketing and achieve your goals.
        </>
      ),
    },
  ],
};
