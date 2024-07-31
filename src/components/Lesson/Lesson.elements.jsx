import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import { IoMdVolumeHigh } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScaleUpDown = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const ColAudConF = styled.div`
  direction: rtl;
  display: flex;
  padding: 0.5rem;
  width: 100%;
  background-color: #f9f4f2;
  color: #44423f;
`;
export const ColAudCon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
export const ColAudSubCon = styled.div`
  display: flex;
`;

export const ExCon = styled.div`
  align-self: center;
  flex-grow: 1;
`;
export const ExSubCon = styled.div`
  display: flex;
  margin-right: 1rem;
  align-items: center;
`;
export const ExSubSpan = styled.span`
  font-family: Apercu, sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1rem;
  opacity: 0.5;
  overflow: visible;
  width: 1.625rem;
`;
export const ExReCon = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  align-items: center;
`;
export const ExReInp = styled.input`
  appearance: none;
  border: none;
  height: 100%;
  right: 0;
  opacity: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
  cursor: pointer;
`;
export const ExReSubInpCon = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 0.5rem;
  height: 25%;
  width: 100%;
`;
export const UtCon = styled.div`
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  background-color: #d2d5de;
  border-radius: 0;
  opacity: 1;
`;
export const UtyCon = styled.div`
  position: relative;
  top: 50%;
  transition: transform 0ms ease-out;
  width: 100%;
  background-color: #ff7300;
  border-radius: 0;
  height: 100%;
  opacity: 1;
  transform: translate(-100%, -50%);
`;
export const KmCon = styled.div`
  bottom: 0;
  left: 0;
  margin: 0 calc(0.5rem / 2);
  position: absolute;
  right: 0;
  top: 0;
`;
export const KmSubCon = styled.div`
  border: none;
  border-radius: 50%;
  display: block;
  position: absolute;
  transition: transform 100ms ease-out;
  background-color: #10162f;
  height: 0.5rem;
  right: 100%;
  transform: translate(50%) scale(1);
  width: 0.5rem;
`;
export const OldSpan = styled.span`
  font-family: Apercu, sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1rem;
  opacity: 0.5;
  overflow: visible;
  width: 1.625rem;
`;
export const ExLab = styled.label`
  font-family: Apercu, sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.125rem;
  display: block;
  margin: 0 0 0.5rem 1rem;
  max-width: 22rem;
  margin-right: 1rem;
`;
export const ColAudSubSpan = styled.span`
  text-align: center;
  vertical-align: text-top;
`;
export const ColAud = styled.audio``;
export const ColAudSubSvg = styled.svg``;
export const ColAudSubBut = styled.button`
  border: 0.125rem solid transparent;
  cursor: pointer;
  font-weight: bold;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  background: #10162f;
  border-color: transparent;
  color: #ffffff;
  opacity: 1;
  border-radius: 50%;
  height: 2.5rem;
  margin-right: 0.5rem;
  max-width: 2.5rem;
  width: 2.5rem;
  font-size: 1.5rem;
  padding: calc((2.15rem - 1em) / 2);
  transition: color 150ms cubic-bezier(0.32, 0.94, 0.6, 1);
    background-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1),
    border-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1),
    box-shadow 150ms cubic-bezier(0.32, 0.94, 0.6, 1),
    transform 150ms cubic-bezier(0.32, 0.94, 0.6, 1);
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 4px;
  overflow: hidden;
  background-color: #bfbfbf;
  position: relative;
  margin-top: 20px;
`;

export const LoadingBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1f3289;
  animation: ${loadingAnimation} 1.5s infinite linear;
`;

export const AllWr = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const LeMa = styled.main`
  overflow: hidden;
  display: block;
  flex-grow: 1;
  height: 100%;
`;
export const LeNone = styled.div`
  margin-top: calc(4rem * -1);
  position: absolute;
`;
export const LeWr = styled.div`
  position: relative;
  height: 100%;
  background-color: #15141f;
`;
export const LeTop = styled.div`
  display: flex;
  max-width: 100vw;
  height: 100%;
  position: relative;
  flex-direction: row;
`;
export const LeSub = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const LeSec = styled.div`
  display: flex;
  flex: 1 0 0%;
  overflow-y: auto;
  height: 100%;
  position: relative;
  flex-direction: column;
`;
export const LeSecSu = styled.div``;
export const LeMi = styled.div`
  height: 100%;
  background-color: #ffffff;
`;
export const ClOn = styled.div`
  padding: 0.75rem;
  background-color: #f6f6f7;
  position: sticky;
  top: 0px;
  z-index: 1;
  container-type: inline-size;
  display: flex;
`;
export const ClOnWr = styled.div`
  display: flex;
  margin-right: 2rem;
  width: auto;
  justify-content: flex-start;
  align-items: center;
`;
export const ClOnCon = styled.div`
  display: flex;
  align-items: center;
`;
export const ClOnMa = styled.div`
  margin-right: 0.25rem;
  font-weight: bold;
  line-height: 1.2;
  font-size: 1rem;
  color: #10162f;
`;

export const ClTw = styled.div`
  display: block;
  unicode-bidi: isolate;
`;
export const ClTwWr = styled.div`
  padding: 1.5rem;
`;
export const ClTwTop = styled.div`
  margin: 0px;
  font-weight: bold;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: rgba(16, 22, 47, 0.63);
`;
export const ClTwHe = styled.h3`
  font-weight: 700;
  line-height: 1.3;
  font-size: 1.5rem;
  margin: 0.75rem 0px;
  color: #0a0d1c;
`;
export const ClTwTi = styled.div`
  margin-bottom: 10px;
`;
export const ClTwSp = styled.span`
  font-size: inherit;
  display: inline-block;
  margin: 0px;
`;
export const ClTwMa = styled.div`
  display: block;
  unicode-bidi: isolate;
  padding: 0 2.5rem;

  @media screen and (max-width: 700px) {
    padding: 0rem;
  }
`;
export const ClTwMe = styled.div`
  font-size: 1.1rem;
`;
export const ClTwPa = styled.p`
  line-height: 1.6;
  overflow-wrap: break-word;
  word-break: break-word;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #000;
  font-size: 1.1rem;
`;
export const ClTwPre = styled.pre`
  white-space: pre-wrap;
  margin-top: 0;
  margin-bottom: 0.5rem;
  overflow: auto;
  font-family: monospace, monospace;
  font-size: 1em;
`;
export const ClTwPr = styled.pre`
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-family: monospace, monospace;
  font-size: 1em;
`;
export const ClTwDi = styled.div`
  display: block;
  text-align: right;
  font-weight: normal;
  background-color: #f9f4f2;
  color: #000;
  font-family: Monaco, Menlo, "Ubuntu Mono", "Droid Sans Mono", Consolas,
    monospace;
  font-size: 0.875rem;
  padding: 1rem 0.5rem 1rem 1rem;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;
