import clsx from "clsx";
import AdvertisementCTA from "./advertisement-cta";

const comparisonData = [
  {
    feature: "Pricing",
    typical: "$3000+/month + hidden fees",
    ours: "$300 flat/month (No surprises)",
  },
  {
    feature: "Contract",
    typical: "6-12 month lock-in",
    ours: "No lock-in contracts",
  },
  {
    feature: "Transparency",
    typical: "Limited access",
    ours: "Full access 24/7 + live dashboards",
  },
  {
    feature: "Tracking",
    typical: "$300-$500",
    ours: "$80 one time",
  },
  {
    feature: "Moneyback Guarantee",
    typical: "No",
    ours: "Full refund, if we can't improve the result",
  },
  {
    feature: "Support",
    typical: "9-5 email-only",
    ours: "Live chat with the CEO",
  },
];

const ComparisonTableSection = () => {
  return (
    <section className="container section space-y-8">
      <h2 className="text-center mb-12">How We Compare</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b">
              <th className="py-4 px-6 text-left bg-secondary/10 rounded-tl-lg font-semibold">
                Feature
              </th>
              <th className="py-4 px-6 text-left bg-secondary/10 font-semibold">
                Typical Agencies
              </th>
              <th className="py-4 px-6 text-left bg-secondary text-white rounded-tr-lg font-semibold">
                Our 3-Month Challenge
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => {
              const isLastIndex = index === comparisonData.length - 1;
              return (
                <tr
                  key={index}
                  className={clsx("hover:bg-gray-50 transition-colors", {
                    "border-b-0": isLastIndex,
                    "border-b": !isLastIndex,
                  })}
                >
                  <td className="py-4 px-6 font-medium">{row.feature}</td>
                  <td className="py-4 px-6">{row.typical}</td>
                  <td
                    className={clsx("py-4 px-6 bg-secondary/10 font-medium", {
                      "rounded-br-lg": isLastIndex,
                    })}
                  >
                    {row.ours}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-4">
        <AdvertisementCTA section="How We Compare"/>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
