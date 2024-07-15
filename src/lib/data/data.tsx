import BlueGoogle from "@/components/assets/blue-google";
import Campaigns from "@/components/assets/campaigns";
import CodeCloud from "@/components/assets/code-cloud";
import Competition from "@/components/assets/competition";
import Feather from "@/components/assets/feather";
import GeoTargetting from "@/components/assets/geo-targetting";
import GoogleAnalytics from "@/components/assets/google-analytics";
import LongTermPartnership from "@/components/assets/long-term-partnership";
import PenTool from "@/components/assets/pen-tool";
import Popular from "@/components/assets/popular";
import Premium from "@/components/assets/premium";
import ROI from "@/components/assets/roi";
import Shopify from "@/components/assets/shopify";
import SME from "@/components/assets/sme";
import Starter from "@/components/assets/starter";
import TargetAudience from "@/components/assets/target-audience";
import Wordpress from "@/components/assets/wordpress";
import Link from "next/link";

export const homeFeaturesData = [
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
        We leverage data to boost your social media ad <span>ROI</span>&nbsp;
        and&nbsp;
        <span>increase</span> your revenue
      </>
    ),
    list: [
      "Facebook & Instagram Ads",
      "Linkedin & Twitter Ads",
      "TikTok & Pinterest Ads",
    ],
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
    link: "/services/ui-ux-and-graphic-design",
  },
  {
    id: 8,
    image: <Feather />,
    title: "Content Writing & SEO",
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
    link: "/services/content-writing-and-seo",
  },
  // {
  //   id: 9,
  //   image: <Contents />,
  //   title: "Content Development",
  //   description: (
  //     <>
  //       Crafting <span>high-converting</span> Shopify stores for your e-commerce
  //       success.
  //     </>
  //   ),
  //   list: [
  //     "Custom Store Design",
  //     "Product and Inventory Management",
  //     "Payment and Security Integration",
  //   ],
  //   link: "/services/shopify-store-development",
  // },
];

export const homeTestimonialData = {
  highlighter: "Testimonials",
  H2: (
    <>
      Don&apos;t Take Our Words,
      <br />
      We Embrace Their
    </>
  ),
  paragraphs: [
    <>
      Our <span>satisfied</span> clients are from all over the world. We
      understand your requirements and deliver <span>growth</span>, no fluff.
    </>,
  ],
  testimonialList: [
    {
      id: 1,
      name: "Anhtieu415",
      country: "usa.svg",
      imageSlug: "user1",
      testimonial: (
        <>
          I liked that he Yeatiq was patient with me and answered my questions
          in a timely manner. I appreciate the video that he made to explain
          things to me. He was very professional with his work and communication
          skills.
        </>
      ),
    },
    {
      id: 2,
      name: "agnieszkavv",
      country: "ireland.svg",
      imageSlug: "user2",
      testimonial: (
        <>
          It&apos;s been a great pleasure working with Yeatiq. Very responsive
          and helpful. Since the universal analytics shut down, we couldn&apos;t
          see our old data in Looker Studio. . Yeatig configured Google
          Analytics 4 for us and also created two Looker Studio dashboards for
          us to be able to view both the old and new data. Amazing job and saved
          us a lot of stress at the end of the year.
        </>
      ),
    },
    {
      id: 3,
      name: "maxinetubbe",
      country: "canada.svg",
      imageSlug: "user3",
      testimonial: (
        <>
          Yeatiq did such a great job of setting up my analytics and pixels that
          I also hired him for FB ads. You have to supply the graphics, he sets
          up, monitors and adjusts the ad campaigns. Knowledgeable and great
          communication (sent me Loom videos to explain what he was doing or
          what he needed, etc ).
        </>
      ),
    },
  ],
};

export const homeFAQ = {
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

export const GoogleAdsServicePageData = {
  herosection: {
    H1: (
      <>
        Set up, Manage, and <span className="text-secondary">Optimize</span>
        &nbsp; Google Ads with us
      </>
    ),
    P: (
      <>
        With our easy-to-use solutions, start a smooth Google Ads experience. We
        streamline the procedure for newbies to guarantee peak performance and
        the best&nbsp;
        <span>return on investment (ROI)</span>. Start enjoying efficiency and
        benefits right away!
      </>
    ),
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    brands: false,
    background: "HeroBackgroundServices",
  },
  whyChooseSection: {
    videoThumbnail: "whyChooseVideo.png",
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    H2: (
      <>
        Why Choose The <span className="text-secondary">Sociomatic</span>?
      </>
    ),
    list: [
      <>
        <span>Google Ads Mastery:</span> Make a statement where it counts with
        professional advertisements.
      </>,
      <>
        <span>Customized Plans:</span> We create one-of-a-kind initiatives
        designed to meet your company&apos;s objectives.
      </>,
      <>
        <span>Data-Driven Precision:</span> Maximize the impact of your ads by
        optimizing them with real-time data.
      </>,
      <>
        <span>Transparent Analytics:</span> confident choices and clear insights
        for the best possible marketing performance
      </>,
      <>
        <span>Cost-Effective Impact:</span> Optimize outcomes with sensible
        investments and cost-effective tactics with each click.
      </>,
      <>
        <span>Proven Online Success:</span> Choose Sociomatic for dependable
        outcomes and thrive with greater visibility and conversions.
      </>,
    ],
  },
  whyService: {
    highlighter: "What We Provide",
    H2: (
      <>
        Why&nbsp;
        <span className="text-secondary">Google Paid Ads</span>?
      </>
    ),
    paragraphs: [
      <>
        Unlock Google&apos;s potential with well-thought-out search, display,
        and video ads to increase exposure and interaction. With targeted and
        economical pay-per-click marketing, you can effectively reach your
        audience.
      </>,
    ],
    cardList: [
      {
        id: 1,
        image: <TargetAudience />,
        title: "PPC Search Ads",
        list: [
          <>Immediately show up in pertinent search results.</>,
          <>Find people who are actively looking for your goods or services.</>,
          <>Increase visibility by using targeted keywords strategically</>,
          <>Pay-per-click guarantees economy of cost.</>,
        ],
      },
      {
        id: 2,
        image: <ROI />,
        title: "Display Ads",
        list: [
          <>Grab viewers attention with eye-catching banner advertisements.</>,
          <>
            Expand your audience by using Google&apos;s extensive display
            network.
          </>,
          <>Raise brand recognition with eye-catching images.</>,
          <>For precision, focus on particular demographics.</>,
        ],
      },
      {
        id: 3,
        image: <Competition />,
        title: "Video Ads",
        list: [
          <>
            Take advantage of YouTube&apos;s broad user base by using video
            advertising.
          </>,
          <>Captivate viewers with vibrant, engaging visual content.</>,
          <>Use immersive video experiences to tell the story of your brand.</>,
          <>
            Use in-stream advertising to increase engagement and conversions.
          </>,
        ],
      },
      {
        id: 4,
        image: <GeoTargetting />,
        title: "Shopping Ads",
        list: [
          <>
            Display merchandise straight within Google&apos;s shopping results.
          </>,
          <>
            Increase online sales through aesthetically pleasing product
            listings.
          </>,
          <>Speak with people who are eager to buy.</>,
          <>
            Profitable pay-per-click strategy for maximum return on investment.
          </>,
        ],
      },
      {
        id: 5,
        image: <LongTermPartnership />,
        title: "Benefits of Google Paid Advertising",
        list: [
          <>Consistently hold the top spots in search results.</>,
          <>Quickly raise brand recognition and visibility.</>,
          <>Speak to the appropriate audience when it matters.</>,
          <>
            Optimize the delivery of ads based on user activity and preferences.
          </>,
        ],
      },
      {
        id: 6,
        image: <SME />,
        title: "Disadvantages of Google Paid Ads",
        list: [
          <>
            Expenses may rise quickly, particularly in markets with intense
            competition.
          </>,
          <>Click costs could change according to consumer demand.</>,
          <>
            To prevent overspending, the ad budget needs to be closely
            monitored.
          </>,
          <>Ongoing tweaks could be required to achieve the best ROI.</>,
        ],
      },
    ],
    footerText: (
      <>
        For cost-effective, targeted advertising on search, display, video, and
        commerce platforms, go with Google Paid Ads.
      </>
    ),
  },
  ourPackages: {
    highlighter: "Our Packages",
    H2: (
      <>
        Tailor-made Packages to Help Your Business&nbsp;
        <span className="text-secondary">Grow</span>
      </>
    ),
    paragraphs: [
      <>
        We&apos;ll listen to your goals and complete a free audit to discover if
        we&apos;re a great fit to work with each other.
      </>,
    ],
    packageList: [
      {
        id: 1,
        image: <Starter />,
        title: "Starter",
        H1: "$2000",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Ad Campaign Setup: Basic targeting and ad creation",
          "Keyword Research: Limited",
          "Ad Platforms: Google Search",
          "Ad Copy Variations: Basic",
          "Monthly Reporting: Standard metrics",
        ],
        link: "/",
      },
      {
        id: 2,
        image: <Popular />,
        title: "Popular",
        H1: "$2500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Ad Campaign Setup: Advanced targeting and ad creation",
          "Keyword Research: Moderate",
          "Ad Platforms: Google Search and Display",
          "Ad Copy Variations:** Enhanced",
          "Monthly Reporting",
          "Competitor Analysis",
          "Remarketing Campaign",
        ],
        link: "/",
      },
      {
        id: 3,
        image: <Premium />,
        title: "Premium",
        H1: "$3500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Ad Campaign Setup:Customized targeting and ad creation",
          "Keyword Research:Comprehensive",
          "Ad Platforms-Google Search, Display, and Video",
          "Advanced A/B testing",
          "Monthly Reporting",
          "Ad Extension Optimization",
          "Competitor Analysis",
          "Landing Page Optimization",
          "Advanced Audience Targeting",
          "Cross-Platform Integration",
          "Custom Analytics Dashboard",
          "Dedicated Account Manager",
        ],
        link: "/",
      },
    ],
  },
  testimonial: {
    highlighter: "Testimonials",
    H2: <>Don&apos;t Take Our Words, We Embrace Their</>,
    paragraphs: [
      <>
        Our <span>satisfied</span> clients are from all over the world. We
        understand your requirements and deliver <span>growth</span>, no fluff.
      </>,
    ],
    testimonialList: [
      {
        id: 1,
        name: "Kimgray183",
        country: "usa.svg",
        imageSlug: "user1",
        testimonial: (
          <>
            Would definitely use his services again!! Not only did he perform
            the services as ordered, but he also sent a video explaining how to
            use the Analytics and any issues that need to be fixed on our end.
            Great Communication, spent time testing and delivered on time.
          </>
        ),
      },
      {
        id: 2,
        name: "Topjimmy68",
        country: "usa.svg",
        imageSlug: "user2",
        testimonial: (
          <>
            I had a great experience working with Yeatiq. He answered my
            questions quickly and completed the task in a timely fashion. He was
            professional and delivered the results I wanted. I would recommend
            his services very highly. Thank you, Yeatiq!
          </>
        ),
      },
      {
        id: 3,
        name: "Shermstevens",
        country: "usa.svg",
        imageSlug: "user3",
        testimonial: (
          <>
            Communication was great, service was provided at a great price and
            well within the promised timeline. Highly recommend this gig.
          </>
        ),
      },
    ],
  },
  faqData: {
    highlighter: "",
    H2: <>Frequently Asked Questions</>,
    paragraphs: [
      <>
        We are more than a generic agency. Explore our Services and our&apos;
        <span>solutions</span> for your business.
      </>,
    ],
    qnaList: [
      {
        id: 1,
        title: "What are the advantages of Google Ads for my company?",
        details:
          "Through targeted advertising, Google AdWords enhances visibility, traffic, and potential conversions",
      },
      {
        id: 2,
        title: "What is the suggested Google AdWords budget?",
        details:
          "Although budgets differ, starting with a reasonable amount and making adjustments based on performance is a good idea.",
      },
      {
        id: 3,
        title: "How can I measure the success of my Google Ads campaign?",
        details:
          "Click-through rate (CTR), conversion rate, and return on ad spend (ROAS) are indicators of campaign effectiveness.",
      },
      {
        id: 4,
        title: "What kinds of targeting are available with Google Ads?",
        details:
          "To reach your desired audience, target based on keywords, demographics, location, interests, and more.",
      },
      {
        id: 5,
        title:
          "I have Google Ads campaigns that I would like to optimize. Can Sociomatic help?",
        details:
          "Sociomatic does provide optimization services to improve the effectiveness of your Google Adwords campaigns.",
      },
    ],
  },
};

