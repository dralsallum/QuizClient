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
} from "./Grade.elements";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gradeData from "../../utils/grades.json";
import vocabularySetsData from "../../utils/vocabularySets.json";
import { useParams } from "react-router-dom";

const Grade = () => {
  const { gradeSet } = useParams();
  const [vocabularySets, setVocabularySets] = useState([]);
  const [showMore, setShowMore] = useState({});
  const gradUlRef = useRef(null);

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
