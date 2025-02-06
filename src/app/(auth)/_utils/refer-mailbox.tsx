import { BadgeCheck } from "lucide-react";
import Link from "next/link";

const ReferMailbox = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 text-center">
      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center relative z-[1]">
        <div className="w-16 h-16 rounded-full bg-secondary absolute top-0 left-0 animate-ping -z-[1]"></div>
        <BadgeCheck className="stroke-white w-8 h-8" />
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold text-lg md:text-2xl">Check you mailbox</h4>
        <p className="text-gray-500">
          We have sent a verification email to your mailbox. Please check your
          mailbox and click on the link to verify your account.
        </p>
      </div>
      <Link href="/login" className="underline">
        Go back to login
      </Link>
    </div>
  );
};

export default ReferMailbox;
