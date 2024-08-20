const nextConfig = {
  env: {
    siteKey: "6LdMJA4pAAAAADYN5E_ZP-FU3Wf5CEXol4y8Oriu",
    copySecretKey: "6LdMJA4pAAAAAEsLN7h1RNb5Epw_8wGuPWY9Zjcj",
    resendKey: "re_UV9FxVgD_Nyy8cdfK987BGUdn9aHSfbms",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/f/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
