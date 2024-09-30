// src/components/ConsentBanner.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  giveConsent,
  declineConsent,
  optOutAds,
} from "../../redux/consentRedux";
import { consentSelector } from "../../redux/consentRedux";

const ConsentBanner = () => {
  const dispatch = useDispatch();
  const { consent, optOut } = useSelector(consentSelector);

  if (consent || optOut) return null; // Do not display banner if consent given or opted out

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
    <div style={styles.banner}>
      <p>
        We use cookies to personalize ads and improve your experience. By
        clicking "Accept", you consent to our use of cookies.
        <a href="/privacy-settings" style={styles.link}>
          {" "}
          Learn more
        </a>
      </p>
      <div style={styles.buttonContainer}>
        <button onClick={handleAccept} style={styles.button}>
          Accept
        </button>
        <button onClick={handleDecline} style={styles.button}>
          Decline
        </button>
        <button onClick={handleOptOut} style={styles.button}>
          Do Not Sell My Information
        </button>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 -2px 5px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    zIndex: 1000,
  },
  buttonContainer: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  link: {
    marginLeft: "5px",
    color: "#0000EE",
    textDecoration: "underline",
  },
};

export default ConsentBanner;
