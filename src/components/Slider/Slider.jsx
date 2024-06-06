import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
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
import data2 from "../../utils/SecSlider.json";
import initializeShopifyButtons from "../../utils/shopify";

const Beyond =
  "https://alsallum.s3.eu-north-1.amazonaws.com/Beyond+the+clock.jpg";
const Behind =
  "https://alsallum.s3.eu-north-1.amazonaws.com/Behind+grey+eye.jpg";
const Whispers =
  "https://alsallum.s3.eu-north-1.amazonaws.com/Whispers+in+the+Rails.jpg";
const Friends =
  "https://alsallum.s3.eu-north-1.amazonaws.com/friends+forever.jpg";
const Dystopian = "https://alsallum.s3.eu-north-1.amazonaws.com/Dystopian.jpg";
const Forgotten = "https://alsallum.s3.eu-north-1.amazonaws.com/forgetten.jpg";
const Shadows = "https://alsallum.s3.eu-north-1.amazonaws.com/shadows.jpg";
const Winds = "https://alsallum.s3.eu-north-1.amazonaws.com/winds.jpg";

const products = [
  { id: 5, name: "Shadows Over Maplewood", productId: "7586031960126" },
  { id: 6, name: "Winds of change", productId: "7586033041470" },
  { id: 7, name: "The Forgotten Realms", productId: "7586031304766" },
  { id: 8, name: "A Dystopian future", productId: "7586030354494" },
];

const imageMapping = {
  "Whispers in the Rails": Whispers,
  "Friends Forever": Friends,
  "Behind Grey Eyes": Behind,
  "Beyond the clock": Beyond,
};
const imageMapping2 = {
  "Shadows Over Maplewood": Shadows,
  "Winds of change": Winds,
  "The Forgotten Realms": Forgotten,
  "A Dystopian future": Dystopian,
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

  const slides = data.map((card, i) => {
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
          <Link to={`/product/${encodeURIComponent(card.name)}`}>
            <Button>اضافة للسلة</Button>
          </Link>
        </SliderCardSubSpan2>
      </SwiperSlide>
    );
  });

  const Secslides = data2.map((card, i) => {
    return (
      <SwiperSlide key={i}>
        <Link
          to={`/product/${encodeURIComponent(card.name)}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <SliderCardContainer>
            <SliderCardImg src={imageMapping2[card.name]} alt={card.name} />
            <SliderCardSubSpan1>
              <SliderCardSubSpan3>{card.name}</SliderCardSubSpan3>
              <SliderCardSpan>{card.price} ريال</SliderCardSpan>
            </SliderCardSubSpan1>
          </SliderCardContainer>
        </Link>
        <SliderCardSubSpan2>
          <Link to={`/product/${encodeURIComponent(card.name)}`}>
            <Button>اضافة للسلة</Button>
          </Link>
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
        <SliderButton swiper={swiperInstance} />
        <Swiper
          {...sliderSettings}
          style={{ overflow: "visible" }}
          onSwiper={setSwiperInstance}
        >
          {Secslides}
        </Swiper>
      </SliderContainer>
    </SliderWrapper>
  );
};

export default Slider;
