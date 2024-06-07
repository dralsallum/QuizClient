/* global ShopifyBuy */
import React, { useState, useEffect } from "react";
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
  Divider,
} from "./Slider.elements";
import { sliderSettings } from "../../utils/common";
import data from "../../utils/slider.json";
import data2 from "../../utils/SecSlider.json";

const imageMapping = {
  "Whispers in the Rails":
    "https://alsallum.s3.eu-north-1.amazonaws.com/Whispers+in+the+Rails.jpg",
  "Friends Forever":
    "https://alsallum.s3.eu-north-1.amazonaws.com/friends+forever.jpg",
  "Behind Grey Eyes":
    "https://alsallum.s3.eu-north-1.amazonaws.com/Behind+grey+eye.jpg",
  "Beyond the clock":
    "https://alsallum.s3.eu-north-1.amazonaws.com/Beyond+the+clock.jpg",
  "Shadows Over Maplewood":
    "https://alsallum.s3.eu-north-1.amazonaws.com/shadows.jpg",
  "Winds of change": "https://alsallum.s3.eu-north-1.amazonaws.com/winds.jpg",
  "The Forgotten Realms":
    "https://alsallum.s3.eu-north-1.amazonaws.com/forgetten.jpg",
  "A Dystopian future":
    "https://alsallum.s3.eu-north-1.amazonaws.com/Dystopian.jpg",
};

const products = [
  { id: 1, name: "Whispers in the Rails", productId: "7585039548478" },
  { id: 2, name: "Friends Forever", productId: "7585041612862" },
  { id: 3, name: "Behind Grey Eyes", productId: "7585043578942" },
  { id: 4, name: "Beyond the clock", productId: "7585044725822" },
  { id: 5, name: "Shadows Over Maplewood", productId: "7586031960126" },
  { id: 6, name: "Winds of change", productId: "7586033041470" },
  { id: 7, name: "The Forgotten Realms", productId: "7586031304766" },
  { id: 8, name: "A Dystopian future", productId: "7586030354494" },
];

const SliderButton = ({ swiper, label }) => (
  <SliderArrowContainerAll>
    <SliderArrowContainer1>{label}</SliderArrowContainer1>
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
  const [firstSwiperInstance, setFirstSwiperInstance] = useState(null);
  const [secondSwiperInstance, setSecondSwiperInstance] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    initializeShopifyButtons(products);
  }, []);

  const initializeShopifyButtons = (productList) => {
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
        domain: "fluentfox.shop",
        storefrontAccessToken: "16ed199bc02989cbd9a9083c474e6cf3",
      });

      ShopifyBuy.UI.onReady(client).then(function (ui) {
        productList.forEach((product) => {
          ui.createComponent("product", {
            id: product.productId,
            node: document.getElementById(`product-component-${product.id}`),
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
                    ":hover": {
                      "background-color": "#4c32c6",
                    },
                    "background-color": "#2a46b5",
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
                    "background-color": "#2a46b5",
                    ":focus": {
                      "background-color": "#4c32c6",
                    },
                  },
                },
                text: {
                  title: "سلة",
                  total: "المجموع",
                  button: "الدفع",
                  notice: "تضاف رسوم الشحن وأكواد الخصم عند الدفع.",
                },
              },
              toggle: {
                styles: {
                  toggle: {
                    "background-color": "#2a46b5",
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

  const generateSlides = (data, products) => {
    return data.map((card, i) => {
      const product = products.find((p) => p.name === card.name);

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
          {product && (
            <SliderCardSubSpan2>
              <Button
                onClick={() =>
                  document
                    .querySelector(
                      `#product-component-${product.id} .shopify-buy__btn`
                    )
                    .click()
                }
              >
                <div
                  id={`product-component-${product.id}`}
                  style={{ display: "none" }}
                ></div>
                اضافة للسلة
              </Button>
            </SliderCardSubSpan2>
          )}
        </SwiperSlide>
      );
    });
  };

  return (
    <SliderWrapper>
      <SliderContainer>
        <SliderButton
          swiper={firstSwiperInstance}
          label="قصص انجليزية مستوى مبتدى"
        />
        <Swiper
          {...sliderSettings}
          style={{ overflow: "visible" }}
          onSwiper={setFirstSwiperInstance}
        >
          {generateSlides(data, products)}
        </Swiper>
        <Divider />
        <SliderButton
          swiper={secondSwiperInstance}
          label="قصص انجليزية مستوى متوسط"
        />
        <Swiper
          {...sliderSettings}
          style={{ overflow: "visible" }}
          onSwiper={setSecondSwiperInstance}
        >
          {generateSlides(data2, products)}
        </Swiper>
      </SliderContainer>
    </SliderWrapper>
  );
};

export default Slider;
