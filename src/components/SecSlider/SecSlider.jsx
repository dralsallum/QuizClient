import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketRedux";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
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

const SliderButton = ({ swiper }) => {
  return (
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
};

const Slider = () => {
  const dispatch = useDispatch();
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  const handleAddToBasket = (item) => {
    dispatch(
      addToBasket({
        name: item.name,
        price: item.price,
        image: imageMapping[item.name],
      })
    );
  };

  const slides = data.map((card, i) => (
    <SwiperSlide key={i}>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        to={`/product/${encodeURIComponent(card.name)}`}
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
  ));

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
