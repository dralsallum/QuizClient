import {
  FaPlay,
  FaPause,
  FaMicrophone,
  FaRedo,
  FaLightbulb,
  FaEdit,
  FaStop,
} from "react-icons/fa";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { userRequest } from "../../requestMethods";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
import Countdown from "react-countdown-clock";
import {
  FaBookOpen,
  FaRegFileAlt,
  FaPaperPlane,
  FaCaretDown,
  FaCheckSquare,
} from "react-icons/fa";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import styled from "styled-components";

/* ========================= Styled Components ========================= */

import {
  AllWr,
  ClOn,
  ClOnCon,
  ClOnMa,
  ClOnWr,
  ClTw,
  ClTwDi,
  ClTwDiSp,
  ClTwHe,
  ClTwMa,
  ClTwMe,
  ClTwPa,
  ClTwPr,
  ClTwPre,
  ClTwSp,
  ClTwTi,
  ClTwTop,
  ClTwWr,
  ConCo,
  ConHe,
  ConSu,
  ConWr,
  FoBu,
  FoCon,
  FoWr,
  HinCo,
  HinPa,
  HinRe,
  HinSub,
  HinWr,
  InsBo,
  InsBoWr,
  InsCo,
  InsCon,
  InsConSu,
  InsHe,
  InsHin,
  InsHinBu,
  InsHinDi,
  InsHinSp,
  InsLi,
  InsOl,
  InsSub,
  InsWr,
  LoadingBar,
  LoadingContainer,
  NavAt,
  NavBut,
  NavCon,
  NavHeader,
  NavIm,
  NavMi,
  NavMid,
  NavRe,
  NavRi,
  NavRiBu,
  NavRiLa,
  NavRiSu,
  NavSu,
  NavSub,
  NavWr,
  RevCon,
  RevSpan,
  RevSu,
  RevSub,
  RevWr,
  QuizBody,
  QuizApp,
  ScoreSection,
  QuestionSection,
  QuestionCount,
  QuestionCountSpan,
  QuestionText,
  AnswerSection,
  QuizButton,
  QuizAppHeader,
  QuizAppAudio,
  ScoreSectionImg,
  ScoreSectionbackground,
  ScoreSectionProgress,
  VocFoBut,
  StyledProgress,
  VocFroSu,
  FlipCard,
  FlipCardInner,
  CardOn,
  CardOnDiv,
  CardOnWord,
  CardOnSp,
  CardOnAm,
  CardOnIc,
  CardOnAt,
  StyledSpeakerIcon,
  CardOnLe,
  CardOnWr,
  CardOnSpan,
  CardOnUk,
  CardTwo,
  CardTwoSub,
  CardTwoLi,
  CardTwoIm,
  CardTwoTe,
  CardTwoSpa,
  CardTwoSp,
  VocWra,
  VocHead,
  VocHeadSpan,
  VocMain,
  VocTh,
  VocFo,
  VocFoTop,
  VocFoMid,
  VocMidBut,
  VocFoBot,
  VocFoSpan,
  VocFoSpan1,
  VocFoNe,
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
  TeDiv,
  TeBotLi,
  AllaWr,
  ReaWr,
  ReaPa1,
  ReaHe,
  ReaPa2,
  ReaPa3,
  ReadWr,
  ReadButWr,
  ReadBut,
  ParaWr,
  ParaPa,
  EndWr,
  EndHe,
  EndSp,
  ExpWr,
  ExpHe,
  ExpCon,
  ExpBut,
  ExpPa,
  ExpSp,
  ExpStr,
  ExpPa2,
  MaStr,
  VidWr,
  VidMa,
  VidAll,
  VidBo,
  VidTi,
  VidNu,
  VidTiPl,
  ProWr,
  ProEl,
  ProEle,
  ProSu,
  ProSub,
  WriWr,
  WriTop,
  WriBo,
  WriSub,
  WriHe,
  WriPa,
  WriPara,
  WriSec,
  WriSec2,
  WriSec3,
  WhoHe,
  WhoPa,
  WhoSp,
  WhoBo,
  WhoBoHe,
  WhoBoSp,
  WhoWh,
  WhoWhy,
  WriEx,
  OpWr,
  OpRi,
  OpRiBu,
  OpRiSp,
  OpLi,
  OpLiBut,
  WriSec4,
  IdCon,
  IdSub,
  GptHe,
  GptSp,
  GptCon,
  GptIn,
  GptInTo,
  GptInTwo,
  GptInSp,
  GptPl,
  GptPlSpan,
  GptPlSp,
  GptPlSpa,
  GptEx,
  BorWr,
  BorBut,
  GptDiv,
  SoPa,
  SoSp,
  SoCon,
  SoSu,
  GptInTwoIn,
  FeedPa,
  FeedPa2,
  FeedPa3,
  FeedPa4,
  FeedSp,
  Card1,
} from "../Lesson/Lesson.elements";
import { useTeach } from "../../redux/TeachContext";

const LeMa = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
  direction: rtl;
`;

const LeNone = styled.div`
  height: 16px;
`;

const LeWr = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px 24px;
`;

const LeTop = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const LeSub = styled.div`
  padding: 20px;
`;

const LeSec = styled.div`
  display: grid;
  gap: 20px;
`;

const LeSecSu = styled.div`
  width: 100%;
`;

const LeMi = styled.div`
  display: grid;
  gap: 16px;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #111827;
  font-weight: 700;
  font-size: 18px;
`;

const SectionTitleText = styled.span`
  font-size: 18px;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #eef0f3;
  border-radius: 14px;
  padding: 16px;
`;

const AiSec = styled(Card)`
  padding: 0;
`;

const AiHeader = styled.div`
  padding: 18px;
  border-bottom: 1px solid #f0f2f5;
`;

const AiTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: #111827;
`;

const AiBadge = styled.span`
  margin-inline-start: 8px;
  font-size: 12px;
  background: #eef2ff;
  color: #2f4cce;
  border-radius: 999px;
  padding: 3px 10px;
  font-weight: 700;
`;

const AiSubtitle = styled.p`
  margin: 8px 0 0 0;
  color: #6b7280;
  font-size: 14px;
`;

const VideoWrap = styled.div`
  padding: 0 18px 12px;
  video,
  iframe {
    width: 100%;
    border-radius: 12px;
  }
