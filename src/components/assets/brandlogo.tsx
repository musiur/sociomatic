import { cn } from "@/lib/utils";
import clsx from "clsx";

const BrandLogo = ({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn(className, "flex items-center gap-2")}>
      <div className="w-10 h-10">
        {!dark ? <PrimaryBrandLogo /> : <SecondaryBrandLogo />}
      </div>
      <div
        className={clsx("text-[20px] md:text-[24px]", {
          "text-white": dark,
        })}
      >
        The
        <span className="text-[20px] md:text-[24px] font-semibold">
          Sociomatic
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;

const PrimaryBrandLogo = () => {
  return (
    <svg
      // width="100"
      // height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_345_300)">
        <rect
          x="1.5"
          y="1.5"
          width="97"
          height="97"
          rx="18.5"
          fill="url(#paint0_linear_345_300)"
          stroke="#0A40CC"
          strokeWidth="3"
        />
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="16"
          fill="url(#paint1_linear_345_300)"
        />
        <g filter="url(#filter0_d_345_300)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.75 25.474C15.2227 25.6682 14.4784 27.4429 15.4102 28.6685L55.9932 82.0458C56.925 83.2714 58.8342 83.0286 59.4296 81.6089L60.346 79.424C60.6292 78.7489 60.5209 77.9732 60.0638 77.4015L25.6424 34.3503C24.7733 33.2633 24.9499 31.6777 26.0369 30.8087C27.1238 29.9396 28.7094 30.1162 29.5785 31.2032L61.0529 70.5685C61.9418 71.6803 63.6966 71.4354 64.2472 70.1227V70.1227C64.5127 69.4897 64.4111 68.7623 63.9825 68.2262L35.2193 32.2518C34.4165 31.2477 34.5797 29.783 35.5838 28.9802C36.5879 28.1774 38.0526 28.3405 38.8554 29.3446L64.9307 61.9572C65.741 62.9706 67.3405 62.7474 67.8424 61.5509L68.1987 60.7012C68.2406 60.6013 68.2192 60.487 68.1516 60.4024V60.4024L44.4923 30.8115C43.6439 29.7504 43.8164 28.2025 44.8774 27.3541C45.9385 26.5057 47.4864 26.6782 48.3348 27.7392L68.3285 52.7455C69.2764 53.9311 71.1478 53.6699 71.7349 52.2701L85.3643 19.7743C85.9597 18.3545 84.7949 16.8225 83.2676 17.0167L16.75 25.474Z"
            fill="url(#paint2_linear_345_300)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_345_300"
          x="-1"
          y="5"
          width="102.523"
          height="97.8356"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_345_300"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_345_300"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_345_300"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_345_300"
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stopColor="#073DC6" />
          <stop offset="1" stopColor="#B8CCFE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_345_300"
          x1="50"
          y1="4"
          x2="50"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stopColor="#073DC6" />
          <stop offset="1" stopColor="#1355FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_345_300"
          x1="50.2614"
          y1="17"
          x2="50.2614"
          y2="82.8356"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#EEEEEE" />
        </linearGradient>
        <clipPath id="clip0_345_300">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const SecondaryBrandLogo = () => {
  return (
    <svg
      // width="100"
      // height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_345_317)">
        <rect
          x="1.5"
          y="1.5"
          width="97"
          height="97"
          rx="18.5"
          fill="url(#paint0_linear_345_317)"
          stroke="#E0E0E0"
          strokeWidth="3"
        />
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="16"
          fill="url(#paint1_linear_345_317)"
        />
        <g filter="url(#filter0_d_345_317)">
          <path
            d="M16.75 25.474C15.2227 25.6682 14.4784 27.4429 15.4102 28.6685L55.9932 82.0458C56.925 83.2714 58.8342 83.0286 59.4296 81.6089L60.346 79.424C60.6291 78.749 60.5209 77.9732 60.0638 77.4015L25.6424 34.3503C24.7733 33.2633 24.9499 31.6777 26.0369 30.8087C27.1238 29.9396 28.7094 30.1162 29.5785 31.2032L61.0529 70.5685C61.9418 71.6803 63.6966 71.4354 64.2472 70.1227C64.5126 69.4897 64.4111 68.7623 63.9825 68.2262L35.2193 32.2518C34.4165 31.2477 34.5797 29.783 35.5838 28.9802C36.5879 28.1774 38.0526 28.3405 38.8554 29.3446L64.9307 61.9572C65.741 62.9706 67.3405 62.7474 67.8424 61.5509L68.1987 60.7012C68.2406 60.6013 68.2192 60.487 68.1516 60.4024L44.4923 30.8115C43.6439 29.7504 43.8164 28.2025 44.8774 27.3541C45.9385 26.5057 47.4864 26.6782 48.3348 27.7392L68.3285 52.7455C69.2764 53.9311 71.1478 53.6699 71.7349 52.2701L85.3643 19.7743C85.9597 18.3545 84.7949 16.8225 83.2676 17.0167L16.75 25.474Z"
            fill="url(#paint2_linear_345_317)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_345_317"
          x="-1"
          y="5"
          width="102.523"
          height="97.8356"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_345_317"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_345_317"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_345_317"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_345_317"
          x1="50"
          y1="0"
          x2="50"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stopColor="#E0E0E0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_345_317"
          x1="50"
          y1="4"
          x2="50"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.19" stopColor="white" />
          <stop offset="1" stopColor="#E0E0E0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_345_317"
          x1="45"
          y1="17"
          x2="57.5"
          y2="83"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5E5E5E" />
          <stop offset="0.36" stopColor="#444444" />
        </linearGradient>
        <clipPath id="clip0_345_317">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