export const ClTwDiSp = styled.span`
  text-align: right;
  font-weight: normal;
  color: #fff;
  font-family: Monaco, Menlo, "Ubuntu Mono", "Droid Sans Mono", Consolas,
    monospace;
  font-size: 0.875rem;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;
export const InsWr = styled.div`
  padding: 0.75rem;
  background-color: #f6f6f7;
  position: sticky;
  top: 0px;
  z-index: 1;
  container-type: inline-size;
  display: flex;
`;
export const InsCo = styled.div`
  display: flex;
  margin-right: 2rem;
  width: auto;
  justify-content: flex-start;
  align-items: center;
`;
export const InsSub = styled.div`
  display: flex;
  align-items: center;
`;

export const InsHe = styled.h3`
  margin: 0.25rem 0px;
  font-weight: bold;
  line-height: 1.2;
  font-size: 1rem;
  color: #10162f;
`;
export const InsBo = styled.div``;
export const InsBoWr = styled.div``;
export const InsOl = styled.ol`
  padding-right: 0;
  margin-right: 0;
  margin-top: 0;
`;
export const InsLi = styled.li`
  list-style-type: none;
`;
export const InsCon = styled.div``;
export const InsConSu = styled.div`
  padding: 30px;
  display: block;
  position: relative;
`;
export const InsHin = styled.div`
  background-color: rgb(255, 242, 179);
  color: #10162f;
  border: 1px solid rgba(16, 22, 47, 0.12);
`;
export const InsHinSp = styled.span``;
export const InsHinDi = styled.div`
  margin: 2.4px 1rem;
  color: #10162f;
  font-size: medium;
  font-weight: 700;
`;
export const InsHinBu = styled.button`
  color: #141c3a;
  background-color: transparent;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.375rem 1rem;
  width: 100%;
  border-color: transparent;
  font-weight: 700;
  border: 1px solid transparent;
  border-radius: 2px;
  user-select: none;
  font-size: 1rem;
  line-height: 1.5;
  min-width: 8rem;
  transition: all 0.1s ease-in-out;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  font: inherit;
  margin: 0;
  background: none;
`;

export const HinWr = styled.div`
  height: auto;
  overflow: hidden;
`;
export const HinCo = styled.div`
  border-width: 1px;
  border-style: solid none;
  border-color: rgba(16, 22, 47, 0.12);
  flex: 1 1 0%;
  padding: 1rem 2rem;
  overflow: hidden;
  background-color: #fffae5;
`;
export const HinSub = styled.div``;
export const HinRe = styled.div`
  font-size: 1.1rem;
`;
export const HinPa = styled.p`
  line-height: 1.6;
  overflow-wrap: break-word;
  word-break: break-word;
  margin-top: 0;
  margin-bottom: 1rem;
`;
export const ConWr = styled.div`
  padding: 0.75rem;
  background-color: #f6f6f7;
  position: sticky;
  top: 0px;
  z-index: 1;
  container-type: inline-size;
  display: flex;
`;
export const ConCo = styled.div`
  display: flex;
  margin-right: 2rem;
  width: auto;
  justify-content: flex-start;
  align-items: center;
`;
export const ConSu = styled.div`
  display: flex;
  align-items: center;
`;
export const ConHe = styled.h3`
  margin: 0.25rem 0px;
  font-weight: bold;
  line-height: 1.2;
  font-size: 1rem;
  color: #10162f;
`;
export const RevWr = styled.div``;
export const RevCon = styled.div`
  padding: 1.5rem;
`;
export const RevSub = styled.div``;
export const RevSu = styled.div`
  margin-bottom: 1rem;
`;
export const RevSpan = styled.span``;
export const FoWr = styled.footer`
  display: block;
`;
export const FoCon = styled.div`
  height: 4rem;
  background-color: #10162f;
  color: #fff;
  z-index: 14;
  padding: 0px 1.5rem;
  display: flex;
  align-items: center;
  margin: 0px auto;
  width: 100%;
  position: relative;
`;
export const FoBu = styled.button`
  cursor: pointer;
  box-shadow: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  position: relative;
  font-weight: 700;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 1rem;
  min-width: 40px;
  height: 40px;
  color: #10162f;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  text-decoration: none;
  transition: border-color 150ms ease-in 0s, color 150ms ease-in 0s,
    background-color 150ms ease-in 0s, box-shadow 150ms ease-in 0s;
  border-color: transparent;
  white-space: nowrap;
  border-radius: 4px;
  text-transform: none;
  overflow: visible;
  margin: 0;
  font-family: inherit;
  line-height: inherit;
  background-color: #cca900;
`;

export const NavWr = styled.div`
  display: block;
`;

export const NavHeader = styled.header`
  display: block;
  border-bottom-width: ;
  border-bottom-style: ;
  height: 64px;
  background-color: #10162f;
  position: relative;
  z-index: 14;
  border-color: rgba(16, 22, 47, 0.75);
`;

export const NavCon = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;
export const NavSu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 1;
  flex: 1 1;
`;
export const NavSub = styled.div`
  margin-right: 0px;
  margin-left: 0px;
`;
export const NavAt = styled.a`
  border: none;
  padding: 0px;
  font-size: inherit;
  white-space: initial;
  box-shadow: none;
  position: relative;
  color: #ffffff;
  background-color: transparent;
  display: flex;
  margin-right: 0.5rem;
`;
export const NavIm = styled.img`
  max-width: 30px;
  object-fit: contain;
`;
export const NavMid = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 1;
  flex: 2 1;
  justify-content: center;
  text-align: center;
`;
export const NavMi = styled.div`
  display: flex;
  padding: 0.5rem;
  width: 100%;
`;
export const NavRe = styled.div`
  display: flex;
  padding-top: 0px;
  padding-bottom: 0px;
  border-radius: 24px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  justify-content: space-between;
`;
export const NavBut = styled.button`
  cursor: pointer;
  box-shadow: none;
  border-top-style: ;
  border-top-width: ;
  border-right-style: ;
  border-right-width: ;
  border-bottom-style: ;
  border-bottom-width: ;
  border-left-style: ;
  border-left-width: ;
  border-image-source: ;
  border-image-slice: ;
  border-image-width: ;
  border-image-outset: ;
  border-image-repeat: ;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  min-width: 40px;
  height: 40px;
  font-weight: bold;
  width: 100%;
  color: #000000;
  background: none white;
  text-decoration: none;
  transition: border-color 150ms ease-in 0s, color 150ms ease-in 0s,
    background-color 150ms ease-in 0s, box-shadow 150ms ease-in 0s;
  white-space: nowrap;
  border-color: transparent;
  padding: 0.5rem;
  overflow: hidden;
  border-radius: 24px;
  text-transform: none;
  margin: 0;
  font-family: inherit;
  line-height: inherit;
  background-color: ${(props) => (props.isActive ? "#ffffff" : "transparent")};
  color: ${(props) => (props.isActive ? "#000000" : "#000000")};
  border: ${(props) => (props.isActive ? "1px solid #000000" : "none")};