export const DataAnalyticsServicePageData = {
  herosection: {
    H1: (
      <>
        Unlocking Insights - Your&nbsp;
        <span className="text-secondary">Analytics</span> Partner
      </>
    ),
    P: (
      <>
        Welcome to sociomatic, where data meets strategy and insights drive
        success. With over 4.5 years of expertise, we excel in extracting
        valuable insights from complex data sets.Join us on this journey towards
        data-driven excellence.
      </>
    ),
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    brands: false,
    background: "HeroBackgroundServices",
  },
  whyChooseSection: {
    videoThumbnail: "whyChooseVideo.png",
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    H2: (
      <>
        Why Choose The <span>Sociomatic</span>?
      </>
    ),
    list: [
      <>
        <span>Quality Analytics: </span> Gain knowledge through exacting data
        precision.
      </>,
      <>
        <span>Custom Solutions:</span> customized analytics for specific
        business requirements.
      </>,
      <>
        <span>Actionable Insights:</span> Utilize data to inform strategic
        decisions, leveraging the exact customer behavior journey.
      </>,
      <>
        <span>Flexibility:</span> Expand with ease with our solutions for
        scalable analytics.
      </>,
      <>
        <span>Real-time Reporting:</span> Stay on top of things using current
        data analysis.
      </>,
      <>
        <span>Cross-Platform Integration:</span> Combine information from
        several sources seamlessly.
      </>,
      <>
        <span>Expert Consultation:</span> Get professional advice for the best
        use of data.
      </>,
    ],
  },
  whyService: {
    highlighter: "What We Provide",
    H2: (
      <>
        Why&nbsp;
        <span className="text-secondary">data analytics</span>?
      </>
    ),
    paragraphs: [
      <>
        Empower decisions, unlock insights, and&apos;
        <span>propel business growth</span> with Sociomatic. Choose data
        analytics for <span>transformative success</span>.
      </>,
    ],
    cardList: [
      {
        id: 1,
        image: <TargetAudience />,
        title: "Google Analytics 4",
        list: [
          <>Detailed metrics for performance tracking.</>,
          <>Understand user interactions and optimize content.</>,
          <>Enable Enhanced E-commerce.</>,
          <>Base decisions on data-driven insights.</>,
        ],
      },
      {
        id: 2,
        image: <ROI />,
        title: "Google Tag Manager",
        list: [
          <>Efficiently manage to deploy tracking codes</>,
          <>Dynamically update tags for data flexibility.</>,
          <>Implement changes instantly without code.</>,
          <>Facilitates collaboration between marketing and IT.</>,
        ],
      },
      {
        id: 3,
        image: <Competition />,
        title: "Looker Studio",
        list: [
          <>Create dynamic visualizations for actionable insights</>,
          <>Empower users to explore and analyze independently.</>,
          <>Unify data sources for a consolidated view.</>,
          <>Scales seamlessly for growing data needs.</>,
        ],
      },
      {
        id: 4,
        image: <GeoTargetting />,
        title: "Pros of Data Analytics",
        list: [
          <>Google Analytics is a Free tool</>,
          <>Quick adaptation to market changes and trends.</>,
          <>Enhances decision-making precision through insights.</>,
          <>Tailor offerings based on customer preferences.</>,
        ],
      },
      {
        id: 5,
        image: <LongTermPartnership />,
        title: "Cons of Data Analytics",
        list: [
          <>Initial setup integration may pose challenges.</>,
          <>Data miss match by Google.</>,
          <>Effective use relies on skilled professionals.</>,
          <>24-72 hours for data refreshes.</>,
        ],
      },
      {
        id: 6,
        image: <SME />,
        title: "How Sociomatic Helps",
        list: [
          <>Customized solutions for specific objectives.</>,
          <>Goal-oriented tracking</>,
          <>Integration of Google Analytics Tag Manager.</>,
          <>O Translate data into actionable strategies.</>,
        ],
      },
    ],
  },
  ourPackages: {
    highlighter: "Our Packages",
    H2: (
      <>
        Tailor-made Packages to Help Your Business&nbsp;
        <span className="text-secondary">Grow</span>
      </>
    ),
    paragraphs: [
      <>
        We&apos;ll listen to your goals and complete a free audit to discover if
        we&apos;re a great fit to work with each other.
      </>,
    ],
    packageList: [
      {
        id: 1,
        image: <Starter />,
        title: "Starter",
        H1: "$2000",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Analytics/tracking setup",
          "Tag manager setup ",
          "Fix Issues",
          "Custom Data Layer",
        ],
        link: "/",
      },
      {
        id: 2,
        image: <Popular />,
        title: "Popular",
        H1: "$2500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Analytics/tracking setup",
          "Tag manager setup ",
          "Fix Issues",
          "Custom Data Layer",
          "Social platform tracking (Facebook, pinterest, linkedin, TikTok, Pinterest)",
          "E-commerce purchase tracking",
          "Custom Events",
        ],
        link: "/",
      },
      {
        id: 3,
        image: <Premium />,
        title: "Premium",
        H1: "$3500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Analytics/tracking setup",
          "Tag manager setup ",
          "Fix Issues",
          "Custom Data Layer",
          "Social platform tracking (Facebook, pinterest, linkedin, TikTok, Pinterest)",
          "E-commerce purchase tracking",
          "Custom Events",
          "Audeince Creation",
          "Looker Studio DashBoard ",
          "Loom Video Explanation",
        ],
        link: "/",
      },
    ],
  },
  testimonial: {
    highlighter: "Testimonials",
    H2: <>Don&apos;t Take Our Words, We Embrace Their</>,
    paragraphs: [
      <>
        Our <span>satisfied</span> clients are from all over the world. We
        understand your requirements and deliver <span>growth</span>, no fluff.
      </>,
    ],
    testimonialList: [
      {
        id: 1,
        name: "Maxinetubbe",
        country: "canada.svg",
        imageSlug: "user1",
        testimonial: (
          <>
            Yeatiq is fantastic at setting up goals with Tag Manager, GA4, FB
            Pixels, etc. I will never waste time trying to do it myself when
            Yeatiq can do it better and faster. He has worked on multiple
            platforms for me: WP, Woo, GHL, Webflow and more. All perfectly
            done, and in a timely manner, with perfect communication - add on
            the $10 Loom video and get a video of him explaining the setup,
            goals - and he also makes recommendations too. Great vendor!
          </>
        ),
      },
      {
        id: 2,
        name: "Jason_makki",
        country: "uae.svg",
        imageSlug: "user2",
        testimonial: (
          <>
            Honestly after working with several Sellers and disappointment.
            Finally I found Yeatiq. At the beginning I was hesitating to start
            the project with him due to my previous negative experience. However
            I decided to give it a shot. He has knowledge and works hard until
            he fixes it. I have a website with Euro Currency and Facebook Pixel
            were not able to recognize the value when someone purchases products
            and everything has to be done in GTM (data layer issue). The other 2
            sellers were not able to fix it. But I&apos;m glad that I&apos;ve
            met Yeatiq. Thanks man for solving the issue. 100%. Recommended. He
            also does support your project even if it&apos;s a done delivery.
          </>
        ),
      },
      {
        id: 3,
        name: "agnieszkavv",
        country: "ireland.svg",
        imageSlug: "user3",
        testimonial: (
          <>
            It&apos;s been a great pleasure working with Yeatiq. Very responsive
            and helpful. Since the universal analytics shut down, we
            couldn&apos;t see our old data in Looker Studio. . Yeatig configured
            Google Analytics 4 for us and also created two Looker Studio
            dashboards for us to be able to view both the old and new data.
            Amazing job and saved us a lot of stress at the end of the year.
          </>
        ),
      },
    ],
  },
  faqData: {
    highlighter: "",
    H2: <>Frequently Asked Questions</>,
    paragraphs: [
      <>
        We are more than a generic agency. Explore our Services and our&apos;
        <span>solutions</span> for your business.
      </>,
    ],
    qnaList: [
      {
        id: 1,
        title: "What are the benefits of data analytics for my business plan?",
        details:
          "Data analytics finds trends, offers insights for well-informed decision-making, and boosts overall business productivity",
      },
      {
        id: 2,
        title: "What data analytics tools does Sociomatic use?",
        details:
          "For thorough data analysis, sociomatic uses cutting0edge tools like Google Analytics, Looker Studio, and Google Tag Manager",
      },
      {
        id: 3,
        title: "Can data analytics be combined with different services?",
        details:
          "To improve overall business performance, Sociomatic guarantees the smooth integration of data analytics with various services",
      },
      {
        id: 4,
        title: "How often should I review my analytics reports?",
        details:
          "Regular , reviews, at least monthly, help stay informed about performance trends and make timely adjustments",
      },
      {
        id: 5,
        title:
          "When utilizing Sociomatics's analytics services, is my data secure?",
        details:
          "Sociomatic implements robust security protocols to guarantee the privacy and accuracy of your information",
      },
    ],
  },
};

