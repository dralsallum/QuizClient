// src/pages/Landing.js
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FooterMe, Article, Divider, Open, NavVoc, Phone } from "../components";
import ConsentBanner from "../components/Consent/ConsentBanner";
import AdComponent from "../components/Google/Google";
import { consentSelector } from "../redux/consentRedux";

const Landing = () => {
  const { consent, optOut } = useSelector(consentSelector);
  const [isEEA, setIsEEA] = useState(false);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/"); // Using ipapi.co for geolocation
        const data = await response.json();
        const country = data.country_code;
        const EEA_COUNTRIES = [
          "AT",
          "BE",
          "BG",
          "HR",
          "CY",
          "CZ",
          "DK",
          "EE",
          "FI",
          "FR",
          "DE",
          "GR",
          "HU",
          "IE",
          "IT",
          "LV",
          "LT",
          "LU",
          "MT",
          "NL",
          "PL",
          "PT",
          "RO",
          "SK",
          "SI",
          "ES",
          "SE",
          "GB",
          "CH",
        ];
        if (EEA_COUNTRIES.includes(country)) {
          setIsEEA(true);
        }
      } catch (error) {
        console.error("Geo-Targeting error:", error);
        // Optionally set a default value or handle the error
      }
    };

    fetchGeoData();
  }, []);

  return (
    <>
      <NavVoc />
      <Open />
      <Phone />
      <Article />
      <Divider />
      <Article />
      {isEEA && <ConsentBanner />} {/* Show ConsentBanner only for EEA users */}
      <AdComponent /> {/* AdComponent handles its own conditional rendering */}
      <FooterMe />
    </>
  );
};

export default Landing;