`;
export const NavButton = styled.button`
  cursor: pointer;
  box-shadow: none;
  border-top-style: ;
  border-top-width: ;
  border-right-style: ;
  border-right-width: ;
  border-bottom-style: ;
  border-bottom-width: ;
  border-left-style: ;
  border-left-width: ;
  border-image-source: ;
  border-image-slice: ;
  border-image-width: ;
  border-image-outset: ;
  border-image-repeat: ;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  min-width: 40px;
  height: 40px;
  font-weight: bold;
  width: 100%;
  color: #ffffff;
  background: none;
  text-decoration: none;
  transition: border-color 150ms ease-in 0s, color 150ms ease-in 0s,
    background-color 150ms ease-in 0s, box-shadow 150ms ease-in 0s;
  white-space: nowrap;
  border-color: transparent;
  padding: 0.5rem;
  overflow: hidden;
  border-radius: 24px;
  text-transform: none;
  margin: 0;
  font-family: inherit;
  line-height: inherit;
  font-style: ;
  font-variant-ligatures: ;
  font-variant-caps: ;
  font-variant-numeric: ;
  font-variant-east-asian: ;
  font-variant-alternates: ;
  font-variant-position: ;
  font-stretch: ;
  font-optical-sizing: ;
  font-kerning: ;
  font-feature-settings: ;
  font-variation-settings: ;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  text-align: center;
  padding-block: 1px;
  padding-inline: 6px;
`;

export const NavRi = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 1;
  flex: 1 1;
  justify-content: flex-end;
`;
export const NavRiSu = styled.div`
  cursor: pointer;
  padding: 0px;
  border: none;
  background: none;
`;
export const NavRiLa = styled.div`
  display: inline-flex;
  position: relative;
`;
export const NavRiBu = styled.button`
  cursor: pointer;
  font-size: inherit;
  box-shadow: none;
  border-top-style: ;
  border-top-width: ;
  border-right-style: ;
  border-right-width: ;
  border-bottom-style: ;
  border-bottom-width: ;
  border-left-style: ;
  border-left-width: ;
  border-image-source: ;
  border-image-slice: ;
  border-image-width: ;
  border-image-outset: ;
  border-image-repeat: ;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  position: relative;
  width: 40px;
  height: 40px;
  color: #ffffff;
  background: none;
  padding: 0px;
  text-decoration: none;
  transition: border-color 150ms ease-in 0s, color 150ms ease-in 0s,
    background-color 150ms ease-in 0s, box-shadow 150ms ease-in 0s;
  white-space: nowrap;
  border-radius: 4px;
  border-color: transparent;
`;

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
  padding-top: 1rem;
  font-size: 1.2rem;
`;
export const QuizAppAudio = styled.div`
  padding-top: 1rem;
`;
export const TitHe = styled.h2`
  color: #fff;
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

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;

export const StyledSpinner = styled(FontAwesomeIcon)`
  animation: ${rotate} 1s linear infinite;
  color: blue;
  height: 34px;
  width: 50px;
  padding: 30px;
`;

export const StyledSpeakerIcon = styled(IoMdVolumeHigh)`
  color: #08aaf9;
  width: 16px;
  height: 16px;
  animation: ${ScaleUpDown} 2s ease-in-out infinite;
`;

export const AllaWr = styled.div`
  width: 95%;
  max-width: 1025px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
  }
`;
export const VocOp = styled.option`
  direction: rtl;

  @media screen and (max-width: 768px) {
  }
`;

export const VocWra = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
  }
`;
export const VocHead = styled.h3`
  text-align: right;
  font-size: 18px;
  line-height: 25px;
  margin: 10px 0;
  color: #545454;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const VocHeadSpan = styled.span`
  color: #0a9be3;

  @media screen and (max-width: 768px) {
  }
`;
export const VocMain = styled.div`
  background: #f1faff;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px 0;

  @media screen and (max-width: 768px) {
  }
`;
export const VocOn = styled.div`
  top: 11px;
  right: 20px;
  position: absolute;
  width: 25px;
  height: 25px;
  background-position: center;
  z-index: 9;

  @media screen and (max-width: 768px) {
  }
`;
export const VocOnBut = styled.button`
  width: 25px;
  height: 25px;
  padding: 0px;
  background-position: center;
  background-image: url(https://cdn.vocab.com/images/icons/more-options-dot-74770n.svg);
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0);
  line-height: 175%;
  outline: none;
  border: none;
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  margin: 0;
  cursor: pointer;
  padding: 0 2em;
  transition: all 0.5s ease 0;
  font-family: "open sans", sans-serif;
  text-decoration: none !important;

  @media screen and (max-width: 768px) {
  }
`;

export const VocTh = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
  gap: 0.5em;

  @media screen and (max-width: 768px) {
  }
`;

export const VocThSel = styled.select`
direction: rtl;
    padding: .3em 2em .3em .3em;
    margin-left: 10px;
    background-position: right .7em top 50%;
    background-size: .7em auto;
    background-image: data:image/svg+xml;utf8,%3Csvg width='14' height='6' viewBox='0 0 14 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 5L13 1' stroke='%23545454'/%3E%3C/svg%3E;
    background-repeat: no-repeat;
    max-width: 300px;
    border: 0;
    border-bottom: 2px solid #B6D9F0;
    background-color: rgba(255, 255, 255, .8);
    font-size: inherit;
    font-family: inherit;
    color: #545454;
    line-height: 1.4em;
    border-radius: 3px;
    text-overflow: ellipsis;

  @media screen and (max-width: 768px) {
  }
`;

