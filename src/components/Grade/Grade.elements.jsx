import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const ScaleUpDown = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

export const AllWr = styled.div`
  direction: rtl;
  display: block;
  unicode-bidi: isolate;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const TitWr = styled.div`
  direction: rtl;

  @media screen and (max-width: 768px) {
  }
`;
export const TitCon = styled.div`
  display: flex;
  background: #eee;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.06);
  padding: 1.35em 1.35em 1.35em 1.35em;
  margin-right: 1em;
  margin-left: 1em;
  font-size: 14px;
  color: #ffffff;
  background-color: ${({ backgroundColor }) => backgroundColor || "#04329e"};
  flex-direction: row;
  gap: 10px;
  min-height: auto;
  border-radius: 5px;
  align-self: center;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const TitSec = styled.div`
  flex: 1;
  font-size: 14px;

  @media screen and (max-width: 768px) {
  }
`;
export const TitSecHe = styled.h1`
  font-size: 24px;
  line-height: normal;
  margin: 0 0 10px 0;
  overflow-wrap: break-word;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const TitEx = styled.blockquote`
  padding: 0;
  margin: 10px 0;
  overflow-wrap: break-word;

  @media screen and (max-width: 768px) {
  }
`;
export const TitCat = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 12px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
  }
`;
export const TitCatSp = styled.span`
  display: flex;
  line-height: 17px;
  font-size: 13px;

  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;
export const TiSpan = styled.span`
  font-weight: bold;
  margin-right: 0.3em;

  @media screen and (max-width: 768px) {
  }
`;
export const TitSecSp = styled.span`
  display: block;
  font-size: 16px;

  @media screen and (max-width: 768px) {
  }
`;
export const TitSp = styled.span`
  display: block;

  @media screen and (max-width: 768px) {
  }
`;
export const TitNoSp = styled.span`
  white-space: nowrap;

  @media screen and (max-width: 768px) {
  }
`;
export const TitImCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;

  @media screen and (max-width: 768px) {
  }
`;
export const TitIm = styled.img`
  text-align: center;
  object-fit: contain;
  object-position: top;
  aspect-ratio: auto 120 / 160;
  overflow-clip-margin: content-box;
  overflow: clip;
  width: 120px;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;
export const AllCon = styled.div`
  background-color: #f8f8f8;
  margin: 0 auto;
  max-width: 1024px;

  @media screen and (max-width: 768px) {
  }
`;
export const AllNav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #f1faff;
  border-radius: 3px;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  gap: 8px;
  margin: 0 0 20px 0;
  padding: 0 12px;

  @media screen and (max-width: 768px) {
  }
`;
export const GradWr = styled.div`
  overflow: hidden;
  margin: 0 auto;
  max-width: 982px;
  height: 100%;
  position: relative;
  width: calc(
    100% - 2 * 35px + 8px)
  );


  @media screen and (max-width: 768px) {
  }
`;
export const GradUl = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 26px;
  height: 100%;
  justify-content: flex-start;
  list-style: none;
  white-space: nowrap;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const GradArr = styled.button`
  background: rgba(0, 0, 0, 0) url(/images/lists/icon-arrow-left-1p8nr26.svg)
    10px 50% no-repeat;
  border: 0;
  box-shadow: none;
  height: 54px;
  padding: 0;
  width: 35px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
  }
`;
export const GradLi = styled.li`
  display: inline-block;
  unicode-bidi: isolate;
  list-style: none;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
  }
`;
export const GradAt = styled.a`
  color: #fff;
  background-color: #00578a;
  cursor: pointer;
  align-items: center;
  border-radius: 3px;
  display: flex;
  font-size: 0.875em;
  font-weight: 700;
  height: 42px;
  justify-content: center;
  min-width: 100px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
  }
`;
export const EssWr = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
  border-radius: 3px;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 15px 50px 20px 50px;
  position: relative;
  width: 100%;
  background-color: #f1faff;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
  }
`;
export const EssHe = styled.h2`
  color: #00578a;
  font-size: 1.375em;
  font-weight: 600;
  margin: 0 0 5px 0;
  padding: 0 0 0 35px;
  text-transform: capitalize;
  width: 100%;
  margin-bottom: 20px;
  padding-left: 0px;

  @media screen and (max-width: 768px) {
    font-size: 1.175em;
    margin-bottom: 10px;
  }
`;
export const EssUl = styled.ul`
  max-height: ${(props) => (props.showMore ? "999px" : "210px")};
  transition-property: max-height;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  height: auto;
  display: grid;
  align-items: start;
  column-gap: 23px;
  grid-template-rows: auto;
  overflow: hidden;
  padding: 5px;
  row-gap: 24px;
  grid-template-columns: repeat(4, 155px) auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 155px) auto;
  }
`;

export const EssLiImg = styled.li`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
  justify-content: center;
  margin: 0;
  width: 100%;
  border-radius: 3px;
  flex-direction: column;
  justify-self: self-end;
  list-style: none;
  padding: 10px;
  height: 188px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33.33%; /* One-third of the container height */
  margin-bottom: 10px;
  width: 100%;
