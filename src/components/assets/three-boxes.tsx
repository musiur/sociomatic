import { cn } from "@/lib/utils";

const ThreeBoxes = ({ className }: { className?: string }) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "")}
    >
      <path
        d="M25 33.3056L17 28.6904M25 33.3056L33 28.6904V19.46M25 33.3056V24.0752M17 28.6904V19.4592M17 28.6904L9 33.3056M25 24.0752L17 19.4592M25 24.0752L33 19.4592L25 14.8448M17 19.4592L25 14.8448M17 19.4592L9 14.8448M17 19.4592L9 24.0752V33.3056M9 33.3056L1 28.6904V19.46L9 24.076M25 14.8448V5.6144M9 14.8448L1 19.4592M9 14.8448L17 19.46V10.2296M9 14.8448V5.6144M9 5.616L17 1L25 5.616L17 10.2312L9 5.616Z"
        stroke="#1355FF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ThreeBoxes;
