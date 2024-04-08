import BlueLogoGradiantLightBg from "@/components/assets/blue-logo-gradiant-light-bg";
import Tagline from "@/components/molecule/tagline";

const UserEmpathyBanner = () => {
  return (
    <div className="container section [&>*]:text-white">
      <div className="p-8 rounded-[40px] bg-gradient-to-b from-secondary to-[#0B3399] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-10">
        <div className="max-w-full sm:max-w-[60%] flex flex-col items-start gap-[32px]">
          <Tagline text="Alright let's get started" />
          <h3 className="text-3xl font-semibold">
            Even If right now, You can&apos;t say you 100% believe in yourself,
            It&apos;s OK!
          </h3>
          <p>
            We were all there at one point, too... and that&apos;s why we
            created the Sociomatic Coaching Program: a group of hardcore
            believers that do nothing but champion you and your business across
            the finish line!!
          </p>
        </div>
        <BlueLogoGradiantLightBg className="ml-auto" />
      </div>
    </div>
  );
};

export default UserEmpathyBanner;
