// src/components/AdComponent.js
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { consentSelector } from "../../redux/consentRedux";

const AdComponent = () => {
  const { consent, optOut } = useSelector(consentSelector);

  useEffect(() => {
    if (consent && !optOut) {
      // Check if the Google Ads script is already loaded
      if (
        !document.querySelector('script[data-ad-client="YOUR_AD_CLIENT_ID"]')
      ) {
        const script = document.createElement("script");
        script.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.setAttribute("data-ad-client", "YOUR_AD_CLIENT_ID"); // Replace with your Ad Client ID
        document.body.appendChild(script);
      }

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsbygoogle error:", e);
      }
    }
  }, [consent, optOut]);

  if (!consent || optOut) return null; // Do not render ads if consent not given or opted out

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7167740558520278" // Replace with your Ad Client ID
      data-ad-slot="YOUR_AD_SLOT" // Replace with your Ad Slot
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdComponent;
