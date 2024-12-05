import CurrentYear from "@/components/molecule/current-year";
import {
    Gift,
    PercentIcon,
    Star,
    Users,
    Palette,
    Target,
    Zap,
    Headphones,
    Briefcase,
    Sliders,
    MessageCircle,
    BarChart,
  } from "lucide-react";
  import Link from "next/link";

const data___googleads = {
    hero: {
      video: "https://www.youtube.com/embed/S8rncQvo-nU?si=JrIKuomxaHXBotUT",
      tagline: <>100% Trust Worthy Solutions</>,
      title: (
        <>
          <CurrentYear /> is Your <span>Year to Explode Growth:</span> Will Your Business
          Be Left Behind? (Limited Spots Available)
        </>
      ),
      body: (
        <>
          Just a handful of business owners are about to unlock explosive growth
          in <CurrentYear />... Are you ready to join them? At The Sociomatic, Take your
          chance to be one of them.
          <span>we&apos;re on a mission to empower thirty businesses</span>this
          year with game-changing Google Ads strategies.
          <Link href="/">Get a FREE Google Ads audit today</Link>
          and see how we can transform your business!
        </>
      ),
      cta: {
        primary: {
          text: <>Get Started Right Away</>,
          link: "/joining?type=googleads",
        },
        secondary: {
          text: <>Get A Free Consultation</>,
          link: "/",
        },
      },
    },
    limitedOffer: {
      tagline: <></>,
      title: (
        <>
          <span style={{ paddingLeft: "0!important" }}>Hurry up!</span> to
          Supercharge
          <span>Your Growth with Google Ads!</span>
        </>
      ),
      image: "https://utfs.io/f/TLm9XcQ0Drp9JAGiGra9E2SNJBQlTAsxDIm4fg0doXLUVjRv",
      body: {
        para: (
          <>
            Unlock explosive results and outpace your competition with our
            exclusive Google Ads offer.
            <br />
            <span>Here&apos;s what you&apos;ll get:</span>
          </>
        ),
        benefits: [
          {
            id: 1,
            title: <>Free Google Ads Audit</>,
            paragraph: (
              <>
                Identify hidden opportunities and optimize your campaigns (a
                $2.50 Million Value)
              </>
            ),
            icon: <Star />,
          },
          {
            id: 2,
            title: <>20% Off</>,
            paragraph: (
              <>
                Your First Month&apos;s Management Fee: Get expert management at
                a discounted rate to kickstart your growth.
              </>
            ),
            icon: <PercentIcon />,
          },
          {
            id: 3,
            title: <>Bonus</>,
            paragraph: (
              <>
                Google Analytics & Ads Conversion Tracking Mastery! Our team
                will set up conversion tracking and ensure it s integrated
                seamlessly between Google Ads and Google Analytics
              </>
            ),
            icon: <Gift />,
          },
        ],
      },
      cta: {
        primary: {
          text: <>Get Started Right Away</>,
          link: "/joining?type=googleads",
        },
        secondary: {
          text: <>Get A Free Consultation</>,
          link: "/",
        },
      },
    },
    whyWeAndWhatWeDo: {
      tagline: <>Sociomatic Google Ads Service</>,
      title: (
        <>
          Frustrated with Static Growth? <span>We Help Businesses Explode</span>
          with Targeted Google Ads
        </>
      ),
      body: {
        para: (
          <>
            <span>
              We are a passionate team of Google Ads specialists with a proven
              track record of helping businesses achieve explosive growth
            </span>
            Our data-driven approach and focus on results ensure your campaigns
            are optimized for maximum impact.
          </>
        ),
        benefits: [
          {
            id: 1,
            icon: <Users />,
            title: <>Unmatched Expertise</>,
            paragraph: (
              <>
                Our Google Ads-certified team is constantly up-to-date on the
                latest strategies and best practices.
              </>
            ),
          },
          {
            id: 2,
            icon: <Target />,
            title: <>Results-Obsessed</>,
            paragraph: (
              <>
                We don&apos;t just manage ads; we drive results. Your success is
                our top priority.
              </>
            ),
          },
          {
            id: 3,
            icon: <MessageCircle />,
            title: <>Transparent Communication</>,
            paragraph: (
              <>
                We believe in clear and ongoing communication, keeping you
                informed every step of the way.
              </>
            ),
          },
          {
            id: 4,
            icon: <Palette />,
            title: <>Custom Tailored Solutions</>,
            paragraph: (
              <>
                We don&apos;t believe in a one-size-fits-all approach. We get to
                know your business and create a Google Ads strategy that aligns
                perfectly with your goals.
              </>
            ),
          },
          {
            id: 5,
            icon: <Zap />,
            title: <>Technology & Automation</>,
            paragraph: (
              <>
                We use advanced technology to manage campaigns, optimize bids,
                and target ads effectively. This helps us focus on strategy and
                deliver better results for your business.
              </>
            ),
          },
          {
            id: 6,
            icon: <Headphones />,
            title: <>Long-Term Partnership</>,
            paragraph: (
              <>
                We understand that Google Ads success isn&apos;t a one-time
                thing. We&apos;re committed to building a long-term partnership
                with you, continuously refining your campaigns, and adapting to
                market changes to ensure sustainable growth and maximize your
                return on investment (ROI) over time.
              </>
            ),
          },
        ],
      },
    },
    userEmpathy: {
      tagline: <>Alright let&apos;s get started</>,
      title: (
        <>
          Even if right now, you can&apos;t say you&apos;re 100% sold on
          Sociomatic, that&apos;s perfectly okay. We understand the natural
          reservations.
        </>
      ),
      body: (
        <>
          We&apos;ve all been there. We&apos;ve all stared at a confusing
          platform wondering if it&apos;s worth the risk. That&apos;s why we
          don&apos;t ask for blind belief at The Sociomatic. We offer results.
        </>
      ),
    },
    coreBenefits: {
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
              We will Work Together, Learn together ,Build Together and
              Implement.
            </span>{" "}
            Joining Sociomatic Google Ads Family goes beyond powerful
            advertising strategies. Our community is dedicated to your success,
            offering a unique blend of expert guidance, results-driven support,
            and exclusive networking opportunities.
          </>
        ),
        benefits: [
          {
            id: 1,
            icon: <BarChart />,
            title: <>Direct Access & Measurable Results</>,
            para: (
              <>
                Focus on running your business while Yeatiq(CEO) and his team
                handle the heavy lifting of Google Ads, ensuring you get the
                most out of your advertising budget. Plus, you can contact
                Yeatiq directly through WhatsApp or email.
              </>
            ),
          },
          {
            id: 2,
            icon: <Headphones />,
            title: <>Get the Support You Deserve</>,
            para: (
              <>
                Stay aware of the crowd. We are here to answer your questions
                and address any concerns
              </>
            ),
          },
          {
            id: 3,
            icon: <Sliders />,
            title: <>Ongoing Campaign Optimization</>,
            para: (
              <>
                continuously analyze data and refine your campaigns to maximize
                ROI and keep you ahead of the competition.
              </>
            ),
          },
          {
            id: 4,
            icon: <Briefcase />,
            title: <>Your Success is Our CEO&apos;s Passion</>,
            para: (
              <>
                Yeatiq is invested in your success and is always available to
                provide direct support and strategic insights.
              </>
            ),
          },
        ],
      },
    },
    endingFunnel: {
      tagline: <></>,
      title: (
        <>
          So when we say, Advertising Is The Only Way To Get Your sales/lead And
          Reach The Level Of Success In Your Business You Want.{" "}
          <span>We mean it</span>
        </>
      ),
      image: "https://utfs.io/f/TLm9XcQ0Drp9HFudVV63lrKW6cbSangxZGDNTm1szfYJEjkL",
      body: (
        <>
          Spots for The Sociomatic&apos;s Google Ads Family are filling up
          fast(Only 46 spots are available). Take advantage of this chance to
          join a community of successful entrepreneurs and watch your business
          soar. Schedule your free one-on-one consultation now and claim your
          spot!
        </>
      ),
      cta: {
        primary: {
          text: <>Get Started Right Away</>,
          link: "/joining?type=googleads",
        },
        secondary: {
          text: <>Get A Free Consultation</>,
          link: "/",
        },
      },
    },
    faq: {
      title: <>Frequently Asked Questions</>,
      faqs: [
        {
          id: 1,
          question: <>What are the advantages of Google Ads for my company?</>,
          answer: (
            <>
              Through targeted advertising, Google AdWords enhances visibility,
              traffic, and potential conversions
            </>
          ),
        },
        {
          id: 2,
          question: <>What is the suggested Google AdWords budget?</>,
          answer: (
            <>
              Although budgets differ, starting with a reasonable amount and
              making adjustments based on performance is a good idea.
            </>
          ),
        },
        {
          id: 3,
          question: (
            <>How can I measure the success of my Google Ads campaign?</>
          ),
          answer: (
            <>
              Click-through rate (CTR), conversion rate, and return on ad spend
              (ROAS) are indicators of campaign effectiveness.
            </>
          ),
        },
        {
          id: 4,
          question: <>What kinds of targeting are available with Google Ads?</>,
          answer: (
            <>
              To reach your desired audience, target based on keywords,
              demographics, location, interests, and more.
            </>
          ),
        },
        {
          id: 5,
          question: (
            <>
              I have Google Ads campaigns that I would like to optimize. Can
              Sociomatic help?
            </>
          ),
          answer: (
            <>
              Sociomatic does provide optimization services to improve the
              effectiveness of your Google Adwords campaigns.
            </>
          ),
        },
      ],
    },
  }

export default data___googleads;
