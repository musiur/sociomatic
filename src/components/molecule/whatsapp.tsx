import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WhatsApp = () => {
  return (
    <Link
      href="https://wa.me/+971567268607"
      passHref={true}
      target="_blank"
      className="fixed bottom-[100px] right-[30px]"
    >
      {/* <MessageCircle className="w-[30px] h-[30px] stroke-white group-hover:stroke-white"/> */}
      <Image
        src="/images/whatsapp.png"
        alt=""
        height={1000}
        width={1000}
        className="max-w-[60px] max-h-[60px]"
      />
    </Link>
  );
};

export default WhatsApp;
