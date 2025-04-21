import Link from "next/link";
import ShimmerButton from "../magicui/shimmer-button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, User } from "lucide-react";
import Logout from "./logout";
import clsx from "clsx";

const NavActions = ({ token }: { token: string | undefined | null }) => {
  const links = [
    {
      id: 1,
      title: "Dashboard",
      link: "/dashboard",
      icon: <User />,
      active: true,
    },
    {
      id: 2,
      title: "Settings",
      link: "/settings",
      icon: <Settings />,
      active: false,
    },
  ];
  return !token ? (
    <Link href="/scale-with-ads">
      <ShimmerButton>Scale now</ShimmerButton>
    </Link>
  ) : (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[180px]">
        <div className="grid grid-cols-1 py-2">
          {links.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.active ? item.link : ""}
                className={clsx(
                  "px-4 py-2  flex items-center gap-2 [&>*]:w-4 [&>*]:h-4",
                  {
                    "text-gray-400": !item.active,
                    "hover:bg-gray-200": item.active,
                  }
                )}
              >
                {item.icon}
                {item.title}
              </Link>
            );
          })}
          <hr />
          <Logout />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NavActions;
