import React, { useState, useRef, useEffect } from "react";
import CorrectSound from "../../assets/correct.mp3";
import WrongSound from "../../assets/Wrong.mp3";
import { speakText } from "../../speechSynthesis";
import {
  AButton,
  ACon,
  AImgCon,
  AImgSubImg,
  ASubOne,
  ASubTwo,
  ASubWrap,
  AWrap,
  LCon,
  LSubWhole,
  LWhole,
  LWrap,
  LWrapTop,
  PACon,
  PAnswerBlockButton,
  PAnswerCon,
  PAnswerConBottom,
  PAnswerSubCon,
  PAnswerSubConBottom,
  PAnswerSubConTop,
  PAnswerSubTopLine,
  PAnswerTopArea,
  PAnswerTopLi,
  PAnswerTopSpaceCont,
  PAnswerTopSpaceReCont,
  PBorder,
  PCon,
  PLangCon,
  PLangSubCon,
  PLanguageImgCanvas,
  PLangImgCon,
  PLanguageSouFirstDiv,
  PLanguageSouFirstSpan,
  PLanguageSounSec,
  PLanguageSoundButtonSpan,
  PLanguageSoundButtonSvg,
  PLanguageSoundFirst,
  PLanguageSoundFirstButton,
  PLanguageSoundFirstSpan,
  PLanguageSoundSec,
  PLanguageSoundSubFirst,
  PLangSoundWrap,
  PLangSubWrap,
  PSecStart,
  PSecStartCon,
  PSecStartWrap,
  PSeqBlockButton,
  PStart,
  PStartHeader,
  PStartSpan,
  PSubCon,
  PSubStart,
  PTCon,
  PWrap,
  RButton,
  RCon,
  RHeader,
  RWrap,
  SButton,
  SButtonCon,
  SButtonSpan,
  SCon,
  SSubCon,
  SWrap,
  TConTop,
  TNav,
  TNavButton,
  TNavButtonImg,
  TNavHeartCon,
  TNavHeartImg,
  TNavHeartSpan,
  TNavProgressBottom,
  TNavProgressCon,
  TNavProgressLetTop,
  TNavProgressSubBottom,
  TNavProgressSupTop,
  TNavProgressTop,
  TNavProgressWrap,
  TWrapTop,
  SlWrap,
  SlCon,
  SlReCon,
  SlReSub,
  SlReHe,
  SlReSu,
  SlReSvg,
  SlSaCon,
  SlSaUl,
  SlSaLi,
  SlSaSub,
  SlSaLe,
  SlSaIc,
  SlSaBut,
  SlSaSubIc,
  SlSaIcSvg,
  SlSaPa,
  SlSaSpan,
  SlSm,
  SlSmFooter,
  SlSt,
  SlStBut,
  WrWrap,
  WrSubWrap,
  WrCon,
  WrLw,
  WrLwCon,
  WrLwText,
  PAnswerTopAre,
  RtTop,
  RtTopimg,
  RtMiddle,
  RSubHeader,
  RtReg,
  RtRegCon,
  RtRegSub,
  RtRegSu,
  RtRegBu,
  RtRegImg,
  RtRegUb,
  RtRegBt,
  CroWrap,
  CroCon,
  CroReCon,
  CroSubCon,
  CroTe,
  CroTeCon,
  CroTeHe,
  CroTeSpan,
  CroQa,
  CroQaWrap,
  CroQaSpan,
  CroQaBut,
  CroQaSp,
  GearSvg,
} from "./Project.elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Cross from "../../assets/cross.svg";
import Heart from "../../assets/Heart.svg";
import { useNavigate, useParams } from "react-router-dom";
import AvatarComponent from "../../Avatar";
import End from "../../assets/end.png";
import { useLesson } from "../../LessonContext";

