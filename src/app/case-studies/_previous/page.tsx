import UiUxTabLayout from "@/components/layout/uiuxtab-layout";
import GetAQuote from "@/components/molecule/get-a-quote";
import GetConsultation from "@/components/molecule/get-consultation";
import ProductCards from "@/components/molecule/product-cards";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Frown, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CaseStudies = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  let data: any = GoogleAdsCaseStudyPageData;
  if (params.slug.includes("google-paid-ads")) {
    data = GoogleAdsCaseStudyPageData;
  } else if (params.slug.includes("data-analytics")) {
    data = DataAnalyticsCaseStudyPageData;
  } else if (params.slug.includes("wordpress-development")) {
    data = GoogleAdsCaseStudyPageData;
  } else if (params.slug.includes("content-writing-and-seo")) {
    data = ContentSEOCaseStudyPageData;
  } else if (params.slug.includes("shopify-store-development")) {
    data = ShopifyCaseStudyPageData;
  } else if (params.slug.includes("social-media-paid-ads")) {
    data = SocialMediaPaidAdsCaseStudyPageData;
  } else if (params.slug.includes("custom-web-development")) {
    data = GoogleAdsCaseStudyPageData;
  } else if (params.slug.includes("software-development")) {
    data = GoogleAdsCaseStudyPageData;
  } else if (params.slug.includes("ui-ux-and-graphic-design")) {
    data = GoogleAdsCaseStudyPageData;
  }
  const LogoImageLinks = [];
  for (let i = 1; i <= 26; i++) {
    LogoImageLinks.push(`image (${i}).webp`);
  }
  return (
    <div>
      {params.slug.includes("software-development") ||
      params.slug.includes("custom-web-development") ||
      params.slug.includes("wordpress-development") ||
      params.slug.includes("ui-ux-and-graphic-design") ? (
        <>
          {params.slug.includes("ui-ux-and-graphic-design") ? (
            <UiUxTabLayout>
              <div className="container section">
                <ProductCards params={params} />
              </div>
              <div className="container section">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
                  {LogoImageLinks.map((item: string) => {
                    return (
                      <div key={item}>
                        <Image
                          src={`/images/projects/uiux/logo/${item}`}
                          alt={`Logo: ${item}`}
                          width={500}
                          height={500}
                          className="w-full h-auto border rounded-[16px] lg:rounded-[32px] hover:shadow-lg"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-center">
                  <GetAQuote />
                </div>
              </div>
            </UiUxTabLayout>
          ) : (
            <section className="container section">
              <ProductCards params={params} />
            </section>
          )}
        </>
      ) : (
        <section className="section grid grid-cols-1 large-gap">
          <div className="max-w-[600px] mx-auto px-5 flex flex-col small-gap items-center justify-center text-center">
            <h4 className="text-[16px] lg:text-[20px] font-semibold text-secondary">
              {data.H4}
            </h4>
            <h2 className="text-primary">{data.H2}</h2>
            <p className="">{data.P}</p>
          </div>
          <div className="container grid grid-cols-1 large-gap">
            {data.studies.map((item: any) => {
              const {
                id,
                image,
                brand,
                challenge,
                followup,
                after,
                followupH,
              } = item;
              return (
                <div
                  key={id}
                  className="rounded-[10px] border border-secondary-muted hover:border-secondary bg-white/5 backdrop-blur-[8px] hover:backdrop-blur-[8px] w-full shadow-[0_4px_25px_0_rgba(89,86,255,0.15)] transition ease-in-out duration-500 overflow-hidden px-[25px] py-[50px]"
                >
                  {image}
                  <div className="flex flex-col items-start justify-start small-gap pt-10">
                    <h3 className="text-[20px] lg:text-[24px] font-medium text-center w-full">
                      {brand}
                    </h3>
                    {item.title ? (
                      <h4 className="font-medium text-primary text-[16px] md:text-[20px] w-full text-center mb-10">
                        {item.title}
                      </h4>
                    ) : null}
                    <div className="grid grid-cols-1 small-gap">
                      <div className="grid grid-cols-1 sm:grid-cols-2 small-gap items-start justify-start">
                        <div className="grid grid-cols-1 gap-[10px] ">
                          <h4 className="font-medium text-dimmed flex items-center gap-[5px]">
                            <Frown /> The Challenge
                          </h4>
                          <p>{challenge}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-[10px]">
                          <h4 className="font-medium text-secondary flex items-center gap-[5px]">
                            <Smile className="stroke-secondary" /> {followupH}
                          </h4>
                          <p>{followup}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 small-gap ms:pl-[20px]">
                        {item.before ? (
                          <div className="flex flex-col justify-start items-start gap-[10px]">
                            <h4 className="font-medium text-dimmed flex items-center gap-[5px]">
                              <Frown /> Results Before
                            </h4>
                            <p>{item.before}</p>
                          </div>
                        ) : (
                          <div></div>
                        )}
                        <div className="flex flex-col items-start justify-start gap-[15px]">
                          <h4 className="font-medium text-secondary flex items-center gap-[5px]">
                            <Smile className="stroke-secondary" /> After
                            Sociomatic
                          </h4>
                          <ul className="flex flex-col gap-[10px]">
                            {after.map((li: any, index: number) => {
                              return (
                                <li
                                  key={index}
                                  className="flex items-start justify-start gap-[5px]"
                                >
                                  <BadgeCheck className="min-h-[16px] max-h-[16px] min-w-[16px] max-w-[16px] mt-[5px]" />
                                  <p>{li}</p>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {item.footerParagraphs ? (
                      <div className="flex flex-col items-center justify-center small-gap py-5 w-full">
                        {item?.footerParagraphs.map(
                          (para: any, index: number) => {
                            return (
                              <p key={index} className="text-center">
                                {para}
                              </p>
                            );
                          }
                        )}
                      </div>
                    ) : null}
                    <div className="flex justify-center flex-wrap items-center w-full small-gap">
                      {params.slug.includes("shopify-store-development") ? (
                        <Link
                          href={item.websiteLink}
                          passHref={true}
                          target="_blank"
                        >
                          <Button variant="outline">Visit Website</Button>
                        </Link>
                      ) : (
                        <GetConsultation />
                      )}

                      <GetAQuote />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default CaseStudies;

const GoogleAdsCaseStudyPageData = {
  H4: <>Case Studies</>,
  H2: (
    <>
      Let the <span className="text-secondary">Numbers</span> <br /> Do the
      Talking.
    </>
  ),
  P: (
    <>
      As you brows through the case studies, you will understand that we
      don&apos;t require a “budget”, there is no “expense” as such. We are
      revenue and profit generators, so the sooner you start working with us,
      the faster you will get ahead of your competition.
    </>
  ),
  studies: [
    {
      id: 1,
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image2.jpeg')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "Floganza Dubai",
      title: (
        <>
          Floganza Dubai&apos;s Extravaganza: From 20 to&nbsp;
          <span className="text-[16px] md:text-[20px] text-secondary">
            340+ Form Submissions
          </span>
          !
        </>
      ),
      challenge: (
        <>
          Floganza Dubai, the maestro of event planning, faced the challenge of
          limited applause with 20 to 30 monthly form submissions. Their grand
          event was yearning for a larger audience.
        </>
      ),
      followupH: <>Our Performance</>,
      followup: (
        <>
          Sociomatic took center stage, crafting a crescendo of engagement
          through refined targeting and strategic ad optimisation. The aim?
          Elevate Floganza Dubai&apos;s event to a grand extravaganza.
        </>
      ),
      before: <>Monthly form submissions: 20 to 60+</>,
      after: [
        <>
          Monthly form submissions soared to 340+, transforming their event into
          a sold-out success.
        </>,
        <>
          Amplified brand visibility, higher engagement rates, and a
          spectacular&nbsp;
          <span className="text-primary font-medium">
            1160% increase in lead generation
          </span>
        </>,
      ],
      footerParagraphs: [<>Experience the Event Transformation</>],
    },
    {
      id: 2,
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image1.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "Photoshoot Dubai Escape",
      title: (
        <>
          Capturing Dreams: From 0 to&nbsp;
          <span className="text-[16px] md:text-[20px] text-secondary">
            60+ Form Submissions
          </span>
          !
        </>
      ),
      challenge: (
        <>
          Photoshoot Dubai Escape, a visionary in photography, faced a silent
          stage with a meager 0 to 50 monthly form submissions. The echo of
          their artistry wasn&apos;t reaching the right ears.
        </>
      ),
      followupH: <>Our followups</>,
      followup: (
        <>
          Sociomatic stepped into the frame, orchestrating a symphony of
          targeted visuals and strategic outreach. The goal is to transform
          their silent stage into a vibrant showcase.
        </>
      ),
      before: <>Monthly form submissions: 0 to 5</>,
      after: [
        <>
          Monthly form submissions surged to 60+, capturing the hearts of a
          broader audience.
        </>,
        <>
          &nbsp; Enhanced brand visibility, amplified engagement, and a
          stunning&nbsp;
          <span className="text-primary font-medium">
            200% increase in lead generation
          </span>
        </>,
      ],
      footerParagraphs: [<>Are you ready for your encore?</>],
    },
  ],
};
const DataAnalyticsCaseStudyPageData = {
  H4: <>Case Studies</>,
  H2: (
    <>
      Let the <span className="text-secondary">Numbers</span> <br /> Do the
      Talking.
    </>
  ),
  P: (
    <>
      As you brows through the case studies, you will understand that we
      don&apos;t require a “budget”, there is no “expense” as such. We are
      revenue and profit generators, so the sooner you start working with us,
      the faster you will get ahead of your competition.
    </>
  ),
  studies: [
    {
      id: 1,
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image4.jpg')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "Old Navy Chili: Unveiling E-commerce Revenue",
      title: <>OldNavy&apos;s E-commerce Transformation</>,
      challenge: (
        <>
          Old Navy Chile was sizzling in the market, but their e-commerce
          tracking left them in the dark. The spice was missing—no revenue
          insights, no clear picture of their online sales.
        </>
      ),
      followupH: <>Our Insightful Approach</>,
      followup: (
        <>
          Sociomatics dove into the data ocean, unravelling the complexities.
          With precision analytics, we uncovered the recipe for success,
          addressing their e-commerce tracking challenges and ensuring every
          revenue chilli was accounted for.
        </>
      ),
      before: <> E-commerce revenue was invisible</>,
      after: [
        <>Clear visibility into e-commerce revenue.</>,
        <>
          Enhanced tracking, actionable insights, and a spicier online sales
          strategy.
        </>,
      ],
      footerParagraphs: [
        <>Are you all set to add some flavor to your analytics?</>,
        <>
          Use Sociomatic to transform your data insights. Find out how we can
          improve tracking and increase online sales.
        </>,
      ],
    },
    {
      id: 2,
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image3.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "Upvc Spray Painter : Crafting Event Symphony",
      title: <>Upvc Spray Painter&apos;s Event & Conversion Symphony</>,
      challenge: (
        <>
          Upvc Spray Painter, a canvas of creativity, faced a blank space in
          their analytics. No form submissions, no clicks to email, no phone
          call events—no strokes capturing their audience. Plus, Google Ads
          conversions were non-existent.
        </>
      ),
      followupH: <>Our Artful Solution</>,
      followup: (
        <>
          Sociomatic picked up the analytics brush, painting a masterpiece of
          tracked events and introducing the sweet melody of Google Ads
          conversions. From zero to hero, we infused life into their data
          canvas, ensuring every interaction and conversion was a stroke of
          success.
        </>
      ),
      before: (
        <>
          No form submissions, click-to-email, phone call events, or Google Ads
          conversions.
        </>
      ),
      after: [
        <>
          Every form submission was tracked, every email click counted, every
          phone call event was captured, and Google Ads conversions adorned
          their success story.
        </>,
        <>
          Comprehensive insights, informed decisions, and a colourful engagement
          with measurable Google Ads success.
        </>,
      ],
      footerParagraphs: [
        <>Ready to paint your data and conversion masterpiece?</>,
        <>Join Sociomatic on a data-driven adventure. </>,
      ],
    },
    {
      id: 3,
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image1.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand:
        "Feel Free Travel - Unleashing Event Tracking Brilliance with Google Tag Manager",
      title: <>Feel Free Travel&apos;s Journey to Enhanced Event Tracking</>,
      challenge: (
        <>
          With its PHP website intricacies, Feel Free Travel faced tracking
          difficulties. Without a data layer, their website events remained a
          mystery. Custom events needed to be more present, hampering their
          ability to understand user interactions.
        </>
      ),
      followupH: <>Our transformative approach</>,
      followup: (
        <>
          Sociomatic stepped into the digital age, implementing Google Tag
          Manager with a sophisticated data layer strategy. We redefined event
          tracking, introducing a symphony of custom events tailored to Feel
          Free Travel&apos;s unique journey.
        </>
      ),
      before: <>No custom events on their PHP website.</>,
      after: [
        <>Introduced a robust data layer for their PHP website.</>,
        <>
          Tracked 13-15 custom events, including milestones like 1_Book_Now,
          2_Pick_Destination, 3_Pick_Trip, 4_Pick_Date, 5_Personal_Details, and
          more.
        </>,
      ],
      footerParagraphs: [
        <>Ready to Elevate Your Event Tracking?</>,
        <>
          Embark on a data-driven journey with Sociomatic. Explore Event
          Tracking Solutions
        </>,
      ],
    },
    {
      id: 4,
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image5.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand:
        "Village Vets - Real-Time Data Visualisation Revolution with Google Looker Studio",
      title: <></>,
      challenge: (
        <>
          Village Vets, equipped with Google Analytics 4, sought a new dimension
          in data visualisation. Real-time insights were elusive, and the raw
          data needed to have the visual storytelling required for swift
          decision-making.
        </>
      ),
      followupH: <>Our transformative approach</>,
      followup: (
        <>
          Enter Sociomatic and Google Looker Studio, a partnership
          revolutionising Village Vets&apos; data game. We seamlessly integrated
          Looker Studio, crafting a dynamic environment where raw data
          transformed into captivating visual narratives.
        </>
      ),
      before: <>No real-time visualisations for Google Analytics 4 data.</>,
      after: [
        <>
          Google Looker Studio breathed life into Village Vets&apos; data,
          providing real-time visualisations.
        </>,
        <>
          Graphs, tables, and interactive visual elements offered a
          comprehensive view of their data landscape.
        </>,
      ],
      footerParagraphs: [
        <>Ready to Transform Your Data Landscape</>,
        <>
          Experience the power of visual insights with Sociomatic. Unlock Looker
          Studio Solutions
        </>,
      ],
    },
  ],
};
const ShopifyCaseStudyPageData = {
  H4: <>Case Studies</>,
  H2: (
    <>
      Let the <span className="text-secondary">Numbers</span> <br /> Do the
      Talking.
    </>
  ),
  P: (
    <>
      As you brows through the case studies, you will understand that we
      don&apos;t require a “budget”, there is no “expense” as such. We are
      revenue and profit generators, so the sooner you start working with us,
      the faster you will get ahead of your competition.
    </>
  ),
  studies: [
    {
      id: 1,
      websiteLink:
        "https://fokandstuff.com/?utm_source=google&utm_medium=organic",
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image6.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "Fok & Stuff - Crafting an Online Haven",
      challenge: (
        <>
          Fok & Stuff, a hidden gem in the online marketplace, struggled with an
          old website, making it hard to grow.
        </>
      ),
      followupH: <>Sociomatic&apos;s Craft:</>,
      followup: (
        <>
          Sociomatic tackled this by creating a fantastic online haven. We made
          Fok & Stuff&apos;s online look and feel better for users.
        </>
      ),
      after: [
        <>
          <span>Great Look and Feel: </span> Fok & Stuff became a vibrant,
          modern marketplace.
        </>,
        <>
          <span>Works on Any Device: </span> Easy to use on phones, tablets, and
          computers
        </>,
        <>
          <span>Sales Went Up: </span> Many more sales and money coming in
        </>,
      ],
      footerParagraphs: [
        <>Ready to Make Your Online Haven?</>,
        <>
          Make your place online better with Sociomatic. Unlock Shopify
          Brilliance
        </>,
      ],
    },
    {
      id: 2,
      websiteLink: "https://prefurn.nl/?utm_source=google&utm_medium=organic",
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image7.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "Prefurn - Crafting Furniture Dreams",
      challenge: (
        <>
          Prefurn, a haven for furniture lovers, had a website that could have
          been more exciting, making it challenging to show off their beautiful
          furniture.
        </>
      ),
      followupH: <>Sociomatic Artistry</>,
      followup: (
        <>
          Sociomatic created an immersive dreamland for furniture lovers. We
          redesigned Prefurn&apos;s online store to make it great for everyone.
        </>
      ),
      after: [
        <>
          <span>Beautiful Displays</span> An online store is showing off
          furniture beautifully.
        </>,
        <>
          <span>Easy to Use Anywhere</span>
          Works well on phones, tablets, and computers
        </>,
        <>
          <span>More sales</span>
          Lots more people are buying and bringing in money
        </>,
      ],
      footerParagraphs: [
        <>Ready to show off your furniture?</>,
        <>
          Make your furniture dreams come true with Sociomatic. Unlock Shopify
          Brilliance
        </>,
      ],
    },
    {
      id: 3,
      websiteLink:
        "https://www.newsundesigns.com/?utm_source=google&utm_medium=organic",
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image8.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "New Sun Designs - Igniting Creative Sparks",
      challenge: (
        <>
          New Sun Designs, a hub of artistic expression, had a website that
          needed to show their creativity.
        </>
      ),
      followupH: <>Sociomatic&apos;s Creative Spark</>,
      followup: (
        <>
          Sociomatic brought out the creativity in New Sun Designs. We made
          their website more colourful and easy to use.
        </>
      ),
      after: [
        <>
          <span>More Creative</span> Lots more creativity is shown on every
          page.
        </>,
        <>
          <span>Easy to Use Anywhere</span> Works well on phones, tablets, and
          computers.
        </>,
        <>
          <span>More Sales</span> More people are buying and bringing in money
        </>,
      ],
      footerParagraphs: [
        <>Ready to showcase your creativity?</>,
        <>
          Show off your creativity with Sociomatic. Unlock Shopify Brilliance
        </>,
      ],
    },
    {
      id: 4,
      websiteLink:
        "https://www.thenewmangallery.com/?utm_source=google&utm_medium=organic",
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image9.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "The New Man Gallery - Brightening Artistry",
      challenge: (
        <>
          The New Man Gallery wanted to shine brighter but had an old website,
          making it hard to sell art.
        </>
      ),
      followupH: <>Sociomatic&apos;s Brightening</>,
      followup: (
        <>
          Sociomatic made The New Man Gallery&apos;s online space better. We
          added fresh designs and made it easy to use.
        </>
      ),
      after: [
        <>
          <span>Looks Amazing</span> A beautiful online gallery pleasing to the
          eyes.
        </>,
        <>
          <span>Accessible on Any Device</span> Works well on phones, tablets,
          and computers
        </>,
        <>
          <span>More Sales</span> Lots more art sold, bringing in more money
        </>,
      ],
      footerParagraphs: [
        <>Ready to Brighten Your Artistic Showcase?</>,
        <>
          Make your online art gallery better with Sociomatic. Unlock Shopify
          Brilliance
        </>,
      ],
    },
  ],
};
const SocialMediaPaidAdsCaseStudyPageData = {
  H4: <>Case Studies</>,
  H2: (
    <>
      Let the <span className="text-secondary">Numbers</span> <br /> Do the
      Talking.
    </>
  ),
  P: (
    <>
      As you brows through the case studies, you will understand that we
      don&apos;t require a “budget”, there is no “expense” as such. We are
      revenue and profit generators, so the sooner you start working with us,
      the faster you will get ahead of your competition.
    </>
  ),
  studies: [
    {
      id: 1,
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image10.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "How Sociomatic Supercharged Wildly Boutique's Social Media",
      title: <></>,
      challenge: (
        <>
          Wildly Boutique needed help with sales and getting noticed on Facebook
          and Instagram.
        </>
      ),
      followupH: <>Sociomatic&apos;s Solution</>,
      followup: (
        <>
          We helped Wildly Boutique by creating exciting posts and showing them
          to the right people on Facebook and Instagram.
        </>
      ),
      after: [
        <>
          <span>Sales Jumped Up </span> More people bought things from Wildly
          Boutique
        </>,
        <>
          <span>More People Visited the Website</span> Lots more people checked
          out their online store
        </>,
        <>
          <span>Happy Words from Wildly Boutique</span> &quot;Sociomatic made
          our online store exciting. They know how to make people buy things and
          visit our website more&quot;
        </>,
      ],
    },
    {
      id: 2,
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image12.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "Togs Australia's Big Win on Social Media",
      title: <></>,
      challenge: (
        <>Togs Australia needed to get what they wanted from their old agency</>
      ),
      followupH: <>Sociomatic&apos;s Magic</>,
      followup: (
        <>
          Our agreement starts from Nov 2023. We changed everything on Facebook
          and Instagram for Togs Australia. More people visited their website,
          and they made twice as much money.
        </>
      ),
      after: [
        <>
          <span>More People Came</span> Three times more people visited their
          website
        </>,
        <>
          <span>Money Doubled</span>
          They made twice as much money as before.
        </>,
        <>
          <span>Happy Words from Togs Australia</span>
          &quot;Sociomatic did amazing things for our business. We got more
          visitors and more money with them&quot;
        </>,
      ],
      footerParagraphs: [
        <>Ready to show off your furniture?</>,
        <>
          Make your furniture dreams come true with Sociomatic. Unlock Shopify
          Brilliance
        </>,
      ],
    },
    {
      id: 3,
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image11.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "Floganza Dubai's Online Journey",
      challenge: (
        <>
          Floganza Dubai had a few people visiting their website and less from
          Submission.
        </>
      ),
      followupH: <>Sociomatic&apos;s Creative Spark</>,
      followup: (
        <>
          We used Facebook and Instagram to bring more people to Floganza
          Dubai&apos;s website. First, we made more people visit and got them
          interested in buying.
        </>
      ),
      after: [
        <>
          <span>More People Visited</span> Lots more people checked out Floganza
          Dubai online
        </>,
        <>
          <span>People Started to Buy</span> They got more people interested in
          buying their fashion
        </>,
        <>
          <span>Happy Words from Floganza Dubai</span>&quot;Sociomatic changed
          everything for us. We got more visitors, and our fashion started
          selling more&quot;
        </>,
      ],
    },
    {
      id: 4,
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image13.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "Photoshoot Dubai Escape's Success Story",
      challenge: (
        <>
          Photoshoot Dubai Escape wanted more people to visit their website and
          show interest in their photos.
        </>
      ),
      followupH: <>Sociomatic&apos;s Plan:</>,
      followup: (
        <>
          We used Facebook and Instagram, focusing more on Instagram because
          Photoshoot Dubai Escape is about photos.
        </>
      ),
      after: [
        <>
          <span>More Instagram Love</span> Lots more people liked and followed
          on Instagram.
        </>,
        <>
          <span>Website Visits and Leads Grew</span> More people visited their
          website, and they got more requests for photoshoots.
        </>,
        <>
          <span>Happy Words from Photoshoot Dubai Escape</span> &quot;Sociomatic
          knows how to make our photos famous. More people came, and we got more
          requests for photoshoots&quot;
        </>,
      ],
      footerParagraphs: [
        <>Ready to Brighten Your Artistic Showcase?</>,
        <>
          Make your online art gallery better with Sociomatic. Unlock Shopify
          Brilliance
        </>,
      ],
    },
  ],
};
const ContentSEOCaseStudyPageData = {
  H4: <>Case Studies</>,
  H2: (
    <>
      Let the <span className="text-secondary">Numbers</span> <br /> Do the
      Talking.
    </>
  ),
  P: (
    <>
      As you brows through the case studies, you will understand that we
      don&apos;t require a “budget”, there is no “expense” as such. We are
      revenue and profit generators, so the sooner you start working with us,
      the faster you will get ahead of your competition.
    </>
  ),
  studies: [
    {
      id: 1,
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image15.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "Floganza Dubai - A Fashion Renaissance",
      title: (
        <>
          Revolutionizing Fashion: Floganza Dubai&apso;s Journey from Obscurity
          to Runway Fame
        </>
      ),
      challenge: (
        <>
          Brief background on Floganza Dubai. Highlight the challenges faced in
          the competitive fashion market.
        </>
      ),
      followupH: <>Sociomatic&apos;s Strategic Intervention:</>,
      followup: (
        <>
          In-depth SEO analysis and optimization. Tailored content creation for
          enhanced brand representation. Targeted social media campaigns to
          boost engagement. Implementation of user-friendly website design.
        </>
      ),
      before: (
        <>
          Struggled with low online visibility. Limited reach impacting brand
          promotion. Challenges in showcasing trendy fashion collections
          effectively. Suboptimal SEO strategies leading to missed
          opportunities.
        </>
      ),
      after: [
        <>Achieved first-page visibility on Google.</>,
        <>Significant increase in online presence.</>,
        <>Enhanced brand credibility and visibility.</>,
        <>Substantial surge in organic leads and customer inquiries.</>,
        <>
          Increased online presence by&nbsp;
          <span>60% within the first three months</span>.
        </>,
        <>
          Fashion collection showcases received a <span>40% boost</span> in user
          engagement.
        </>,
        <>
          User-friendly website design contributed to a&nbsp;
          <span>20% reduction</span> in bounce rates.
        </>,
      ],
      // footerParagraphs: [<>Experience the Event Transformation</>],
    },
    {
      id: 2,
      image: (
        <div
          className={`bg-[url('/images/pages/case-studies/image14.png')] min-h-[50vh] w-full bg-contain bg-no-repeat bg-center`}
        ></div>
      ),
      brand: "Photoshoot Dubai Escape",
      title: (
        <>
          Capturing Dreams: From 0 to&nbsp;
          <span className="text-[16px] md:text-[20px] text-secondary">
            60+ Form Submissions
          </span>
          !
        </>
      ),
      challenge: (
        <>
          Photoshoot Dubai Escape, a visionary in photography, faced a silent
          stage with a meager 0 to 50 monthly form submissions. The echo of
          their artistry wasn&apos;t reaching the right ears.
        </>
      ),
      followupH: <>Our followups</>,
      followup: (
        <>
          Sociomatic stepped into the frame, orchestrating a symphony of
          targeted visuals and strategic outreach. The goal is to transform
          their silent stage into a vibrant showcase.
        </>
      ),
      before: <>Monthly form submissions: 0 to 5</>,
      after: [
        <>
          Monthly form submissions surged to 60+, capturing the hearts of a
          broader audience.
        </>,
        <>
          Enhanced brand visibility, amplified engagement, and a stunning&nbsp;
          <span className="text-primary font-medium">
            200% increase in lead generation
          </span>
        </>,
      ],
      footerParagraphs: [<>Are you ready for your encore?</>],
    },
  ],
};
