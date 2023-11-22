import { MessageCircle } from "lucide-react";
import Link from "next/link";

const WhatsApp = () => {
  return (
      <Link href="https://wa.me/+971567268607" passHref={true} target="_blank" className="fixed bottom-[100px] right-[30px] border border-secondarymuted shadow-lg rounded-full p-[15px] bg-white hover:bg-secondary group">
        <MessageCircle className="w-[30px] h-[30px] stroke-secondary group-hover:stroke-white"/>
      </Link>
  );
};

export default WhatsApp;
