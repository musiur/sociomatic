import { cn } from "@/lib/utils";

const CalendarTimeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "")}
    >
      <path
        d="M19 6.5V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H6.5M14 1V5M6 1V5M1 9H6"
        stroke="#191641"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 16.5L14 15.3V13M20 15C20 18.3137 17.3137 21 14 21C10.6863 21 8 18.3137 8 15C8 11.6863 10.6863 9 14 9C17.3137 9 20 11.6863 20 15Z"
        stroke="#1355FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalendarTimeIcon;
