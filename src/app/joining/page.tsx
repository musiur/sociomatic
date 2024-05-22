import HeroSectionJoining from "@/components/pages/joining/hero.section";
import GoogleAdsForm from "./_utils/google-ads-form";

type E_FormTypes = "googleAdsForm" | "googleAnalyticsForm";

const Page = ({
  searchParams = { type: "googleAdsForm" },
}: {
  searchParams: { type: E_FormTypes };
}) => {
  const Forms = {
    googleAdsForm: <GoogleAdsForm />,
  };
  const type: E_FormTypes = searchParams.type;
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
          <div>Hello</div>
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