export const VocFo = styled.div`
  margin-top: 2rem;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  position: relative;
  min-height: 245px;

  // Base card dimensions and properties
  --card-width-0: 270px;
  --card-height-0: 185px;
  --card-width-1: 250px;
  --card-height-1: 170px;
  --card-width-2: 230px;
  --card-height-2: 158px;
  --card-width-3: 195px;
  --card-height-3: 135px;
  --card-word-font-size: 26px;
  --card-def-font-size: 18px;
  --card-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  // SVG icons as CSS variables
  --arrow-left: url("data:image/svg+xml;utf8,<svg width='6' height='12' viewBox='0 0 6 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M5.03887 12L5.24537e-07 6L5.03887 -8.40248e-08L6 1.14446L1.92226 6L6 10.8555L5.03887 12Z' fill='white'/></svg>");
  --arrow-right: url("data:image/svg+xml;utf8,<svg width='6' height='12' viewBox='0 0 6 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0.961132 12L6 6L0.961131 -8.40248e-08L-9.49021e-07 1.14446L4.07774 6L-1.00052e-07 10.8555L0.961132 12Z' fill='white'/></svg>");
  --card-lock: url("data:image/svg+xml;utf8,<svg width='21' height='27' viewBox='0 0 21 27' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M12.5 3H8.5C7.39543 3 6.5 3.89543 6.5 5V10.8H14.5V5C14.5 3.89543 13.6046 3 12.5 3ZM3.5 5V11.0289C1.47145 11.666 0 13.5612 0 15.8V22C0 24.7614 2.23858 27 5 27H16C18.7614 27 21 24.7614 21 22V15.8C21 13.5612 19.5286 11.666 17.5 11.0289V5C17.5 2.23858 15.2614 0 12.5 0H8.5C5.73858 0 3.5 2.23858 3.5 5ZM12.25 17.1C12.25 17.8917 11.7531 18.564 11.0625 18.805V22.5H10.0625V18.8433C9.30771 18.6435 8.75 17.9387 8.75 17.1C8.75 16.1059 9.5335 15.3 10.5 15.3C11.4665 15.3 12.25 16.1059 12.25 17.1Z' fill='%23D9DCDE'/></svg>");

  // Responsive adjustments
  @media screen and (max-width: 768px) {
    --card-width-0: 200px;
    --card-height-0: 140px;
    --card-width-1: 180px;
    --card-height-1: 130px;
    --card-width-2: 160px;
    --card-height-2: 118px;
    --card-width-3: 140px;
    --card-height-3: 100px;
    --card-word-font-size: 20px;
    --card-def-font-size: 14px;
  }
`;

export const VocFoMid = styled.div`
  margin-bottom: 20px;
`;

export const VocMidBut = styled.button`
  display: block;
  width: 15px;
  height: 11px;
  background: transparent
    url(https://cdn.vocab.com/js3/18bb1b5712966853dfb7.svg) 0 0 no-repeat;
  padding: 0px;
  color: transparent;
  line-height: 175%;
  outline: none;
  border: none;
  border-radius: 3px;
  margin: 0;
  cursor: pointer;
  font-family: "open sans", sans-serif;
  text-decoration: none !important;
`;

export const VocFoBot = styled.div`
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
`;
export const VocFoSpan = styled.span`
  margin: 0 10px;
  min-width: 3.25em;
  text-align: center;
`;
export const VocFoSpan1 = styled.span`
  font-size: 16px;
  line-height: 16px;
`;
export const VocFoButt = styled.button`
  background-color: #0a9be3;
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
  cursor: pointer;
  font-family: "open sans", sans-serif;
  text-decoration: none !important;
`;
export const VocFoNe = styled.button`
  border-radius: 3px;
  background-color: #0b9be3;
  color: #fff;
  padding: 9px 10px;
  font-size: 16px;
  line-height: 16px;
  min-width: 96px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  margin: 0;
  cursor: pointer;
  transition: all 0.5s ease 0;
  font-family: "open sans", sans-serif;
  text-decoration: none !important;
`;

export const VocFoTop = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  min-height: calc(185 + 5) * 1px);
  margin-bottom: 30px;
`;

export const Card = styled.div`
  left: ${(props) => `calc(${props.left}% - 300px / 2)`};
  top: calc(50% - 185px / 2);
  z-index: ${(props) => props.zIndex};
  position: absolute;
  width: 300px;
  height: 185px;
  display: flex;
  perspective: 1000px;
  transform-style: preserve-3d;
  cursor: pointer;
  user-select: none;
  backface-visibility: hidden;
  animation: ${(props) => props.animationName} 0.5s forwards;

  ${(props) =>
    props.direction === "left" &&
    css`
      animation-name: ${slideInLeft};
    `}
  ${(props) =>
    props.direction === "right" &&
    css`
      animation-name: ${slideInRight};
    `}
`;

export const VocFroSu = styled.div`
  flex: 1;
  position: relative;
  transition: transform 0.5s;
  transform-style: preserve-3d;
`;

export const FlipCard = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 100%;
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.isFlipped ? "rotateY(180deg)" : "rotateY(0)")};
`;

export const CardOn = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background: #fff;
  position: absolute;
  top: 0;
  transition: top 0.1s ease-in, box-shadow 0.1s;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  backface-visibility: hidden;
  transform: rotateY(0deg);
`;
export const CardTwo = styled.div`
  font-size: 18px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background: #fff;
  position: absolute;
  top: 0;
  transition: top 0.1s ease-in, box-shadow 0.1s;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
export const CardOnDiv = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  border: 2px solid #6cb4e9;
  border-radius: 8px;
  position: relative;
  text-align: center;
  line-height: 1.2em;
  overflow-wrap: anywhere;
  word-break: break-word;
`;
export const CardOnWord = styled.div`
  color: #545454;
  font-family: "Open Sans";
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  bottom: 80px;
`;
export const CardOnSp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const CardOnAm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  margin-left: -10px;
  margin-top: 80px;
`;
export const CardOnLe = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
export const CardOnWr = styled.div`
  margin-top: 8px;
`;
export const CardOnSpan = styled.span`
  color: #768994;
  font-family: "Open Sans";
  font-size: 13px;
  font-weight: 400;
  line-height: 32px;
`;
export const CardOnIc = styled.div`
  opacity: 1;
  overflow: visible;
  width: 16px;
  height: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const CardOnAt = styled.button`
  height: 16px;
  width: 16px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  vertical-align: middle;
  text-decoration: none !important;
  border: none;
  background-color: transparent;
`;

export const CardImg = styled.img`
  height: 100%; // Make the image fill the height of the anchor
  width: 100%; // Make the image fill the width of the anchor
  display: block; // Ensures the image does not have extra space below it
  color: inherit; // Ensures SVG images inherit the color (if applicable)
  vertical-align: middle;
  color: blue;
`;
export const CardOnUk = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  margin-left: -10px;
  margin-top: -10px;
`;

export const CardTwoSub = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  border: 2px solid #6cb4e9;
  border-radius: 8px;
  position: relative;
  text-align: center;
  line-height: 1.2em;
  overflow-wrap: anywhere;
  word-break: break-word;
`;
export const CardTwoLi = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  justify-content: center;
`;
export const CardTwoIm = styled.img`
  width: 80px;
  height: 55px;
  border-radius: 10px;
`;
export const CardTwoTe = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const CardTwoSp = styled.span`
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 1px;
`;
export const CardTwoSpa = styled.span`
  color: f1fafe; !important;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 4px;
  padding-right: 0.25em;
`;

export const CardFo = styled.div`
  opacity: 1;
  transform: scale(calc(230 / 270));
  left: calc(50% - 270 * 1px / 2);
  top: calc(50% - 185 * 1px / 2);
  z-index: 2;
  position: absolute;
  width: calc(270 * 1px);
  height: calc(185 * 1px);
  display: flex;
  transition: opacity 0.3s, transform 0.3s, left 0.3s, top 0.3s, z-index 0.3s;
  cursor: pointer;
  user-select: none;
  perspective: 1000px;
`;
export const HiddenWr = styled.div`
  display: ${(props) => (props.isHidden ? "none" : "block")};
  z-index: 10;
  top: 35px;
  right: 10px;
  position: absolute;
  height: 75px;
  flex-shrink: 0;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1),
    0px 0px 3px 0px rgba(0, 0, 0, 0.15);
  color: #0275b8;
  font-size: 14px;
`;
export const HidSub = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;
export const HidOn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
export const HidOnSp = styled.span``;
export const HidOnIm = styled.img``;

