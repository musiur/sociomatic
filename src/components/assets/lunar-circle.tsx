import { cn } from "@/lib/utils";

const LunarCircle = ({ className }: { className: string }) => {
  return (
    <svg
      width="1428"
      height="648"
      viewBox="0 0 1428 648"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "")}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 647.857H1428C1326.56 270.992 1045.21 0 714 0C382.793 0 101.44 270.992 0 647.857Z"
        fill="url(#paint0_linear_84_5202)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_84_5202"
          x1="714"
          y1="0"
          x2="714"
          y2="647.857"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1355FF" stopOpacity="0.08" />
          <stop offset="1" stopColor="#737373" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LunarCircle;
