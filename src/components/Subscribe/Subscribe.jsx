/* global ShopifyBuy */
import React, { useRef, useState, useEffect } from "react";
import {
  AllWr,
  BanCon,
  BanDiv,
  BanIcCon,
  BanIcDiv,
  BanPa,
  BanPaDiv,
  BanSubDiv,
  BanSvg,
  BanWr,
  ButBot,
  ButTop,
  ButWr,
  ElBot,
  ElBotCon,
  ElEx,
  ElMid,
  ElMidPa,
  ElMidPar,
  ElPa,
  ElSp,
  ElTop,
  ElTopPa,
  ElWr,
  FeCon,
  FeEl,
  FeRi,
  FeRiImg,
  FeRiPa,
  FeRiPar,
  FeWr,
  MaWr,
  MaWrBo,
  MidCon,
  MidWr,
  OpBo,
  OpBoCh,
  OpBoDiv,
  OpBoHe,
  OpBoPa,
  OpTop,
  OpTopHe,
  OpWr,
} from "./Subscribe.elements.jsx";
import { FaCrown } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import features from "../../utils/sub.json";
import { Link } from "react-router-dom";

const Subscribe = () => {
  const [selectedPlan, setSelectedPlan] = useState(1); // Define state for selected plan

  useEffect(() => {
    window.scrollTo(0, 0);
    initializeShopifyButtons();
  }, []);

  const plans = [
    {
      id: 1,
      duration: "3 أشهر",
      price: "SAR 149.94",
      discountedPrice: "SAR 59.98",
      monthlyPrice: "SAR 19.99 / شهرياً",
      discount: "خصم 50%",
      productId: "8530677760215",
    },
    {
      id: 2,
      duration: "6 أشهر",
      price: "SAR 299.88",
      discountedPrice: "SAR 119.95",
      monthlyPrice: "SAR 12.99 / شهرياً",
      discount: "خصم 60%",
      productId: "7300163141737",
    },
    {
      id: 3,
      duration: "12 شهراً",
      price: "SAR 599.76",
      discountedPrice: "SAR 179.93",
      monthlyPrice: "SAR 9.99 / شهرياً",
      discount: "خصم 70%",
      productId: "7300175888489",
    },
  ];

  const initializeShopifyButtons = () => {
    const scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      if (!document.querySelector(`script[src="${scriptURL}"]`)) {
        loadScript();
      } else {
        document.querySelector(`script[src="${scriptURL}"]`).onload =
          ShopifyBuyInit;
      }
    }

    function loadScript() {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      document.head.appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      const client = ShopifyBuy.buildClient({
        domain: "13a967-40.myshopify.com",
        storefrontAccessToken: "bb59ebb309f33cfc4686baec67afebe2",
      });

      ShopifyBuy.UI.onReady(client).then(function (ui) {
        plans.forEach((plan) => {
          ui.createComponent("product", {
            id: plan.productId,
            node: document.getElementById(`product-component-${plan.id}`),
            moneyFormat: "%7B%7Bamount%7D%7D%20SR",
            options: {
              product: {
                iframe: false,
                contents: {
                  title: false,
                  price: false,
                  description: false,
                  img: false,
                  imgWithCarousel: false,
                  button: true,
                },
                styles: {
                  product: {
                    "@media (min-width: 601px)": {
                      "max-width": "calc(25% - 20px)",
                      "margin-left": "20px",
                      "margin-bottom": "50px",
                      "margin-bottom": "50px",
                    },
                  },
                  button: {
                    ":hover": {
                      "background-color": "#4c32c6",
                    },
                    "background-color": "#5438dc",
                    ":focus": {
                      "background-color": "#4c32c6",
                    },
                  },
                },
                text: {
                  button: "اضافة للسلة",
                },
              },
              cart: {
                styles: {
                  button: {
                    ":hover": {
                      "background-color": "#4c32c6",
                    },
                    "background-color": "#5438dc",
                    ":focus": {
                      "background-color": "#4c32c6",
                    },
                  },
                },
                text: {
                  total: "المجموع",
                  button: "الدفع",
                },
              },
              toggle: {
                styles: {
                  toggle: {
                    "background-color": "#5438dc",
                    ":hover": {
                      "background-color": "#4c32c6",
                    },
                    ":focus": {
                      "background-color": "#4c32c6",
                    },
                  },
                },
              },
            },
          });
        });
      });
    }
  };

  return (
    <AllWr>
      <BanWr>
        <BanDiv>
          <BanSubDiv>
            <BanIcDiv>
              <BanIcCon>
                <BanSvg>
                  <FaCrown />
                </BanSvg>
              </BanIcCon>
            </BanIcDiv>
            <BanCon>
              <BanPaDiv>
                <BanPa>خصم 70% على العضوية المميزة</BanPa>
              </BanPaDiv>
            </BanCon>
          </BanSubDiv>
        </BanDiv>
      </BanWr>
      <MaWr>
        <div></div>
        <MaWrBo>
          <div></div>
          <OpWr>
            <OpBo>
              <OpBoHe>ابدأ اليوم بدون مخاطر</OpBoHe>
              <OpBoDiv>
                <OpBoCh>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </OpBoCh>
                <OpBoPa>ضمان استعادة الأموال لمدة 14 يومًا.</OpBoPa>
              </OpBoDiv>
              <MidWr>
                <MidCon>
                  {plans.map((plan) => (
                    <ElWr
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <ElTop selected={selectedPlan === plan.id}>
                        <ElTopPa>{plan.duration}</ElTopPa>
                      </ElTop>
                      <ElMid>
                        <ElMidPa>{plan.price}</ElMidPa>
                        <ElMidPar>{plan.discountedPrice}</ElMidPar>
                      </ElMid>
                      <ElPa>{plan.monthlyPrice}</ElPa>
                      <ElBot>
                        <ElBotCon>
                          <ElSp>{plan.discount}</ElSp>
                        </ElBotCon>
                      </ElBot>
                      <ElEx></ElEx>
                    </ElWr>
                  ))}
                </MidCon>
              </MidWr>
              <ButWr>
                {plans.map((plan) => (
                  <ButTop
                    key={plan.id}
                    onClick={() =>
                      document
                        .querySelector(
                          `#product-component-${plan.id} .shopify-buy__btn`
                        )
                        .click()
                    }
                    style={{
                      display: selectedPlan === plan.id ? "block" : "none",
                    }}
                  >
                    فتح العضوية المميزة لمدة {plan.duration}
                    <div
                      id={`product-component-${plan.id}`}
                      style={{ display: "none" }}
                    ></div>
                  </ButTop>
                ))}

                <ButBot to="/">لا شكرًا</ButBot>
              </ButWr>
            </OpBo>
            <OpTop>
              <OpTopHe>فتح ميزات العضوية المميزة</OpTopHe>
              <FeWr>
                <FeCon>
                  {features.map((feature) => (
                    <FeEl key={feature.id}>
                      <FeRiImg src={feature.image} alt="" />
                      <FeRi>
                        <FeRiPa>{feature.title}</FeRiPa>
                        <FeRiPar>{feature.description}</FeRiPar>
                      </FeRi>
                    </FeEl>
                  ))}
                </FeCon>
              </FeWr>
            </OpTop>
          </OpWr>
        </MaWrBo>
      </MaWr>
    </AllWr>
  );
};

export default Subscribe;
