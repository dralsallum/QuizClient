import React, { useState, useRef, useEffect } from "react";
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
  PLangImgCon,
  PLanguageSouFirstDiv,
  PLanguageSouFirstSpan,
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
  CroQa,
  CroQaWrap,
  CroQaBut,
  CroQaSp,
} from "./Project.elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLesson } from "../../redux/LessonContext";
import { useNavigate, useParams } from "react-router-dom";
import AvatarComponent from "../../Avatar";
import Modal from "./Modal";

const Project = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const textToSpeakRef = useRef(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userAnswerSequence, setUserAnswerSequence] = useState([]);
  const [scorePercentage, setScorePercentage] = useState(0);
  const [sureText, setSureText] = useState("تحقق");
  const [backgroundColor, setBackgroundColor] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [maybe, setMaybe] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const { chapterName } = useParams();
  const [selectedPairs, setSelectedPairs] = useState([]);
  const [shuffledEnglish, setShuffledEnglish] = useState([]);
  const [shuffledArabic, setShuffledArabic] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem("progress");
    return savedProgress ? JSON.parse(savedProgress) : 0;
  });
  const [hearts, setHearts] = useState(() => {
    const savedHearts = localStorage.getItem("hearts");
    return savedHearts ? JSON.parse(savedHearts) : 5;
  });
  const { currentQuestion, setCurrentQuestion } = useLesson();
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("score");
    return savedScore ? JSON.parse(savedScore) : 0;
  });

  let questions = [];

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
        <PAnswerBlockButton onClick={() => removeAnswerFromSequence(seqIndex)}>
          {options[index].answerText}
        </PAnswerBlockButton>
      ))}
    </PTCon>
  );

  const removeAnswerFromSequence = (seqIndex) => {
    const newSequence = [...userAnswerSequence];
    newSequence.splice(seqIndex, 1);
    setUserAnswerSequence(newSequence);
  };

  try {
    questions = require(`../../utils/${chapterName}.json`);
  } catch (error) {
    console.error(`Failed to load questions for ${chapterName}.`, error);
  }

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

    localStorage.setItem("currentQuestion", JSON.stringify(0));
    localStorage.setItem("score", JSON.stringify(0));
    localStorage.setItem("progress", JSON.stringify(0));
    localStorage.setItem("hearts", JSON.stringify(5));
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

    // Ensure the speech synthesis voices are loaded
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) {
      window.speechSynthesis.onvoiceschanged = () => {
        speakNow(textToSpeak);
      };
    } else {
      speakNow(textToSpeak);
    }
  };

  const speakNow = (textToSpeak) => {
    const speechSynthesis = window.speechSynthesis;
    speechSynthesis.cancel(); // Cancel any ongoing speech

    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Determine if the text is Arabic or English
    const isArabic = /[\u0600-\u06FF]/.test(textToSpeak);
    utterance.voice = speechSynthesis
      .getVoices()
      .find((voice) =>
        isArabic ? voice.lang.startsWith("ar") : voice.lang.startsWith("en")
      );

    if (!utterance.voice) {
      utterance.voice = speechSynthesis.getVoices()[0];
    }

    utterance.pitch = 1; // Adjust as needed
    utterance.rate = 1; // Adjust as needed
    utterance.volume = 1; // Adjust as needed

    speechSynthesis.speak(utterance);
  };

  const playSound = (filename) => {
    const audio = new Audio(filename);
    audio.play();
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
      playSound("https://alsallum.s3.eu-north-1.amazonaws.com/correct.mp3");
    } else {
      setSureText("غلط - متابعة");
      setBackgroundColor("#ff0000");
      setMaybe("غلط");
      playSound("https://alsallum.s3.eu-north-1.amazonaws.com/Wrong.mp3");
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

  const handleButtonClick = (actionType, params = {}) => {
    switch (actionType) {
      case "answer":
        const { isCorrect, index } = params;
        setSelectedAnswer(isCorrect);
        setSelectedAnswerIndex(index);
        setIsButtonClicked(true);
        break;

      case "firstClick":
        setIsVisible(true);
        const currentQuestionType = questions[currentQuestion].questionType;
        const isAnswerCorrect = determineCorrectness(currentQuestionType);
        updateUIBasedOnCorrectness(isAnswerCorrect);
        if (currentQuestionType === "type5") setIsCorrect(isAnswerCorrect);
        break;

      case "secondClick":
        setSureText("تحقق");
        setBackgroundColor("#ffffff");
        setIsVisible(false);
        setSelectedPairs([]);
        const isAnswerCorrectSecond = determineCorrectness(
          questions[currentQuestion].questionType
        );
        updateScoreOrDecreaseHearts(isAnswerCorrectSecond);
        if (questions[currentQuestion].questionType !== "type5")
          setUserAnswerSequence([]);
        if (hearts - 1 <= 0) setShowModal(true);
        else prepareForNextQuestionOrEndQuiz();
        break;

      default:
        break;
    }
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
    const speakNow = (textToSpeak) => {
      const speechSynthesis = window.speechSynthesis;
      speechSynthesis.cancel(); // Cancel any ongoing speech

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      const isArabic = /[\u0600-\u06FF]/.test(textToSpeak);

      utterance.lang = isArabic ? "ar" : "en";
      utterance.voice = speechSynthesis
        .getVoices()
        .find((voice) =>
          isArabic
            ? voice.lang === "ar-SA" || voice.lang.startsWith("ar")
            : voice.lang.startsWith("en")
        );

      if (!utterance.voice && isArabic) {
        utterance.voice = speechSynthesis
          .getVoices()
          .find((voice) => voice.lang.startsWith("ar"));
      }

      if (isArabic) {
        utterance.pitch = 0.9;
        utterance.rate = 0.9;
      } else {
        utterance.pitch = 1;
        utterance.rate = 1;
      }
      utterance.volume = 1;

      speechSynthesis.speak(utterance);
    };

    const attemptSpeech = () => {
      const textToSpeak = textToSpeakRef.current
        ? textToSpeakRef.current.innerText
        : "";
      const voices = window.speechSynthesis.getVoices();

      if (voices.length > 0) {
        speakNow(textToSpeak);
      } else {
        const voicesChangedHandler = () => {
          window.speechSynthesis.removeEventListener(
            "voiceschanged",
            voicesChangedHandler
          );
          speakNow(textToSpeak);
        };
        window.speechSynthesis.addEventListener(
          "voiceschanged",
          voicesChangedHandler
        );
      }
    };

    attemptSpeech();

    const currentMatchPairs = questions[currentQuestion]?.matchPairs || [];
    const englishWords = currentMatchPairs.map((pair) => pair.english);
    const arabicWords = currentMatchPairs.map((pair) => pair.arabic);

    setShuffledEnglish(shuffleArray([...englishWords]));
    setShuffledArabic(shuffleArray([...arabicWords]));
  }, [currentQuestion, questions, textToSpeakRef]);

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  useEffect(() => {
    const percentage = Math.round((score / questions.length) * 100);
    setScorePercentage(percentage);
  }, [score, questions.length]);

  useEffect(() => {
    localStorage.setItem("currentQuestion", JSON.stringify(currentQuestion));
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("progress", JSON.stringify(progress));
    localStorage.setItem("hearts", JSON.stringify(hearts));
  }, [currentQuestion, score, progress, hearts]);

  const QuizResults = ({ score, scorePercentage, resetQuiz, lessonIndex }) => {
    const { incrementLesson } = useLesson();
    const navigate = useNavigate();
    const { chapterId } = useParams();

    return (
      <RWrap>
        <RtTop>
          <RtTopimg
            src={"https://alsallum.s3.eu-north-1.amazonaws.com/end.png"}
            alt=""
          />
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
            const nextChapter = incrementLesson(parseInt(chapterId));
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
    const QuestionComponent = ({ soundSecType }) => (
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
                          key={index}
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

    switch (currentType) {
      case "type1":
      case "type3":
        return <QuestionComponent soundSecType={currentType} />;
      case "type4":
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
                  onChange={handleTextareaChange}
                  placeholder=" باللغة الإنجليزية"
                  {...{
                    "data-test": "challenge-translate-input",
                    autocapitalize: "off",
                    autocomplete: "off",
                    autocorrect: "off",
                    spellcheck: "false",
                    "data-gramm": "false",
                    dir: "ltr",
                    lang: "en",
                  }}
                />
              </WrLwCon>
            </WrLw>
          </WrWrap>
        );
      case "type2":
        return (
          <AWrap>
            <ASubWrap>
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <AButton
                    key={index}
                    onClick={() =>
                      handleButtonClick("answer", {
                        isCorrect: answerOption.isCorrect,
                        index,
                      })
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
                    </ACon>
                  </AButton>
                )
              )}
            </ASubWrap>
          </AWrap>
        );
      case "type5":
        return (
          <CroWrap>
            <CroCon>
              <CroReCon>
                <CroSubCon>
                  <CroTe>
                    <CroQa>
                      <CroQaWrap>
                        {shuffledEnglish
                          .concat(shuffledArabic)
                          .map((word, index) => (
                            <CroQaBut
                              key={index}
                              onClick={() => toggleSelection(word, index)}
                              style={{
                                opacity: selectedPairs.includes(word) ? 0.5 : 1,
                              }}
                            >
                              <CroQaSp>{word}</CroQaSp>
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
      default:
        return (
          <div ref={textToSpeakRef}>
            {questions[currentQuestion].questionText}
          </div>
        );
    }
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
                        <TNavButtonImg
                          src={
                            "https://alsallum.s3.eu-north-1.amazonaws.com/cross.svg"
                          }
                        />
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
                      <TNavHeartImg
                        src={
                          "https://alsallum.s3.eu-north-1.amazonaws.com/Heart.svg"
                        }
                      />
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
                        <SButton
                          onClick={() => handleButtonClick("firstClick")}
                        >
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
                          viewBox="0 0 100 50"
                          width="50"
                          height="50"
                        >
                          <path
                            d="M 10,50 A 40 40, 0, 0, 1, 90 50"
                            fill="none"
                            stroke="#16a2ff"
                            stroke-width="5"
                          />

                          <line
                            x1="50"
                            y1="50"
                            x2="50"
                            y2="15"
                            stroke="#2F5BA4"
                            stroke-width="2"
                            stroke-linecap="round"
                            transform="rotate(70,50,50)"
                          />
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
                                      viewBox="0 0 24 24"
                                      width="24"
                                      height="24"
                                      transform="scale(-1, 1)"
                                    >
                                      <path
                                        d="M3,9v6h4l5,5V4L7,9H3z M16.5,12c0-1.77,1.02-3.29,2.5-4.03v8.05C17.52,15.29,16.5,13.77,16.5,12z"
                                        fill="#16a2ff"
                                      />
                                    </svg>
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
                    <SlStBut onClick={() => handleButtonClick("secondClick")}>
                      استمر
                    </SlStBut>
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
