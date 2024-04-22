import Link from "next/link";
import WhatsAppIcon from "../assets/whatsapp";

const WhatsApp = () => {
  return (
    <Link
      href="https://wa.me/+971507477541"
      passHref={true}
      target="_blank"
      className="fixed bottom-[100px] right-[30px] group border border-secondary bg-secondary hover:bg-indigo-700 h-[60px] w-[60px] rounded-full flex items-center justify-center hover:shadow-2xl z-10"
    >
      <WhatsAppIcon className="w-[40px] h-[40px] stroke-white stroke-[1.6px]" />
    </Link>
  );
};

export default WhatsApp;