`;

const ChatList = styled.div`
  grid-column: 1 / -1;
  display: grid;
  gap: 12px;
  max-height: 420px;
  overflow-y: auto;
  padding: 8px 0;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 12px;

  &.from-user {
    grid-template-columns: 1fr 56px;
    direction: ltr; /* flip the grid to push bubble left while keeping RTL text */
  }
`;

const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  justify-self: center;
  align-self: start;
`;

const Bubble = styled.div`
  background: ${(p) => (p.$role === "assistant" ? "#f5f7ff" : "#eaf7ef")};
  border: 1px solid ${(p) => (p.$role === "assistant" ? "#e7ebff" : "#d9f1e1")};
  color: #111827;
  padding: 12px 14px;
  border-radius: 14px;
  line-height: 1.7;
  font-size: 15px;
  direction: rtl;
`;

const AudioButton = styled.button`
  border: none;
  background: #fff;
  border: 1px solid #e5e7eb;
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;

  &:hover {
    background: #f9fafb;
  }
`;

const Typing = styled.div`
  font-size: 13px;
  color: #6b7280;
  padding: 0 18px 8px;
`;

const InputWrap = styled.div`
  padding: 12px 18px 18px;
  display: grid;
  grid-template-columns: 48px 1fr 48px;
  gap: 10px;
`;

const RoundButton = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 12px;
  border: none;
  background: ${(p) => (p.$primary ? "#2f4cce" : "#111827")};
  color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
`;

const TextInput = styled.input`
  height: 48px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  padding: 0 14px;
  outline: none;
  font-size: 15px;
  direction: rtl;

  &:focus {
    border-color: #c7d2fe;
    box-shadow: 0 0 0 3px #eef2ff;
  }
`;

const NewWr = styled.div`
  padding: 0 18px 18px;
  display: flex;
  justify-content: flex-end;
`;

const NewBut = styled.button`
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #111827;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
  }
`;

/* Review + Instructions blocks (kept minimal & pretty) */
const Block = styled(Card)``;

const BlockHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  color: #111827;
`;

const BlockBody = styled.div`
  margin-top: 10px;
  color: #374151;
  line-height: 1.9;
  font-size: 15px;
`;

const HintToggle = styled.button`
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #111827;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 8px 10px;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
  }
`;

const HintList = styled.ul`
  margin: 10px 0 0 0;
  padding-inline-start: 18px;
  display: grid;
  gap: 6px;
  color: #374151;
`;
const lowScoreSVG =
  "https://alsallum.s3.eu-north-1.amazonaws.com/boy_study.webp";
const mediumScoreSVG =
  "https://alsallum.s3.eu-north-1.amazonaws.com/boy_studying2.webp";
const highScoreSVG =
  "https://alsallum.s3.eu-north-1.amazonaws.com/boy_studying3.webp";
