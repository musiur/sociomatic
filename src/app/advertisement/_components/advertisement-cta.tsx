import ShimmerButton from "@/components/magicui/shimmer-button";

/**
 * Here we are using cal.com
 * Previous there was our own custom form CtaForm
 */
const AdvertisementCTA = () => {
  return (
    <div className="inline-block">
      <ShimmerButton
        data-cal-link="yeatiq-ceo-of-the-sociomatic/unlock-real-growth-your-90-day-ad-challenge"
        data-cal-namespace="unlock-real-growth-your-90-day-ad-challenge"
        data-cal-config="{'layout':'month_view'}"
      >
        Get a free consultation now
      </ShimmerButton>
    </div>
  );
};

export default AdvertisementCTA;
