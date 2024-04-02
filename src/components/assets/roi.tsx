const ROI = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_165_15440)">
        <rect
          width="100"
          height="100"
          rx="10"
          fill="#1355FF"
          fillOpacity="0.05"
        />
      </g>
      <circle cx="50" cy="50" r="33" fill="#F6F5FE" />
      <path
        d="M20 50C20 55.9334 21.7595 61.7336 25.0559 66.6671C28.3524 71.6006 33.0377 75.4458 38.5195 77.7164C44.0013 79.987 50.0333 80.5811 55.8527 79.4236C61.6721 78.266 67.0176 75.4088 71.2132 71.2132C75.4088 67.0176 78.266 61.6721 79.4236 55.8527C80.5811 50.0333 79.987 44.0013 77.7164 38.5195C75.4458 33.0377 71.6006 28.3524 66.6671 25.0559C61.7336 21.7595 55.9334 20 50 20C41.6132 20.0316 34.0299 23.6707 28 29.5L23.5 35.5"
        stroke="#1355FF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 20V36.6667H36.6667"
        stroke="#1355FF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 37.5V62.5"
        stroke="#FFB454"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.25 41.25H46.875C45.7147 41.25 44.6019 41.7109 43.7814 42.5314C42.9609 43.3519 42.5 44.4647 42.5 45.625C42.5 46.7853 42.9609 47.8981 43.7814 48.7186C44.6019 49.5391 45.7147 50 46.875 50H53.125C54.2853 50 55.3981 50.4609 56.2186 51.2814C57.0391 52.1019 57.5 53.2147 57.5 54.375C57.5 55.5353 57.0391 56.6481 56.2186 57.4686C55.3981 58.2891 54.2853 58.75 53.125 58.75H42.5"
        stroke="#FFB454"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_b_165_15440"
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
            result="effect1_backgroundBlur_165_15440"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_165_15440"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ROI;