export const WordpressDevelopmentServicePageData = {
  herosection: {
    H1: (
      <>
        Solutions for <span>Seamless</span>,&nbsp;
        <span>Dynamic</span>, and <span>Engaging</span> websites.
      </>
    ),
    P: (
      <>
        WordPress development that is responsive and dynamic can completely
        change your online presence. Use Sociomatic to revitalize your
        website—join together for outstanding solutions.
      </>
    ),
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    brands: false,
    background: "HeroBackgroundServices",
  },
  whyChooseSection: {
    videoThumbnail: "whyChooseVideo.png",
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    H2: (
      <>
        Why Choose The <span>Sociomatic</span>?
      </>
    ),
    list: [
      <>
        <span>Expertise:</span> Proven proficiency in WordPress, including
        accessible data analytics for a comprehensive online presence.
      </>,
      <>
        <span>Innovation:</span> Cutting-edge features, plugins, and
        complimentary data insights for a competitive edge.
      </>,
      <>
        <span>Collaboration:</span> Work closely with skilled Sociomatic
        professionals, ensuring seamless communication and client-focused
        collaboration.
      </>,
      <>
        <span>Results-driven:</span> Achieve business goals focusing on
        measurable outcomes, effectively transforming your digital presence.
      </>,
      <>
        <span>Free 2 Months Management:</span> Enjoy complimentary management
        for the first two months, enhancing your online strategy.
      </>,
    ],
  },
  whyService: {
    highlighter: "What We Provide",
    H2: (
      <>
        Why&nbsp;
        <span className="text-secondary">Wordpress Development</span>?
      </>
    ),
    paragraphs: [
      <>
        WordPress web development offers versatility,
        <span>user-friendly interfaces, </span> and seamless integration for
        dynamic, <span> responsive websites.</span>.
      </>,
    ],
    cardList: [
      {
        id: 1,
        image: <TargetAudience />,
        title: "Design Services",
        list: [
          <>Creative, user-centric designs.</>,
          <>Responsive layouts for accessibility.</>,
          <>Customized themes reflecting the brand.</>,
          <>Seamless integration of plugins/features.</>,
        ],
      },
      {
        id: 2,
        image: <ROI />,
        title: "Wordpress Strategy",
        list: [
          <>Strategic planning for effective implementation.</>,
          <>Tailored solutions aligning with business goals.</>,
          <>Continuous improvement based on analytics.</>,
          <>Scalable strategies for evolving needs.</>,
        ],
      },
      {
        id: 3,
        image: <Competition />,
        title: "UI/UX Design",
        list: [
          <>Intuitive user experiences for engagement.</>,
          <>Visually appealing, user-friendly interfaces.</>,
          <>Streamlined navigation for optimal usability.</>,
          <>Consistent design language for brand cohesion.</>,
        ],
      },
      {
        id: 4,
        image: <GeoTargetting />,
        title: "Ongoing Support",
        list: [
          <>Continuous development for evolving needs</>,
          <>Regular updates for security and performance</>,
          <>Prompt support for technical issues.</>,
          <>Proactive monitoring and maintenance.</>,
        ],
      },
      {
        id: 5,
        image: <LongTermPartnership />,
        title: "Pros and Cons",
        list: [
          <>User-friendly content management.</>,
          <>SEO-friendly structure for better visibility.</>,
          <>Requires regular updates for security.</>,
          <>Customization may need coding expertise</>,
        ],
      },
      {
        id: 6,
        image: <SME />,
        title: "Sociomatic Way",
        list: [
          <>Tailored designs reflecting brand identity.</>,
          <>Expert consultation for optimal customization.</>,
          <>Seamless integration of design elements.</>,
          <>Ongoing support and security measures.</>,
        ],
      },
    ],
  },
  ourPackages: {
    highlighter: "Our Packages",
    H2: (
      <>
        Tailor-made Packages to Help Your Business&nbsp;
        <span className="text-secondary">Grow</span>
      </>
    ),
    paragraphs: [
      <>
        We&apos;ll listen to your goals and complete a free audit to discover if
        we&apos;re a great fit to work with each other.
      </>,
    ],
    packageList: [
      {
        id: 1,
        image: <Starter />,
        title: "Starter",
        H1: "$2000",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Basic WordPress site",
          "Essential plugins and themes",
          "Standard data analytics",
          "Up to 5 pages",
        ],
        link: "/",
      },
      {
        id: 2,
        image: <Popular />,
        title: "Popular",
        H1: "$2500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Advanced WordPress development",
          "Enhanced customization options.",
          "Comprehensive plugins and themes",
          "In-depth data analytics",
          "Basic SEO optimization",
          "UI/UX Included",
          "Up to 15 pages",
        ],
        link: "/",
      },
      {
        id: 3,
        image: <Premium />,
        title: "Premium",
        H1: "$3500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Premium WordPress development",
          "Extensive customization",
          "Full suite of plugins/themes",
          "Advanced data analytics",
          "SEO optimization",
          "Ongoing support",
          "UI/UX Included",
          "Up to 25 pages",
        ],
        link: "/",
      },
    ],
  },
  testimonial: {
    highlighter: "Testimonials",
    H2: <>Don&apos;t Take Our Words, We Embrace Their</>,
    paragraphs: [
      <>
        Our <span>satisfied</span> clients are from all over the world. We
        understand your requirements and deliver <span>growth</span>, no fluff.
      </>,
    ],
    testimonialList: [
      {
        id: 1,
        name: "Khurraminam_",
        country: "english.svg",
        imageSlug: "user1",
        testimonial: (
          <>
            Yeatiq was amazing to work with delivering on exactly what was
            promised. Will definitely be using him for future projects. Highly
            recommended
          </>
        ),
      },
      {
        id: 2,
        name: "Ricjam",
        country: "usa.svg",
        imageSlug: "user2",
        testimonial: (
          <>
            Yeatiq was awesome to work with. He was very communicative and
            delivered the work on time. I will definitely recommend his services
            and will be using him again for future work. Great job Yeatiq.
          </>
        ),
      },
      {
        id: 3,
        name: "paulhelmick",
        country: "usa.svg",
        imageSlug: "user3",
        testimonial: (
          <>
            Exceptional understanding of our need. Great communication via zoom
            call. Above and beyond work and talent to help get things working
            and configured well.
          </>
        ),
      },
    ],
  },
  faqData: {
    highlighter: "",
    H2: <>Frequently Asked Questions</>,
    paragraphs: [
      <>
        We are more than a generic agency. Explore our Services and our&apos;
        <span>solutions</span> for your business.
      </>,
    ],
    qnaList: [
      {
        id: 1,
        title: "Why is Wordpress a good options for my website?",
        details:
          "Wordpress is perfect for many websites because it's flexible, user-friendly, and has a large ecosystem of plugins, And it's cost-effective",
      },
      {
        id: 2,
        title: "Does sociomatic offer Wordpress theme customization?",
        details:
          "Sociomatic does theme customization so that your wordpress website reflects your tastes and brand identity",
      },
      {
        id: 3,
        title: "Does Sociomatic provide Wordpress e-commerce solutions?",
        details:
          "Yes, Sociomatic offers reliable e-commerce solutions. It integrates WooCommerce plugins to enable smooth online transactions.",
      },
      {
        id: 4,
        title: "Can I move my current website to Wordpress?",
        details:
          "Sociomatic quickly moves content and functionality from other platforms to Wordpress",
      },
      {
        id: 5,
        title: "Why does Sociomatic use Wordpess security measures?",
        details:
          "To proect your Wordpress website from possible attacks, Sociomatic uses security plugins, fequent updates, and SSL integration",
      },
    ],
  },
};

