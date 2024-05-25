import HeroSectionJoining from "@/components/pages/joining/hero.section";
import GoogleAdsForm from "./_utils/google-ads-form";
import GoogleAnalyticsForm from "./_utils/google-analytics-form";
import WebDevelopmentForm from "./_utils/web-development-form";

type E_FormTypes = "googleads" | "googleanalytics";

const Page = ({
  searchParams = { type: "googleads" },
}: {
  searchParams: { type: E_FormTypes };
}) => {
  const Forms = {
    googleads: <GoogleAdsForm />,
    googleanalytics: <GoogleAnalyticsForm />,
    customwebdev: <WebDevelopmentForm />,
    software: <GoogleAdsForm />,
    uiux: <GoogleAdsForm />,
    shopify: <GoogleAdsForm />,
    wordpress: <GoogleAdsForm />,
  };
  const type: E_FormTypes = searchParams.type || "googleads";
  return (
    <>
      <HeroSectionJoining
        data={{
          tagline: <>Offshore in Growth</>,
          title: <>Join Our Google Ads program TODAY(Spot Limited)</>,
          body: (
            <>
              Unlock Your Free Google Ads Audit & Growth Strategy And Finally
              Build The Business, Freedom, And Wealth You Want!
            </>
          ),
        }}
      />
      <section className="container section grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-12">
          <div className="w-full min-h-[300px] max-h-[350px] bg-gray-200 rounded-lg"></div>
          <div className="space-y-8">
            <h3 className="text-xl md:text-2xl font-bold">
              Et tempor eu tempor do mollit veniam sit. Et labore magna
            </h3>
            {[1, 2, 3].map((item) => {
              return (
                <p key={item}>
                  Nostrud aliqua fugiat commodo nostrud pariatur minim duis quis
                  est ipsum voluptate. Et tempor eu tempor do mollit veniam sit.
                  Et labore magna esse id est id consectetur. Velit
                  reprehenderit nisi sint exercitation laborum est proident
                  elit. Culpa veniam tempor cupidatat sit do est aute ea
                  deserunt. Est proident magna eu est dolor dolore reprehenderit
                  amet laborum elit.
                </p>
              );
            })}
          </div>
        </div>
        <div>
          {
            // @ts-ignore
            Forms[type]
          }
        </div>
      </section>
    </>
  );
};

export default Page;
