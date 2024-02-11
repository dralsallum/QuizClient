import React from "react";
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

const SliderButton = ({ swiper }) => {
  return (
    <SliderArrowContainerAll>
      <SliderArrowContainer1>كتب انجليزية للمبتدئاً</SliderArrowContainer1>
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
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleAddToBasket(card);
          }}
          primary
        >
          اضافة للسلة
        </Button>
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
