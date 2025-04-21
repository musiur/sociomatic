export const trackGoogleMetaAdsLandingCTA = (buttonText: string, section?: string) => {
    if (typeof window !== "undefined") {
      window[`dataLayer`] = window?.dataLayer || [];
  
      window.dataLayer.push({
        event: "trackGoogleMetaAdsLandingCTA",
        buttonText,
        section
      });
    }
  }