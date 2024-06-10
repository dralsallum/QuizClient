import React, { useEffect, useState, useRef } from "react";
import {
  AllCon,
  AllNav,
  AllWr,
  CardLink,
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
  ImgContainer,
  ImgTit,
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
  TitSp,
  TitWr,
} from "./Grade.elements";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
  IoBookOutline,
  IoCheckmarkCircleOutline,
  IoBulbOutline,
  IoPrintOutline,
} from "react-icons/io5";
import gradeData from "../../utils/grades.json";
import vocabularySetsData from "../../utils/vocabularySets.json";
import { useParams } from "react-router-dom";

const Grade = () => {
  const { gradeSet } = useParams();
  const [vocabularySets, setVocabularySets] = useState([]);
  const [showMore, setShowMore] = useState({});
  const [titWrContent, setTitWrContent] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#04329e");
  const gradUlRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);

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

  const scrollListLeft = () => {
    if (gradUlRef.current) {
      gradUlRef.current.scrollLeft -= 100;
    }
  };

  const scrollListRight = () => {
    if (gradUlRef.current) {
      gradUlRef.current.scrollLeft += 100;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - gradUlRef.current.offsetLeft);
    setInitialScrollLeft(gradUlRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - gradUlRef.current.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    gradUlRef.current.scrollLeft = initialScrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - gradUlRef.current.offsetLeft);
    setInitialScrollLeft(gradUlRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - gradUlRef.current.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    gradUlRef.current.scrollLeft = initialScrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <AllWr>
      <AllCon>
        <AllNav>
          <GradArr onClick={scrollListRight}>
            <IoArrowForwardCircleOutline
              style={{ color: "#00578A", fontSize: "24px" }}
            />
          </GradArr>
          <GradWr
            ref={gradUlRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            <GradUl>
              {gradeData.grades.map((grade, index) => (
                <GradLi key={index}>
                  <GradAt href={grade.url}>المستوى {grade.number}</GradAt>
                </GradLi>
              ))}
            </GradUl>
          </GradWr>
          <GradArr onClick={scrollListLeft}>
            <IoArrowBackCircleOutline
              style={{ color: "#00578A", fontSize: "24px" }}
            />
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
                        <IoCheckmarkCircleOutline
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
                    <IoBookOutline
                      style={{ color: "#fff", width: "13px", height: "17px" }}
                    />
                    <TiSpan>القوائم</TiSpan>
                    <TiSpan>{titWrContent.listsCount}</TiSpan>
                  </TitCatSp>
                  <TitCatSp>
                    <IoBulbOutline
                      style={{ color: "#fff", width: "13px", height: "17px" }}
                    />
                    <TiSpan>الكلمات</TiSpan>
                    <TiSpan>{titWrContent.wordsCount}</TiSpan>
                  </TitCatSp>
                  <TitCatSp>
                    <IoPrintOutline
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
                <CardLink to={vocab.link}>
                  <EssLi key={idx}>
                    <ImgContainer>
                      <ImgTit src={vocab.imgTit} alt={set.title} />
                    </ImgContainer>
                    <EssLiHe>
                      <EssLiAt href={vocab.link}>{vocab.title}</EssLiAt>
                    </EssLiHe>
                    <EssLiDiv>{vocab.description}</EssLiDiv>
                  </EssLi>
                </CardLink>
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
