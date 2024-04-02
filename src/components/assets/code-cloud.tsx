const CodeCloud = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_206_1091)">
        <rect
          x="15.875"
          y="51.4851"
          width="73"
          height="48.5149"
          rx="8"
          fill="#D9D9D9"
          fillOpacity="0.02"
        />
        <rect
          x="16.875"
          y="52.4851"
          width="71"
          height="46.5149"
          rx="7"
          stroke="#1355FF"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeDasharray="4 4"
        />
      </g>
      <path
        d="M44.375 66.3367L33.875 76.2377L43.875 84.1585"
        stroke="#1355FF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60.875 62.3762L43.875 87.1287"
        stroke="#FFB454"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.875 67.3268L69.375 75.7426L60.375 83.1684"
        stroke="#1355FF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g filter="url(#filter1_i_206_1091)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61.8749 16.2158L61.875 16.1476C61.875 7.22953 56.0547 0 48.875 0C42.5657 0 37.3062 5.58293 36.1237 12.9886C30.7727 13.7095 26.2141 17.6957 23.776 23.3035C21.9037 21.9144 19.7144 21.1161 17.375 21.1161C10.4714 21.1161 4.875 28.0676 4.875 36.6427C4.875 45.2177 10.4714 52.1692 17.375 52.1692C18.6046 52.1692 19.7927 51.9487 20.9151 51.5378C20.8885 51.9509 20.875 52.3686 20.875 52.7903C20.875 61.3654 26.4714 68.3168 33.375 68.3168C38.9483 68.3168 43.6696 63.7863 45.2823 57.5285C46.5646 58.0802 47.9416 58.3798 49.375 58.3798C51.3735 58.3798 53.2624 57.7973 54.9377 56.7615C57.2295 60.036 60.6076 62.1062 64.375 62.1062C69.1904 62.1062 73.3698 58.7241 75.4576 53.768C77.5832 53.5415 79.5569 52.6542 81.2449 51.2723C82.6707 52.6148 84.4479 53.4113 86.375 53.4113C91.0694 53.4113 94.875 48.6843 94.875 42.8533C94.875 37.0222 91.0694 32.2952 86.375 32.2952C86.2195 32.2952 86.0649 32.3004 85.9115 32.3106C84.0245 26.7084 79.5698 22.7723 74.375 22.7723C72.635 22.7723 70.978 23.2139 69.4727 24.0118C68.4307 19.8373 65.4723 16.7097 61.8749 16.2158Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_206_1091"
          x="13.875"
          y="49.4851"
          width="77"
          height="52.5149"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_206_1091"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_206_1091"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_206_1091"
          x="4.875"
          y="0"
          width="90"
          height="69.3169"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_206_1091"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CodeCloud;