const Project = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const textToSpeakRef = useRef(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [progress, setProgress] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [userAnswerSequence, setUserAnswerSequence] = useState([]);
  const [scorePercentage, setScorePercentage] = useState(0);
  const [sureText, setSureText] = useState("تحقق");
  const [backgroundColor, setBackgroundColor] = useState(); // change it if type 5 not working
  const [isVisible, setIsVisible] = useState(false);
  const [maybe, setMaybe] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const { chapterName } = useParams();
  const [selectedPairs, setSelectedPairs] = useState([]);
  const [shuffledEnglish, setShuffledEnglish] = useState([]);
  const [shuffledArabic, setShuffledArabic] = useState([]);
  const [startTime, setStartTime] = useState(null);

  let questions = [];

  const removeAnswerFromSequence = (seqIndex) => {
    const newSequence = [...userAnswerSequence];
    newSequence.splice(seqIndex, 1);
    setUserAnswerSequence(newSequence);
  };

  try {
    questions = require(`../../utils/${chapterName}.json`);
  } catch (error) {}

  const getDuration = () => {
    if (startTime) {
      const duration = new Date() - startTime;
      const minutes = Math.floor(duration / 60000);
      const seconds = ((duration % 60000) / 1000).toFixed(0);
      return { minutes, seconds };
    }
    return { minutes: 0, seconds: 0 };
  };

  const duration = getDuration();

  const Modal = ({ resetQuiz }) => {
    return (
      <RCon>
        <RWrap>
          <RHeader>You Lost</RHeader>
          <RButton onClick={resetQuiz}>Take the quiz again</RButton>
        </RWrap>
      </RCon>
    );
  };

  const resetQuiz = () => {
    const defaultStates = {
      selectedAnswer: null,
      isCorrect: null,
      isButtonClicked: false,
      currentQuestion: 0,
      showScore: false,
      score: 0,
      progress: 0,
      hearts: 5,
      showModal: false,
      userAnswerSequence: [],
      scorePercentage: 0,
      sureText: "تحقق",
      backgroundColor: "#ffffff",
      isVisible: false,
      maybe: "",
      selectedAnswerIndex: null,
    };

    Object.keys(defaultStates).forEach((key) => {
      const setStateFunc = eval(
        "set" + key.charAt(0).toUpperCase() + key.slice(1)
      );
      setStateFunc(defaultStates[key]);
    });
  };

  const toggleSelection = (pairValue, index) => {
    if (selectedPairs.includes(pairValue)) {
      setSelectedPairs((prevPairs) =>
        prevPairs.filter((val) => val !== pairValue)
      );
    } else {
      setSelectedPairs((prevPairs) => [...prevPairs, pairValue]);
    }
  };

  const arePairsMatching = () => {
    // Assuming that each English word has only one correct Arabic match.
    let correctPairs = questions[currentQuestion].matchPairs;
    if (selectedPairs.length !== correctPairs.length * 2) {
      return false;
    }

    for (let i = 0; i < correctPairs.length; i++) {
      let pair = correctPairs[i];
      if (
        !selectedPairs.includes(pair.english) ||
        !selectedPairs.includes(pair.arabic)
      ) {
        return false;
      }
    }
    return true;
  };

  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const handleSpeechClick = () => {
    const textToSpeak = textToSpeakRef.current
      ? textToSpeakRef.current.innerText
      : "";
    speakText(textToSpeak);
  };

  // Helper function to play the sound
  const playSound = (filename) => {
    const audio = new Audio(filename);
    audio.play();
  };

  //update
  const handleAnswerButtonClick = (isCorrect, index) => {
    setSelectedAnswer(isCorrect);
    setSelectedAnswerIndex(index);
    setIsButtonClicked(true);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const determineCorrectness = (currentQuestionType) => {
    switch (currentQuestionType) {
      case "type1":
      case "type3":
        return (
          JSON.stringify(userAnswerSequence) ===
          JSON.stringify(questions[currentQuestion].correctSequence)
        );
      case "type4":
        return (
          textareaValue.toLowerCase() ===
          questions[currentQuestion].correctAnswer.toLowerCase()
        );
      case "type5":
        return arePairsMatching();
      default:
        return selectedAnswer;
    }
  };

  const updateUIBasedOnCorrectness = (isCorrect) => {
    if (isCorrect) {
      setSureText("صح - متابعة");
      setBackgroundColor("#00ff00");
      setMaybe("رائع");
      playSound(CorrectSound);
    } else {
      setSureText("غلط - متابعة");
      setBackgroundColor("#ff0000");
      setMaybe("غلط");
      playSound(WrongSound);
    }
  };

  const updateScoreOrDecreaseHearts = (isCorrect) => {
    if (isCorrect) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
      setHearts(hearts - 1);
    }
  };

  const handleFirstClick = () => {
    setIsVisible(true);

    const currentQuestionType = questions[currentQuestion].questionType;
    const isAnswerCorrect = determineCorrectness(currentQuestionType);

    if (currentQuestionType === "type5") {
      setIsCorrect(isAnswerCorrect);
    }

    updateUIBasedOnCorrectness(isAnswerCorrect);
  };

  const handleSecondClick = () => {
    setSureText("تحقق");
    setBackgroundColor("#ffffff");
    setIsVisible(false);
    setSelectedPairs([]);

    const currentQuestionType = questions[currentQuestion].questionType;

    if (hearts <= 1) {
      setShowModal(true);
      return;
    }

    const isAnswerCorrect = determineCorrectness(currentQuestionType);
    updateScoreOrDecreaseHearts(isAnswerCorrect);

    if (currentQuestionType === "type1" || currentQuestionType === "type3") {
      setUserAnswerSequence([]);
    }

    if (hearts - 1 <= 0) {
      setShowModal(true);
      return;
    }

    setTimeout(() => {
      prepareForNextQuestionOrEndQuiz();
    }, 500);
  };

  const prepareForNextQuestionOrEndQuiz = () => {
    setIsCorrect(null);
    setSelectedAnswer(null);
    setSelectedAnswerIndex && setSelectedAnswerIndex(null);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTextareaValue("");
      const newProgress = (nextQuestion / questions.length) * 100;
      setProgress(newProgress);
    } else {
      endQuiz();
    }
  };

  const endQuiz = () => {
    setShowScore(true);
    setProgress(100);
  };

  useEffect(() => {
    const textToSpeak = textToSpeakRef.current
      ? textToSpeakRef.current.innerText
      : "";
    if (textToSpeak) {
      speakText(textToSpeak);
    }

    const currentMatchPairs = questions[currentQuestion]?.matchPairs || [];
    const englishWords = currentMatchPairs.map((pair) => pair.english);
    const arabicWords = currentMatchPairs.map((pair) => pair.arabic);

    setShuffledEnglish(shuffleArray([...englishWords]));
    setShuffledArabic(shuffleArray([...arabicWords]));
  }, [currentQuestion, questions]);

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  useEffect(() => {
    const percentage = Math.round((score / questions.length) * 100);
    setScorePercentage(percentage);
  }, [score, questions.length]);

  const QuizResults = ({ score, scorePercentage, resetQuiz, lessonIndex }) => {
    const { incrementLesson } = useLesson();
    const navigate = useNavigate();

    return (
      <RWrap>
        <RtTop>
          <RtTopimg src={End} alt="" />
        </RtTop>
        <RtMiddle>
          <RHeader>خلصت يابطل</RHeader>
          <RSubHeader>
            استغرق هذا الدرس {duration.minutes} دقيقة و {duration.seconds}{" "}
            ثانية. أحسنت في المواظبة على التعلّم!
          </RSubHeader>
          <RtReg>
            <RtRegCon>
              <RtRegSub></RtRegSub>
              <RtRegSu>اجمالي نقاطك</RtRegSu>
              <RtRegBu>
                <RtRegImg
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/f5358b2d4087a109790fc809eedc08c5.svg"
                  alt=""
                />
                <div>{score}</div>
              </RtRegBu>
            </RtRegCon>
            <RtRegCon>
              <RtRegUb></RtRegUb>
              <RtRegSu>عظيم</RtRegSu>
              <RtRegBt>
                <RtRegImg
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/9ace13520a375f5661415ff7d470f243.svg"
                  alt=""
                />
                <div>{scorePercentage}%</div>
              </RtRegBt>
            </RtRegCon>
          </RtReg>
        </RtMiddle>
        <RButton
          onClick={() => {
            resetQuiz();
            incrementLesson(1, lessonIndex);
            navigate("/train");
          }}
        >
          خذ كويز مختلف
        </RButton>
      </RWrap>
    );
  };

  const renderQuestion = () => {
    const currentType = questions[currentQuestion].questionType;

    const SoundFirstSection = ({ text }) => (
      <PLanguageSoundFirst>
        <PLanguageSoundSubFirst>
          <PLanguageSoundFirstSpan>
            <PLanguageSoundFirstButton onClick={handleSpeechClick}>
              <PLanguageSoundButtonSpan>
                <PLanguageSoundButtonSvg>
                  <FontAwesomeIcon icon={faVolumeHigh} />
                </PLanguageSoundButtonSvg>
              </PLanguageSoundButtonSpan>
            </PLanguageSoundFirstButton>
          </PLanguageSoundFirstSpan>
          <PLanguageSouFirstSpan>
            <PLanguageSouFirstDiv ref={textToSpeakRef}>
              {text}
            </PLanguageSouFirstDiv>
          </PLanguageSouFirstSpan>
        </PLanguageSoundSubFirst>
      </PLanguageSoundFirst>
    );

    const AnswerSequence = ({ userAnswerSequence, options }) => (
      <PTCon>
        {userAnswerSequence.map((index, seqIndex) => (
          <PAnswerBlockButton
            onClick={() => removeAnswerFromSequence(seqIndex)}
          >
            {options[index].answerText}
          </PAnswerBlockButton>
        ))}
      </PTCon>
    );

    // The reusable QuestionComponent
    const QuestionComponent = ({ soundSecType }) => {
      const correctSequence = questions[currentQuestion].correctSequence;

      const checkSequence = () => {
        // Compare userAnswerSequence with correctSequence
        if (
          JSON.stringify(userAnswerSequence) === JSON.stringify(correctSequence)
        ) {
          handleAnswerButtonClick(true);
        } else {
          handleAnswerButtonClick(false);
        }
        setUserAnswerSequence([]);
      };

      return (
        <PSecStart>
          <PSecStartCon>
            <PLangCon>
              <PLangSubCon>
                <PLangImgCon>
                  <AvatarComponent
                    imgPath={questions[currentQuestion]?.avatar || ""}
                  />
                </PLangImgCon>
              </PLangSubCon>
              <PLangSubWrap>
                <PLangSoundWrap>
                  <SoundFirstSection
                    text={questions[currentQuestion].questionSubText}
                  />
                  <PLanguageSoundSec></PLanguageSoundSec>
                </PLangSoundWrap>
              </PLangSubWrap>
            </PLangCon>
          </PSecStartCon>
          <PSecStartWrap>
            <PAnswerCon>
              <PAnswerSubCon>
                <PAnswerSubConTop>
                  <PAnswerSubTopLine>
                    <PAnswerTopLi>
                      <PAnswerTopSpaceCont>
                        {soundSecType === "type1" ? (
                          <PAnswerTopArea>
                            <AnswerSequence
                              userAnswerSequence={userAnswerSequence}
                              options={questions[currentQuestion].answerOptions}
                            />
                          </PAnswerTopArea>
                        ) : (
                          <PAnswerTopAre>
                            <AnswerSequence
                              userAnswerSequence={userAnswerSequence}
                              options={questions[currentQuestion].answerOptions}
                            />
                          </PAnswerTopAre>
                        )}
                      </PAnswerTopSpaceCont>
                      <PAnswerTopSpaceReCont></PAnswerTopSpaceReCont>
                    </PAnswerTopLi>
                  </PAnswerSubTopLine>
                </PAnswerSubConTop>
                <PAnswerSubConBottom>
                  <PAnswerConBottom>
                    <PACon>
                      {questions[currentQuestion].answerOptions.map(
                        (option, index) => (
                          <PSeqBlockButton
                            onClick={() =>
                              setUserAnswerSequence([
                                ...userAnswerSequence,
                                index,
                              ])
                            }
                          >
                            {option.answerText}
                          </PSeqBlockButton>
                        )
                      )}
                    </PACon>
                  </PAnswerConBottom>
                </PAnswerSubConBottom>
              </PAnswerSubCon>
            </PAnswerCon>
          </PSecStartWrap>
        </PSecStart>
      );
    };

    // Main rendering logic
    if (currentType === "type1") {
      return <QuestionComponent soundSecType="type1" />;
    }

    if (currentType === "type3") {
      return <QuestionComponent soundSecType="type3" />;
    }

    if (currentType === "type4") {
      return (
        <WrWrap>
          <WrSubWrap>
            <WrCon>
              <PLangSubCon>
                <PLangImgCon>
                  <AvatarComponent
                    imgPath={questions[currentQuestion]?.avatar || ""}
                  />
                </PLangImgCon>
              </PLangSubCon>
              <SoundFirstSection
                text={questions[currentQuestion].questionSubText}
              />
            </WrCon>
          </WrSubWrap>
          <WrLw>
            <WrLwCon>
              <WrLwText
                value={textareaValue}
                data-test="challenge-translate-input"
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                spellcheck="false"
                class="_2EMUT _1QDX9 st_Fn _2ti2i"
                data-gramm="false"
                dir="ltr"
                lang="en"
                placeholder=" باللغة الإنجليزية"
                onChange={handleTextareaChange}
              ></WrLwText>
            </WrLwCon>
          </WrLw>
        </WrWrap>
      );
    }
    if (currentType === "type2") {
      return (
        <AWrap>
          <ASubWrap>
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <AButton
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect, index)
                  }
                >
                  <ACon
                    style={{
                      backgroundColor:
                        selectedAnswerIndex === index
                          ? isCorrect === null
                            ? "initial"
                            : isCorrect
                            ? "#5ac900"
                            : "red"
                          : "initial",
                    }}
                  >
                    <ASubOne>
                      <AImgCon>
                        <AImgSubImg src={answerOption.imgPath} />
                      </AImgCon>
                    </ASubOne>
                    <ASubTwo>{answerOption.answerText}</ASubTwo>
                    {/* Adjacent JSX elements are now wrapped */}
                  </ACon>
                </AButton>
              )
            )}
          </ASubWrap>
        </AWrap>
      );
    }
    if (currentType === "type5") {
      return (
        <CroWrap>
          <CroCon>
            <CroReCon>
              <CroSubCon>
                <CroTe>
                  <CroQa>
                    <CroQaWrap>
                      {shuffledEnglish.map((word, index) => (
                        <CroQaBut
                          key={word}
                          onClick={() => toggleSelection(word, index)}
                          style={{
                            opacity: selectedPairs.includes(word) ? 0.5 : 1,
                          }}
                        >
                          <CroQaSp> {word}</CroQaSp>
                        </CroQaBut>
                      ))}

                      {shuffledArabic.map((word, index) => (
                        <CroQaBut
                          key={word}
                          onClick={() => toggleSelection(word, index)}
                          style={{
                            opacity: selectedPairs.includes(word) ? 0.5 : 1,
                          }}
                        >
                          <CroQaSp> {word}</CroQaSp>
                        </CroQaBut>
                      ))}
                    </CroQaWrap>
                  </CroQa>
                </CroTe>
              </CroSubCon>
            </CroReCon>
          </CroCon>
        </CroWrap>
      );
    }

    return (
      <div ref={textToSpeakRef}>{questions[currentQuestion].questionText}</div>
    );
  };

  return (
    <LWrapTop>
      {showModal && <Modal resetQuiz={resetQuiz} />}
      <LWrap>
        <LCon>
          <LWhole>
            <LSubWhole>
              <TWrapTop>
                <TConTop>
                  <TNav>
                    <Link
                      to="/train"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <TNavButton>
                        <TNavButtonImg src={Cross} />
                      </TNavButton>
                    </Link>
                    <TNavProgressCon>
                      <TNavProgressWrap>
                        <TNavProgressTop>
                          <TNavProgressSupTop></TNavProgressSupTop>
                          <TNavProgressLetTop>
                            <TNavProgressSubBottom></TNavProgressSubBottom>
                          </TNavProgressLetTop>
                        </TNavProgressTop>
                        <TNavProgressBottom progress={progress} />
                      </TNavProgressWrap>
                    </TNavProgressCon>
                    <TNavHeartCon>
                      <TNavHeartImg src={Heart} />
                      <TNavHeartSpan>{hearts}</TNavHeartSpan>
                    </TNavHeartCon>
                  </TNav>
                </TConTop>
              </TWrapTop>
              <PWrap>
                <PCon>
                  <PSubCon>
                    <PBorder ignoreStyle={showScore}>
                      {showScore ? (
                        <QuizResults
                          score={score}
                          scorePercentage={scorePercentage}
                          resetQuiz={resetQuiz}
                        />
                      ) : (
                        <PStart>
                          <PSubStart>
                            <PStartHeader>
                              <PStartSpan>
                                {questions[currentQuestion].questionText}
                              </PStartSpan>
                            </PStartHeader>
                          </PSubStart>
                          {renderQuestion()}
                        </PStart>
                      )}
                    </PBorder>
                  </PSubCon>
                </PCon>
              </PWrap>
              <SWrap>
                <SCon>
                  <SSubCon backgroundColor={backgroundColor}>
                    <SButtonCon>
                      {currentQuestion < questions.length - 1 || !showScore ? (
                        <SButton onClick={handleFirstClick}>
                          <SButtonSpan>{sureText}</SButtonSpan>
                        </SButton>
                      ) : null}
                    </SButtonCon>
                  </SSubCon>
                </SCon>
              </SWrap>
              <SlWrap isVisible={isVisible}>
                <SlCon>
                  <SlReCon>
                    <SlReSub>
                      <SlReSu>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 200 200"
                          width="50" // set width to half the original
                          height="50" // set height to half the original
                        >
                          {/* Background Circle */}
                          <circle cx="100" cy="100" r="90" fill="#E5E5E5" />

                          {/* Gauge Background */}
                          <path
                            d="M 100 100 m -90, 0 a 90,90 0 0,1 180,0"
                            fill="#A9E9D9"
                          />

                          {/* Gauge Filled */}
                          <path
                            d="M 100 100 m -90, 0 a 90,90 0 0,1 90,-90"
                            fill="#38D48A"
                          />

                          {/* Gauge Needle */}
                          <line
                            x1="100"
                            y1="100"
                            x2="100"
                            y2="20"
                            stroke="#2F5BA4"
                            strokeWidth="8"
                            strokeLinecap="round"
                            transform="rotate(45,100,100)"
                          />

                          {/* Center Circle */}
                          <circle cx="100" cy="100" r="8" fill="#2F5BA4" />
                        </svg>
                      </SlReSu>
                    </SlReSub>
                    <SlReHe>{maybe}</SlReHe>
                  </SlReCon>
                  <SlSaCon>
                    <SlSaUl>
                      <SlSaLi>
                        <SlSaSub>
                          <SlSaLe>
                            <SlSaIc>
                              <SlSaBut>
                                <SlSaSubIc>
                                  <SlSaIcSvg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 500 500"
                                      width="20"
                                      height="20"
                                      preserveAspectRatio="xMidYMid meet"
                                      transform="scale(-1, 1)"
                                    ></svg>
                                  </SlSaIcSvg>
                                </SlSaSubIc>
                              </SlSaBut>
                            </SlSaIc>
                            <SlSaPa>
                              <SlSaSpan>
                                {questions[currentQuestion].questionExplain}
                              </SlSaSpan>
                            </SlSaPa>
                          </SlSaLe>
                        </SlSaSub>
                      </SlSaLi>
                    </SlSaUl>
                    <SlSm>
                      <SlSmFooter>
                        {questions[currentQuestion].answerExplain}
                      </SlSmFooter>
                    </SlSm>
                  </SlSaCon>
                  <SlSt>
                    <SlStBut onClick={handleSecondClick}>استمر</SlStBut>
                  </SlSt>
                </SlCon>
              </SlWrap>
            </LSubWhole>
          </LWhole>
        </LCon>
      </LWrap>
    </LWrapTop>
  );
};

export default Project;
