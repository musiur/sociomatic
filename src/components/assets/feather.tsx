const Feather = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_123_16122)">
        <rect
          width="100"
          height="100"
          rx="10"
          fill="white"
          fillOpacity="0.05"
        />
        <rect
          x="1"
          y="1"
          width="98"
          height="98"
          rx="9"
          stroke="#1355FF"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeDasharray="4 4"
        />
      </g>
      <g filter="url(#filter1_ii_123_16122)">
        <path
          d="M20.6008 83.6134L15.8409 86C16.2715 80.099 17.0483 75.0312 18.1129 70.5789C8.32891 66.1814 12.4139 53.3278 15.8409 47.2185L15.2457 38.8655C17.0811 40.2117 19.5251 42.0419 21.4506 43.5612C19.4333 39.5482 18.8351 32.1375 18.8157 28.126C21.394 32.1036 27.1456 38.2689 29.5256 31.1092C31.9056 23.9495 34.8806 20.5686 36.0705 19.7732C36.4672 23.7507 38.3315 30.0353 42.6155 23.3529C46.8994 16.6706 54.317 15 57.4903 15C54.912 16.5911 52.1354 19.4152 61.6554 17.9832C71.1755 16.5513 85.8518 18.5799 92 19.7732C72.3652 19.1765 53.9204 34.6891 58.6803 33.4958C63.4403 32.3026 62.8453 37.0757 58.6803 37.0757C55.3484 37.0757 51.3421 40.6555 49.7554 42.4454C53.127 41.6499 59.3943 40.6555 57.4903 43.0421C55.5863 45.4286 43.2105 51.1961 37.2605 53.7815C41.4255 52.986 49.6364 51.8723 49.1604 53.7815C48.5654 56.1681 28.3356 60.9412 30.7156 60.9412C32.6196 60.9412 40.2355 58.9524 43.8055 57.958C40.6794 63.4899 32.1998 73.3301 21.876 71.6905C20.9176 76.2583 20.5565 80.3721 20.6008 83.6134Z"
          fill="url(#paint0_linear_123_16122)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_123_16122"
          x="-8"
          y="-8"
          width="116"
          height="116"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_123_16122"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_123_16122"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_ii_123_16122"
          x="12"
          y="13"
          width="80"
          height="75"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.644897 0 0 0 0 0.6375 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_123_16122"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_123_16122"
            result="effect2_innerShadow_123_16122"
          />
        </filter>
        <linearGradient
          id="paint0_linear_123_16122"
          x1="52"
          y1="15"
          x2="52"
          y2="86"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1355FF" />
          <stop offset="0.760417" stopColor="#FFB454" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Feather;
