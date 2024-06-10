import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";
import vocabOptions from "../../utils/vocabOptions.json";
import {
  CardOn,
  CardOnAm,
  CardOnAt,
  CardOnDiv,
  CardOnIc,
  CardOnLe,
  CardOnSp,
  CardOnSpan,
  CardOnUk,
  CardOnWord,
  CardOnWr,
  CardTwo,
  StyledSpeakerIcon,
  VocFo,
  VocFoBot,
  VocFoBut,
  VocFoMid,
  VocFoNe,
  VocFoSpan,
  VocFoSpan1,
  VocFoTop,
  VocFroSu,
  VocHead,
  VocMain,
  VocMidBut,
  VocOn,
  VocOnBut,
  VocTh,
  VocThSel,
  VocWra,
  HiddenWr,
  HidOn,
  HidSub,
  HidOnSp,
  HidOnIm,
  Card,
  CardTwoSub,
  CardTwoLi,
  CardTwoIm,
  CardTwoTe,
  CardTwoSpa,
  CardTwoSp,
  FlipCardInner,
  FlipCard,
  VocHeadSpan,
  AllWr,
  TeWr,
  TeHe,
  TeUl,
  TeLi,
  TeTop,
  TeTopHe,
  TeTopAt,
  TeTopSub,
  TeToSubAt,
  TeToSubIm,
  TeBot,
  TeBotLi,
  TeDiv,
  VocOp,
} from "./Vocabulary.elements";

const CardContent = ({ word, answer, img, translation, explain }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const speechSynthesis = window.speechSynthesis;

  const playPronunciation = (event, accent) => {
    event.stopPropagation();
    const textToSpeak = word;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const voices = speechSynthesis.getVoices();
    let selectedVoice = voices.find((voice) => {
      return voice.lang.startsWith("en") && voice.name.includes(accent);
    });
    if (!selectedVoice) {
      selectedVoice = voices.find((voice) => voice.lang.startsWith("en"));
    }
    utterance.voice = selectedVoice || voices[0];
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
  };

  const handleFlip = (event) => {
    event.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <VocFroSu>
      <FlipCard onClick={handleFlip}>
        <FlipCardInner isFlipped={isFlipped}>
          <CardOn>
            <CardOnDiv>
              <CardOnWord>{word}</CardOnWord>
              <CardOnSp>
                <CardOnAm>
                  <CardOnIc>
                    <CardOnAt
                      onClick={(e) => playPronunciation(e, "Google US English")}
                    >
                      <StyledSpeakerIcon />
                    </CardOnAt>
                  </CardOnIc>
                  <CardOnLe>
                    <CardOnWr>
                      <img
                        src="https://cdn.vocab.com/js3/289804eefb36d3e17d26.svg"
                        alt="US pronunciation"
                      />
                    </CardOnWr>
                    <CardOnSpan>english/US</CardOnSpan>
                  </CardOnLe>
                </CardOnAm>
                <CardOnUk>
                  <CardOnIc>
                    <CardOnAt
                      onClick={(e) => playPronunciation(e, "Google UK English")}
                    >
                      <StyledSpeakerIcon />
                    </CardOnAt>
                  </CardOnIc>
                  <CardOnLe>
                    <CardOnWr>
                      <img
                        src="https://cdn.vocab.com/js3/4ca9ab6cd2940a46a096.svg"
                        alt="UK pronunciation"
                      />
                    </CardOnWr>
                    <CardOnSpan>english/UK</CardOnSpan>
                  </CardOnLe>
                </CardOnUk>
              </CardOnSp>
            </CardOnDiv>
          </CardOn>
          <CardTwo>
            <CardTwoSub>
              <CardTwoLi>
                {img && <CardTwoIm src={img} alt={`${word} illustration`} />}
                <CardTwoTe>
                  <CardTwoSpa>{translation}</CardTwoSpa>
                  <CardTwoSp>{answer}</CardTwoSp>
                  <CardTwoSp>{explain}</CardTwoSp>
                </CardTwoTe>
              </CardTwoLi>
            </CardTwoSub>
          </CardTwo>
        </FlipCardInner>
      </FlipCard>
    </VocFroSu>
  );
};

