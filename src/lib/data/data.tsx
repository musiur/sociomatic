import BlueGoogle from "@/components/assets/blue-google";
import Campaigns from "@/components/assets/campaigns";
import CodeCloud from "@/components/assets/code-cloud";
import Competition from "@/components/assets/competition";
import Contents from "@/components/assets/contents";
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

export const homeTestimonialData = {
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
      name: "Samuel H",
      designation: "CEO @Analyzen",
      imageSlug: "user1",
      testimonial: (
        <>
          1I have never in my life experienced service like what I received from
          thesociomatic. They finished 3 days of work in about 2 hrs. They&apos;
          <span>went above and beyond what was expected of him</span>. I will
          Hire Them again and can fully recommend them to any potential client.
        </>
      ),
    },
    {
      id: 2,
      name: "John Doe",
      designation: "CTO @Apple Inc",
      imageSlug: "user2",
      testimonial: (
        <>
          2I have never in my life experienced service like what I received from
          thesociomatic. They finished 3 days of work in about 2 hrs. They&apos;
          <span>went above and beyond what was expected of him</span>. I will
          Hire Them again and can fully recommend them to any potential client.
        </>
      ),
    },
    {
      id: 3,
      name: "Nabina Nel",
      designation: "COO @Rabble",
      imageSlug: "user3",
      testimonial: (
        <>
          3I have never in my life experienced service like what I received from
          thesociomatic. They finished 3 days of work in about 2 hrs. They&apos;
          <span>went above and beyond what was expected of him</span>. I will
          Hire Them again and can fully recommend them to any potential client.
        </>
      ),
    },
  ],
};