export const ContentWringAndSEOServicePageData = {
  herosection: {
    H1: (
      <>
        Content & SEO for <span>Brand Boost</span>
      </>
    ),
    P: (
      <>
        Sociomatic enhances your brand by using professional content-making and
        SEO optimization to guarantee growth and excellence in online
        visibility.
      </>
    ),
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    brands: false,
    background: "HeroBackgroundServices",
  },
  whyChooseSection: {
    videoThumbnail: "whyChooseVideo.png",
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    H2: (
      <>
        Why Choose The <span>Sociomatic</span>?
      </>
    ),
    list: [
      <>
        <span>Expert Content Creation:</span> Engage audiences with compelling,
        tailored content for maximum impact
      </>,
      <>
        <span>Strategic SEO Optimization</span> Elevate online visibility
        through targeted SEO strategies for increased search engine rankings
      </>,
      <>
        <span>Collaboration:</span> Work closely with skilled Sociomatic
        professionals, ensuring seamless communication and client-focused
        collaboration.
      </>,
      <>
        <span>Proven Track Record</span> Trust Sociomatic for proven, compelling
        content and SEO solutions for diverse clients success.
      </>,
      <>
        <span>Tailored Approach</span> Customized strategies to align with your
        brand, ensuring unique and effective online positioning
      </>,
    ],
  },
  whyService: {
    highlighter: "What We Provide",
    H2: (
      <>
        Why&nbsp;
        <span>Conent Writing</span> & <span>SEO</span>?
      </>
    ),
    paragraphs: [
      <>
        Elevate your brand impact with Sociomatic&apos;s expert content writing
        and SEO services for online success.
      </>,
    ],
    cardList: [
      {
        id: 1,
        image: <TargetAudience />,
        title: "Strategic Content Creation",
        list: [
          <>Tailored, engaging content</>,
          <>Captivate your target audience</>,
          <>Consistent brand messaging</>,
          <>Drive customer engagement.</>,
        ],
      },
      {
        id: 2,
        image: <ROI />,
        title: "SEO Optimization",
        list: [
          <>Elevate search engine rankings</>,
          <>Boost online visibility</>,
          <>Keyword optimization strategies</>,
          <>Comphrehensive SEO audits</>,
        ],
      },
      {
        id: 3,
        image: <Competition />,
        title: "Proven Track Record",
        list: [
          <>Diverse client success</>,
          <>Trusted industry expertise</>,
          <>Demonstrated content effectiveness</>,
          <>Proven SEO results</>,
        ],
      },
      {
        id: 4,
        image: <GeoTargetting />,
        title: "Tailored Approach",
        list: [
          <>Unique brand positioning</>,
          <>Effective online presence</>,
          <>Customized SEO strategies</>,
          <>Personalized content plans</>,
        ],
      },
      {
        id: 5,
        image: <LongTermPartnership />,
        title: "Analytics-Driven Strategies",
        list: [
          <>Data-backed content decisions</>,
          <>SEO performance insights</>,
          <>Continuous optimization based on analytics</>,
          <>Track and measure campaign success</>,
        ],
      },
      {
        id: 6,
        image: <SME />,
        title: "Sociomatic Support",
        list: [
          <>Expert guidance and support</>,
          <>Transformative content strategies</>,
          <>Responsive customer assistance</>,
          <>Collaborative SEO consultations</>,
        ],
      },
    ],
  },
  ourPackages: {
    highlighter: "Our Packages",
    H2: (
      <>
        Tailor-made Packages to Help Your Business&nbsp;
        <span className="text-secondary">Grow</span>
      </>
    ),
    paragraphs: [
      <>
        We&apos;ll listen to your goals and complete a free audit to discover if
        we&apos;re a great fit to work with each other.
      </>,
    ],
    packageList: [
      {
        id: 1,
        image: <Starter />,
        title: "Starter",
        H1: "$2000",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Strategic Content Creation (Up to 10 pages)",
          "Basic SEO optimization",
          "Standard Analytics-driven Strategies",
          "Sociomatic Support (Basic)",
        ],
        link: "/",
      },
      {
        id: 2,
        image: <Popular />,
        title: "Popular",
        H1: "$2500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Strategic Content Creation (Up to 20 pages)",
          "SEO Optimization with Keyword Strategies",
          "Proven Track Record of Success",
          "Analytics-Driven Strategies (Advanced)",
          "Google Search Console.",
          "Sociomatic Support (Enhanced)",
        ],
        link: "/",
      },
      {
        id: 3,
        image: <Premium />,
        title: "Premium",
        H1: "$3500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Strategic Content Creation (Up to 30 pages)",
          "Advanced SEO Optimization with Customized Strategies",
          "Proven Track Record with Demonstrated Results",
          "Analytics-Driven Strategies (Comprehensive)",
          "Google Search Console",
          "Sociomatic Support",
        ],
        link: "/",
      },
    ],
  },
  testimonial: {
    highlighter: "Testimonials",
    H2: <>Don&apos;t Take Our Words, We Embrace Their</>,
    paragraphs: [
      <>
        Our <span>satisfied</span> clients are from all over the world. We
        understand your requirements and deliver <span>growth</span>, no fluff.
      </>,
    ],
    testimonialList: [
      {
        id: 1,
        name: "kellyday902",
        country: "usa.svg",
        imageSlug: "user1",
        testimonial: (
          <>
            Great work! Very efficient and thorough. English is perfect and that
            helps when doing these sorts of projects. I will hire him again!
          </>
        ),
      },
      {
        id: 2,
        name: "patrickwacker",
        country: "germany.svg",
        imageSlug: "user2",
        testimonial: (
          <>
            Very explicit with vivid documentation, which went beyond my
            expectations. The delivery time was a tiny bit beyond the agreed
            time, which did not detract from the quality at all. I am already
            looking forward to further cooperation and recommend the service
            unreservedly.
          </>
        ),
      },
      {
        id: 3,
        name: "shimone1995",
        country: "usa.svg",
        imageSlug: "user3",
        testimonial: (
          <>
            Yeatiq is a great seller. I highly recommend.... His communication
            is great. And he informed me every step of the way.
          </>
        ),
      },
    ],
  },
  faqData: {
    highlighter: "",
    H2: <>Frequently Asked Questions</>,
    paragraphs: [
      <>
        We are more than a generic agency. Explore our Services and our&apos;
        <span>solutions</span> for your business.
      </>,
    ],
    qnaList: [
      {
        id: 1,
        title: "How Does Content Writing Help SEO?",
        details:
          "Quality content enhances search engine visibility, engages users, and contributes to a higher ranking on search engine results pages ",
      },
      {
        id: 2,
        title: "Can Sociomatic create content for my specific industry?",
        details:
          "Sociomatic offers industry-specific content creation to ensure relevance and resonance with your target audience.",
      },
      {
        id: 3,
        title: "What is the turnaround time for SEO results?",
        details:
          "SEO turnaround times differ, but Sociomatic uses tactics for long-term, steady gains that are usually apparent in a few months.",
      },
      {
        id: 4,
        title: "Does Sociomatic carry out keyword analysis for SEO?",
        details:
          "Absolutely; Sociomatic conducts in-depth keyword research to find and target your company's most advantageous and pertinent terms.",
      },
      {
        id: 5,
        title: "Can I ask for changes to the content that Sociomatic created?",
        details:
          "Sociomatic is happy to receive feedback and adjustments to ensure the material is consistent with your brand voice and goals.",
      },
    ],
  },
};

