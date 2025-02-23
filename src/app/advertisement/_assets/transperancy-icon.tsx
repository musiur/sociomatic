import { cn } from "@/lib/utils";

const TransperancyIcon = ({className}: {className?: string}) => {
  return (
    <svg
      viewBox="0 0 22 22"
      fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(className, "")}
    >
      <path
        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
        fill="#1355FF"
        stroke="#1355FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z"
        fill="white"
        fillOpacity="0.5"
        stroke="#191641"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TransperancyIcon;