const extraHighScoreSVG =
  "https://alsallum.s3.eu-north-1.amazonaws.com/boy_study4.webp";

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

  const useTypingEffect = (text, speed = 50) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        index += 1;
        if (index === text.length) {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, [text, speed]);

    return displayedText;
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

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && !isDragging) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleDrag(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDrag = (e) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newTime = (offsetX / rect.width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
      videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const calculateProgress = () => {
    if (duration > 0) {
      return (currentTime / duration) * 100;
    }
    return 0;
  };

  return (
    <VidAll>
      <VidWr>
        <VidMa ref={videoRef} src={src} controls={false}></VidMa>
      </VidWr>
      <VidBo>
        <VidTi>
          <VidTiPl onClick={togglePlayPause}>
            {isPlaying ? (
              <FaPause
                style={{
                  color: "#fff",
                  fontSize: "24px",
                  marginLeft: "8px",
                }}
              />
            ) : (
              <FaPlay
                style={{
                  color: "#fff",
                  fontSize: "24px",
                  marginLeft: "8px",
                }}
              />
            )}
          </VidTiPl>
          <VidNu>
            <time dateTime="">{formatTime(currentTime)}</time>
          </VidNu>
        </VidTi>
        <ProWr
          ref={progressBarRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <ProEl></ProEl>
          <ProEl></ProEl>
          <ProEle>
            <ProSu></ProSu>
            <ProSub style={{ width: `${calculateProgress()}%` }}></ProSub>
            <span></span>
          </ProEle>
          <div></div>
        </ProWr>
      </VidBo>
    </VidAll>
  );
};

const getCurrentStepAndNumber = (location) => {
  const pathParts = location.pathname.split("/");
  if (pathParts.length < 3) {
    return { currentStep: "lesson", currentNumber: 1 };
  }
  const currentStep = pathParts[2].replace(/\d/g, "");
  const currentNumber = parseInt(pathParts[2].replace(/\D/g, ""), 10);
  return { currentStep, currentNumber };
};

const Lesson = () => {
  const { chapterId } = useParams();
  const [data, setData] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [isHinVisible, setIsHinVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const audioPercentage = audioDuration
    ? (audioCurrentTime / audioDuration) * 100
    : 0;

  const { increaseTeach } = useTeach();

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setAudioDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setAudioCurrentTime(audioRef.current.currentTime);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );

      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.load();
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        setIsPlaying(false);
      };
    }
  }, [currentIndex]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleNextLesson = () => {
    const { currentStep, currentNumber } = getCurrentStepAndNumber(location);

    if (currentStep === "lesson") {
      navigate(`/${chapterId}/exercise${currentNumber}`);
    } else if (currentStep === "exercise") {
      navigate(`/${chapterId}/outcome${currentNumber}`);
    } else if (currentStep === "outcome") {
      increaseTeach(parseInt(chapterId));
      navigate(`/eng/knowledge1`);
    }
  };

  const toggleHinVisibility = () => {
    setIsHinVisible(!isHinVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { currentStep, currentNumber } = getCurrentStepAndNumber(location);
      let endpoint = "";
      switch (currentStep) {
        case "lesson":
          endpoint = "lessons";
          break;
        case "exercise":
          endpoint = "exercises";
          break;
        case "outcome":
          endpoint = "outcomes";
          break;
        default:
          console.error("Invalid step");
          return;
      }

      let jsonFileName = `/${currentStep}/${currentNumber}`;

      try {
        const response = await userRequest.get(`/${endpoint}/${jsonFileName}`);
        setData(response.data);
        setAudioUrl(response.data.audioUrl);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [location.pathname, location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <AllWr>
        <LoadingContainer>
          <LoadingBar />
        </LoadingContainer>
      </AllWr>
    );
  }

  return (
    <AllWr>
      <NavWr>
        <NavHeader>
          <NavCon>
            <NavSu>
              <NavSub>
                <NavAt href="">
                  <NavIm
                    src="https://alsallum.s3.eu-north-1.amazonaws.com/fluentfox-512x512.png"
                    alt=""
                  />
                </NavAt>
              </NavSub>
            </NavSu>
            <NavMid>
              <NavMi>
                <NavRe>
                  <NavBut
                    isActive={location.pathname.startsWith(
                      `/${chapterId}/lesson`
                    )}
                    onClick={() =>
                      handleNavigation(
                        `/${chapterId}/lesson${
                          getCurrentStepAndNumber(location).currentNumber
                        }`
                      )
                    }
                  >
                    الدرس {getCurrentStepAndNumber(location).currentNumber}
                  </NavBut>
                  <NavBut
                    isActive={location.pathname.startsWith(
                      `/${chapterId}/exercise`
                    )}
                    onClick={() =>
                      handleNavigation(
                        `/${chapterId}/exercise${
                          getCurrentStepAndNumber(location).currentNumber
                        }`
                      )
                    }
                  >
                    التمارين {getCurrentStepAndNumber(location).currentNumber}
                  </NavBut>
                  <NavBut
                    isActive={location.pathname.startsWith(
                      `/${chapterId}/outcome`
                    )}
                    onClick={() =>
                      handleNavigation(
                        `/${chapterId}/outcome${
                          getCurrentStepAndNumber(location).currentNumber
                        }`
                      )
                    }
                  >
                    الختام {getCurrentStepAndNumber(location).currentNumber}
                  </NavBut>
                </NavRe>
              </NavMi>
            </NavMid>
            <NavRi>
              <NavRiLa>
                <NavRiSu>
                  <NavRiBu>
                    <FontAwesomeIcon
                      icon={faBars}
                      style={{
                        color: "#fff",
                        fill: "currentcolor",
                        display: "block",
                        width: "50%",
                        height: "50%",
                        overflow: "hidden",
                      }}
                    />
                  </NavRiBu>
                </NavRiSu>
              </NavRiLa>
            </NavRi>
          </NavCon>
        </NavHeader>
      </NavWr>
      <StepContent
        data={data}
        isHinVisible={isHinVisible}
        toggleHinVisibility={toggleHinVisibility}
      />
      <FoWr>
        <FoCon>
          <FoBu onClick={handleNextLesson}>متابعة</FoBu>
        </FoCon>
      </FoWr>
    </AllWr>
  );
};

const StepContent = ({ data, isHinVisible, toggleHinVisibility }) => {
  const location = useLocation();
  const { currentStep } = getCurrentStepAndNumber(location);

  if (currentStep === "lesson") {
    switch (data.lessonType) {
      case 1:
        return (
          <LessonContentType1
            data={data}
            isHinVisible={isHinVisible}
            toggleHinVisibility={toggleHinVisibility}
          />
        );
      case 2:
        return (
          <LessonContentType2
            data={data}
            isHinVisible={isHinVisible}
            toggleHinVisibility={toggleHinVisibility}
          />
        );
      case 3:
        return (
          <LessonContentType3
            data={data}
            isHinVisible={isHinVisible}
            toggleHinVisibility={toggleHinVisibility}
          />
        );
      case 4:
        return (
          <LessonContentType4
            data={data}
            isHinVisible={isHinVisible}
            toggleHinVisibility={toggleHinVisibility}
          />
        );
      default:
        return <div>Invalid lesson type</div>;
    }
  } else if (currentStep === "exercise") {
    return (
      <ExerciseContent
        data={data}
        isHinVisible={isHinVisible}
        toggleHinVisibility={toggleHinVisibility}
      />
    );
  } else if (currentStep === "outcome") {
    return (
      <OutcomeContent
        data={data}
        isHinVisible={isHinVisible}
        toggleHinVisibility={toggleHinVisibility}
      />
    );
  } else {
    return null;
  }
};

const LessonContentType1 = ({ data, isHinVisible, toggleHinVisibility }) => {
  if (!data || !data.paragraphs || !data.pregraphs || !data.hints) {
    return (
      <LoadingContainer>
        <LoadingBar />
      </LoadingContainer>
    );
  }

  return (
    <LeMa>
      <LeNone></LeNone>
      <LeWr>
        <LeTop>
          <LeSub>
            <LeSec>
              <LeSecSu>
                <LeMi>
                  <ClOn>
                    <ClOnWr>
                      <ClOnCon>
                        <FaBookOpen
                          style={{
                            color: "#000",
                            fontSize: "18px",
                            marginLeft: "8px",
                          }}
                        />
                        <ClOnMa>{data.section}</ClOnMa>
                      </ClOnCon>
                    </ClOnWr>
                  </ClOn>
                  <ClTw>
                    <ClTwWr>
                      <ClTwTop>{data.heading}</ClTwTop>
                      <ClTwHe>{data.subheading}</ClTwHe>
                      <ClTwTi>
                        <ClTwSp>{data.duration}</ClTwSp>
                      </ClTwTi>
                      <VideoPlayer src={data.videoUrl} />
                      <ContentBody
                        paragraphs={data.paragraphs}
                        pregraphs={data.pregraphs}
                      />
                      <ContentBody
                        paragraphs={data.paragraphs1}
                        pregraphs={data.pregraphs1}
                      />
                    </ClTwWr>
                  </ClTw>
                  <InsWr>
                    <InsCo>
                      <InsSub>
                        <FaCheckSquare
                          style={{
                            color: "#000",
                            fontSize: "18px",
                            backgroundColor: "#fff",
                            borderRadius: "2px",
                            padding: "2px",
                          }}
                        />
                        <InsHe>التعليمات</InsHe>
                      </InsSub>
                    </InsCo>
                  </InsWr>
                  <InsBo>
                    <InsBoWr>
                      <InsOl>
                        <InsLi>
                          <InsCon>
                            <InsConSu>{data.instructions}</InsConSu>
                            <InsHin>
                              <InsHinBu onClick={toggleHinVisibility}>
                                <InsHinSp>
                                  <InsHinDi>تورطت? خلنا نلمح لك</InsHinDi>
                                </InsHinSp>
                                <FaCaretDown
                                  style={{
                                    color: "#000",
                                    fontSize: "24px",
                                    marginLeft: "8px",
                                  }}
                                />
                              </InsHinBu>
                            </InsHin>
                          </InsCon>
                        </InsLi>
                      </InsOl>
                    </InsBoWr>
                  </InsBo>
                  {isHinVisible && (
                    <HinWr>
                      <HinCo>
                        <HinSub>
                          <HinRe>
                            {data.hints.map((hint, index) => (
                              <HinPa key={index}>{hint}</HinPa>
                            ))}
                          </HinRe>
                        </HinSub>
                      </HinCo>
                    </HinWr>
                  )}
                  <ConWr>
                    <ConCo>
                      <ConSu>
                        <FaRegFileAlt
                          style={{
                            color: "#000",
                            fontSize: "18px",
                            marginLeft: "8px",
                          }}
                        />
                        <ConHe>مراجعة المفهوم</ConHe>
                      </ConSu>
                    </ConCo>
                  </ConWr>
                  <RevWr>
                    <RevCon>
                      <RevSub>
                        <RevSu>{data.review}</RevSu>
                      </RevSub>
                      <RevSpan>{data.review}</RevSpan>
                    </RevCon>
                  </RevWr>
                </LeMi>
              </LeSecSu>
            </LeSec>
          </LeSub>
        </LeTop>
      </LeWr>
    </LeMa>
  );
};

const LessonContentType2 = ({ data, isHinVisible, toggleHinVisibility }) => {
  // Chat state
  const [messages, setMessages] = useState([]);
  const [userText, setUserText] = useState("");
  const [loading, setLoading] = useState(false);

  // Recording state
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const lastAssistantAudioRef = useRef(null); // optional audio playback slot

  // Seed greeting
  useEffect(() => {
    if (!data) return;
    setMessages([
      {
        role: "assistant",
        text: `أهلًا! أنا Shakespeare AI، مدرب المحادثة الخاص بك لـ IELTS. جاهز نبدأ عن "${data.section}"؟ حدّثني بجملة قصيرة.`,
        audioUrl: "",
      },
    ]);
  }, [data]);

  const sendToAI = useCallback(
    async (userMessageText) => {
      if (!userMessageText?.trim()) return;

      // push user message
      setMessages((prev) => [...prev, { role: "user", text: userMessageText }]);
      setLoading(true);

      try {
        // Send minimal chat history (role/text only)
        const payload = {
          messages: [...messages, { role: "user", text: userMessageText }].map(
            (m) => ({ role: m.role, content: m.text })
          ),
          // If your backend expects extra context:
          meta: { section: data?.section || "", lesson: data?.title || "" },
        };

        const res = await userRequest.post("/chatgpt/chat", payload);
        const reply = res?.data?.reply || "تم! تابع.";
        const tts = res?.data?.audioUrl || ""; // optional if you return TTS

        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: reply, audioUrl: tts },
        ]);

        // optional auto-play last assistant audio
        if (tts) {
          try {
            if (lastAssistantAudioRef.current) {
              lastAssistantAudioRef.current.pause();
            }
            lastAssistantAudioRef.current = new Audio(tts);
            lastAssistantAudioRef.current.play().catch(() => {});
          } catch {}
        }
      } catch (e) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: "تعذر الحصول على رد الآن. جرّب مرة أخرى لاحقًا أو أعد الصياغة 🙏",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [messages, data]
  );

  const onSendText = async () => {
    const t = userText.trim();
    setUserText("");
    await sendToAI(t);
  };

  /* -------- Recording: start/stop → transcribe → chat -------- */
  const startRecording = () => {
    if (isRecording) return;
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorderRef.current = new MediaRecorder(stream);
        audioChunksRef.current = [];
        mediaRecorderRef.current.ondataavailable = (e) => {
          audioChunksRef.current.push(e.data);
        };
        mediaRecorderRef.current.onstop = handleRecordingStop;
        mediaRecorderRef.current.start();
        setIsRecording(true);
      })
      .catch((err) => console.error("Mic error:", err));
  };

  const stopRecording = () => {
    if (!isRecording || !mediaRecorderRef.current) return;
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const handleRecordingStop = async () => {
    try {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/webm",
      });
      const formData = new FormData();
      formData.append("audio", audioBlob);

      const resp = await userRequest.post(
        "/googleSpeech/transcribe",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const transcript = resp?.data?.transcript || "";
      if (transcript) {
        await sendToAI(transcript);
      } else {
        setMessages((p) => [
          ...p,
          { role: "assistant", text: "ما سمعت كلام واضح. حاول مرة ثانية 🎙️" },
        ]);
      }
    } catch (e) {
      setMessages((p) => [
        ...p,
        { role: "assistant", text: "تعذر تحويل الصوت إلى نص. أعد المحاولة." },
      ]);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        role: "assistant",
        text: "بدأنا محادثة جديدة ✅. عرفني بنفسك بجملة بسيطة (اسمك، عملك، هواية…).",
        audioUrl: "",
      },
    ]);
  };

  // Simple video player (if you pass data.videoUrl)
  const VideoPlayer = ({ src }) => {
    if (!src) return null;
    return <video src={src} controls playsInline style={{ width: "100%" }} />;
  };

  if (!data || !data.hints) {
    return (
      <LeMa>
        <LeWr>
          <Card>جاري التحميل…</Card>
        </LeWr>
      </LeMa>
    );
  }

  return (
    <LeMa>
      <LeNone />
      <LeWr>
        <LeTop>
          <LeSub>
            <LeSec>
              <LeSecSu>
                <LeMi>
                  {/* Section title */}
                  <SectionTitle>
                    <FaBookOpen style={{ color: "#111827" }} />
                    <SectionTitleText>{data.section}</SectionTitleText>
                  </SectionTitle>

                  {/* ===== AI Trainer ===== */}
                  <AiSec>
                    <AiHeader>
                      <AiTitle>
                        المدرب شكسبير <AiBadge>AI</AiBadge>
                      </AiTitle>
                      <AiSubtitle>
                        تدرّب وراجع محادثتك فورياً — كتابة أو صوت.
                      </AiSubtitle>
                    </AiHeader>

                    {data.videoUrl ? (
                      <VideoWrap>
                        <VideoPlayer src={data.videoUrl} />
                      </VideoWrap>
                    ) : null}

                    {/* Chat list */}
                    <ChatList>
                      {messages.map((m, i) => {
                        const isUser = m.role === "user";
                        return (
                          <Row key={i} className={isUser ? "from-user" : ""}>
                            {!isUser && (
                              <Avatar
                                src="https://cdn.dalilkplatform.com/storage/2023/09/28095736/shakespeare-1.png"
                                alt="AI"
                              />
                            )}
                            <Bubble $role={m.role}>{m.text}</Bubble>
                            {isUser && (
                              <Avatar
                                src="https://cdn.dalilkplatform.com/storage/2023/09/28095739/user.png"
                                alt="You"
                              />
                            )}
                            {!isUser && m.audioUrl ? (
                              <div style={{ gridColumn: "1 / -1" }}>
                                <AudioButton
                                  onClick={() => {
                                    try {
                                      const a = new Audio(m.audioUrl);
                                      a.play().catch(() => {});
                                    } catch {}
                                  }}
                                >
                                  <FaPlay /> استمع للرد
                                </AudioButton>
                              </div>
                            ) : null}
                          </Row>
                        );
                      })}
                    </ChatList>

                    {loading && <Typing>…المساعد يكتب الآن</Typing>}

                    {/* Input row */}
                    <InputWrap>
                      <RoundButton
                        onClick={isRecording ? stopRecording : startRecording}
                        title={isRecording ? "إيقاف التسجيل" : "تسجيل صوتي"}
                        aria-label="mic"
                        style={{
                          background: isRecording ? "#e11d48" : "#111827",
                        }}
                      >
                        {isRecording ? <FaStop /> : <FaMicrophone />}
                      </RoundButton>

                      <TextInput
                        placeholder="اكتب ردك هنا…"
                        value={userText}
                        onChange={(e) => setUserText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") onSendText();
                        }}
                      />

                      <RoundButton
                        $primary
                        onClick={onSendText}
                        disabled={loading || !userText.trim()}
                        title="إرسال"
                        aria-label="send"
                      >
                        <FaPaperPlane />
                      </RoundButton>
                    </InputWrap>

                    {/* Transcript preview (last mic result) */}
                    {/* Optional helper area; you can remove if not needed */}
                    {/* Show nothing when empty */}
                    {/* If you want to show last transcript text, add state for it */}
                  </AiSec>

                  {/* ===== Instructions ===== */}
                  <Block>
                    <BlockHeader>
                      <FaRegFileAlt />
                      <span>التعليمات</span>
                    </BlockHeader>
                    <BlockBody>
                      {data.instructions}
                      <div>
                        <HintToggle onClick={toggleHinVisibility}>
                          <span>تورطت؟ عرض تلميحات</span>
                          <FaCaretDown />
                        </HintToggle>
                      </div>
                      {isHinVisible && (
                        <HintList>
                          {data.hints.map((h, idx) => (
                            <li key={idx}>{h}</li>
                          ))}
                        </HintList>
                      )}
                    </BlockBody>
                  </Block>

                  {/* ===== Review ===== */}
                  <Block>
                    <BlockHeader>
                      <FaBookOpen />
                      <span>مراجعة المفهوم</span>
                    </BlockHeader>
                    <BlockBody>{data.review}</BlockBody>
                  </Block>

                  <NewWr>
                    <NewBut onClick={resetChat}>محادثة جديدة</NewBut>
                  </NewWr>
                </LeMi>
              </LeSecSu>
            </LeSec>
          </LeSub>
        </LeTop>
      </LeWr>
    </LeMa>
  );
};

