import { cn } from "@/lib/utils";

const VideoPlayButton = ({ className }: { className?: string }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "")}
    >
      <g filter="url(#filter0_b_194_12215)">
        <circle
          cx="50"
          cy="50"
          r="50"
          className="backdrop-filter backdrop-blur-xl fill-white/80"
        />
        <circle cx="50" cy="50" r="48.5" stroke="#F6F5FE" strokeWidth="3" />
      </g>
      <path
        d="M35 27.4834C35 25.9438 36.6667 24.9815 38 25.7513L77.0001 48.268C78.3334 49.0378 78.3334 50.9623 77 51.7321L38 74.2488C36.6667 75.0186 35 74.0563 35 72.5167L35 27.4834Z"
        fill="#1355FF"
      />
      <defs>
        <filter
          id="filter0_b_194_12215"
          x="-10"
          y="-10"
          width="120"
          height="120"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_194_12215"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_194_12215"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default VideoPlayButton;
