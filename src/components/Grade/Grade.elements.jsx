import styled, { keyframes } from "styled-components";

const ScaleUpDown = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
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
  margin: 0 0 40px 0;
  padding: 0 10px;

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
  }
`;
export const EssUl = styled.ul`
  max-height: ${(props) => (props.showMore ? "999px" : "200px")};
  transition-property: max-height;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  height: auto;
  display: grid;
  align-items: start;
  column-gap: 23px;
  grid-template-rows: auto;
  overflow: hidden;
  padding: 0;
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
  }
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
  box-shadow: 0px 2px 3px 0px rgba(50, 98, 144, 0.2);
  display: flex;
  flex-direction: column;
  justify-self: self-end;
  list-style: none;
  justify-content: flex-start;
  margin: 0 5px 0;
  padding: 10px;
  height: 188px;
  width: 155px;

  @media screen and (max-width: 768px) {
  }
`;
export const EssLiHe = styled.h3`
  color: #00578a;
  font-size: 0.8125em;
  padding: 0 0 15px 0;
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
  color: #333;
  font-size: 0.75em;
  overflow: hidden;
  width: 100%;

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
  padding: 0 17px 0 0;
  display: ${(props) =>
    props.show
      ? "inline"
      : "none"}; // Conditional display based on the 'show' prop
  position: relative;

  @media screen and (max-width: 768px) {
  }
`;