const LessonContentType3 = ({ data, isHinVisible, toggleHinVisibility }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [wpm, setWpm] = useState(null);
  const [isReading, setIsReading] = useState(false);
  const [currentButton, setCurrentButton] = useState("start");
  const [isExpVisible, setIsExpVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setEndTime(null);
    setWpm(null);
    setIsReading(true);
    setCurrentButton("end");
  };

  const handleEnd = () => {
    if (startTime) {
      const endTime = Date.now();
      const elapsedTimeMinutes = (endTime - startTime) / 1000 / 60; // time in minutes
      const text = document.getElementById("text-to-read").innerText;
      const wordCount = text
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
      const wpm = Math.round(wordCount / elapsedTimeMinutes);
      setEndTime(endTime);
      setWpm(wpm);
      setIsReading(false);
      setCurrentButton("reset");
    }
  };

  const handleReset = () => {
    setStartTime(null);
    setEndTime(null);
    setWpm(null);
    setCurrentButton("start");
  };

  const toggleExpVisibility = () => {
    setIsExpVisible(!isExpVisible);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateVideoTime(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateVideoTime = (e) => {
    const progressBar = progressBarRef.current;
    if (progressBar && videoRef.current) {
      const rect = progressBar.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (offsetX / width) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const updateCurrentTime = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", updateCurrentTime);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", updateCurrentTime);
      }
    };
  }, []);

  if (!data || !data.paragraphs || !data.pregraphs || !data.hints) {
    return (
      <LoadingContainer>
        <LoadingBar />
      </LoadingContainer>
    );
  }

  return (
    <LeMa>
      <LeNone></LeNone>
      <LeWr>
        <LeTop>
          <LeSub>
            <LeSec>
              <LeSecSu>
                <LeMi>
                  <ClOn>
                    <ClOnWr>
                      <ClOnCon>
                        <FaBookOpen
                          style={{
                            color: "#000",
                            fontSize: "18px",
                            marginLeft: "8px",
                          }}
                        />
                        <ClOnMa>{data.section}</ClOnMa>
                      </ClOnCon>
                    </ClOnWr>
                  </ClOn>
                  <ReaWr>
                    <ReaPa1></ReaPa1>
                    <ReaHe>كيف تطور لغتك بالقراءة السريعة؟</ReaHe>
                    <ReaPa2></ReaPa2>
                    <VideoPlayer src={data.videoUrl} />
                    <ReaPa2></ReaPa2>
                    <ReaPa2></ReaPa2>
                    <ReaPa3>
                      <MaStr>{data.heading}</MaStr>
                    </ReaPa3>
                    <ReadWr>
                      <ReadButWr>
                        <ReadBut
                          onClick={handleStart}
                          style={{
                            display:
                              currentButton === "start" ? "block" : "none",
                          }}
                        >
                          ابدا الان
                        </ReadBut>
                      </ReadButWr>
                      <ParaWr id="text-to-read" isReading={isReading}>
                        <ParaPa>
                          {data.paragraphs.map((paragraph, index) => (
                            <React.Fragment key={index}>
                              {paragraph}
                              <br />
                              <br />
                            </React.Fragment>
                          ))}
                        </ParaPa>
                        <ParaPa>
                          {data.pregraphs.map((pregraph, index) => (
                            <React.Fragment key={index}>
                              {pregraph}
                              <br />
                              <br />
                            </React.Fragment>
                          ))}
                        </ParaPa>
                      </ParaWr>
                      <EndWr>
                        <ReadBut
                          onClick={handleEnd}
                          style={{
                            display: currentButton === "end" ? "block" : "none",
                          }}
                        >
                          انتهيت
                        </ReadBut>
                        <ReadBut
                          onClick={handleReset}
                          style={{
                            display:
                              currentButton === "reset" ? "block" : "none",
                          }}
                        >
                          إعادة الأختبار
                        </ReadBut>
                      </EndWr>
                      <EndHe>
                        {wpm !== null && (
                          <>
                            سرعة قرائتك هي: {wpm} كلمة في الدقيقة{" "}
                            <EndSp>(WPM)</EndSp>
                          </>
                        )}
                      </EndHe>
                    </ReadWr>
                    <p></p>
                    <ExpWr>
                      <ExpHe onClick={toggleExpVisibility}>
                        <ExpBut>📌 شرح القطعة</ExpBut>

                        <FaCaretDown
                          style={{
                            color: "#000",
                            fontSize: "24px",
                            marginLeft: "8px",
                          }}
                        />
                      </ExpHe>
                      {isExpVisible && (
                        <ExpCon>
                          <ExpPa>
                            <ExpSp>
                              <ExpStr>Understanding the Crisis</ExpStr>
                            </ExpSp>
                            <br />
                            <br />
                            {data.paragraphs1.map((paragraph, index) => (
                              <React.Fragment key={index}>
                                {paragraph}
                                <br />
                                <br />
                              </React.Fragment>
                            ))}
                          </ExpPa>
                          <ExpPa>
                            <ExpSp>
                              <ExpStr>فهم الأزمة</ExpStr>
                            </ExpSp>
                            <br />
                            <br />
                            {data.pregraphs1.map((pregraph, index) => (
                              <React.Fragment key={index}>
                                {pregraph}
                                <br />
                                <br />
                              </React.Fragment>
                            ))}
                          </ExpPa>
                        </ExpCon>
                      )}
                    </ExpWr>
                    <ExpPa2>اختبر استيعابك انتقل للتمارين 🙅🏻‍♂️</ExpPa2>
                  </ReaWr>
                  <InsWr>
                    <InsCo>
                      <InsSub>
                        <FaCheckSquare
                          style={{
                            color: "#000",
                            fontSize: "18px",
                            backgroundColor: "#fff",
                            borderRadius: "2px",
                            padding: "2px",
                          }}
                        />
                        <InsHe>التعليمات</InsHe>
                      </InsSub>
                    </InsCo>
                  </InsWr>
                  <InsBo>
                    <InsBoWr>
                      <InsOl>
                        <InsLi>
                          <InsCon>
                            <InsConSu>{data.instructions}</InsConSu>
                            <InsHin>
                              <InsHinBu onClick={toggleHinVisibility}>
                                <InsHinSp>
                                  <InsHinDi>تورطت? خلنا نلمح لك</InsHinDi>
                                </InsHinSp>
                                <FaCaretDown
                                  style={{
                                    color: "#000",
                                    fontSize: "24px",
                                    marginLeft: "8px",
                                  }}
                                />
                              </InsHinBu>
                            </InsHin>
                          </InsCon>
                        </InsLi>
                      </InsOl>
                    </InsBoWr>
                  </InsBo>
                  {isHinVisible && (
                    <HinWr>
                      <HinCo>
                        <HinSub>
                          <HinRe>
                            {data.hints.map((hint, index) => (
                              <HinPa key={index}>{hint}</HinPa>
                            ))}
                          </HinRe>
                        </HinSub>
                      </HinCo>
                    </HinWr>
                  )}
                  <ConWr>
                    <ConCo>
                      <ConSu>
                        <FaRegFileAlt
                          style={{
                            color: "#000",
                            fontSize: "18px",
                            marginLeft: "8px",
                          }}
                        />
                        <ConHe>مراجعة المفهوم</ConHe>
                      </ConSu>
                    </ConCo>
                  </ConWr>
                  <RevWr>
                    <RevCon>
                      <RevSub>
                        <RevSu>{data.review}</RevSu>
                      </RevSub>
                      <RevSpan>{data.review}</RevSpan>
                    </RevCon>
                  </RevWr>
                </LeMi>
              </LeSecSu>
            </LeSec>
          </LeSub>
        </LeTop>
      </LeWr>
    </LeMa>
  );
};

