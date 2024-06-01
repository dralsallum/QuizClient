/* global ShopifyBuy */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketRedux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import {
  Button,
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
} from "./Slider.elements";
import { sliderSettings } from "../../utils/common";
import data from "../../utils/slider.json";

const Beyond =
  "https://alsallum.s3.eu-north-1.amazonaws.com/Beyond+the+clock.jpg";
const Behind =
  "https://alsallum.s3.eu-north-1.amazonaws.com/Behind+grey+eye.jpg";
const Whispers =
  "https://alsallum.s3.eu-north-1.amazonaws.com/Whispers+in+the+Rails.jpg";
const Friends =
  "https://alsallum.s3.eu-north-1.amazonaws.com/friends+forever.jpg";

const imageMapping = {
  "Whispers in the Rails": Whispers,
  "Friends Forever": Friends,
  "Behind Grey Eyes": Behind,
  "Beyond the clock": Beyond,
};

const books = [
  { id: 1, name: "Friends Forever", productId: "7585041612862" },
  { id: 2, name: "Beyond the clock", productId: "7585044725822" },
  { id: 3, name: "Behind Grey Eyes", productId: "7585043578942" },
  { id: 4, name: "Whispers in the Rails", productId: "7585039548478" },
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
      books.forEach((plan) => {
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

const Slider = () => {
  const dispatch = useDispatch();
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    initializeShopifyButtons();
  }, []);

  const slides = data.map((card, i) => {
    const plan = books.find((p) => p.name === card.name);
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
          <Button
            onClick={() =>
              document
                .querySelector(
                  `#product-component-${plan.id} .shopify-buy__btn`
                )
                .click()
            }
          >
            اضافة للسلة
          </Button>
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

export default Slider;
