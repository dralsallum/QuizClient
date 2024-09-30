// src/components/GoogleAd.js
import React, { useState, useEffect } from "react";
import AdSense from "react-adsense";

const GoogleAd = ({ onSkip }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    // Timer for loading indicator (e.g., 2 seconds)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust as needed

    // Timer to enable the "Skip" button after 5 seconds
    const skipTimer = setTimeout(() => {
      setCanSkip(true);
    }, 5000); // 5 seconds

    // Cleanup timers on unmount
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(skipTimer);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      {isLoading ? (
        <div>
          {/* Loading Indicator */}
          <p>Loading ad...</p>
          {/* You can replace the above with a spinner or more sophisticated loader */}
        </div>
      ) : (
        <div>
          {/* Google Ad */}
          <AdSense.Google
            client="ca-pub-7167740558520278" // Your AdSense client ID
            slot="2077129968" // Your AdSense slot ID
            style={{ display: "block" }}
            format="auto"
            responsive="true"
          />
          {/* Skip Button */}
          {canSkip && (
            <button
              onClick={onSkip}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#007BFF",
                color: "#fff",
              }}
            >
              Skip Ad
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default GoogleAd;
