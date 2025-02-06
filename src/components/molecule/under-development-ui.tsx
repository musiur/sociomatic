import Link from "next/link";
import Asset___UnderDevelopment from "../assets/under-development";

const UnderDevelopmentUI = () => {
  return (
    <div className="max-w-[600px] mx-auto py-32 flex flex-col items-center justify-center gap-10 [&>*]:text-center">
      <Asset___UnderDevelopment className="w-full h-full" />
      <div className="space-y-4 pt-10">
        <h2>Under Development</h2>
        <p className="text-gray-500">
          Sorry! We are working on this page. We would like to request you to
          visit later on and inform you soon as we are done.
        </p>
        <Link href="/" className="underline">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default UnderDevelopmentUI;