export const TeWr = styled.section`
  display: block;

  @media screen and (max-width: 768px) {
  }
`;
export const TeHe = styled.h3`
  direction: rtl;
  color: #0275b8;
  font-size: 22px;
  margin: 10px 0;
  font-weight: normal;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
export const TeUl = styled.ul`
  list-style-type: none;
  padding: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const TeLi = styled.li`
  background: #f7fcff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1em;
  margin: 0 0 2em 0;

  @media screen and (max-width: 768px) {
  }
`;
export const TeTop = styled.div`
  display: flex;
  align-items: center;
  gap: 65px;
  margin: 0 0 1em 0;

  @media screen and (max-width: 768px) {
  }
`;
export const TeTopHe = styled.h2`
  color: #344d7c;
  font-size: 24px;
  margin: 0;
  font-weight: bold;
  flex: 1;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const TeTopAt = styled.a`
  background-image: url("data:image/svg+xml;utf8,<svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15Z' fill='%23ED5362'/><path d='M9 15H21M21 15L16 9M21 15L16 21' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/></svg>");
  background-repeat: no-repeat;
  background-size: 30px 30px;
  padding: 6px 46px 6px 0;
  background-position: right 5px center;
  line-height: 1.3em;
  text-decoration: none;
  color: #22558a;

  @media screen and (max-width: 768px) {
    background-size: 20px 20px;
    padding-right: 36px;
  }
`;

export const TeTopSub = styled.div`
  gap: 0.75em;
  margin-top: 2px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
`;
export const TeToSubAt = styled.a`
  width: 30px;
  height: 30px;
  background: #fff;
  color: #22558a;

  @media screen and (max-width: 768px) {
  }
`;
export const TeToSubIm = styled.img`
  border: none;
  width: 30px;
  aspect-ratio: auto 30 / 30;
  height: 30px;
  @media screen and (max-width: 768px) {
  }
`;
export const TeBot = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 15px;

  @media screen and (max-width: 768px) {
  }
`;
export const TeDiv = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
export const TeBotLi = styled.li`
  display: inline-block;
  background: #fff;
  border: 1px solid #b6d9f0;
  border-radius: 5px;
  padding: 0.27em 0.3em;
  text-decoration: none;
  margin: 0.5px 0.5px calc(0.5em + 0.5px) 0.5px;
  color: #545454;

  @media screen and (max-width: 768px) {
  }
`;
export const AiSec = styled.section`
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const AiHe = styled.h3`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.1;
  text-align: center;
  box-sizing: border-box;
  font-family: "GE SS Two";
  font-style: normal;
  margin: 0 0 1.6875rem;
  padding: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const AiSp = styled.span`
  padding: 5px 0;
  background-image: linear-gradient(59deg, #1f3289, #ffba49);
  font-family: PRODUCT_SANS !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  direction: ltr;
  text-align: left;

  @media screen and (max-width: 768px) {
  }
`;
export const AiPa = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: #a1a0a0;
  word-wrap: break-word;
  text-align: center;

  @media screen and (max-width: 768px) {
  }
`;
export const NewWr = styled.div`
  text-align: center;
  box-sizing: border-box;
  border-radius: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const NewBut = styled.button`
  background: #1f3289;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.35rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-family: inherit;

  @media screen and (max-width: 768px) {
  }
`;
export const InpWr = styled.div`
  background-color: #6b94c9;
  padding: 0.5rem;
  border-radius: 15px;
  margin: 1rem;

  box-shadow: 4px 4px 8px 1px rgba(0, 0, 0, 0.2);
  opacity: 1;
  transition: all 0.5s ease-in;

  @media screen and (max-width: 768px) {
  }
`;
export const InpCon = styled.div`
  display: flex;
  box-sizing: border-box;
  border-radius: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const InpIco = styled.div`
  background: none;
  padding: 5px;
  transition: display 0.5s ease-in;
  width: 45px;
  border: none;
  cursor: pointer;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  position: relative;
  border-radius: 50%;
  color: #fff;
  background-image: ${({ isRecording }) =>
    !isRecording &&
    "linear-gradient(88deg, #1f3189 0%, #1f3189 75%, #1f3189 100%) !important"};
  border-color: #1f3289;
  margin: 5px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
  }
`;
export const InpIc = styled.i`
  -webkit-font-smoothing: antialiased;
  display: var(--fa-display, inline-block);
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
  font-family: var(--fa-style-family, "Font Awesome 6 Free");
  font-weight: var(--fa-style, 900);
  font: normal normal normal 14px / 1 FontAwesome;
  font-size: inherit;

  @media screen and (max-width: 768px) {
  }
`;
export const ConvWr = styled.div`
  display: block;
  height: auto;
  max-height: 400px;
  scrollbar-width: thin;
  overflow-y: scroll;
  padding: 0.5rem;
  border-radius: 5px;
  text-align: center;
  width: 100%;
  font-family: PRODUCT_SANS !important;
  direction: ltr;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
  }
`;
export const ConvLt = styled.div`
  display: flex;
  direction: ltr;
  border-radius: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const ConvAi = styled.div`
  width: 100%;
  border-radius: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const ConvMa = styled.div`
  display: flex;
  direction: ltr;

  @media screen and (max-width: 768px) {
  }
`;
export const ConvPl = styled.div`
  height: fit-content;
  margin-right: auto;
  margin-left: 0.3rem;
  display: block;
  margin: auto auto auto 0.3rem;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
  }
`;
export const ConvPlay = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin: 0.2em auto;
  width: 100%;
  height: 50px;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
`;
export const ConvIc = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin: 0.2em auto;
  width: 100%;
  height: 50px;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
`;
export const ConvAc = styled.div`
  display: flex;
  max-width: 220px;
  padding: 8px;
  width: 100%;
  font-family: PRODUCT_SANS !important;
  direction: ltr;
  border-radius: 15px;
  height: fit-content;
  margin-bottom: 5px;
  text-align: left;
  float: left;
  margin-left: 3px;
  font-size: 16px;
  line-height: 24px;
  background: #1f3189;
  color: #fff;
  position: relative;

  @media screen and (max-width: 768px) {
  }
`;
export const ConvLtIm = styled.img`
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: -6px;
  vertical-align: bottom;
  box-sizing: border-box;
  border: 0;
  font-style: italic;
  height: auto;

  @media screen and (max-width: 768px) {
  }
`;
export const ConvAll = styled.div`
  display: flex;
  direction: rtl;

  @media screen and (max-width: 768px) {
  }
