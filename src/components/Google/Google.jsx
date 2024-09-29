// src/components/GoogleAd.js
import React, { useEffect } from "react";

const GoogleAd = () => {
  useEffect(() => {
    try {
      // Initialize Google Ads
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsbygoogle error:", e);
    }
  }, []);

  return (
    <div className="google-ad">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7167740558520278" // Replace with your AdSense client ID
        data-ad-slot="yyyyyyyyyy" // Replace with your AdSense slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAd;
