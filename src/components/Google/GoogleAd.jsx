// src/components/GoogleAd.js
import React from "react";
import AdSense from "react-adsense";

const GoogleAd = () => (
  <div style={{ textAlign: "center", margin: "20px 0" }}>
    <AdSense.Google
      client="ca-pub-7167740558520278" // Replace with your AdSense client ID
      data-ad-slot="2077129968"
      style={{ display: "block" }}
      format="auto"
      responsive="true"
    />
  </div>
);

export default GoogleAd;
