import React, { useEffect, useState } from "react";
import {
  StoreBanner,
  StoreBannerArrowContain,
  StoreBannerArrowContainer,
  StoreBannerLast,
  StoreBannerMain,
  StoreBannerSub,
  StoreTextContainer,
  StoreTextContainerSec,
  StoreTextContainerSub,
  StoreTextContainerThi,
  StoreTextHeader,
  StoreTimeBoost,
  StoreTimeKey,
  StoreTimeKeyContainer,
  StoreWtapper,
} from "../Store/Store.elements";
import SecSlider from "../SecSlider/SecSlider";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

const Store = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StoreWtapper>
      <StoreTimeBoost>
        <StoreTimeKeyContainer>
          <StoreTimeKey>
            <StoreBanner>
              <StoreBannerMain>
                <StoreBannerSub>
                  <StoreBannerLast></StoreBannerLast>
                </StoreBannerSub>
                <StoreTextContainer>
                  <StoreTextContainerSub></StoreTextContainerSub>
                  <StoreTextContainerSec>
                    <StoreTextContainerThi>
                      <Link
                        to={"cashout"}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <StoreTextHeader>
                          زِّد قدرتك على فهم اللغة بخصم 60% على الاشتراك المميز
                        </StoreTextHeader>
                      </Link>
                    </StoreTextContainerThi>
                  </StoreTextContainerSec>
                </StoreTextContainer>
              </StoreBannerMain>
              <StoreBannerArrowContainer>
                <StoreBannerArrowContain></StoreBannerArrowContain>
              </StoreBannerArrowContainer>
            </StoreBanner>
          </StoreTimeKey>
        </StoreTimeKeyContainer>
      </StoreTimeBoost>
      <Slider />
    </StoreWtapper>
  );
};

export default Store;