const Vocabulary = () => {
  const navigate = useNavigate();
  const { vocabSet } = useParams();
  const [isHidden, setIsHidden] = useState(true);
  const [cardsData, setCardsData] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [allWords, setAllWords] = useState([]);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("");
  const user = useSelector((state) => state.user.currentUser);

  const getOptions = useCallback(() => {
    if (vocabSet.startsWith("set")) {
      return vocabOptions.sets;
    } else if (vocabSet.startsWith("list")) {
      return vocabOptions.lists;
    } else if (vocabSet.startsWith("test")) {
      return vocabOptions.tests;
    } else if (vocabSet.startsWith("similar")) {
      return vocabOptions.similars;
    }
    return [];
  }, [vocabSet]);

  useEffect(() => {
    if (vocabSet) {
      userRequest
        .get(`/vocabulary/${vocabSet}`)
        .then((response) => {
          const cards = response.data.words;
          setCardsData(cards);
          const words = cards.map((card) => card.word);
          setAllWords(words);
        })
        .catch((error) => {
          console.error("Failed to load vocabulary data", error);
        });
    }

    const selectedOption = getOptions().find(
      (option) => option.value === vocabSet
    );
    setSelectedTopic(selectedOption ? selectedOption.label : "");
  }, [vocabSet, getOptions]);

  const handleNext = () => {
    setAnimationDirection("left");
    setCurrentCard((prevCard) => (prevCard + 1) % cardsData.length);
  };

  const handlePrevious = () => {
    setAnimationDirection("right");
    setCurrentCard(
      (prevCard) => (prevCard - 1 + cardsData.length) % cardsData.length
    );
  };

  const toggleHidden = useCallback(() => {
    setIsHidden((prevState) => !prevState);
  }, []);

  const handleSelectChange = (event) => {
    const newVocabSet = event.target.value;
    navigate(`/vocabulary/${newVocabSet}`);
  };

  return (
    <AllWr>
      <VocWra>
        <VocHead>
          تعلم باستخدام بطاقات التعليم -
          <VocHeadSpan>
            اضغط على الورقة لرؤية المعنى بالعربي واستخدامها بجملة
          </VocHeadSpan>
        </VocHead>
        <VocMain>
          <VocOn>
            <VocOnBut onClick={toggleHidden}></VocOnBut>
          </VocOn>
          <HiddenWr isHidden={isHidden}>
            <HidSub>
              <HidOn>
                <HidOnSp>Definition first</HidOnSp>
                <HidOnIm
                  src="https://cdn.vocab.com/images/icons/flip-order-7pxoyu.svg"
                  alt=""
                />
              </HidOn>
            </HidSub>
            <HidSub>
              <HidOn>
                <HidOnSp>Print Flashcards</HidOnSp>
                <HidOnIm
                  src="https://cdn.vocab.com/images/icons/print-flashcards-rp5m7h.svg"
                  alt=""
                />
              </HidOn>
            </HidSub>
          </HiddenWr>
          <VocTh>مجموعة الكلمات</VocTh>
          <VocThSel value={vocabSet} onChange={handleSelectChange}>
            {getOptions().map((option, index) => (
              <VocOp key={index} value={option.value}>
                {option.label}
              </VocOp>
            ))}
          </VocThSel>
          <VocFo>
            <VocFoTop>
              <Card
                key={currentCard}
                direction={animationDirection}
                left={50}
                zIndex={1}
              >
                <CardContent {...cardsData[currentCard]} />
              </Card>
            </VocFoTop>
            <VocFoMid>
              <VocMidBut>shuffle</VocMidBut>
            </VocFoMid>
            <VocFoBot>
              <VocFoBut onClick={handlePrevious}>السابق</VocFoBut>
              <VocFoSpan>
                <VocFoSpan1>{currentCard + 1}</VocFoSpan1>
                <VocFoSpan1>/</VocFoSpan1>
                <VocFoSpan1>{cardsData.length}</VocFoSpan1>
              </VocFoSpan>
              <VocFoNe onClick={handleNext}>التالي</VocFoNe>
            </VocFoBot>
          </VocFo>
        </VocMain>
      </VocWra>
      <TeWr>
        <TeHe>قائمة المفردات في هذي المجموعة:</TeHe>
        <TeUl>
          <TeLi>
            <TeTop>
              <TeTopHe>
                <TeTopAt href=""> {selectedTopic || "Select a topic"}</TeTopAt>
              </TeTopHe>
              <TeTopSub>
                <TeToSubAt href="">
                  <TeToSubIm
                    src="https://www.vocabulary.com/images/icons/flashcards.svg"
                    alt=""
                  />
                </TeToSubAt>
                <TeToSubAt href="">
                  <TeToSubIm
                    src="https://www.vocabulary.com/images/icons/practice-2.png"
                    alt=""
                  />
                </TeToSubAt>
                <TeToSubAt href="">
                  <TeToSubIm
                    src="https://www.vocabulary.com/images/icons/jam-2.svg"
                    alt=""
                  />
                </TeToSubAt>
                <TeToSubAt href="">
                  <TeToSubIm
                    src="https://www.vocabulary.com/images/icons/bee-2.png"
                    alt=""
                  />
                </TeToSubAt>
              </TeTopSub>
            </TeTop>
            <TeBot>
              {allWords.map((word, index) => (
                <TeDiv key={index}>
                  <TeBotLi>{word}</TeBotLi>
                </TeDiv>
              ))}
            </TeBot>
          </TeLi>
        </TeUl>
      </TeWr>
    </AllWr>
  );
};

export default Vocabulary;
