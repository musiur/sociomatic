export const trackGoogleMetaAdsLandingCTA = () => {
    if (typeof window !== "undefined") {
      window[`dataLayer`] = window?.dataLayer || [];
  
      window.dataLayer.push({
        event: "trackGoogleMetaAdsLandingCTA",
      });
    }
  }