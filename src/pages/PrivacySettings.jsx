// src/pages/PrivacySettings.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { giveConsent, declineConsent, optOutAds } from "../redux/consentRedux";
import { consentSelector } from "../redux/consentRedux";

const PrivacySettings = () => {
  const dispatch = useDispatch();
  const { consent, optOut } = useSelector(consentSelector);

  const handleAccept = () => {
    dispatch(giveConsent());
  };

  const handleDecline = () => {
    dispatch(declineConsent());
  };

  const handleOptOut = () => {
    dispatch(optOutAds());
  };

  return (
    <div style={styles.container}>
      <h2>Privacy Settings</h2>
      <div style={styles.option}>
        <p>Personalized Ads:</p>
        {consent ? (
          <button onClick={handleDecline} style={styles.button}>
            Disable Personalized Ads
          </button>
        ) : (
          <button onClick={handleAccept} style={styles.button}>
            Enable Personalized Ads
          </button>
        )}
      </div>
      <div style={styles.option}>
        <p>Do Not Sell My Personal Information:</p>
        {optOut ? (
          <p>You have opted out of selling your information.</p>
        ) : (
          <button onClick={handleOptOut} style={styles.button}>
            Opt-Out
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  option: {
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default PrivacySettings;