`;

export const ImgTit = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  width: 120px;

  border-radius: 5px;
`;
export const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const EssImg = styled.img`
  width: 100%;
  height: 188px;

  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;
export const EssLi = styled.li`
  align-items: flex-start;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 4px 6px rgba(50, 98, 144, 0.8);
  display: flex;
  flex-direction: column;
  justify-self: self-end;
  list-style: none;
  justify-content: flex-start;
  margin: 0 5px 0;
  padding: 10px;
  height: 200px;
  width: 150px;

  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;
export const EssLiHe = styled.h3`
  color: #00578a;
  font-size: 0.9125em;
  padding: 0 0 10px 0;
  margin: 0;
  font-weight: 300;

  @media screen and (max-width: 768px) {
  }
`;
export const EssLiAt = styled.a`
  color: #00578a;
  font-weight: 400;
  text-decoration: none;

  @media screen and (max-width: 768px) {
  }
`;
export const EssLiDiv = styled.div`
  color: #000; !important;
  font-size: 0.75em;
  overflow: hidden;
  width: 100%;
  text-decoration: none;

  @media screen and (max-width: 768px) {
  }
`;

export const EssBot = styled.div`
  margin: 15px 0 0 0;
  text-align: right;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const EssBut = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  box-shadow: none;
  margin: 0;
  padding: 0;
  line-height: 175%;
  outline: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s ease 0;
  font-family: "open sans", sans-serif;
  text-decoration: none !important;
  animation: ${ScaleUpDown} 2s ease-in-out infinite;

  @media screen and (max-width: 768px) {
  }
`;

export const EssSpan = styled.span`
  color: #00578a;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  padding: 0 10px 0 0;
  display: ${(props) =>
    props.show
      ? "inline"
      : "none"}; // Conditional display based on the 'show' prop
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 0 2px 0 0;
  }
`;

export const SliderWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
`;

export const SliderArrowContainerAll = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SliderArrowContainer = styled.div`
  position: relative;
  gap: 1rem;
  display: flex;
`;
export const SliderArrowContainer1 = styled.div`
  position: relative;
  gap: 1rem;
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  color: #2946b6;

  @media screen and (max-width: 960px) {
    font-size: 1.3rem;
    padding-top: 0.4rem;
  }
`;

export const SliderArrowButtonRight = styled.button`
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  color: black;
  border: none;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.3 ease-in-out;

  &:hover {
    background-color: black;
    color: #eeeeff;
  }
`;
export const SliderArrowButtonLeft = styled.button`
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  color: black;
  border: none;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.3 ease-in-out;

  &:hover {
    background-color: black;
    color: #eeeeff;
  }
`;

export const SliderContainer = styled.div`
  padding: 1.5rem 2.5rem;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: 1536px) {
    max-width: 1280px;
    margin: auto;
  }
`;

export const SliderHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SliderHeaderSpan = styled.span`
  color: #000000;
  font-size: 1.4rem;
  font-weight: 600;

  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
  }
`;

export const SliderSubHeaderSpan = styled.span`
  color: #1f3e72;
  font-size: 1.8rem;
  font-weight: bold;

  @media screen and (max-width: 960px) {
    font-size: 1.3rem;
  }
`;

export const SliderCardContainer = styled.div`
  direction: ltr;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 1rem;
  border-radius: 10px;
  max-width: max-content;
  margin: auto;
  transition: all 0.5 ease-in-out;

  &:hover {
    scale: 1.025;
    cursor: pointer;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(136, 160, 255, 0.46) 217.91%
    );
    box-shadow: 0px 72px 49px -51px rgba(136, 160, 255, 0.21);
  }
`;

export const SliderCardImg = styled.img`
  width: 100%;
  max-width: 15rem;
  max-height: 15rem;
  border-radius: 8px;
`;
export const SliderCardSpan = styled.div`
  color: rgb(140 139 139);
  font-size: 1.1rem;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;
export const SliderCardSubSpan1 = styled.div`
  display: flex;
  align-items: center;
`;
export const SliderCardSubSpan2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SliderCardSubSpan3 = styled.div`
  color: #000000;
  font-weight: 600;
  font-size: 1rem;
  padding-right: 0.2rem;
  margin-left: 0.2rem;
  margin-bottom: 0.2rem;
  overflow: hidden;
  position: relative;
  max-height: 2.2em; // Assuming line-height of 1.1, thus 2 lines will be 2.2em
  line-height: 1.1em;

  &:after {
    content: "...";

    background-color: white; // Match this with your background color
  }

  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
  }
`;

export const SliderCardSubSpan4 = styled.span`
  color: rgb(140 139 139);
  font-size: 0.7rem;
  width: 15rem;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #2946b6;
  white-space: nowrap;
  padding: 8px 14px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: #000000;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
