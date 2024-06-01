/* global ShopifyBuy */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import {
  SliderWrapper,
  SliderContainer,
  SliderCardContainer,
  SliderCardImg,
  SliderCardSpan,
  SliderCardSubSpan1,
  SliderCardSubSpan2,
  SliderCardSubSpan3,
  SliderArrowContainer,
  SliderArrowButtonRight,
  SliderArrowButtonLeft,
  SliderArrowContainerAll,
  SliderArrowContainer1,
  Button1,
} from "./SecSlider.elements";
import { sliderSettings } from "../../utils/common";
import data from "../../utils/SecSlider.json";

const Dystopian = "https://alsallum.s3.eu-north-1.amazonaws.com/Dystopian.jpg";
const Forgotten = "https://alsallum.s3.eu-north-1.amazonaws.com/forgetten.jpg";
const Shadows = "https://alsallum.s3.eu-north-1.amazonaws.com/shadows.jpg";
const Winds = "https://alsallum.s3.eu-north-1.amazonaws.com/winds.jpg";

const imageMapping = {
  "Shadows Over Maplewood": Shadows,
  "Winds of change": Winds,
  "The Forgotten Realms": Forgotten,
  "A Dystopian future": Dystopian,
};

const products = [
  { id: 5, name: "Shadows Over Maplewood", productId: "7586031960126" },
  { id: 6, name: "Winds of change", productId: "7586033041470" },
  { id: 7, name: "The Forgotten Realms", productId: "7586031304766" },
  { id: 8, name: "A Dystopian future", productId: "7586030354494" },
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
      domain: "dc1079-7d.myshopify.com",
      storefrontAccessToken: "16ed199bc02989cbd9a9083c474e6cf3",
    });

    ShopifyBuy.UI.onReady(client).then((ui) => {
      products.forEach((plan) => {
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
                  },
                },
                button: {
                  ":hover": { "background-color": "#4c32c6" },
                  "background-color": "#5438dc",
                  ":focus": { "background-color": "#4c32c6" },
                },
              },
              text: {
                button: "اضافة للسلة",
              },
            },
            cart: {
              styles: {
                button: {
                  ":hover": { "background-color": "#4c32c6" },
                  "background-color": "#5438dc",
                  ":focus": { "background-color": "#4c32c6" },
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
                  ":hover": { "background-color": "#4c32c6" },
                  ":focus": { "background-color": "#4c32c6" },
                },
              },
            },
          },
        });
      });
    });
  }
};

const SliderButton = ({ swiper }) => (
  <SliderArrowContainerAll>
    <SliderArrowContainer1>كتب انجليزية مستوى متوسط</SliderArrowContainer1>
    <SliderArrowContainer>
      <SliderArrowButtonLeft onClick={() => swiper && swiper.slidePrev()}>
        &lt;
      </SliderArrowButtonLeft>
      <SliderArrowButtonRight onClick={() => swiper && swiper.slideNext()}>
        &gt;
      </SliderArrowButtonRight>
    </SliderArrowContainer>
  </SliderArrowContainerAll>
);

const SecSlider = () => {
  const dispatch = useDispatch();
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    initializeShopifyButtons();
  }, []);

  const slides = data.map((card, i) => {
    const plan = products.find((p) => p.name === card.name);
    return (
      <SwiperSlide key={i}>
        <Link
          to={`/product/${encodeURIComponent(card.name)}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <SliderCardContainer>
            <SliderCardImg src={imageMapping[card.name]} alt={card.name} />
            <SliderCardSubSpan1>
              <SliderCardSubSpan3>{card.name}</SliderCardSubSpan3>
              <SliderCardSpan>{card.price} ريال</SliderCardSpan>
            </SliderCardSubSpan1>
          </SliderCardContainer>
        </Link>
        <SliderCardSubSpan2>
          <Button1
            onClick={() =>
              document
                .querySelector(
                  `#product-component-${plan.id} .shopify-buy__btn`
                )
                .click()
            }
          >
            اضافة للسلة
          </Button1>
          <div
            id={`product-component-${plan.id}`}
            style={{ display: "none" }}
          ></div>
        </SliderCardSubSpan2>
      </SwiperSlide>
    );
  });

  return (
    <SliderWrapper>
      <SliderContainer>
        <SliderButton swiper={swiperInstance} />
        <Swiper
          {...sliderSettings}
          style={{ overflow: "visible" }}
          onSwiper={setSwiperInstance}
        >
          {slides}
        </Swiper>
      </SliderContainer>
    </SliderWrapper>
  );
};

export default SecSlider;
