import BlueLogoGradiantLightBg from "@/components/assets/blue-logo-gradiant-light-bg";
import Tagline from "@/components/molecule/tagline";

const UserEmpathyBanner = () => {
  return (
    <div className="container section [&>*]:text-white">
      <div className="p-8 rounded-[40px] bg-gradient-to-b from-secondary to-[#0B3399] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-10">
        <div className="max-w-full sm:max-w-[60%] flex flex-col items-start gap-[32px]">
          <Tagline text="Alright let's get started" />
          <h3 className="text-3xl font-medium">
            Even if right now, you can&apos;t say you&apos;re 100% sold on
            Sociomatic, that&apos;s{" "}
            <span className="font-bold text-5xl">perfectly</span> okay. We
            understand the natural reservations.
          </h3>
          <p>
            <span className="font-bold">We&apos;ve all been there.</span>
            &nsbp;We&apos;ve all stared at a confusing platform wondering if
            it&apso;s worth the risk. That&apos;s why we don&apos;t ask for
            blind belief at The Sociomatic.&nbsp;
            <span className="font-bold">We offer results.</span>
          </p>
        </div>
        <BlueLogoGradiantLightBg className="ml-auto" />
      </div>
    </div>
  );
};

export default UserEmpathyBanner;
