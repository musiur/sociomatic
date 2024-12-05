const BrandLogo = ({dark = false}: {dark?: boolean}) => {
  return (
    <svg
      width="200"
      height="36"
      viewBox="0 0 200 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M54.12 11.06V12.54H50.32V25H48.5V12.54H44.68V11.06H54.12ZM61.8003 13.84C62.627 13.84 63.3736 14.02 64.0403 14.38C64.707 14.7267 65.227 15.2533 65.6003 15.96C65.987 16.6667 66.1803 17.5267 66.1803 18.54V25H64.3803V18.8C64.3803 17.7067 64.107 16.8733 63.5603 16.3C63.0136 15.7133 62.267 15.42 61.3203 15.42C60.3603 15.42 59.5936 15.72 59.0203 16.32C58.4603 16.92 58.1803 17.7933 58.1803 18.94V25H56.3603V10.2H58.1803V15.6C58.5403 15.04 59.0336 14.6067 59.6603 14.3C60.3003 13.9933 61.0136 13.84 61.8003 13.84ZM79.1533 19.1C79.1533 19.4467 79.1333 19.8133 79.0933 20.2H70.3333C70.3999 21.28 70.7666 22.1267 71.4333 22.74C72.1133 23.34 72.9333 23.64 73.8933 23.64C74.6799 23.64 75.3333 23.46 75.8533 23.1C76.3866 22.7267 76.7599 22.2333 76.9733 21.62H78.9333C78.6399 22.6733 78.0533 23.5333 77.1733 24.2C76.2933 24.8533 75.1999 25.18 73.8933 25.18C72.8533 25.18 71.9199 24.9467 71.0933 24.48C70.2799 24.0133 69.6399 23.3533 69.1733 22.5C68.7066 21.6333 68.4733 20.6333 68.4733 19.5C68.4733 18.3667 68.6999 17.3733 69.1533 16.52C69.6066 15.6667 70.2399 15.0133 71.0533 14.56C71.8799 14.0933 72.8266 13.86 73.8933 13.86C74.9333 13.86 75.8533 14.0867 76.6533 14.54C77.4533 14.9933 78.0666 15.62 78.4933 16.42C78.9333 17.2067 79.1533 18.1 79.1533 19.1ZM77.2733 18.72C77.2733 18.0267 77.1199 17.4333 76.8133 16.94C76.5066 16.4333 76.0866 16.0533 75.5533 15.8C75.0333 15.5333 74.4533 15.4 73.8133 15.4C72.8933 15.4 72.1066 15.6933 71.4533 16.28C70.8133 16.8667 70.4466 17.68 70.3533 18.72H77.2733ZM86.2156 25.14C85.2423 25.14 84.3623 24.9733 83.5756 24.64C82.8023 24.3067 82.189 23.8267 81.7356 23.2C81.2823 22.5733 81.049 21.8333 81.0356 20.98H84.0356C84.0756 21.5533 84.2756 22.0067 84.6356 22.34C85.009 22.6733 85.5156 22.84 86.1556 22.84C86.809 22.84 87.3223 22.6867 87.6956 22.38C88.069 22.06 88.2556 21.6467 88.2556 21.14C88.2556 20.7267 88.129 20.3867 87.8756 20.12C87.6223 19.8533 87.3023 19.6467 86.9156 19.5C86.5423 19.34 86.0223 19.1667 85.3556 18.98C84.449 18.7133 83.709 18.4533 83.1356 18.2C82.5756 17.9333 82.089 17.54 81.6756 17.02C81.2756 16.4867 81.0756 15.78 81.0756 14.9C81.0756 14.0733 81.2823 13.3533 81.6956 12.74C82.109 12.1267 82.689 11.66 83.4356 11.34C84.1823 11.0067 85.0356 10.84 85.9956 10.84C87.4356 10.84 88.6023 11.1933 89.4956 11.9C90.4023 12.5933 90.9023 13.5667 90.9956 14.82H87.9156C87.889 14.34 87.6823 13.9467 87.2956 13.64C86.9223 13.32 86.4223 13.16 85.7956 13.16C85.249 13.16 84.809 13.3 84.4756 13.58C84.1556 13.86 83.9956 14.2667 83.9956 14.8C83.9956 15.1733 84.1156 15.4867 84.3556 15.74C84.609 15.98 84.9156 16.18 85.2756 16.34C85.649 16.4867 86.169 16.66 86.8356 16.86C87.7423 17.1267 88.4823 17.3933 89.0556 17.66C89.629 17.9267 90.1223 18.3267 90.5356 18.86C90.949 19.3933 91.1556 20.0933 91.1556 20.96C91.1556 21.7067 90.9623 22.4 90.5756 23.04C90.189 23.68 89.6223 24.1933 88.8756 24.58C88.129 24.9533 87.2423 25.14 86.2156 25.14ZM98.5031 25.18C97.4365 25.18 96.4765 24.9467 95.6231 24.48C94.7698 24 94.0965 23.3267 93.6031 22.46C93.1231 21.5933 92.8831 20.5933 92.8831 19.46C92.8831 18.3267 93.1298 17.3267 93.6231 16.46C94.1298 15.5933 94.8165 14.9267 95.6831 14.46C96.5498 13.98 97.5165 13.74 98.5831 13.74C99.6498 13.74 100.616 13.98 101.483 14.46C102.35 14.9267 103.03 15.5933 103.523 16.46C104.03 17.3267 104.283 18.3267 104.283 19.46C104.283 20.5933 104.023 21.5933 103.503 22.46C102.996 23.3267 102.303 24 101.423 24.48C100.556 24.9467 99.5831 25.18 98.5031 25.18ZM98.5031 22.74C99.0098 22.74 99.4831 22.62 99.9231 22.38C100.376 22.1267 100.736 21.7533 101.003 21.26C101.27 20.7667 101.403 20.1667 101.403 19.46C101.403 18.4067 101.123 17.6 100.563 17.04C100.016 16.4667 99.3431 16.18 98.5431 16.18C97.7431 16.18 97.0698 16.4667 96.5231 17.04C95.9898 17.6 95.7231 18.4067 95.7231 19.46C95.7231 20.5133 95.9831 21.3267 96.5031 21.9C97.0365 22.46 97.7031 22.74 98.5031 22.74ZM105.617 19.46C105.617 18.3133 105.85 17.3133 106.317 16.46C106.784 15.5933 107.43 14.9267 108.257 14.46C109.084 13.98 110.03 13.74 111.097 13.74C112.47 13.74 113.604 14.0867 114.497 14.78C115.404 15.46 116.01 16.42 116.317 17.66H113.297C113.137 17.18 112.864 16.8067 112.477 16.54C112.104 16.26 111.637 16.12 111.077 16.12C110.277 16.12 109.644 16.4133 109.177 17C108.71 17.5733 108.477 18.3933 108.477 19.46C108.477 20.5133 108.71 21.3333 109.177 21.92C109.644 22.4933 110.277 22.78 111.077 22.78C112.21 22.78 112.95 22.2733 113.297 21.26H116.317C116.01 22.46 115.404 23.4133 114.497 24.12C113.59 24.8267 112.457 25.18 111.097 25.18C110.03 25.18 109.084 24.9467 108.257 24.48C107.43 24 106.784 23.3333 106.317 22.48C105.85 21.6133 105.617 20.6067 105.617 19.46ZM119.788 12.6C119.295 12.6 118.882 12.4467 118.548 12.14C118.228 11.82 118.068 11.4267 118.068 10.96C118.068 10.4933 118.228 10.1067 118.548 9.8C118.882 9.48 119.295 9.32 119.788 9.32C120.282 9.32 120.688 9.48 121.008 9.8C121.342 10.1067 121.508 10.4933 121.508 10.96C121.508 11.4267 121.342 11.82 121.008 12.14C120.688 12.4467 120.282 12.6 119.788 12.6ZM121.168 13.92V25H118.368V13.92H121.168ZM128.855 25.18C127.788 25.18 126.828 24.9467 125.975 24.48C125.121 24 124.448 23.3267 123.955 22.46C123.475 21.5933 123.235 20.5933 123.235 19.46C123.235 18.3267 123.481 17.3267 123.975 16.46C124.481 15.5933 125.168 14.9267 126.035 14.46C126.901 13.98 127.868 13.74 128.935 13.74C130.001 13.74 130.968 13.98 131.835 14.46C132.701 14.9267 133.381 15.5933 133.875 16.46C134.381 17.3267 134.635 18.3267 134.635 19.46C134.635 20.5933 134.375 21.5933 133.855 22.46C133.348 23.3267 132.655 24 131.775 24.48C130.908 24.9467 129.935 25.18 128.855 25.18ZM128.855 22.74C129.361 22.74 129.835 22.62 130.275 22.38C130.728 22.1267 131.088 21.7533 131.355 21.26C131.621 20.7667 131.755 20.1667 131.755 19.46C131.755 18.4067 131.475 17.6 130.915 17.04C130.368 16.4667 129.695 16.18 128.895 16.18C128.095 16.18 127.421 16.4667 126.875 17.04C126.341 17.6 126.075 18.4067 126.075 19.46C126.075 20.5133 126.335 21.3267 126.855 21.9C127.388 22.46 128.055 22.74 128.855 22.74ZM150.449 13.76C151.809 13.76 152.902 14.18 153.729 15.02C154.569 15.8467 154.989 17.0067 154.989 18.5V25H152.189V18.88C152.189 18.0133 151.969 17.3533 151.529 16.9C151.089 16.4333 150.489 16.2 149.729 16.2C148.969 16.2 148.362 16.4333 147.909 16.9C147.469 17.3533 147.249 18.0133 147.249 18.88V25H144.449V18.88C144.449 18.0133 144.229 17.3533 143.789 16.9C143.349 16.4333 142.749 16.2 141.989 16.2C141.215 16.2 140.602 16.4333 140.149 16.9C139.709 17.3533 139.489 18.0133 139.489 18.88V25H136.689V13.92H139.489V15.26C139.849 14.7933 140.309 14.4267 140.869 14.16C141.442 13.8933 142.069 13.76 142.749 13.76C143.615 13.76 144.389 13.9467 145.069 14.32C145.749 14.68 146.275 15.2 146.649 15.88C147.009 15.24 147.529 14.7267 148.209 14.34C148.902 13.9533 149.649 13.76 150.449 13.76ZM156.926 19.42C156.926 18.3 157.146 17.3067 157.586 16.44C158.039 15.5733 158.646 14.9067 159.406 14.44C160.179 13.9733 161.039 13.74 161.986 13.74C162.812 13.74 163.532 13.9067 164.146 14.24C164.772 14.5733 165.272 14.9933 165.646 15.5V13.92H168.466V25H165.646V23.38C165.286 23.9 164.786 24.3333 164.146 24.68C163.519 25.0133 162.792 25.18 161.966 25.18C161.032 25.18 160.179 24.94 159.406 24.46C158.646 23.98 158.039 23.3067 157.586 22.44C157.146 21.56 156.926 20.5533 156.926 19.42ZM165.646 19.46C165.646 18.78 165.512 18.2 165.246 17.72C164.979 17.2267 164.619 16.8533 164.166 16.6C163.712 16.3333 163.226 16.2 162.706 16.2C162.186 16.2 161.706 16.3267 161.266 16.58C160.826 16.8333 160.466 17.2067 160.186 17.7C159.919 18.18 159.786 18.7533 159.786 19.42C159.786 20.0867 159.919 20.6733 160.186 21.18C160.466 21.6733 160.826 22.0533 161.266 22.32C161.719 22.5867 162.199 22.72 162.706 22.72C163.226 22.72 163.712 22.5933 164.166 22.34C164.619 22.0733 164.979 21.7 165.246 21.22C165.512 20.7267 165.646 20.14 165.646 19.46ZM174.46 16.22V21.58C174.46 21.9533 174.547 22.2267 174.72 22.4C174.907 22.56 175.214 22.64 175.64 22.64H176.94V25H175.18C172.82 25 171.64 23.8533 171.64 21.56V16.22H170.32V13.92H171.64V11.18H174.46V13.92H176.94V16.22H174.46ZM180.374 12.6C179.881 12.6 179.468 12.4467 179.134 12.14C178.814 11.82 178.654 11.4267 178.654 10.96C178.654 10.4933 178.814 10.1067 179.134 9.8C179.468 9.48 179.881 9.32 180.374 9.32C180.868 9.32 181.274 9.48 181.594 9.8C181.928 10.1067 182.094 10.4933 182.094 10.96C182.094 11.4267 181.928 11.82 181.594 12.14C181.274 12.4467 180.868 12.6 180.374 12.6ZM181.754 13.92V25H178.954V13.92H181.754ZM183.801 19.46C183.801 18.3133 184.034 17.3133 184.501 16.46C184.967 15.5933 185.614 14.9267 186.441 14.46C187.267 13.98 188.214 13.74 189.281 13.74C190.654 13.74 191.787 14.0867 192.681 14.78C193.587 15.46 194.194 16.42 194.501 17.66H191.481C191.321 17.18 191.047 16.8067 190.661 16.54C190.287 16.26 189.821 16.12 189.261 16.12C188.461 16.12 187.827 16.4133 187.361 17C186.894 17.5733 186.661 18.3933 186.661 19.46C186.661 20.5133 186.894 21.3333 187.361 21.92C187.827 22.4933 188.461 22.78 189.261 22.78C190.394 22.78 191.134 22.2733 191.481 21.26H194.501C194.194 22.46 193.587 23.4133 192.681 24.12C191.774 24.8267 190.641 25.18 189.281 25.18C188.214 25.18 187.267 24.9467 186.441 24.48C185.614 24 184.967 23.3333 184.501 22.48C184.034 21.6133 183.801 20.6067 183.801 19.46Z"
        fill={dark ? "#fff": "#191641"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.73676 4.28689C0.218329 4.48162 -0.517703 6.25165 0.408705 7.48064L20.7234 34.4305C21.654 35.6651 23.5625 35.428 24.1545 34.0042V34.0042C24.2479 33.7796 24.2121 33.5221 24.061 33.3315L5.07264 9.37746C4.59822 8.77898 4.69556 7.90517 5.29004 7.42575C5.88452 6.94633 6.75104 7.04284 7.22546 7.64133L24.4346 29.3508C24.9218 29.9654 25.8899 29.8309 26.191 29.1067V29.1067C26.3346 28.7615 26.2796 28.3655 26.0473 28.0725L10.31 8.21973C9.87176 7.66686 9.96167 6.85965 10.5108 6.41678C11.06 5.9739 11.8605 6.06306 12.2987 6.61593L26.5552 24.6006C26.9996 25.1612 27.8827 25.0385 28.1574 24.3779L28.3503 23.914C28.3726 23.8604 28.3613 23.7992 28.3252 23.7538V23.7538L15.3819 7.4256C14.9188 6.84135 15.0138 5.98832 15.5941 5.5203C16.1745 5.05228 17.0204 5.14651 17.4835 5.73075L27.4609 18.3173C28.4078 19.5119 30.2896 19.2504 30.8749 17.8428L37.1366 2.78436C37.7286 1.36062 36.5588 -0.17872 35.0335 0.0168879L1.73676 4.28689Z"
        fill="url(#paint0_linear_79_83)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_79_83"
          x1="18.6466"
          y1="0"
          x2="18.6466"
          y2="35.2297"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1355FF" />
          <stop offset="1" stopColor="#0B3399" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BrandLogo;