export const SocialMediaAdsServicePageData = {
  herosection: {
    H1: (
      <>
        <span>Boost</span> Your Social Media Presence Wisely
      </>
    ),
    P: (
      <>
        Maximize your brand&apos;s reach and engagement with Sociomatic&apos;s
        expert management of Facebook, Instagram, LinkedIn, TikTok, Twitter, and
        Pinterest Ads. Boost your social presence today.
      </>
    ),
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    brands: false,
    background: "HeroBackgroundServices",
  },
  whyChooseSection: {
    videoThumbnail: "whyChooseVideo.png",
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    H2: (
      <>
        Why Choose The <span>Sociomatic</span>?
      </>
    ),
    list: [
      <>
        <span>Expert Management:</span> Proven proficiency in optimizing social
        media paid ads for maximum impact.
      </>,
      <>
        <span>Multi-Platform Mastery:</span> Seamlessly navigate Facebook,
        Instagram, LinkedIn, Twitter, and Pinterest Ads.
      </>,
      <>
        <span>Strategic Targeting:</span> Precise audience targeting for
        increased engagement and conversion rates.
      </>,
      <>
        <span>Analytics-Driven Optimization:</span> Continuous refinement based
        on data insights for optimal ad performance.
      </>,
      <>
        <span>Customized Campaigns:</span> Tailored ad campaigns aligning with
        brand goals and industry trends.
      </>,
      <>
        <span>Sociomatic Support:</span> Dedicated support and consultation for
        effective social media ad strategies.
      </>,
    ],
  },
  whyService: {
    highlighter: "What We Provide",
    H2: (
      <>
        Why&nbsp;
        <span>Social Media Paid Ads</span>?
      </>
    ),
    paragraphs: [
      <>
        Utilize Sociomatic&apos;s skilled Social Media Paid Ads to elevate your
        business. For digital success, precise targeting, innovative solutions,
        and committed support are required.
      </>,
    ],
    cardList: [
      {
        id: 1,
        image: <TargetAudience />,
        title: "Targeted Audience Reach",
        list: [
          <>Precision targeting strategies</>,
          <>Engage your ideal audience</>,
          <>Maximize ad visibility</>,
          <>Demographic and interest-based targeting</>,
        ],
      },
      {
        id: 2,
        image: <ROI />,
        title: "Enhanced Brand Awereness",
        list: [
          <>Boost brand recognition</>,
          <>Strategic ad placements</>,
          <>Elevate brand visibility</>,
          <>Consistent online presence</>,
        ],
      },
      {
        id: 3,
        image: <Competition />,
        title: "Conversion-Driven Campaigns",
        list: [
          <>Drive targated conversions</>,
          <>Optimize for lead generation</>,
          <>Track conversion metrics</>,
          <>Tailored call-to-action strategics</>,
        ],
      },
      {
        id: 4,
        image: <GeoTargetting />,
        title: "Data-Driven Insights",
        list: [
          <>Analyze performance metrics</>,
          <>Refine strategies based on data</>,
          <>Continuous optimization efforts</>,
          <>Measure campaign success</>,
        ],
      },
      {
        id: 5,
        image: <LongTermPartnership />,
        title: "Creative Ad Solutions",
        list: [
          <>Customized ad creatives</>,
          <>Diverse ad formats</>,
          <>Compelling copywriting strategies</>,
          <>Visual storytelling techniques</>,
        ],
      },
      {
        id: 6,
        image: <SME />,
        title: "Sociomatic Support",
        list: [
          <>Expert consultation available</>,
          <>Responsive issue resolution</>,
          <>Collaborative ad strategy planning</>,
          <>Ongoing performance monitoring</>,
        ],
      },
    ],
  },
  ourPackages: {
    highlighter: "Our Packages",
    H2: (
      <>
        Tailor-made Packages to Help Your Business&nbsp;
        <span className="text-secondary">Grow</span>
      </>
    ),
    paragraphs: [
      <>
        We&apos;ll listen to your goals and complete a free audit to discover if
        we&apos;re a great fit to work with each other.
      </>,
    ],
    packageList: [
      {
        id: 1,
        image: <Starter />,
        title: "Starter",
        H1: "$2000",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Basic Ad Campaign Setup",
          "Targeted Ad Placements",
          "Standard Analytics Reporting",
          "Sociomatic Support (Basic)",
        ],
        link: "/",
      },
      {
        id: 2,
        image: <Popular />,
        title: "Popular",
        H1: "$2500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Advanced Ad Campaign Setup",
          "Targeted Ad Placements (Extended)",
          "Enhanced Analytics and Reporting",
          "A/B Testing for Ad Performance",
          "Sociomatic Support (Priority)",
        ],
        link: "/",
      },
      {
        id: 3,
        image: <Premium />,
        title: "Premium",
        H1: "$3500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Premium Ad Campaign Setup",
          "Comprehensive Targeted Ad Placements",
          "Advanced Analytics and Reporting",
          "A/B Testing for Ad Performance",
          "Customized Ad Creatives and Copies",
          "Sociomatic Support (Priority + Ongoing Consultation)",
        ],
        link: "/",
      },
    ],
  },
  testimonial: {
    highlighter: "Testimonials",
    H2: <>Don&apos;t Take Our Words, We Embrace Their</>,
    paragraphs: [
      <>
        Our <span>satisfied</span> clients are from all over the world. We
        understand your requirements and deliver <span>growth</span>, no fluff.
      </>,
    ],
    testimonialList: [
      {
        id: 1,
        name: "malia13",
        country: "fiji.svg",
        imageSlug: "user1",
        testimonial: (
          <>
            Yeatiq was very easy to work with. He did an excellent job at
            communicating with me and guiding me through the things I needed to
            know to get the most out of this gig. I tried doing what he did for
            me and gave up multiple times! I just wish I had thought of using
            his services sooner! Would definitely recommend!
          </>
        ),
      },
      {
        id: 2,
        name: "togs_swimwear",
        country: "australia.svg",
        imageSlug: "user2",
        testimonial: (
          <>
            Yeatiq is thorough and trustworthy. Gets the job done in a timely
            and professional manner. I would not hesitate to use him again in
            the future. This is my second time using Yeatiq.
          </>
        ),
      },
      {
        id: 3,
        name: "revivos",
        country: "israel.svg",
        imageSlug: "user3",
        testimonial: <>great service thanks</>,
      },
    ],
  },
  faqData: {
    highlighter: "",
    H2: <>Frequently Asked Questions</>,
    paragraphs: [
      <>
        We are more than a generic agency. Explore our Services and our&apos;
        <span>solutions</span> for your business.
      </>,
    ],
    qnaList: [
      {
        id: 1,
        title: "Why Should I Invest in Paid Social Media Advertising?",
        details:
          "By reaching a more diverse and focused audience, sponsored social media advertisements increase brand visibility, engagement, and sales rates.",
      },
      {
        id: 2,
        title: "Which websites does Sociomatic offer paid advertising on",
        details:
          "Sociomatic provides complete social media advertising across major platforms, including Facebook, Instagram, LinkedIn, Twitter, and Pinterest",
      },
      {
        id: 3,
        title:
          "How can I evaluate whether my social media marketing plan is successful?",
        details:
          "Conversions, click-through rates, and engagement are examples of metrics that provide information about your social media advertisements' effectiveness.",
      },
      {
        id: 4,
        title: "Can Sociomatic create ad creatives for my campaign?",
        details:
          "In response to your campaign objectives, Sociomatic offers innovative advertising solutions, including copywriting, graphics, and strategic planning.",
      },
      {
        id: 5,
        title:
          "Does Sociomatic provide continuous social media ad optimization?",
        details:
          "Certainly, Sociomatic continuously optimizes social media ad campaigns based on performance data, ensuring maximum return on investment (ROI)",
      },
    ],
  },
};

