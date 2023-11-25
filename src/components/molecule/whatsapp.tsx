import { MessageSquare } from "lucide-react";
import Link from "next/link";

const WhatsApp = () => {
  return (
    <Link
      href="https://wa.me/+971567268607"
      passHref={true}
      target="_blank"
      className="fixed bottom-[100px] right-[30px] group border border-secondary bg-secondary hover:bg-indigo-700 h-[60px] w-[60px] rounded-full flex items-center justify-center"
    >
      <MessageSquare className="w-[30px] h-[30px] stroke-white" />
    </Link>
  );
};

export default WhatsApp;
