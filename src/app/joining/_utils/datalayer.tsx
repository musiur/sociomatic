"use client";

import { useEffect } from "react";

// Function to track email modal form submissions which is abandoned
function trackJoiningFormSubmissionA(formData: any) {
  if (typeof window !== "undefined") {
    window[`dataLayer`] = window?.dataLayer || [];

    window.dataLayer.push({
      event: "joiningFormSubmissionAbandoned",
      formName: "joining_form_abandoned",
      formData,
    });
  }
}

const JoiningDataLayer = () => {
  useEffect(() => {
    typeof window !== "undefined" && trackJoiningFormSubmissionA({});
  }, []);
  return <></>;
};

export default JoiningDataLayer;

// Function to track email modal form submissions
export function DL___FormData(
  formData: any,
  event?: string,
  formName?: string
) {
  if (typeof window !== "undefined") {
    window[`dataLayer`] = window?.dataLayer || [];

    window.dataLayer.push({
      event: event || "event",
      formName: formName || "formName",
      formData,
    });
  }
}