export const ShopifyDevelopmentServicePageData = {
  herosection: {
    H1: (
      <>
        Elevate Your <span>Ecommerce</span> Websites with Shopify
      </>
    ),
    P: (
      <>
        Dive into Shopify Symphony, Where seamless web development meets
        marketing brilliance for unparalleled e-commerce success.
      </>
    ),
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    brands: false,
    background: "HeroBackgroundServices",
  },
  whyChooseSection: {
    videoThumbnail: "whyChooseVideo.png",
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    H2: (
      <>
        Why Choose The <span>Sociomatic</span>?
      </>
    ),
    list: [
      <>
        <span>Responsive Design Excellence:</span> Expertise in creating Shopify
        stores with responsive design, ensuring seamless user experience across
        devices.
      </>,
      <>
        <span>Innovative Feature Integration:</span> Integration of cutting-edge
        features for Shopify, enhancing functionality and user engagement
      </>,
      <>
        <span>User-Centric Design:</span> Prioritize user experience in Shopify
        web development, creating intuitive interfaces for enhanced customer
        satisfaction.
      </>,
      <>
        <span>Timely Project Delivery:</span> Attach to efficient timelines in
        Shopify web development projects, ensuring swift delivery without
        compromising quality.
      </>,
    ],
  },
  whyService: {
    highlighter: "What We Provide",
    H2: (
      <>
        Why&nbsp;
        <span>Shopify Store Development</span>?
      </>
    ),
    paragraphs: [
      <>
        Utilize Sociomatic&apos;s skilled Social Media Paid Ads to elevate your
        business. For digital success, precise targeting, innovative solutions,
        and committed support are required.
      </>,
    ],
    cardList: [
      {
        id: 1,
        image: <TargetAudience />,
        title: "Ease of Use",
        list: [
          <>User-friendly interface</>,
          <>Intuitive content management</>,
          <>Streamlined store management</>,
          <>Quick setup and launch</>,
        ],
      },
      {
        id: 2,
        image: <ROI />,
        title: "Veratility Unleashed",
        list: [
          <>Diverse theme options</>,
          <>Extensive plugin availability</>,
          <>Scalable for any business</>,
          <>Responsive design option</>,
        ],
      },
      {
        id: 3,
        image: <Competition />,
        title: "Mobile Optimization",
        list: [
          <>Responsive design principles</>,
          <>Mobile commerce capabilities</>,
          <>Enhanced mobile user experience</>,
          <>Accelerated mobile pages (AMP)</>,
        ],
      },
      {
        id: 4,
        image: <GeoTargetting />,
        title: "App Integration Mastery",
        list: [
          <>Seamless integration of Shopify apps</>,
          <>Extend functionality effortlessly</>,
          <>Optimize business operations</>,
          <>Regular app updates</>,
        ],
      },
      {
        id: 5,
        image: <LongTermPartnership />,
        title: "Payment Integration Expertise",
        list: [
          <>Integrated payment gateways</>,
          <>Smooth transaction processing</>,
          <>Enhanced customer checkout experience</>,
          <>Multiple payment options</>,
        ],
      },
      {
        id: 6,
        image: <SME />,
        title: "SEO-Ready Foundation",
        list: [
          <>SEO-friendly structure</>,
          <>Optimized product pages</>,
          <>Built-in SEO features</>,
          <>XML stemapp generation</>,
        ],
      },
    ],
  },
  ourPackages: {
    highlighter: "Our Packages",
    H2: (
      <>
        Tailor-made Packages to Help Your Business&nbsp;
        <span className="text-secondary">Grow</span>
      </>
    ),
    paragraphs: [
      <>
        We&apos;ll listen to your goals and complete a free audit to discover if
        we&apos;re a great fit to work with each other.
      </>,
    ],
    packageList: [
      {
        id: 1,
        image: <Starter />,
        title: "Starter",
        H1: "$2000",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Basic Shopify setup",
          "Standard theme customization",
          "Essential plugin integration",
          "Content upload",
          "E-commerce functionality",
          "Standard support",
          "Up to 15 products",
          "Up to 5 pages",
        ],
        link: "/",
      },
      {
        id: 2,
        image: <Popular />,
        title: "Popular",
        H1: "$2500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Advanced Shopify setup",
          "Extensive theme customization",
          "Comprehensive plugin integration",
          "Priority support",
          "Content upload",
          "E-commerce functionality",
          "Product Limit: Up to 30 products",
          "Up to 10 pages",
        ],
        link: "/",
      },
      {
        id: 3,
        image: <Premium />,
        title: "Premium",
        H1: "$3500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Premium Shopify setup",
          "Tailored theme customization",
          "Full suite of plugin integration",
          "E-commerce functionality",
          "Content upload",
          "Priority support + ongoing consultation",
          "Up to 60 products",
          "Up to 15 pages",
        ],
        link: "/",
      },
    ],
  },
  testimonial: {
    highlighter: "Testimonials",
    H2: <>Don&apos;t Take Our Words, We Embrace Their</>,
    paragraphs: [
      <>
        Our <span>satisfied</span> clients are from all over the world. We
        understand your requirements and deliver <span>growth</span>, no fluff.
      </>,
    ],
    testimonialList: [
      {
        id: 1,
        name: "brrrent",
        country: "usa.svg",
        imageSlug: "user1",
        testimonial: (
          <>
            Very happy with the work done. Will use again. I really like this
            guy. I plan on working with him more.
          </>
        ),
      },
      {
        id: 2,
        name: "ricjam",
        country: "usa.svg",
        imageSlug: "user2",
        testimonial: (
          <>
            Yeatiq was awesome to work with. He was very communicative and
            delivered the work on time. I will definitely recommend his services
            and will be using him again for future work. Great job Yeatiq.
          </>
        ),
      },
      {
        id: 3,
        name: "damiantenbohmer",
        country: "australia.svg",
        imageSlug: "user3",
        testimonial: (
          <>
            Very fast and efficient, knows his stuff and got it done in a
            timeframe that would have taken me much longer. Thank you…
          </>
        ),
      },
    ],
  },
  faqData: {
    highlighter: "",
    H2: <>Frequently Asked Questions</>,
    paragraphs: [
      <>
        We are more than a generic agency. Explore our Services and our&apos;
        <span>solutions</span> for your business.
      </>,
    ],
    qnaList: [
      {
        id: 1,
        title: "Why should I use Shopify for my online business?",
        details:
          "Shopify is perfect for practical and eye-catching online stores since it provides a secure platform, flexible customization options, and ease of use.",
      },
      {
        id: 2,
        title:
          "Is it possible for Sociomatic to move my current store to Shopify?",
        details:
          "Absolutely, Sociomatic makes migrating to the Shopify platform easier by maintaining data and functionality.",
      },
      {
        id: 3,
        title: "What features can Sociomatic integrate into my Shopify store?",
        details:
          "Sociomatic can improve your Shopify store by integrating features like personalized product displays, comprehensive analytics, and tailored checkout experiences.",
      },
      {
        id: 4,
        title: "Can Sociomatic help my Shopify store with continuous support?",
        details:
          "Of course, Sociomatic provides continuous assistance to make sure your Shopify store stays safe, optimized, and in line with your company objectives.",
      },
      {
        id: 5,
        title: "How long does the Shopify store development process take?",
        details:
          "Project scope determines timelines, but Sociomatic prioritizes speedy development without sacrificing quality.",
      },
    ],
  },
};

export const SoftwareDevelopmentServicePageData = {
  herosection: {
    H1: (
      <>
        We Craft <span>World Class</span> Agile Product on Demand
      </>
    ),
    P: (
      <>
        Helping businesses go online and grow bigger with high-tech web
        applications.
      </>
    ),
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    brands: false,
    background: "HeroBackgroundServices",
  },
  whyChooseSection: {
    videoThumbnail: "whyChooseVideo.png",
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    H2: (
      <>
        Why Choose The <span>Sociomatic</span>?
      </>
    ),
    list: [
      <>
        <span>Induvidual Entity:</span> Depend on our custom platform
        development services to establish a secure system, enhancing all sorts
        of information you need to find solution of your pain point.
      </>,
      <>
        <span>Small Industries:</span>
        We can develop a personalized web solution highlighting your products or
        services, enhancing your online visibility and operational efficiency.
      </>,
      <>
        <span>Medium Businesses and Enterprises:</span> Maximize the advantages
        of our tailor-made web applications and e-commerce solutions, designed
        to streamline your operations and foster the scalable growth of your
        business.
      </>,
      <>
        <span>Startups:</span> Depending on our proficiency in constructing your
        website or web application from the ground up, you are receiving
        essential guidance to align with your overall digital plan.
      </>,
    ],
  },
  whyService: {
    highlighter: "What We Provide",
    H2: (
      <>
        Why&nbsp;
        <span>Software Development</span> with sociomatic?
      </>
    ),
    paragraphs: [
      <>
        We follow an agile methodology to deliver high-quality tasks to meet
        established deadlines. A business can choose the software outsourcing
        model that best matches its needs. We will help them increase their core
        competencies.
      </>,
    ],
    cardList: [
      {
        id: 1,
        image: <TargetAudience />,
        title: "Team Augmentation",
        list: [
          <>Seamless collaboration with experts</>,
          <>Boosted workflow assurance</>,
          <>Tackle complex projects confidently</>,
          <>Enhances in-house team dynamics</>,
        ],
      },
      {
        id: 2,
        image: <ROI />,
        title: "Project Development",
        list: [
          <>Transform ideas into top-notch products.</>,
          <>Efficient, cost-effective process</>,
          <>Deliver ready-for-testing products</>,
          <>Emphasis on user-friendly designs</>,
        ],
      },
      {
        id: 3,
        image: <Competition />,
        title: "MVP Services",
        list: [
          <>Experienced MVP development firm</>,
          <>Assistance from ideation to delivery</>,
          <>Comprehensive end-to-end service</>,
          <>Rapid prototype development</>,
        ],
      },
      {
        id: 4,
        image: <GeoTargetting />,
        title: "Offshore Development",
        list: [
          <>Outsource to an offshore team</>,
          <>Functions as an in-house extension</>,
          <>Accelerates project timelines</>,
          <>Time zone flexibility advantages</>,
        ],
      },
      {
        id: 5,
        image: <LongTermPartnership />,
        title: "Marketing & Branding",
        list: [
          <>
            <Link href="/serivces/social-media-paid-ads">
              Social Media Paid Ads
            </Link>
          </>,
          <>
            <Link href="/serivces/google-paid-ads">Google Paid Ads</Link>
          </>,
          <>
            <Link href="/serivces/data-analytics">Data Analytics</Link>
          </>,
          <>
            <Link href="/serivces/ui-ux-and-graphic-design">
              UI/UX and Graphic Design
            </Link>
          </>,
        ],
      },
      {
        id: 6,
        image: <SME />,
        title: "Technology Agnostic",
        list: [
          <>Solution for specific pain points</>,
          <>Prioritize compatibility overabundance</>,
          <>Adopt any needed technology</>,
          <>Integration with existing system</>,
        ],
      },
    ],
  },
  ourPackages: {
    highlighter: "Our Packages",
    H2: (
      <>
        Tailor-made Packages to Help Your Business&nbsp;
        <span className="text-secondary">Grow</span>
      </>
    ),
    paragraphs: [
      <>
        We&apos;ll listen to your goals and complete a free audit to discover if
        we&apos;re a great fit to work with each other.
      </>,
    ],
    packageList: [
      {
        id: 1,
        image: <Starter />,
        title: "Starter",
        H1: "$2000",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Basic Shopify setup",
          "Standard theme customization",
          "Essential plugin integration",
          "Content upload",
          "E-commerce functionality",
          "Standard support",
          "Up to 15 products",
          "Up to 5 pages",
        ],
        link: "/",
      },
      {
        id: 2,
        image: <Popular />,
        title: "Popular",
        H1: "$2500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Advanced Shopify setup",
          "Extensive theme customization",
          "Comprehensive plugin integration",
          "Priority support",
          "Content upload",
          "E-commerce functionality",
          "Product Limit: Up to 30 products",
          "Up to 10 pages",
        ],
        link: "/",
      },
      {
        id: 3,
        image: <Premium />,
        title: "Premium",
        H1: "$3500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Premium Shopify setup",
          "Tailored theme customization",
          "Full suite of plugin integration",
          "E-commerce functionality",
          "Content upload",
          "Priority support + ongoing consultation",
          "Up to 60 products",
          "Up to 15 pages",
        ],
        link: "/",
      },
    ],
  },
  testimonial: {
    highlighter: "Testimonials",
    H2: <>Don&apos;t Take Our Words, We Embrace Their</>,
    paragraphs: [
      <>
        Our <span>satisfied</span> clients are from all over the world. We
        understand your requirements and deliver <span>growth</span>, no fluff.
      </>,
    ],
    testimonialList: [
      {
        id: 1,
        name: "iziweb",
        country: "netherlands.svg",
        imageSlug: "user1",
        testimonial: (
          <>
            Again great example of amazing services provided by Yeatic. Very
            happy with the work delivery!
          </>
        ),
      },
      {
        id: 2,
        name: "locofinance",
        country: "switzerland.svg",
        imageSlug: "user2",
        testimonial: (
          <>
            I&apos;m impressed with the service! Very fast response, very
            competent service and fast aswell! 😄
          </>
        ),
      },
      {
        id: 3,
        name: "danschreiber",
        country: "usa.svg",
        imageSlug: "user3",
        testimonial: (
          <>
            Nice work done on time. Also helpful explainer videos included.
            Would recommend!
          </>
        ),
      },
    ],
  },
  faqData: {
    highlighter: "",
    H2: <>Frequently Asked Questions</>,
    paragraphs: [
      <>
        We are more than a generic agency. Explore our Services and our&apos;
        <span>solutions</span> for your business.
      </>,
    ],
    qnaList: [
      {
        id: 1,
        title: "Why should my company use custom software development?",
        details:
          "Tailored software provides flexible, scalable solutions that precisely match your company's goals and requirements.",
      },
      {
        id: 2,
        title:
          "What technologies does Sociomatic use for software development?",
        details:
          "Depending on the particular needs of the project, Sociomatic uses a variety of technologies, such as Python, Java, Ruby, and others.",
      },
      {
        id: 3,
        title:
          "Can Sociomatic integrate my existing systems with new software?",
        details:
          "To guarantee efficiency and compatibility while integrating new software into current systems, Sociomatic offers seamless integration solutions.",
      },
      {
        id: 4,
        title: "What is the duration required for developing custom software?",
        details:
          "Project complexity determines timelines, but Sociomatic prioritizes speedy development without sacrificing quality.",
      },
      {
        id: 5,
        title:
          "Does Sociomatic provide continuous assistance for personalized software?",
        details:
          "Sociomatic offers continuous support to ensure your unique software stays current, safe, and in line with changing company requirements.",
      },
    ],
  },
};