const LessonContentType4 = ({ data, isHinVisible, toggleHinVisibility }) => {
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [spellCheck, setSpellCheck] = useState("");
  const [sentenceCorrection, setSentenceCorrection] = useState("");
  const [spellCheckDetails, setSpellCheckDetails] = useState([]);
  const [topic, setTopic] = useState(
    "Do you prefer working in a team or individually? Explain your choice."
  );
  const [idealAnswer, setIdealAnswer] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [isTopicLoading, setIsTopicLoading] = useState(false);
  const [isIdealAnswerLoading, setIsIdealAnswerLoading] = useState(false);
  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleGetFeedback = async () => {
    setIsFeedbackLoading(true);
    try {
      const response = await userRequest.post("/chatgpt/get-feedback", {
        input: userInput,
      });
      setFeedback(response.data.feedback);
      setSpellCheck(response.data.spellCheck);
      setSentenceCorrection(response.data.sentenceCorrection);
      setSpellCheckDetails(
        extractSpellCheckDetails(response.data.spellCheck || "")
      );
      setWordCount(countWords(userInput));
    } catch (error) {
      console.error("Error getting feedback", error);
    } finally {
      setIsFeedbackLoading(false);
    }
  };

  const extractSpellCheckDetails = (spellCheckText) => {
    return spellCheckText.split(";").map((entry) => {
      const [word, suggestions] = entry.split(":");
      return {
        word: word.trim(),
        suggestions: suggestions ? suggestions.trim().split(", ") : [],
      };
    });
  };

  const handleGenerateTopic = async () => {
    setIsTopicLoading(true);
    try {
      const response = await userRequest.post("/chatgpt/generate-topic");
      setTopic(response.data.topic);
    } catch (error) {
      console.error("Error generating topic", error);
    } finally {
      setIsTopicLoading(false);
    }
  };

  const handleGetIdealAnswer = async () => {
    setIsIdealAnswerLoading(true);
    try {
      const response = await userRequest.post("/chatgpt/ideal-answer", {
        topic: topic,
      });
      setIdealAnswer(response.data.idealAnswer);
    } catch (error) {
      console.error("Error getting ideal answer", error);
    } finally {
      setIsIdealAnswerLoading(false);
    }
  };

  const countWords = (text) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  useEffect(() => {
    handleGenerateTopic();
  }, []);

  if (!data || !data.paragraphs || !data.pregraphs || !data.hints) {
    return (
      <LoadingContainer>
        <LoadingBar />
      </LoadingContainer>
    );
  }

  return (
    <WriWr>
      <WriTop>
        <WriSub>
          <WriHe>الكتابة مع جنيسيس AI</WriHe>
        </WriSub>
      </WriTop>
      <WriBo>
        <WriPa>كيف تتدرب على الكتابة مع جنيسيس</WriPa>
        <VideoPlayer src={data.videoUrl} />
        <WriPara>
          <strong>⏰ الوقت المحدد: ١٥ دقيقة</strong>
        </WriPara>
        <WriSec>
          <WhoHe>
            <WhoSp>AI</WhoSp> المدرب جنيسيس
          </WhoHe>
          <WhoPa>
            اللي طورته مع فريقي بالذكاء الاصطناعي
            <WriEx>AI</WriEx> اتدرب وراجع كتابتك فوريا مع جنيسيس
          </WhoPa>
          <WhoBo>
            <WhoBoHe>
              <WhoBoSp> الخطوة الاولى: </WhoBoSp> اختار الفكرة
            </WhoBoHe>
            <WhoWh>
              {isTopicLoading ? (
                <LoadingContainer>
                  <LoadingBar />
                </LoadingContainer>
              ) : (
                <WhoWhy>{topic}</WhoWhy>
              )}
            </WhoWh>
          </WhoBo>
        </WriSec>
        <WriSec2>
          <OpWr>
            <OpRi>
              <OpRiBu onClick={handleGenerateTopic}>
                <OpRiSp>
                  <FaRedo /> اعطيني فكرة جديدة
                </OpRiSp>
              </OpRiBu>
            </OpRi>
            <OpLi>
              <OpLiBut onClick={handleGetIdealAnswer}>
                <OpRiSp>
                  <FaLightbulb /> اكتب لي اجابة نموذجية
                </OpRiSp>
              </OpLiBut>
            </OpLi>
          </OpWr>
        </WriSec2>
        <WriSec3>
          <IdCon>
            {isIdealAnswerLoading ? (
              <LoadingContainer>
                <LoadingBar />
              </LoadingContainer>
            ) : (
              <IdSub>{idealAnswer}</IdSub>
            )}
          </IdCon>
        </WriSec3>
        <WriSec4>
          <GptHe>
            <GptSp>الخطوة الثانية:</GptSp> اكتب
          </GptHe>
          <GptCon>
            <GptIn>
              <GptInTo>
                <GptInSp>اكتب هنا</GptInSp>
                <GptPl>
                  <GptPlSpan>00:00</GptPlSpan>
                  <GptPlSp>
                    <FaPlay
                      style={{
                        color: "#000",
                        fontSize: "16px",
                        marginLeft: "8px",
                      }}
                    />
                  </GptPlSp>
                  <GptPlSpa>|</GptPlSpa>
                  <GptPlSp>
                    <FaRedo
                      style={{
                        color: "#000",
                        fontSize: "16px",
                        marginLeft: "8px",
                      }}
                    />
                  </GptPlSp>
                </GptPl>
              </GptInTo>
              <GptInTwo>
                <GptInTwoIn
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                />
              </GptInTwo>
              <BorWr>
                <BorBut onClick={handleGetFeedback}>
                  راجع كتابتي
                  <FaEdit
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      marginRight: "8px",
                    }}
                  />
                </BorBut>
                <GptDiv>
                  <span>{wordCount}</span> كلمة
                </GptDiv>
              </BorWr>
            </GptIn>
            <GptEx>
              <SoPa>
                <SoSp>فيدباك جنيسيس</SoSp>
              </SoPa>
              <SoCon>
                {isFeedbackLoading ? (
                  <LoadingContainer>
                    <LoadingBar />
                  </LoadingContainer>
                ) : (
                  <SoSu>
                    <FeedPa>{feedback}</FeedPa>
                    <br />
                    <br />
                    {spellCheckDetails.map((detail, index) => (
                      <FeedPa4 key={index}>
                        <br />
                        <FeedPa2>
                          <FeedSp> التصحيح المحتمل - </FeedSp>
                          {detail.word}
                        </FeedPa2>
                        <br />
                        <FeedPa3></FeedPa3>
                        <br />
                      </FeedPa4>
                    ))}
                    <br />
                    <br />
                  </SoSu>
                )}
              </SoCon>
              <p></p>
              <div></div>
            </GptEx>
          </GptCon>
        </WriSec4>
      </WriBo>
    </WriWr>
  );
};