`;
export const PlUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: rgba(91, 130, 255, 0);

  @media screen and (max-width: 768px) {
  }
`;
export const PlAt = styled.a`
  content: "";
  color: #1f3289;
  border-bottom: none !important;
  box-shadow: none !important;
  text-decoration: none;
  text-shadow: none;
  box-sizing: border-box;
  background-color: transparent;

  @media screen and (max-width: 768px) {
  }
`;
export const PlIa = styled.i`
  color: #1f3289;
  display: var(--fa-display, inline-block);
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
  @media screen and (max-width: 768px) {
  }
`;
export const ConvRt = styled.div`
  display: flex;
  border-radius: 0;
  direction: ltr;

  @media screen and (max-width: 768px) {
  }
`;
export const ConvRtWr = styled.div`
  height: fit-content;
  margin-left: auto;
  margin-right: 0.3rem;
  display: block;
  margin: auto auto auto 0.3rem;
  box-sizing: border-box;
  border-radius: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const UseWr = styled.div`
  text-align: right;
  float: right;
  background: #1f3289;
  color: #fff;
  margin-right: 3px;
  max-width: 220px;
  padding: 8px;
  width: 100%;
  border-radius: 15px;
  height: fit-content;
  margin-bottom: 5px;
  font-family: PRODUCT_SANS !important;
  direction: ltr;
  font-size: 16px;
  line-height: 24px;
  position: relative;

  @media screen and (max-width: 768px) {
  }
`;
export const ReaWr = styled.div`
  display: block;
  padding: 3.5rem;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;
export const ReaPa1 = styled.p`
  margin: 0 0 1.6875rem;
  padding: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const ReaPa2 = styled.p`
  word-wrap: break-word;
  box-sizing: border-box;
  margin: 0 0 1.6875rem;
  padding: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const ReaPa3 = styled.p`
  color: #10162f;
  word-wrap: break-word;
  box-sizing: border-box;
  font-size: 36px;
  text-align: center;
  margin: 0 0 1.6875rem;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

export const ReaHe = styled.h1`
  color: #10162f;
  text-align: center;
  font-family: "GE SS Two";
  font-weight: 700;
  font-style: normal;
  font-size: 34px;
  line-height: 1.2;
  margin: 0 0 1.6875rem;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
export const ReadWr = styled.div`
  width: 100%;
  margin-inline: auto;
  border-radius: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const ReadButWr = styled.div`
  display: flex;
  justify-content: center;
  color: inherit;
  line-height: inherit;
  list-style: none;
  font-family: "GE SS Two";
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  text-size-adjust: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const ReadBut = styled.button`
  padding: 10px 16px;
  background: #10162f;
  border-radius: 6px;
  font-size: 20px;
  margin-inline: auto;
  color: white;
  border: 2px solid #0025ba;
  transition: 0.2s;
  font-family: inherit;
  font-weight: 500;
  font-style: normal;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  line-height: 1.3;
  outline: 0;
  vertical-align: middle;
  appearance: none;
  margin-bottom: 0.5rem;
  -webkit-font-smoothing: antialiased;

  &:hover {
    background: white;
    color: #10162f;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const ParaWr = styled.div`
  filter: ${({ isReading }) => (isReading ? "none" : "blur(3px)")};
  direction: ltr;
  animation: fade-down 0.4s ease-in;
  font-family: "Product Sans" !important;
  text-align: left;
  color: inherit;
  line-height: inherit;
  list-style: none;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  margin: 1rem;

  @media screen and (max-width: 768px) {
  }
`;

export const ParaPa = styled.p`
  font-size: 20px !important;
  word-wrap: break-word;
  margin: 0 0 1.6875rem;
  padding: 0;

  @media screen and (max-width: 768px) {
  }
`;

export const EndWr = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
  }
`;
export const EndHe = styled.h2`
  font-size: 24px !important;
  font-weight: bold;
  color: #10162f;
  margin-top: 20px !important;
  text-align: center !important;
  font-style: normal;
  line-height: 1.2;
  margin: 0 0 1.6875rem;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 20px !important;
  }
`;
export const EndSp = styled.span`
  font-size: 24px !important;
  font-weight: bold;
  color: #10162f;
  margin-top: 20px !important;
  text-align: center !important;
  font-style: normal;
  line-height: 1.2;
  margin: 0 0 1.6875rem;
  padding: 0;

  @media screen and (max-width: 768px) {
    font-size: 20px !important;
  }
`;
export const ExpWr = styled.div`
  overflow: hidden;
  border: 1px solid #eee;
  position: relative;
  z-index: 1;
  display: block;
  unicode-bidi: isolate;
  text-size-adjust: none;
  font-size: 16px;
  line-height: 1.5em;
  margin: 1rem;
  direction: ltr;

  @media screen and (max-width: 768px) {
  }
`;
export const ExpCon = styled.div`
  padding: 0 1em;
  word-break: break-word;
  text-size-adjust: none;
  font-size: 16px;
  line-height: 1.5em;

  @media screen and (max-width: 768px) {
  }
`;
export const ExpHe = styled.h2`
  border-top: 0;
  color: #000000;
  margin: 0;
  position: relative;
  font-size: 1.25em;
  text-decoration: none;
  transition: color 200ms ease 0s;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem;

  @media screen and (max-width: 768px) {
  }
`;
export const ExpBut = styled.button`
  width: 100%;
  height: 100%;
  display: inline-flex;
  padding: 0.8em 0.8em 0.8em 2.25em;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  text-align: left;
  appearance: auto;
  align-items: flex-start;
  margin: 0em;
  padding-block: 1px;
  padding-inline: 6px;

  @media screen and (max-width: 768px) {
  }
`;
export const ExpPa = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
  @media screen and (max-width: 768px) {
  }
`;
export const ExpPa2 = styled.p`
  color: #10162f;
  font-size: 28px;
  margin: 0 0 1.6875rem;
  padding: 0;
  text-align: center;

  @media screen and (max-width: 768px) {
  }
`;
export const ExpSp = styled.span`
  color: #10162f;

  @media screen and (max-width: 768px) {
  }
`;
export const ExpStr = styled.strong`
  color: #cba802;

  @media screen and (max-width: 768px) {
  }
`;
export const MaStr = styled.strong`
  @media screen and (max-width: 768px) {
  }
`;
export const VidWr = styled.div`
  display: block;
  width: 100%;
  height: auto;
  color: #fff;
  clear: both;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media screen and (max-width: 768px) {
  }
`;
export const VidMa = styled.video`
  width: 100%;
  height: auto;
  color: #fff;
  clear: both;
  background: #000;
  object-fit: contain;
  overflow-clip-margin: content-box;
  overflow: clip;
  font-size: 16px;
  line-height: 1.25em;

  @media screen and (max-width: 768px) {
  }
