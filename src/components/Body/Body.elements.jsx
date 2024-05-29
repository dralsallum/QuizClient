import { Link } from "react-router-dom";
import styled from "styled-components";

export const QuizBody = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  height: 100%;
  background-color: #ccecff;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  color: #000;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
`;

export const StyledProgress = styled.progress``;

export const VocFoBut = styled(Link)`
  background-color: #56c1ff;
  border-radius: 3px;
  color: #fff;
  padding: 9px 10px;
  font-size: 16px;
  line-height: 16px;
  min-width: 96px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  outline: none;
  border: none;
  margin: 0;
  margin-bottom: 5px;
  cursor: pointer;
  font-family: "open sans", sans-serif;
  text-decoration: none !important;
`;
export const VocCon = styled.div`
  display: flex;
  width: 100%;
`;
export const VocFoBu = styled(Link)`
  background-color: #6f56ff;
  border-radius: 3px;
  color: #fff;
  padding: 9px 10px;
  font-size: 16px;
  line-height: 16px;
  min-width: 96px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  outline: none;
  border: none;
  margin: 5px;
  cursor: pointer;
  font-family: "open sans", sans-serif;
  text-decoration: none !important;
`;

export const QuizApp = styled.div`
  background-color: #ffffff;
  width: 650px;
  min-height: 400px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
`;
export const QuizAppHeader = styled.div`
  padding-top: 2rem;
  font-size: 1.2rem;
`;
export const QuizAppAudio = styled.div`
  padding-top: 1rem;
`;

export const ScoreSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  align-items: center;
  justify-content: center;
`;

export const ScoreSectionImg = styled.img`
  width: 100%;
  border-radius: 5px;
`;
export const ScoreSectionProgress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const ScoreSectionbackground = styled.div`
  background-size: cover;
  background-position: center;
  width: 90%;
  margin-bottom: 1rem;
  border-radius: 15px;
`;

export const QuestionSection = styled.div`
  width: 100%;
  position: relative;
`;

export const QuestionCount = styled.div`
  margin-bottom: 20px;
`;

export const QuestionCountSpan = styled.span`
  font-size: 28px;
`;

export const QuestionText = styled.div`
  margin-bottom: 12px;
`;

export const TimerText = styled.div`
  background: rgb(230, 153, 12);
  padding: 15px;
  margin-top: 20px;
  margin-right: 20px;
  border: 5px solid rgb(255, 189, 67);
  border-radius: 15px;
  text-align: center;
`;

export const AnswerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const QuizButton = styled.button`
  font-size: 16px;
  color: #000000;
  background-color: ${(props) => props.bgColor || "#f1fafe"};
  border-radius: 15px;
  display: flex;
  padding: 12px;
  justify-content: flex-start;
  align-items: center;
  border: none;
  cursor: pointer;
  margin: 10px;

  & svg {
    margin-right: 5px;
  }
`;

export const Correct = styled.div`
  background-color: #2f922f;
`;

export const Incorrect = styled.div`
  background-color: #ff3333;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputfieldContainer = styled.div`
  background-color: #ffffff;
  border-radius: 14px;
  border: 3px solid #434f64;
  padding: 0.5rem 1rem;
  justify-content: space-between;
`;

export const Inputfield = styled.input`
  width: 90%;
  padding: 5px;
  border: none;
  border-style: none;
  outline: none;
  height: 3.5rem;
  font-size: 26px;

  @media screen and (max-width: 960px) {
    width: 85%;
  }
`;

export const Exp = styled.div`
  width: 90%;
  padding: 5px;
  border: none;
  border-style: none;
  outline: none;
  height: 3.5rem;
  font-size: 26px;

  @media screen and (max-width: 960px) {
    width: 85%;
  }
`;
