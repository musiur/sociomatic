import Script from "next/script";
import { Fragment } from "react";

export const TagManagerProvider = () => {
  return (
    <Fragment>
      <Script
        id="vtag-ai-js"
        async
        src="https://r2.leadsy.ai/tag.js"
        data-pid="1oBHnrjiydTAck930"
        data-version="062024"
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WP6VXKV"
          height="0"
          width="0"
          style={{ display: "none", opacity: "none" }}
        ></iframe>
      </noscript>
    </Fragment>
  );
};