`;
export const VidAll = styled.div`
  margin: 1rem auto; /* Centers the component horizontally */
  font-size: 16px;
  overflow: hidden;
  outline: none;
  position: relative;
  background: #000;
  line-height: 1.25em;
  z-index: 1;
  width: 700px;

  @media screen and (max-width: 768px) {
    margin: 0 auto 1rem auto; /* Centers the component horizontally */
    width: 100%; /* Ensures it takes full width on smaller screens */
  }
`;
export const VidBo = styled.div`
  background: #1e3389;
  width: 100%;
  position: unset;
  height: 50px;
  font-size: 16px;
  display: flex;
  line-height: 1.5em;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
`;
export const VidEx = styled.div`
  margin: 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const VidTi = styled.div`
  padding-top: 0.5rem;
  background: #1e3389;
  float: left;
  display: block;
  margin-top: 20px;
  margin-left: 0;
  margin-right: auto;
  font-size: 16px;
  line-height: 1.5em;

  @media screen and (max-width: 768px) {
  }
`;
export const VidTiPl = styled.div`
  margin: 0 4px 0 8px;
  display: inline-block;
  height: 36px;
  color: #fefefe;
  outline: 0;
  width: 36px;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  transition: box-shadow 0.1s ease-out 0.3s;

  @media screen and (max-width: 768px) {
  }
`;
export const VidNu = styled.div`
  display: inline;
  pointer-events: none;
  z-index: 5;
  position: relative;
  float: right;
  width: auto;
  height: auto;
  font-size: 1em;
  color: gray;
  padding: 0 8px;
  outline: 0;
  margin-right: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: box-shadow 0.1s ease-out 0.3s;
  color: #fff;

  @media screen and (max-width: 768px) {
  }
`;
export const ProWr = styled.div`
  display: table-caption;
  position: absolute;
  bottom: 35px;
  width: 100%;
  float: none;
  margin-top: 0;
  height: 20px !important;
  padding: 0;
  cursor: default;
  flex: 1;
  color: #fefefe;
  outline: 0;
  text-decoration: none;
  transition: box-shadow 0.1s ease-out 0.3s;

  @media screen and (max-width: 768px) {
  }
`;
export const ProEl = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 8px;
  right: 8px;
  cursor: default;
  color: #fefefe;
  font-size: 16px;

  @media screen and (max-width: 768px) {
  }
`;
export const ProEle = styled.div`
  background: #6c94c9;
  height: 100%;
  margin: 0;
  border: 0;
  cursor: pointer;
  border-radius: 0;
  touch-action: manipulation;
  z-index: 1;

  @media screen and (max-width: 768px) {
  }
`;
export const ProSu = styled.div`
  width: 12.2254%;
  opacity: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #4d4d4d;

  @media screen and (max-width: 768px) {
  }
`;
export const ProSub = styled.div`
  width: 0;
  background: #008c82;
  height: 100%;
  color: #e2e2e2;
  border-radius: 0;
  left: 0;
  top: 0;
  position: absolute;
  z-index: 1;
  font-size: 0.7em;
  display: block;
  border: 0;

  @media screen and (max-width: 768px) {
  }
`;

export const WriWr = styled.div`
  color: inherit;
  line-height: inherit;
  margin: 3rem;

  @media screen and (max-width: 768px) {
    margin: 1rem;
  }
`;
export const WriEx = styled.span`
  font-family: PRODUCT_SANS !important;
  direction: ltr;
  text-align: left;

  @media screen and (max-width: 768px) {
  }
`;
export const WriSub = styled.div`
  border-radius: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const WriHe = styled.h1`
  font-size: 32px;
  line-height: 1.2;
  margin-bottom: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const WriTop = styled.div`
  width: 100%;
  max-width: 1180px;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  position: relative;
  margin: 0;
  transition: margin 0.2s;

  @media screen and (max-width: 768px) {
  }
`;
export const WriBo = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 30px;

  @media screen and (max-width: 768px) {
  }
`;
export const WriPa = styled.p`
  color: #1f3289;
  word-wrap: break-word;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const WriPara = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 768px) {
  }
`;
export const WriSec = styled.section`
  opacity: 1;
  transition: opacity 1s ease-in-out;
  max-width: 100%;
  font-family: PRODUCT_SANS !important;
  direction: ltr;
  text-align: left;
  padding: 0.5rem !important;

  @media screen and (max-width: 768px) {
  }
`;
export const WhoHe = styled.h3`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.1;
  text-align: center;
  color: #2a3636 !important;
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
  }
`;
export const WhoSp = styled.span`
  font-weight: bold;
  direction: ltr;
  text-align: left;
  padding: 5px 0;
  background-image: linear-gradient(59deg, #1f3289, #ffba49);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
  }
`;
export const WhoPa = styled.p`
  font-size: 25px;
  font-weight: 400;
  color: #a1a0a0;
  word-wrap: break-word;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const WhoBo = styled.div`
  text-align: center;
  margin-right: auto !important;
  margin-left: auto !important;

  @media screen and (max-width: 768px) {
  }
`;
export const WhoBoHe = styled.h2`
  font-style: normal;
  font-size: 24px;
  direction: rtl;
  font-family: GE_SS_TWO;
  font-weight: 400;
  line-height: 1.5;
  text-align: right;
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
  }
`;
export const WhoBoSp = styled.span`
  color: #1f3289;
  font-weight: bold;

  @media screen and (max-width: 768px) {
  }
`;
export const WhoWh = styled.div`
  min-height: 1px;
  padding: 1.25rem;

  @media screen and (max-width: 768px) {
  }
`;
export const WhoWhy = styled.div`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  font-family: PRODUCT_SANS !important;
  direction: ltr;

  @media screen and (max-width: 768px) {
  }
`;
export const WriSec2 = styled.section`
  opacity: 1;
  transition: opacity 1s ease-in-out;
  max-width: 100%;
  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 768px) {
  }
`;
export const OpWr = styled.div`
  display: flex !important;
  margin: 0.75rem auto;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;

  @media screen and (max-width: 768px) {
  }
`;
export const OpRi = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 12rem;
  min-height: 2rem;

  @media screen and (max-width: 768px) {
  }
`;
export const OpLi = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 12rem;
  min-height: 2rem;

  @media screen and (max-width: 768px) {
  }
`;
export const OpLiBut = styled.button`
  opacity: 1;
  cursor: pointer;
  color: #fff;
  background-color: #1f3289;
  border-color: #1f3289;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.35rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-family: inherit;
  padding: 1rem !important;

  @media screen and (max-width: 768px) {
  }
`;
export const OpRiBu = styled.button`
  opacity: 1;
  cursor: pointer;
  background-color: #efefef;
  color: #000;
  border: none;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.35rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-family: inherit;
  width: 100% !important;
  height: 100% !important;
  padding: 1rem !important;

  @media screen and (max-width: 768px) {
  }
`;
export const OpRiSp = styled.span`
  line-height: 30px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  user-select: none;
  @media screen and (max-width: 768px) {
  }