const LessonContentType5 = ({ data, isHinVisible, toggleHinVisibility }) => {
  if (!data || !data.paragraphs || !data.pregraphs || !data.hints) {
    return (
      <LoadingContainer>
        <LoadingBar />
      </LoadingContainer>
    );
  }

  return (
    <WriWr>
      <WriTop>
        <WriSub>
          <WriHe>الكتابة مع شكسبير AI</WriHe>
        </WriSub>
      </WriTop>
    </WriWr>
  );
};

const ContentBody = ({ paragraphs, pregraphs }) => (
  <ClTwMa>
    <ClTwMe>
      {paragraphs.map((paragraph, index) => (
        <ClTwPa key={index}>{paragraph}</ClTwPa>
      ))}
      <ClTwPre>
        <ClTwPr>
          <ClTwDi>
            <ClTwDiSp>
              {pregraphs.map((pregraph, index) => (
                <ClTwPa key={index}>{pregraph}</ClTwPa>
              ))}
            </ClTwDiSp>
          </ClTwDi>
        </ClTwPr>
      </ClTwPre>
    </ClTwMe>
  </ClTwMa>
);

const ExerciseContent = ({ data, isHinVisible, toggleHinVisibility }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const playSound = (isCorrect) => {
    const sound = new Audio(
      isCorrect
        ? "https://alsallum.s3.eu-north-1.amazonaws.com/correct.mp3"
        : "https://alsallum.s3.eu-north-1.amazonaws.com/Wrong.mp3"
    );
    sound.play();
  };

  const handleAnswerButtonClick = (isCorrect, index) => {
    setSelectedAnswer({ index, isCorrect });
    playSound(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < data.questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setSelectedAnswer(null);
    }, 400);
  };

  const timeIsUp = () => {
    setShowScore(true);
  };

  const getScoreSVG = (score) => {
    const normalizedScore = (score / data.questions.length) * 9; // Normalize score to be out of 9
    if (normalizedScore <= 3) {
      return lowScoreSVG;
    } else if (normalizedScore <= 6) {
      return mediumScoreSVG;
    } else if (normalizedScore < 9) {
      return highScoreSVG;
    } else {
      return extraHighScoreSVG;
    }
  };

  const calculateScorePercentage = (score, total) => (score / total) * 100;

  if (!data.questions) {
    return (
      <LoadingContainer>
        <LoadingBar />
      </LoadingContainer>
    );
  }

  return (
    <QuizBody>
      <QuizApp>
        {showScore ? (
          <ScoreSection>
            <ScoreSectionbackground>
              <ScoreSectionImg src={getScoreSVG(score)} alt="score indicator" />
            </ScoreSectionbackground>
            <h3> درجتك التقريبية في الايلتس </h3>
            <br />
            {Math.round((score / data.questions.length) * 9)}

            <ScoreSectionProgress>
              <p>1</p>
              <StyledProgress
                value={calculateScorePercentage(
                  (score / data.questions.length) * 9,
                  9
                )}
                max="100"
              />
              <p>9</p>
            </ScoreSectionProgress>
          </ScoreSection>
        ) : (
          <>
            <Countdown
              seconds={420}
              color="#ffffff"
              alpha={0.9}
              size={50}
              onComplete={timeIsUp}
            />
            <QuestionSection>
              <QuestionCount>
                <QuestionCountSpan>
                  Question {currentQuestion + 1}
                </QuestionCountSpan>
                /{data.questions.length}
                <QuizAppHeader>
                  {data.questions[currentQuestion].questionTask}
                </QuizAppHeader>
              </QuestionCount>
              <QuestionText>
                {data.questions[currentQuestion].questionText}
                {data.questions[currentQuestion].audioUrl && (
                  <QuizAppAudio>
                    <ReactPlayer
                      url={data.questions[currentQuestion].audioUrl}
                      controls
                      width="100%"
                      height="50px"
                    />
                  </QuizAppAudio>
                )}
              </QuestionText>
            </QuestionSection>
            <AnswerSection>
              {data.questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <QuizButton
                    key={index}
                    onClick={() =>
                      handleAnswerButtonClick(answerOption.isCorrect, index)
                    }
                    bgColor={
                      selectedAnswer && selectedAnswer.index === index
                        ? selectedAnswer.isCorrect
                          ? "green"
                          : "red"
                        : "#f1fafe" // Default background
                    }
                  >
                    {answerOption.answerText}
                  </QuizButton>
                )
              )}
            </AnswerSection>
          </>
        )}
      </QuizApp>
    </QuizBody>
  );
};

