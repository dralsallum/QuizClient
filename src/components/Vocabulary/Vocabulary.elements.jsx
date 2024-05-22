import styled, { css, keyframes } from "styled-components";
import { IoMdVolumeHigh } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const ScaleUpDown = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
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

export const AllWr = styled.div`
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
  text-indent: -999px;
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
export const VocFoBut = styled.button`
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
  left: ${(props) => `calc(${props.left}% - 270px / 2)`};
  top: calc(50% - 185px / 2);
  z-index: ${(props) => props.zIndex};
  position: absolute;
  width: 270px;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  justify-content: center;
`;
export const CardTwoIm = styled.img`
  width: 81.176px;
  height: 55.62px;
  border-radius: 10px;
`;
export const CardTwoTe = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const CardTwoSp = styled.span`
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 1px;
`;
export const CardTwoSpa = styled.span`
  color: f1fafe; !important;
  font-weight: bold;
  font-size: 0.8rem;
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
