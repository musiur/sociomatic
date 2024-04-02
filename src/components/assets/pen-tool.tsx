const PenTool = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_123_16092)">
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
      <path d="M43 9L89.5 55.5" stroke="#1355FF" strokeWidth="3" />
      <path d="M69 36.5L92.5 13L23.5 82" stroke="#FFB454" strokeWidth="2" />
      <path
        d="M14.5 19.5C40.1667 16.6667 88.9 25.5 78.5 83.5"
        stroke="#1355FF"
        strokeWidth="3"
      />
      <path
        d="M62.7071 36.071L69.0711 29.7071L75.435 36.071L69.0711 42.435L62.7071 36.071Z"
        fill="#FFB454"
        stroke="#1355FF"
      />
      <rect
        x="72.571"
        y="81.571"
        width="9"
        height="9"
        fill="white"
        stroke="#1355FF"
      />
      <rect
        x="8.5"
        y="15.5"
        width="9"
        height="9"
        fill="white"
        stroke="#1355FF"
      />
      <defs>
        <filter
          id="filter0_b_123_16092"
          x="-2"
          y="-2"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_123_16092"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_123_16092"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PenTool;
