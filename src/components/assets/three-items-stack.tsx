import { cn } from "@/lib/utils";

const ThreeItemsStack = ({ className }: { className?: string }) => {
  return (
    <svg
      width="34"
      height="39"
      viewBox="0 0 34 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "")}
    >
      <path
        d="M33 10.24L17 1L1 10.2408M17 19.2328L33 10.2408V13.7312L29.6592 15.6752M17 37.956L33 28.4696V24.748M17 37.956L1 28.4704V24.7488M17 37.956V34.3032M1 24.7488L17 34.3032M1 24.7488L4.3408 22.8736M17 34.3032L33 24.7488L29.6592 22.8736M4.3408 15.6744L1 13.7304V10.2392L17 19.2312V23.0368L4.3408 15.6744ZM4.3408 15.6744L1 17.2888M17 23.0376L29.6592 15.6736L33 17.2888M17 26.8016L33 17.2888M17 26.8016L1 17.2888M17 26.8016V30.5392M33 17.2888V20.916L29.6592 22.8736M1 17.2888V20.916L4.3408 22.8736M17 30.5392L4.3408 22.8736M17 30.5392L29.6592 22.8736"
        stroke="#1355FF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ThreeItemsStack;
