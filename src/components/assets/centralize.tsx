const Centralized = () => {
    return (
        <svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="60.8108" y="0.981689" width="39.1892" height="45.3333" rx="4" fill="#1355FF" />
            <rect y="55.6484" width="39.1892" height="45.3333" rx="4" fill="#FFB454" />
            <g filter="url(#filter0_b_316_4293)">
                <rect x="12.1622" y="11.6484" width="77.027" height="77.3333" rx="4" fill="white" fillOpacity="0.5" />
            </g>
            <g filter="url(#filter1_i_316_4293)">
                <path d="M50.3614 29.5456C50.9751 29.196 51.7276 29.196 52.3413 29.5456L71.4068 40.4063C72.0313 40.762 72.4168 41.4255 72.4168 42.1441V63.8193C72.4168 64.5379 72.0313 65.2013 71.4068 65.5571L52.3413 76.4178C51.7276 76.7673 50.9751 76.7673 50.3614 76.4178L31.2959 65.5571C30.6715 65.2013 30.2859 64.5379 30.2859 63.8193V42.1441C30.2859 41.4255 30.6715 40.762 31.2959 40.4063L50.3614 29.5456Z" fill="#191641" />
            </g>
            <defs>
                <filter id="filter0_b_316_4293" x="8.16217" y="7.64838" width="85.027" height="85.3333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_316_4293" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_316_4293" result="shape" />
                </filter>
                <filter id="filter1_i_316_4293" x="30.2859" y="29.2834" width="42.131" height="51.3965" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.44572 0 0 0 0 0.418837 0 0 0 0 0.804167 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_316_4293" />
                </filter>
            </defs>
        </svg>

    )
}

export default Centralized