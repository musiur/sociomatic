const Premium = () => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="100" height="100" rx="20" fill="#C1BCFF" />
      <g filter="url(#filter0_d_412_19318)">
        <rect x="25" y="25" width="70" height="70" rx="10" fill="white" />
      </g>
      <g filter="url(#filter1_dii_412_19318)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60 90C76.5685 90 90 76.5685 90 60C90 43.4315 76.5685 30 60 30C43.4315 30 30 43.4315 30 60C30 76.5685 43.4315 90 60 90ZM60.5 77C70.165 77 78 69.165 78 59.5C78 49.835 70.165 42 60.5 42C50.835 42 43 49.835 43 59.5C43 69.165 50.835 77 60.5 77Z"
          fill="url(#paint0_linear_412_19318)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_412_19318"
          x="0"
          y="0"
          width="120"
          height="120"
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
          <feOffset />
          <feGaussianBlur stdDeviation="12.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.34902 0 0 0 0 0.337255 0 0 0 0 0.913725 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_412_19318"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_412_19318"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_dii_412_19318"
          x="26"
          y="26"
          width="68"
          height="72"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_412_19318"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_412_19318"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.648979 0 0 0 0 0.641667 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_412_19318"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.247 0 0 0 0 0 0 0 0 0 0.65 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_412_19318"
            result="effect3_innerShadow_412_19318"
          />
        </filter>
        <linearGradient
          id="paint0_linear_412_19318"
          x1="60"
          y1="30"
          x2="60"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0C1889" />
          <stop offset="1" stopColor="#020060" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Premium;