const OutcomeContent = ({ data }) => {
  const { chapterId } = useParams();
  const [cardsData, setCardsData] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [allWords, setAllWords] = useState([]);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("");
  const { increaseTeach } = useTeach();

  useEffect(() => {
    if (data && data.words) {
      const cards = data.words;
      setCardsData(cards);
      const words = cards.map((card) => card.word);
      setAllWords(words);
    }
  }, [data]);

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

  const handleNextLesson = () => {
    increaseTeach(parseInt(chapterId));
  };

  if (!data || !data.words) {
    return (
      <LoadingContainer>
        <LoadingBar />
      </LoadingContainer>
    );
  }

  return (
    <AllaWr>
      <VocWra>
        <ClTwMa>
          <ClTwMe></ClTwMe>
        </ClTwMa>
        <VocHead>
          {data.course} -
          <VocHeadSpan>
            اضغط على الورقة لرؤية المعنى بالعربي واستخدامها بجملة
          </VocHeadSpan>
        </VocHead>

        <VocMain>
          <VocTh>مجموعة الكلمات</VocTh>
          <VocFo>
            <VocFoTop>
              <Card1
                key={currentCard}
                direction={animationDirection}
                left={50}
                zIndex={1}
              >
                <CardContent {...cardsData[currentCard]} />
              </Card1>
            </VocFoTop>
            <VocFoMid>
              <VocMidBut>shuffle</VocMidBut>
            </VocFoMid>
            <VocFoBot>
              <VocFoBut onClick={handleNext}>التالي</VocFoBut>
              <VocFoSpan>
                <VocFoSpan1>{currentCard + 1}</VocFoSpan1>
                <VocFoSpan1>/</VocFoSpan1>
                <VocFoSpan1>{cardsData.length}</VocFoSpan1>
              </VocFoSpan>
              <VocFoNe onClick={handlePrevious}>السابق</VocFoNe>
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
                <TeTopAt href="">
                  {selectedTopic || "كل الكلمات بالمجموعة"}
                </TeTopAt>
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
    </AllaWr>
  );
};

export default Lesson;
