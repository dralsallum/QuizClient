import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Countdown from "react-countdown-clock";
import ReactPlayer from "react-player";
import {
  QuizBody,
  QuizApp,
  ScoreSection,
  QuestionSection,
  QuestionCount,
  QuestionCountSpan,
  QuestionText,
  AnswerSection,
  QuizButton,
  InputContainer,
  InputfieldContainer,
  Inputfield,
  QuizAppHeader,
  QuizAppAudio,
  ScoreSectionImg,
  ScoreSectionbackground,
  ScoreSectionProgress,
  VocFoBut,
  VocFoBu,
} from "./Body.elements";
import axios from "axios";
import questions from "../../utils/exam.json";
const lowScoreSVG =
  "https://alsallum.s3.eu-north-1.amazonaws.com/boy_study4.webp";
const mediumScoreSVG =
  "https://alsallum.s3.eu-north-1.amazonaws.com/boy_study4.webp";
const highScoreSVG =
  "https://alsallum.s3.eu-north-1.amazonaws.com/boy_study4.webp";
const extraHighScoreSVG =
  "https://alsallum.s3.eu-north-1.amazonaws.com/boy_study4.webp";

const Body = () => {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [nameEntered, setNameEntered] = useState(false);
  const [emailEntered, setEmailEntered] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {};

    fetchEmails();
  }, []);

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
      setScore(score + 9 / questions.length);
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
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

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setNameEntered(true);
    if (userEmail) {
      submitExamData(name, userEmail);
    }
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    setEmailEntered(true);
    if (name) {
      submitExamData(name, userEmail);
    }
  };

  const submitExamData = async (name, email) => {
    try {
      const response = await axios.post(
        "https://quizeng-022517ad949b.herokuapp.com/api/exam/submit",
        {
          username: name,
          email: email,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error saving exam data", error);
    }
  };

  const getScoreSVG = (score) => {
    score = Math.round(score);
    if (score <= (9 * 1) / 3) {
      return lowScoreSVG;
    } else if (score <= (9 * 2) / 3) {
      return mediumScoreSVG;
    } else if (score < 9) {
      return highScoreSVG;
    } else {
      return extraHighScoreSVG;
    }
  };

  const calculateScorePercentage = (score, total) => (score / total) * 100;

  return (
    <QuizBody>
      <QuizApp>
        {!nameEntered ? (
          <InputContainer>
            <h3>عرفنا باسمك الكريم؟</h3>
            <InputfieldContainer>
              <form onSubmit={handleNameSubmit}>
                <Inputfield
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#7cc6fe",
                    border: "none",
                    padding: "5px",
                    cursor: "default",
                    borderRadius: "8px",
                    marginLeft: "4px",
                  }}
                >
                  <FaArrowRight size="1.2em" />
                </button>
              </form>
            </InputfieldContainer>
          </InputContainer>
        ) : !emailEntered && showScore ? (
          <InputContainer>
            <h3>ارجو تزويدنا ببريدك الالكتروني لتصلك النتيجة على الايميل:</h3>
            <InputfieldContainer>
              <form onSubmit={handleEmailSubmit}>
                <Inputfield
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#7cc6fe",
                    border: "none",
                    padding: "5px",
                    cursor: "default",
                    borderRadius: "8px",
                    marginLeft: "4px",
                  }}
                >
                  <FaArrowRight size="1.2em" />
                </button>
              </form>
            </InputfieldContainer>
          </InputContainer>
        ) : showScore ? (
          <ScoreSection>
            <ScoreSectionbackground>
              <ScoreSectionImg src={getScoreSVG(score)} alt="score indicator" />
            </ScoreSectionbackground>
            <h3> درجتك التقريبية في الايلتس </h3>
            <br />
            {Math.round(score)}

            <ScoreSectionProgress>
              <p>1</p>
              <progress value={calculateScorePercentage(score, 9)} max="100" />
              <p>9</p>
            </ScoreSectionProgress>
            <div>
              <VocFoBut to={"/train"}>انتقل للتعليم التفاعلي</VocFoBut>
              <VocFoBu to={"/level/grade-1"}>انتقل لتطوير المفردات</VocFoBu>
            </div>
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
                /{questions.length}
                <QuizAppHeader>
                  اختار الكلمة او العبارة الي تكمل معنى الجملة
                </QuizAppHeader>
              </QuestionCount>
              <QuestionText>
                {questions[currentQuestion].questionText}
                {questions[currentQuestion].audioUrl && (
                  <QuizAppAudio>
                    <ReactPlayer
                      url={questions[currentQuestion].audioUrl}
                      controls
                      width="100%"
                      height="50px"
                    />
                  </QuizAppAudio>
                )}
              </QuestionText>
            </QuestionSection>
            <AnswerSection>
              {questions[currentQuestion].answerOptions.map(
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

export default Body;