export const UIUXandGraphicDesignServicePageData = {
  herosection: {
    H1: (
      <>
        Crafting Digital <span>Masterpieces</span> with <span>Design</span>
      </>
    ),
    P: (
      <>
        Discover design brilliance with Sociomatic. Boost your brand with
        superior <span>UI/UX</span> and <span>Graphic Design</span>, where
        creativity and mastery live together.
      </>
    ),
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    brands: false,
    background: "HeroBackgroundServices",
  },
  whyChooseSection: {
    videoThumbnail: "whyChooseVideo.png",
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    H2: (
      <>
        Why Choose The <span>Sociomatic</span>?
      </>
    ),
    list: [
      <>
        <span>User Experience (UX) Development:</span> Tailor exceptional
        digital journeys that captivate users, blending intuitive navigation
        with seamless interactions for a truly immersive experience.
      </>,
      <>
        <span>User Interface (UI) Development:</span>
        Craft visually stunning interfaces that fuse technology and design,
        amplifying user engagement and satisfaction while reflecting your
        brand&apos;s essence.
      </>,
      <>
        <span>Cross-platform Experience Design:</span> Create cohesive user
        experiences across devices, ensuring seamless interaction and engagement
        on any platform. Our designs bridge the digital divide effortlessly.
      </>,
      <>
        <span>Mobile-first and Responsive Design:</span> Prioritize mobile
        experiences with responsive design, ensuring optimal functionality and
        aesthetics across diverse screen sizes. Seamlessly adapt your content to
        captivate users wherever they are.
      </>,
    ],
  },
  whyService: {
    highlighter: "What We Provide",
    H2: (
      <>
        Why&nbsp;
        <span>UI/UX and Graphic Design</span> with sociomatic?
      </>
    ),
    paragraphs: [
      <>
        We follow an agile methodology to deliver high-quality tasks to meet
        established deadlines. A business can choose the software outsourcing
        model that best matches its needs. We will help them increase their core
        competencies.
      </>,
    ],
    cardList: [
      {
        id: 1,
        image: <TargetAudience />,
        title: "UI/UX Design Services",
        list: [
          <>Creative captivating app experiences</>,
          <>Harmonize design for all platforms</>,
          <>Ensure seamless navigation</>,
          <>Deliver visually stunning interfaces</>,
        ],
      },
      {
        id: 2,
        image: <ROI />,
        title: "UI/UX Consulting",
        list: [
          <>Unlock full platform potential</>,
          <>Analyze user behaviors</>,
          <>Provide strategic insights</>,
          <>Enhance usability and conversions</>,
        ],
      },
      {
        id: 3,
        image: <Competition />,
        title: "Web Design Services",
        list: [
          <>Seamlessly fuse aesthetics and usability</>,
          <>Craft impactful digital product designs</>,
          <>Tailor designs to brand identity</>,
          <>Ensure seamless navigation and engagement</>,
        ],
      },
      {
        id: 4,
        image: <GeoTargetting />,
        title: "Creative Branding",
        list: [
          <>Unique Logo Design</>,
          <>Brand Identity Creation</>,
          <>Graphic Style Guides</>,
          <>Visual Branding Expertise</>,
        ],
      },
      {
        id: 5,
        image: <LongTermPartnership />,
        title: "Striking Visuals",
        list: [
          <>Custom Illustrations</>,
          <>Infographics Mastery</>,
          <>Vibrant Image Editing</>,
          <>Visual Storytelling</>,
        ],
      },
      {
        id: 6,
        image: <SME />,
        title: "Print & Digital Design",
        list: [
          <>Print Material Design</>,
          <>Digital Ad creatives</>,
          <>Web Graphics Excellence</>,
          <>Responsive Design Solutions</>,
        ],
      },
    ],
  },
  ourPackages: {
    highlighter: "Our Packages",
    H2: (
      <>
        Tailor-made Packages to Help Your Business&nbsp;
        <span className="text-secondary">Grow</span>
      </>
    ),
    paragraphs: [
      <>
        We&apos;ll listen to your goals and complete a free audit to discover if
        we&apos;re a great fit to work with each other.
      </>,
    ],
    packageList: [
      {
        id: 1,
        image: <Starter />,
        title: "Starter",
        H1: "$2000",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Small to Medium project",
          "Basic wireframes for essential layouts",
          "Basic graphic elements",
          "Limited revisions",
          "User Testing: Not included",
          "Standard delivery time",
          "Standard support",
          "Up to 15 products",
          "Up to 5 pages",
        ],
        link: "/",
      },
      {
        id: 2,
        image: <Popular />,
        title: "Popular",
        H1: "$2500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Medium to Large project",
          "Detailed wireframes for key pages",
          "Enhanced graphic elements",
          "Moderate revisions",
          "Basice user testing",
          "Accelerated delivery time",
          "Collaborative sessions to enhance brand identity",
          "Ensure seamless design across various devices",
          "Integration of custom illustrations for a unique touch",
        ],
        link: "/",
      },
      {
        id: 3,
        image: <Premium />,
        title: "Premium",
        H1: "$3500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Large to Enterprise project",
          "Comprehensive wireframes for all pages",
          "Advanced graphic elements",
          "Extensive revisions",
          "In-depth user testing with feedback analysis",
          "Priority delivery time",
          "Collaborative sessions to enhance brand identity",
          "Ensure seamless design across various devices",
          "Integration of custom illustrations for a unique touch",
          "Interactive prototypes for a comprehensive user experience",
          "Tailored icon sets for a distinctive visual language",
          "Comprehensive usability testing with detailed feedback",
          "Dedicated Project Manager",
        ],
        link: "/",
      },
    ],
  },
  testimonial: {
    highlighter: "Testimonials",
    H2: <>Don&apos;t Take Our Words, We Embrace Their</>,
    paragraphs: [
      <>
        Our <span>satisfied</span> clients are from all over the world. We
        understand your requirements and deliver <span>growth</span>, no fluff.
      </>,
    ],
    testimonialList: [
      {
        id: 1,
        name: "jasontwomey",
        country: "usa.svg",
        imageSlug: "user1",
        testimonial: (
          <>
            legend, very helpful setting up google and also spotted some website
            errors, look forward to working with you again
          </>
        ),
      },
      {
        id: 2,
        name: "gmiller1990",
        country: "australia.svg",
        imageSlug: "user2",
        testimonial: (
          <>
            Yeatiq is lightning fast. Definitely message him with questions
            before starting the gig because he treats the fiverr chat like his
            personal text messages - very responsive and helpful! We created a
            custom offering based on my unique issues and he walked me through
            step by step what he was doing and why. He way over-delivered
          </>
        ),
      },
      {
        id: 3,
        name: "jenniferdyer494",
        country: "usa.svg",
        imageSlug: "user3",
        testimonial: (
          <>
            This seller is so great to work with. One of the downsides of
            working with Fiverr online is that it&apos;s not always easy to
            communicate. This seller did an exceptional job sending a very
            detailed video explanation of what he did to fix my Google issue.
            This is not an area I know anything about and even so, he made his
            description of what he completed very easy for me to understand.
            I&apos;ll definitely use him again!
          </>
        ),
      },
    ],
  },
  faqData: {
    highlighter: "",
    H2: <>Frequently Asked Questions</>,
    paragraphs: [
      <>
        We are more than a generic agency. Explore our Services and our&apos;
        <span>solutions</span> for your business.
      </>,
    ],
    qnaList: [
      {
        id: 1,
        title: "Why invest in professional UI/UX design?",
        details:
          "Expert UI/UX design improves user experience, perception of the brand, and general functionality, which raises engagement and increases conversions.",
      },
      {
        id: 2,
        title: "Can Sociomatic design unique visuals for my company?",
        details:
          "Sociomatic provides customized graphic design services, such as logo creation, branding materials, and images that match your company's identity.",
      },
      {
        id: 3,
        title:
          "How does UI/UX design affect the functionality of an app or website?",
        details:
          "Good UI/UX design boosts user happiness, lowers bounce rates, and enables more straightforward user navigation, contributing to better performance.",
      },
      {
        id: 4,
        title: "What graphic design tools does Sociomatic employ?",
        details:
          "Sociomatic uses industry-standard software like Adobe Creative Suite to guarantee expert and high-caliber graphic design results.",
      },
      {
        id: 5,
        title: "Can Sociomatic rework the website or app I already have?",
        details:
          "Sociomatic does offer redesign services, guaranteeing a contemporary appearance while preserving or improving functionality.",
      },
    ],
  },
};

