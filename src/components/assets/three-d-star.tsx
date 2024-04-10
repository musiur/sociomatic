import { cn } from "@/lib/utils";

const ThreeDStar = ({ className }: { className?: string }) => {
  return (
    <svg
      width="34"
      height="32"
      viewBox="0 0 34 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "")}
    >
      <path
        d="M11.0824 12.1952V7.9152M11.0824 7.9152V1L20.7248 6.7072M11.0824 7.9152L1 13.7864L7.2464 17.4088V28.6592L13.1504 25.2568L23.1368 30.964L23.1376 23.844M17.0544 15.872L23.1368 19.4944V12.4144M23.1368 12.4144L23.136 8.1344L20.7248 6.7072M23.1368 12.4144L26.9664 14.6096M7.248 17.4088V14.6096L17.056 8.9024V15.872L11.0832 19.4944L17.0552 23.0064M17.0552 23.0064L20.7272 25.2568L23.1376 23.844M17.0552 23.0064L13.152 25.2568M23.1376 23.844L33 18.0672L26.9664 14.6096M20.7248 6.7072L26.9672 3.1952L26.9664 14.6096"
        stroke="#1355FF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ThreeDStar;
