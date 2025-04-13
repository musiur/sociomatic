import Script from "next/script";
import { Fragment } from "react";

export const DataLayerProvider = () => {
  return (
    <Fragment>
      <Script
        id="google-tag-manager"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WP6VXKV');`,
        }}
      />
      <meta
        name="google-site-verification"
        content="HGW6vnWMh6mOAQ_1OQdnsVq8n7YXAH6r3EtBFiXxs5E"
      />
      <Script
        id="data-layer"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];`,
        }}
      />
    </Fragment>
  );
};