export const CustomWebDevelopmentServicePageData = {
  herosection: {
    H1: <>Custom Web Application Development Services</>,
    P: (
      <>
        Select top-notch web solutions through our meticulously crafted and
        customized web development services. CleverDev Software is committed to
        providing technological excellence tailored to your business objectives.
      </>
    ),
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    brands: false,
    background: "HeroBackgroundServices",
  },
  whyChooseSection: {
    videoThumbnail: "whyChooseVideo.png",
    videoLink: "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
    H2: (
      <>
        Why Choose The <span>Sociomatic</span>?
      </>
    ),
    list: [
      <>
        <span>Induvidual Entity:</span> Depend on our custom platform
        development services to establish a secure system, enhancing all sorts
        of information you need to find solution of your pain point.
      </>,
      <>
        <span>Small Industries:</span>
        We can develop a personalized web solution highlighting your products or
        services, enhancing your online visibility and operational efficiency.
      </>,
      <>
        <span>Medium Businesses and Enterprises:</span> Maximize the advantages
        of our tailor-made web applications and e-commerce solutions, designed
        to streamline your operations and foster the scalable growth of your
        business.
      </>,
      <>
        <span>Startups:</span> Depending on our proficiency in constructing your
        website or web application from the ground up, you are receiving
        essential guidance to align with your overall digital plan.
      </>,
    ],
  },
  whyService: {
    highlighter: "What We Provide",
    H2: (
      <>
        Why&nbsp;
        <span>Software Development</span> with sociomatic?
      </>
    ),
    paragraphs: [
      <>
        We follow an agile methodology to deliver high-quality tasks to meet
        established deadlines. A business can choose the software outsourcing
        model that best matches its needs. We will help them increase their core
        competencies.
      </>,
    ],
    cardList: [
      {
        id: 1,
        image: <TargetAudience />,
        title: "Web Solutions Tailored to Your Branding",
        list: [
          <>Tailored software for corporate style.</>,
          <>Visually appealing interface design.</>,
          <>Exceptional customer experience focus.</>,
          <>Move beyond generic templates.</>,
          <>Showcase unique products effectively</>,
        ],
      },
      {
        id: 2,
        image: <ROI />,
        title: "Customer-Driven Design",
        list: [
          <>Utilize customized web software development.</>,
          <>App architecture meeting customer needs</>,
          <>Deliver precise business results</>,
          <>Amplify industry impact</>,
          <>Enhance customer-driven experience</>,
        ],
      },
      {
        id: 3,
        image: <Competition />,
        title: "Flexibility",
        list: [
          <>Adapt to dynamic</>,
          <>Avoid vendor lock-in constraints</>,
          <>Fuel innovation with custom solutions</>,
          <>Choose a relevant tech stack</>,
          <>Stay agile in a changing landscape</>,
        ],
      },
      {
        id: 4,
        image: <GeoTargetting />,
        title: "Security",
        list: [
          <>Ensure compliance with regulations</>,
          <>Address security needs comprehensively</>,
          <>Implement robust information security</>,
          <>Maintain industry standards for development</>,
          <>Prioritize data protection measures</>,
        ],
      },
      {
        id: 5,
        image: <LongTermPartnership />,
        title: "Scalability",
        list: [
          <>Align tech assets with business growth</>,
          <>Accommodate fluctuating load requirements</>,
          <>Maintain performance standards</>,
          <>Avoid compromising user experience</>,
          <>Scale seamlessly with demand</>,
        ],
      },
      {
        id: 6,
        image: <SME />,
        title: "Business Automation",
        list: [
          <>Optimize workflows with custom development</>,
          <>Streamline operations efficiently</>,
          <>Enhance integration capabilities</>,
          <>Tailored software for business efficiency</>,
        ],
      },
    ],
  },
  ourPackages: {
    highlighter: "Our Packages",
    H2: (
      <>
        Tailor-made Packages to Help Your Business&nbsp;
        <span className="text-secondary">Grow</span>
      </>
    ),
    paragraphs: [
      <>
        We&apos;ll listen to your goals and complete a free audit to discover if
        we&apos;re a great fit to work with each other.
      </>,
    ],
    packageList: [
      {
        id: 1,
        image: <Starter />,
        title: "Starter",
        H1: "$2000",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Basic Shopify setup",
          "Standard theme customization",
          "Essential plugin integration",
          "Content upload",
          "E-commerce functionality",
          "Standard support",
          "Up to 15 products",
          "Up to 5 pages",
        ],
        link: "/",
      },
      {
        id: 2,
        image: <Popular />,
        title: "Popular",
        H1: "$2500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Advanced Shopify setup",
          "Extensive theme customization",
          "Comprehensive plugin integration",
          "Priority support",
          "Content upload",
          "E-commerce functionality",
          "Product Limit: Up to 30 products",
          "Up to 10 pages",
        ],
        link: "/",
      },
      {
        id: 3,
        image: <Premium />,
        title: "Premium",
        H1: "$3500",
        description: (
          <>
            Pariatur ut sint esse ut ea non veniam officia ipsum fugiat nisi sit
            in et.
          </>
        ),
        list: [
          "Premium Shopify setup",
          "Tailored theme customization",
          "Full suite of plugin integration",
          "E-commerce functionality",
          "Content upload",
          "Priority support + ongoing consultation",
          "Up to 60 products",
          "Up to 15 pages",
        ],
        link: "/",
      },
    ],
  },
  testimonial: {
    highlighter: "Testimonials",
    H2: <>Don&apos;t Take Our Words, We Embrace Their</>,
    paragraphs: [
      <>
        Our <span>satisfied</span> clients are from all over the world. We
        understand your requirements and deliver <span>growth</span>, no fluff.
      </>,
    ],
    testimonialList: [
      {
        id: 1,
        name: "Dflash711",
        country: "canada.svg",
        imageSlug: "user1",
        testimonial: (
          <>
            What an absolute pleasure working with Yeatiq. Professional, highly
            skilled and quick! I look forward to working with Yeatiq again.
            Thank you!
          </>
        ),
      },
      {
        id: 2,
        name: "Iziweb",
        country: "netherlands.svg",
        imageSlug: "user2",
        testimonial: <>Fantastic work! I will always come back to Yeatiq</>,
      },
      {
        id: 3,
        name: "Omcparts",
        country: "canada.svg",
        imageSlug: "user3",
        testimonial: (
          <>
            This person did what no one else could and it only took a day he is
            worth his weight in gold. thank you for all your help. I would use
            him again for sure. Best money i ever spent thanks again.
          </>
        ),
      },
    ],
  },
  faqData: {
    highlighter: "",
    H2: <>Frequently Asked Questions</>,
    paragraphs: [
      <>
        We are more than a generic agency. Explore our Services and our&apos;
        <span>solutions</span> for your business.
      </>,
    ],
    qnaList: [
      {
        id: 1,
        title: "What makes custom web development the better choice?",
        details:
          "Compared to template-based solutions, custom development offers distinctive features, scalability, and a customized user experience",
      },
      {
        id: 2,
        title: "What technologies does Sociomatic use for web development?",
        details:
          "Sociomatic uses state-of-the-art technologies including core programing language i.e. Javascript and it's library ReactJS with industry proven framework NextJS and agnostic in terms of technology preferences",
      },
      {
        id: 3,
        title: "Are you able to have Sociomatic rework my current website?",
        details:
          "To improve the look, feel, and general user experience of websites, Sociomatic does offer website redesign services.",
      },
      {
        id: 4,
        title: "How long does it take to develop a custom website?",
        details:
          "Project complexity affects timelines, but Sociomatic guarantees timely development without sacrificing quality",
      },
      {
        id: 5,
        title: "Does Sociomatic Provide ongoing website maintenance",
        details:
          "To guarantee that your website is current and safe, Sociomatic does provide continuous support and maintenance",
      },
    ],
  },
};
