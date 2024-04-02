const TargetAudience = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_165_15434)">
        <rect
          width="100"
          height="100"
          rx="10"
          fill="#1355FF"
          fillOpacity="0.05"
        />
      </g>
      <circle cx="50" cy="50" r="40" fill="#1355FF" />
      <circle cx="50" cy="50" r="35" fill="#F6F5FE" />
      <circle cx="50" cy="50" r="30" fill="#FFB454" />
      <circle cx="50" cy="50" r="25" fill="#F6F5FE" />
      <circle cx="50" cy="50" r="20" fill="#1355FF" />
      <circle cx="50" cy="50" r="15" fill="#F6F5FE" />
      <defs>
        <filter
          id="filter0_b_165_15434"
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
            result="effect1_backgroundBlur_165_15434"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_165_15434"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TargetAudience;