export const homeFAQ = {
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
      title:
        "Why should I consider your software development company as a partner?",
      details:
        "At Vivasoft, we take pride in developing high-quality applications in record time. We have 250+ experienced developers who understand the importance of agile methodologies and use cutting-edge technologies such as Java, NodeJS, AngularJS and React Native to deliver unique software solutions that provide maximum value for our clients. Our team is committed to delivering timely results while keeping costs low so you can maximize your ROI.",
    },
    {
      id: 2,
      title:
        " How does The Sociomatic stand out in the digital marketing industry?",
      details:
        "We differentiate ourselves by offering various services, providing comprehensive solutions for our clients' digital marketing needs, and delivering tangible results.",
    },
    {
      id: 3,
      title: "What is your approach to client success?",
      details:
        "We're committed to ensuring the success of our clients by identifying new digital marketing opportunities and implementing strategies to help them become market leaders and achieve an outstanding return on investment (ROI).",
    },
    {
      id: 4,
      title: "What values drive The Sociomatic's operations?",
      details:
        "Our core values include innovation, dedication, excellence, and client-centricity. We strive to bring fresh ideas and solutions, ensuring the best possible service.",
    },
    {
      id: 5,
      title:
        " How can I contact The Sociomatic for inquiries or collaboration?",
      details:
        "You can contact us through our website or our customer support team to discuss how we can assist your business. We're here to help you navigate digital marketing and achieve your goals.",
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
          "Lorem ipsum tellie testie",
          "Lorem ipsum tellie testie",
          "Lorem ipsum tellie testie",
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
          "Lorem ipsum tellie testie",
          "Lorem ipsum tellie testie",
          "Lorem ipsum tellie testie",
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
          "Lorem ipsum tellie testie",
          "Lorem ipsum tellie testie",
          "Lorem ipsum tellie testie",
        ],
        link: "/",
      },
    ],
    footerContent: {
      p: <>Consequat amet veniam qui cillum magna ipsum ipsum culpa.</>,
    },
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
        name: "Samuel H",
        designation: "CEO @Analyzen",
        imageSlug: "user1",
        testimonial: (
          <>
            1I have never in my life experienced service like what I received
            from thesociomatic. They finished 3 days of work in about 2 hrs.
            They&apos;
            <span>went above and beyond what was expected of him</span>. I will
            Hire Them again and can fully recommend them to any potential
            client.
          </>
        ),
      },
      {
        id: 2,
        name: "John Doe",
        designation: "CTO @Apple Inc",
        imageSlug: "user2",
        testimonial: (
          <>
            2I have never in my life experienced service like what I received
            from thesociomatic. They finished 3 days of work in about 2 hrs.
            They&apos;
            <span>went above and beyond what was expected of him</span>. I will
            Hire Them again and can fully recommend them to any potential
            client.
          </>
        ),
      },
      {
        id: 3,
        name: "Nabina Nel",
        designation: "COO @Rabble",
        imageSlug: "user3",
        testimonial: (
          <>
            3I have never in my life experienced service like what I received
            from thesociomatic. They finished 3 days of work in about 2 hrs.
            They&apos;
            <span>went above and beyond what was expected of him</span>. I will
            Hire Them again and can fully recommend them to any potential
            client.
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
        title:
          "Why should I consider your software development company as a partner?",
        details:
          "At Vivasoft, we take pride in developing high-quality applications in record time. We have 250+ experienced developers who understand the importance of agile methodologies and use cutting-edge technologies such as Java, NodeJS, AngularJS and React Native to deliver unique software solutions that provide maximum value for our clients. Our team is committed to delivering timely results while keeping costs low so you can maximize your ROI.",
      },
      {
        id: 2,
        title:
          " How does The Sociomatic stand out in the digital marketing industry?",
        details:
          "We differentiate ourselves by offering various services, providing comprehensive solutions for our clients' digital marketing needs, and delivering tangible results.",
      },
      {
        id: 3,
        title: "What is your approach to client success?",
        details:
          "We're committed to ensuring the success of our clients by identifying new digital marketing opportunities and implementing strategies to help them become market leaders and achieve an outstanding return on investment (ROI).",
      },
      {
        id: 4,
        title: "What values drive The Sociomatic's operations?",
        details:
          "Our core values include innovation, dedication, excellence, and client-centricity. We strive to bring fresh ideas and solutions, ensuring the best possible service.",
      },
      {
        id: 5,
        title:
          " How can I contact The Sociomatic for inquiries or collaboration?",
        details:
          "You can contact us through our website or our customer support team to discuss how we can assist your business. We're here to help you navigate digital marketing and achieve your goals.",
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
        <span className="text-secondary">data analytics?</span>?
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
        name: "Samuel H",
        designation: "CEO @Analyzen",
        imageSlug: "user1",
        testimonial: (
          <>
            1I have never in my life experienced service like what I received
            from thesociomatic. They finished 3 days of work in about 2 hrs.
            They&apos;
            <span>went above and beyond what was expected of him</span>. I will
            Hire Them again and can fully recommend them to any potential
            client.
          </>
        ),
      },
      {
        id: 2,
        name: "John Doe",
        designation: "CTO @Apple Inc",
        imageSlug: "user2",
        testimonial: (
          <>
            2I have never in my life experienced service like what I received
            from thesociomatic. They finished 3 days of work in about 2 hrs.
            They&apos;
            <span>went above and beyond what was expected of him</span>. I will
            Hire Them again and can fully recommend them to any potential
            client.
          </>
        ),
      },
      {
        id: 3,
        name: "Nabina Nel",
        designation: "COO @Rabble",
        imageSlug: "user3",
        testimonial: (
          <>
            3I have never in my life experienced service like what I received
            from thesociomatic. They finished 3 days of work in about 2 hrs.
            They&apos;
            <span>went above and beyond what was expected of him</span>. I will
            Hire Them again and can fully recommend them to any potential
            client.
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
        title:
          "Why should I consider your software development company as a partner?",
        details:
          "At Vivasoft, we take pride in developing high-quality applications in record time. We have 250+ experienced developers who understand the importance of agile methodologies and use cutting-edge technologies such as Java, NodeJS, AngularJS and React Native to deliver unique software solutions that provide maximum value for our clients. Our team is committed to delivering timely results while keeping costs low so you can maximize your ROI.",
      },
      {
        id: 2,
        title:
          " How does The Sociomatic stand out in the digital marketing industry?",
        details:
          "We differentiate ourselves by offering various services, providing comprehensive solutions for our clients' digital marketing needs, and delivering tangible results.",
      },
      {
        id: 3,
        title: "What is your approach to client success?",
        details:
          "We're committed to ensuring the success of our clients by identifying new digital marketing opportunities and implementing strategies to help them become market leaders and achieve an outstanding return on investment (ROI).",
      },
      {
        id: 4,
        title: "What values drive The Sociomatic's operations?",
        details:
          "Our core values include innovation, dedication, excellence, and client-centricity. We strive to bring fresh ideas and solutions, ensuring the best possible service.",
      },
      {
        id: 5,
        title:
          " How can I contact The Sociomatic for inquiries or collaboration?",
        details:
          "You can contact us through our website or our customer support team to discuss how we can assist your business. We're here to help you navigate digital marketing and achieve your goals.",
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
        name: "Samuel H",
        designation: "CEO @Analyzen",
        imageSlug: "user1",
        testimonial: (
          <>
            1I have never in my life experienced service like what I received
            from thesociomatic. They finished 3 days of work in about 2 hrs.
            They&apos;
            <span>went above and beyond what was expected of him</span>. I will
            Hire Them again and can fully recommend them to any potential
            client.
          </>
        ),
      },
      {
        id: 2,
        name: "John Doe",
        designation: "CTO @Apple Inc",
        imageSlug: "user2",
        testimonial: (
          <>
            2I have never in my life experienced service like what I received
            from thesociomatic. They finished 3 days of work in about 2 hrs.
            They&apos;
            <span>went above and beyond what was expected of him</span>. I will
            Hire Them again and can fully recommend them to any potential
            client.
          </>
        ),
      },
      {
        id: 3,
        name: "Nabina Nel",
        designation: "COO @Rabble",
        imageSlug: "user3",
        testimonial: (
          <>
            3I have never in my life experienced service like what I received
            from thesociomatic. They finished 3 days of work in about 2 hrs.
            They&apos;
            <span>went above and beyond what was expected of him</span>. I will
            Hire Them again and can fully recommend them to any potential
            client.
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
        title:
          "Why should I consider your software development company as a partner?",
        details:
          "At Vivasoft, we take pride in developing high-quality applications in record time. We have 250+ experienced developers who understand the importance of agile methodologies and use cutting-edge technologies such as Java, NodeJS, AngularJS and React Native to deliver unique software solutions that provide maximum value for our clients. Our team is committed to delivering timely results while keeping costs low so you can maximize your ROI.",
      },
      {
        id: 2,
        title:
          " How does The Sociomatic stand out in the digital marketing industry?",
        details:
          "We differentiate ourselves by offering various services, providing comprehensive solutions for our clients' digital marketing needs, and delivering tangible results.",
      },
      {
        id: 3,
        title: "What is your approach to client success?",
        details:
          "We're committed to ensuring the success of our clients by identifying new digital marketing opportunities and implementing strategies to help them become market leaders and achieve an outstanding return on investment (ROI).",
      },
      {
        id: 4,
        title: "What values drive The Sociomatic's operations?",
        details:
          "Our core values include innovation, dedication, excellence, and client-centricity. We strive to bring fresh ideas and solutions, ensuring the best possible service.",
      },
      {
        id: 5,
        title:
          " How can I contact The Sociomatic for inquiries or collaboration?",
        details:
          "You can contact us through our website or our customer support team to discuss how we can assist your business. We're here to help you navigate digital marketing and achieve your goals.",
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
        name: "Samuel H",
        designation: "CEO @Analyzen",
        imageSlug: "user1",
        testimonial: (
          <>
            1I have never in my life experienced service like what I received
            from thesociomatic. They finished 3 days of work in about 2 hrs.
            They&apos;
            <span>went above and beyond what was expected of him</span>. I will
            Hire Them again and can fully recommend them to any potential
            client.
          </>
        ),
      },
      {
        id: 2,
        name: "John Doe",
        designation: "CTO @Apple Inc",
        imageSlug: "user2",
        testimonial: (
          <>
            2I have never in my life experienced service like what I received
            from thesociomatic. They finished 3 days of work in about 2 hrs.
            They&apos;
            <span>went above and beyond what was expected of him</span>. I will
            Hire Them again and can fully recommend them to any potential
            client.
          </>
        ),
      },
      {
        id: 3,
        name: "Nabina Nel",
        designation: "COO @Rabble",
        imageSlug: "user3",
        testimonial: (
          <>
            3I have never in my life experienced service like what I received
            from thesociomatic. They finished 3 days of work in about 2 hrs.
            They&apos;
            <span>went above and beyond what was expected of him</span>. I will
            Hire Them again and can fully recommend them to any potential
            client.
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
        title:
          "Why should I consider your software development company as a partner?",
        details:
          "At Vivasoft, we take pride in developing high-quality applications in record time. We have 250+ experienced developers who understand the importance of agile methodologies and use cutting-edge technologies such as Java, NodeJS, AngularJS and React Native to deliver unique software solutions that provide maximum value for our clients. Our team is committed to delivering timely results while keeping costs low so you can maximize your ROI.",
      },
      {
        id: 2,
        title:
          " How does The Sociomatic stand out in the digital marketing industry?",
        details:
          "We differentiate ourselves by offering various services, providing comprehensive solutions for our clients' digital marketing needs, and delivering tangible results.",
      },
      {
        id: 3,
        title: "What is your approach to client success?",
        details:
          "We're committed to ensuring the success of our clients by identifying new digital marketing opportunities and implementing strategies to help them become market leaders and achieve an outstanding return on investment (ROI).",
      },
      {
        id: 4,
        title: "What values drive The Sociomatic's operations?",
        details:
          "Our core values include innovation, dedication, excellence, and client-centricity. We strive to bring fresh ideas and solutions, ensuring the best possible service.",
      },
      {
        id: 5,
        title:
          " How can I contact The Sociomatic for inquiries or collaboration?",
        details:
          "You can contact us through our website or our customer support team to discuss how we can assist your business. We're here to help you navigate digital marketing and achieve your goals.",
      },
    ],
  },
};