`;
export const WriSec3 = styled.section`
  font-family: PRODUCT_SANS !important;
  direction: ltr;
  text-align: left;

  @media screen and (max-width: 768px) {
  }
`;
export const IdCon = styled.div`
  border: none !important;
  background: none;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  border-radius: 10px;
  margin-right: auto !important;
  margin-left: auto !important;
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;

  @media screen and (max-width: 768px) {
  }
`;
export const IdSub = styled.div`
  direction: ltr;
  text-align: left;
  font-size: 15px;
  border: none;
  border-radius: 12px;
  font-family: PRODUCT_SANS !important;
  width: 100% !important;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;

  @media screen and (max-width: 768px) {
  }
`;
export const GptHe = styled.h2`
  direction: rtl;
  font-family: GE_SS_TWO;
  font-weight: 400;
  line-height: 1.5;
  text-align: right;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-style: normal;
  font-size: 24px;
  color: #2b3636;

  @media screen and (max-width: 768px) {
  }
`;
export const GptSp = styled.span`
  color: #1f3289;
  font-weight: bold;

  @media screen and (max-width: 768px) {
  }
`;
export const GptIn = styled.div`
  width: 100% !important;
  list-style: none;

  @media screen and (max-width: 768px) {
  }
`;
export const GptInTo = styled.div`
  width: 100%;
  padding: 0.5rem 1.5rem;
  font-size: 18px;
  border-radius: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const GptInSp = styled.span`
  border-bottom: 2px solid #1f3289;
  color: #1f3289;
  padding-bottom: 4px;
  font-size: 18px;

  @media screen and (max-width: 768px) {
  }
`;
export const GptPl = styled.div`
  float: left;

  @media screen and (max-width: 768px) {
  }
`;
export const GptPlSpan = styled.span`
  font-family: PRODUCT_SANS !important;
  direction: ltr;
  text-align: left;
  font-size: 18px;
  margin-left: 3px;

  @media screen and (max-width: 768px) {
  }
`;
export const GptPlSp = styled.span`
  color: #2a3636;
  place-items: center;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease-in;

  @media screen and (max-width: 768px) {
  }
`;
export const GptPlSpa = styled.span`
  margin-left: 5px;

  @media screen and (max-width: 768px) {
  }
`;
export const BorWr = styled.div`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 0;
  border-top: 1px solid #eeeeee;

  @media screen and (max-width: 768px) {
  }
`;
export const BorBut = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #1f3289;
  border-color: #1f3289;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.35rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-family: inherit;

  @media screen and (max-width: 768px) {
  }
`;
export const GptEx = styled.div`
  width: 100% !important;
  box-sizing: border-box;
  border-radius: 0;
  font-size: 16px;

  @media screen and (max-width: 768px) {
  }
`;

export const GptDiv = styled.div`
  float: left;
  padding: 0.5rem 0rem 0.5rem 1rem;

  @media screen and (max-width: 768px) {
  }
`;

export const GptExPa = styled.p`
  width: 100% !important;
  box-sizing: border-box;
  border-radius: 0;
  font-size: 16px;

  @media screen and (max-width: 768px) {
  }
`;
export const GptInTwo = styled.div`
  font-family: PRODUCT_SANS !important;
  direction: ltr;
  text-align: left;
  background-color: #fff;
  border-radius: 5px;
  border: 0;
  padding: 0.5rem 1rem;
  min-height: 14rem;
  max-height: 14rem;
  overflow-y: scroll;
  width: 100%;
  font-size: 18px;
  color: #2a3636 !important;

  @media screen and (max-width: 768px) {
  }
`;

export const GptInTwoIn = styled.textarea`
  font-family: PRODUCT_SANS !important;
  direction: ltr;
  text-align: left;
  background-color: #fff;
  border-radius: 5px;
  border: 0;
  padding: 0.5rem 1rem;
  min-height: 12rem;
  max-height: 12rem;
  overflow-y: scroll;
  width: 100%;
  font-size: 18px;
  color: #2a3636 !important;
  border: none;
  resize: none; /* Prevent resizing */

  @media screen and (max-width: 768px) {
  }
`;
export const GptCon = styled.div`
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 20%);
  background-color: #fff;

  @media screen and (max-width: 768px) {
  }
`;
export const SoPa = styled.p`
  word-wrap: break-word;
  text-align: center;
  list-style: none;
  font-style: normal;
  font-size: 16px;
  margin: 0 0 1.6875rem;
  padding: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const SoSp = styled.span`
  border-bottom: 2px solid #1f3289;
  color: #1f3289;
  padding-bottom: 4px;
  font-weight: bold;
  direction: rtl;
  font-family: GE_SS_TWO;
  line-height: 1.5;
  text-align: right;

  @media screen and (max-width: 768px) {
  }
`;
export const SoCon = styled.div`
  min-height: 4rem;
  width: 100% !important;

  @media screen and (max-width: 768px) {
  }
`;
export const SoSu = styled.div`
  width: 100% !important;
  font-size: 15px;
  min-height: 1px;
  padding: 1.25rem;

  @media screen and (max-width: 768px) {
  }
`;
export const WriSec4 = styled.section`
  max-width: 100%;
  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 768px) {
  }
`;
export const FeedPa = styled.p`
  @media screen and (max-width: 768px) {
  }
`;
export const FeedPa2 = styled.p`
  @media screen and (max-width: 768px) {
  }
`;
export const FeedPa3 = styled.p`
  @media screen and (max-width: 768px) {
  }
`;
export const FeedPa4 = styled.p`
  @media screen and (max-width: 768px) {
  }
`;
export const FeedSp = styled.span`
  color: #1f3289;
  @media screen and (max-width: 768px) {
  }
`;
export const TipWr = styled.div`
  text-align: center;
  background-color: #1f3289;
  padding: 12px;
  border-radius: 12px;
  max-height: 120px;
  overflow-y: scroll;
  min-height: fit-content;
  width: 70%;
  max-width: 260px;
  margin-left: auto;
  box-shadow: 1px 1px 1px 1px rgb(0, 0, 0, 0.2);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-bottom: -16px;
  margin-right: 22px;
  @media screen and (max-width: 768px) {
  }
`;
export const TipPr = styled.p`
  color: #fff;
  text-align: center;
  margin-bottom: 3px;
  margin-top: 3px;

  @media screen and (max-width: 768px) {
  }
`;
export const TipNo = styled.div`
  text-align: center;
  display: none;
  margin-right: 30px;
  margin-left: 15px;

  @media screen and (max-width: 768px) {
  }
`;
export const TipSp = styled.span`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  display: block;
  margin: 10px auto;
  position: relative;
  background: #fff;
  box-shadow: -15px 0 #fff, 15px 0 #fff;
  box-sizing: border-box;
  animation: shadowPulse 2s linear infinite;

  @media screen and (max-width: 768px) {
  }
`;
