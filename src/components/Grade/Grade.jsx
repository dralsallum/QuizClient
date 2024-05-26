import React, { useEffect, useState, useRef } from "react";
import {
  AllCon,
  AllNav,
  AllWr,
  EssBot,
  EssBut,
  EssHe,
  EssImg,
  EssLi,
  EssLiAt,
  EssLiDiv,
  EssLiHe,
  EssLiImg,
  EssSpan,
  EssUl,
  EssWr,
  GradArr,
  GradAt,
  GradLi,
  GradUl,
  GradWr,
  SliderCardContainer,
  SliderCardImg,
  SliderCardSpan,
  SliderCardSubSpan1,
  SliderCardSubSpan2,
  SliderCardSubSpan3,
  TiSpan,
  TitCat,
  TitCatSp,
  TitCon,
  TitEx,
  TitIm,
  TitImCon,
  TitNoSp,
  TitSec,
  TitSecHe,
  TitSecSp,
  TitSp,
  TitWr,
} from "./Grade.elements";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBook,
  FaCheck,
  FaLightbulb,
  FaPrint,
} from "react-icons/fa";
import gradeData from "../../utils/grades.json";
import vocabularySetsData from "../../utils/vocabularySets.json";
import { Link, useParams } from "react-router-dom";
import data from "../../utils/SecSlider.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderSettings } from "../../utils/common";

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

const Grade = () => {
  const { gradeSet } = useParams();
  const [vocabularySets, setVocabularySets] = useState([]);
  const [showMore, setShowMore] = useState({});
  const [titWrContent, setTitWrContent] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#04329e");
  const gradUlRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  useEffect(() => {
    const gradeNumber = gradeSet.split("-")[1];
    const currentGradeData = vocabularySetsData.find(
      (set) => set.grade === parseInt(gradeNumber)
    );
    setVocabularySets(currentGradeData ? currentGradeData.sets : []);
    const initialShowMoreStates = currentGradeData
      ? currentGradeData.sets.map(() => false)
      : [];
    setShowMore(initialShowMoreStates);

    // Update TitWr content and background color
    if (currentGradeData) {
      const titWrData = currentGradeData.titWr;
      setTitWrContent(titWrData);
      setBackgroundColor(currentGradeData.backgroundColor);
    } else {
      setTitWrContent(null);
      setBackgroundColor("#04329e");
    }
  }, [gradeSet]);

  const toggleShowMore = (index) => {
    setShowMore((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollLeft = () => {
    if (gradUlRef.current) {
      gradUlRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (gradUlRef.current) {
      gradUlRef.current.scrollLeft += 100;
    }
  };

  return (
    <AllWr>
      <AllCon>
        <AllNav>
          <GradArr onClick={scrollRight}>
            <FaArrowRight />
          </GradArr>
          <GradWr ref={gradUlRef}>
            <GradUl>
              {gradeData.grades.map((grade, index) => (
                <GradLi key={index}>
                  <GradAt href={grade.url}>المستوى {grade.number}</GradAt>
                </GradLi>
              ))}
            </GradUl>
          </GradWr>
          <GradArr onClick={scrollLeft}>
            <FaArrowLeft />
          </GradArr>
        </AllNav>

        {titWrContent && (
          <TitWr>
            <TitCon backgroundColor={backgroundColor}>
              <TitImCon>
                <TitIm src={titWrContent.imgSrc} alt={titWrContent.imgAlt} />
              </TitImCon>
              <TitSec>
                <TitSecHe>
                  <TitSp>
                    {titWrContent.title}
                    <TitNoSp>
                      <span title={titWrContent.checkTitle}>
                        <FaCheck
                          className="check"
                          style={{ color: "#68AB1C" }}
                        />
                      </span>
                    </TitNoSp>
                  </TitSp>
                </TitSecHe>
                <TitEx>{titWrContent.description}</TitEx>
                <TitCat>
                  <TitCatSp>
                    <FaBook
                      style={{ color: "#fff", width: "13px", height: "17px" }}
                    />
                    <TiSpan>القوائم</TiSpan>
                    <TiSpan>{titWrContent.listsCount}</TiSpan>
                  </TitCatSp>
                  <TitCatSp>
                    <FaLightbulb
                      style={{ color: "#fff", width: "13px", height: "17px" }}
                    />
                    <TiSpan>الكلمات</TiSpan>
                    <TiSpan>{titWrContent.wordsCount}</TiSpan>
                  </TitCatSp>
                  <TitCatSp>
                    <FaPrint
                      style={{ color: "#fff", width: "13px", height: "17px" }}
                    />
                    <TiSpan>المتعلمين</TiSpan>
                    <TiSpan>{titWrContent.learnersCount}</TiSpan>
                  </TitCatSp>
                </TitCat>
              </TitSec>
            </TitCon>
          </TitWr>
        )}

        {vocabularySets.map((set, index) => (
          <EssWr key={index}>
            <EssHe>{set.title}</EssHe>
            <EssUl showMore={showMore[index]}>
              <EssLiImg>
                <EssImg src={set.imgSrc} alt="" />
              </EssLiImg>
              {set.data.map((vocab, idx) => (
                <EssLi key={idx}>
                  <EssLiHe>
                    <EssLiAt href={vocab.link}>{vocab.title}</EssLiAt>
                  </EssLiHe>
                  <EssLiDiv>{vocab.description}</EssLiDiv>
                </EssLi>
              ))}
            </EssUl>
            <EssBot>
              <EssBut onClick={() => toggleShowMore(index)}>
                <EssSpan show={!showMore[index]}>رؤية المزيد</EssSpan>
                <EssSpan show={showMore[index]}>رؤية اقل</EssSpan>
              </EssBut>
            </EssBot>
          </EssWr>
        ))}
      </AllCon>
    </AllWr>
  );
};

export default Grade;
