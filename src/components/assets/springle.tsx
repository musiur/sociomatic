import { cn } from "@/lib/utils";

const Springle = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      width="250"
      height="18"
      viewBox="0 0 250 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "")}
    >
      <path
        d="M4 9C6.80802 5.22688 14.262 -0.0554829 21.6139 9C28.9658 18.0555 38.462 12.7731 42.2911 9C45.7373 5.69852 54.774 1.07645 63.3513 9C74.0728 18.9044 81.731 10.8866 83.6456 9C85.5601 7.11344 93.9842 1.45376 104.323 9C112.594 15.037 121.554 11.5154 125 9"
        stroke="#DEDEDE"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M125 9C127.808 5.22688 135.262 -0.0554829 142.614 9C149.966 18.0555 159.462 12.7731 163.291 9C166.737 5.69852 175.774 1.07645 184.351 9C195.073 18.9044 202.731 10.8866 204.646 9C206.56 7.11344 214.984 1.45376 225.323 9C233.594 15.037 242.554 11.5154 246 9"
        stroke="#DEDEDE"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Springle;
