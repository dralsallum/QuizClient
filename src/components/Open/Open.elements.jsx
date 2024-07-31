import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const ScaleUpDown = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
`;

export const AllWr = styled.div`
  background-image: url(//cdn.vocab.com/images/home/dictionary-search-bg-1920-1fyyt3h.svg);
  background-color: #0039a4;
  min-height: 468px;
  color: #fff;
  background-repeat: repeat-x;
  background-position: bottom -1px center;
  background-size: 1920px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-image: url(//cdn.vocab.com/images/home/dictionary-search-bg-320-pfz0qg.svg);
    background-size: 480px 196px;
    background-position: right bottom;
    background-color: #0039a4;
    min-height: 468px;
    color: #fff;
    background-repeat: repeat-x;
  }
`;
export const AllTop = styled.div`
  display: flow-root;
  flex: 1;

  @media screen and (max-width: 768px) {
  }
`;
export const AllForm = styled.form`
  margin: 85px auto 0 auto;
  max-width: none;
  background-size: 250px;
  min-height: 250;
  transform: translateX(0px);
  padding: 0 5px;
  width: 95%;
  display: flow-root;
  background-repeat: no-repeat;
  background-position: top right;
  transition: background-size 0.5s, min-height 0.5s, background-position 0.5s;

  @media screen and (max-width: 768px) {
    display: flow-root;
    background-image: url(//cdn.vocab.com/images/home/search-flower-jpjxvs.svg);
    transition: background-size 0.5s, min-height 0.5s, background-position 0.5s;
    min-height: auto;
    margin-bottom: 1em;
    background-size: 0px;
    background-position: top right -1px;
    margin: 85px 0 0 0;
    padding: 0 calc(2.5% + 5px);
    width: 100%;
    max-width: none;
    transform: translateX(0px);
  }
`;
export const SearchDiv = styled.div`
  width: 100%;
  height: 52px;
  border-radius: 30px;
  background-color: #fff;
  margin: 0 0 8px 0;
  padding: 4px 4px 4px 25px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
`;
export const SearBot = styled.div`
  display: flex;
  gap: 0.5em;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    display: flex;
    gap: 0.5em;
    justify-content: space-between;
  }
`;
export const SearNon = styled.div`
  display: none;
  font-size: 14px;
  margin: 1.5em -0.5em 3.5em -0.5em;
  @media screen and (max-width: 768px) {
    margin: 1.5em 0 4.5em 0;
    font-size: 14px;
  }
`;
export const SearBut = styled.button`
  margin-right: 50px;
  padding: 0 0 0 22px;
  background-size: 14px 14px;
  background-color: rgba(0, 0, 0, 0);
  text-align: right;
  color: #fff;
  font-size: 15px;
  display: inline-block;
  white-space: nowrap;
  background-repeat: no-repeat;
  background-position: center left;
  line-height: unset;
  background-image: url(//cdn.vocab.com/images/dictionary/advsearch-icon-14kzu1p.svg);
  outline: none;
  border: none;
  border-radius: 3px;
  display: inline-block;
  margin: 0;
  cursor: pointer;
  font-family: "open sans", sans-serif;
  text-decoration: none !important;

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0 0 0 22px;
    background-size: 14px 14px;
    background-color: rgba(0, 0, 0, 0);
    text-align: right;
    color: #fff;
    font-size: 15px;
    display: inline-block;
    white-space: nowrap;
    background-repeat: no-repeat;
    background-position: center left;
    line-height: unset;
    background-image: url(//cdn.vocab.com/images/dictionary/advsearch-icon-14kzu1p.svg);
    outline: none;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.5s ease 0;
    font-family: "open sans", sans-serif;
    text-decoration: none !important;
  }
`;
export const SearAt = styled(Link)`
  padding: 0 0 0 24px;
  background-size: 17px 12px;
  background-image: url(//cdn.vocab.com/images/dictionary/random-icon-ruwkb4.svg);
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  display: inline-block;
  white-space: nowrap;
  background-repeat: no-repeat;
  background-position: center left;
  line-height: unset;

  @media screen and (max-width: 768px) {
  }
`;
export const SearHead = styled.h1`
  margin-top: 36px;
  font-size: 30px;
  margin: 68px 0 14px 0;
  font-weight: 700;
  white-space: nowrap;
  transition: font-size 0.5s;
  text-align: right;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 40px;
    text-align: center;
    font-weight: 700;
    white-space: nowrap;
    transition: font-size 0.5s;
  }
`;
export const SearIn = styled.input`
  outline: 0;
  border: 0;
  padding: 0;
  color: #044180;
  font-size: 18px;
  flex: 1;
  height: 44px;
  line-height: 44px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const SearSpan = styled.span`
  background-repeat: no-repeat;
  width: 56px;
  height: 44px;
  border-radius: 30px;
  margin: 0;
  padding: 0;
  background-image: url(//cdn.vocab.com/images/home/search-bar-icon-bplg1q.svg);

  @media screen and (max-width: 768px) {
    background-image: url(//cdn.vocab.com/images/home/search-bar-icon-rnd-rxr2du.svg);
    width: 44px;
  }
`;
export const AllBot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;

  @media screen and (max-width: 768px) {
  }
`;
export const AllSub = styled.div`
  max-width: 95%;
  padding: 0 5px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const AllEm = styled.em`
  direction: rtl;
  display: block;
  font-size: 24px;
  margin: 0 0 0.5em 0;
  text-align: right;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const CatUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 15px;

  @media screen and (max-width: 768px) {
    gap: 3.5px;
  }
`;
export const CatLi = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 12.5px;
  }
`;
export const CatLiTw = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 12.5px;
  }
`;
export const CatAa = styled(Link)`
  display: block;
  margin: 0;
  padding: 1em 3.5em 1em 1.5em;
  text-decoration: none;
  text-align: center;
  background-repeat: no-repeat;
  background-position: right 0.75em center;
  background-size: 3.5em;
  border-radius: 10px;
  white-space: nowrap;
  background-color: #ffe6e9;
  color: #ed5362;
  background-image: url(https://img.icons8.com/clouds/100/books.png);

  @media screen and (max-width: 768px) {
    padding: 1em 0.75em 4.25em 0.75em;
    background-position: center bottom 1em;
    background-size: 3.8em;
  }
`;
export const CatAaSp = styled.span`
  display: inline;

  @media screen and (max-width: 768px) {
  }
`;
export const CatLiTh = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 12.5px;
  }
`;
export const CatAt = styled(Link)`
  background-image: url(https://img.icons8.com/clouds/100/rocket.png);
  background-color: #e4eeff;
  color: #0059fb;
  display: block;
  margin: 0;
  padding: 1em 3.5em 1em 1.5em;
  text-decoration: none;
  text-align: center;
  background-repeat: no-repeat;
  background-position: right 0.75em center;
  background-size: 3.5em;
  border-radius: 10px;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    padding: 1em 0.75em 4.25em 0.75em;
    background-position: center bottom 1em;
    background-size: 3.8em;
  }
`;
export const CatAn = styled(Link)`
  display: block;
  margin: 0;
  padding: 1em 3.5em 1em 1.5em;
  text-decoration: none;
  text-align: center;
  background-repeat: no-repeat;
  background-position: right 0.75em center;
  background-size: 3.5em;
  border-radius: 10px;
  white-space: nowrap;
  background-image: url(https://img.icons8.com/clouds/100/graduation-cap.png);
  background-color: #dcfef7;
  color: #4ba588;

  @media screen and (max-width: 768px) {
    padding: 1em 0.75em 4.25em 0.75em;
    background-position: center bottom 1em;
    background-size: 3.8em;
  }
`;
export const BaWr = styled.div`
  margin: 0 auto;
  position: static;
  padding: 0;
  min-height: 0;
  max-height: 0;
  width: 95%;
  transform: none;
  visibility: visible;
  overflow: hidden;
  color: #333;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0;
  background: #eff3f8;
  z-index: 2;
  transition: transform 0.5s, visibility 0.5s;

  @media screen and (max-width: 768px) {
  }
`;
export const BaForm = styled.form`
  padding: 0;
  font-size: 12px;
  max-width: 720px;
  margin: 0 auto;
  display: block;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const Bafield = styled.fieldset`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
  }
`;

export const HeaderContainer = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 991px) {
    justify-content: center;
    align-items: center;
  }
`;
export const HeaderList = styled.ul`
  font-size: 1.2rem;
  color: #ffffff;
  list-style-type: none;
  padding: 0;
  text-align: right;

  @media screen and (max-width: 991px) {
    font-size: 0.9rem;
  }
`;
export const HeaderElements = styled.li`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: nowrap;
`;

export const ZoWr = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  font-family: sharp-sans-semibold, fallback-font, Arial, sans-serif;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0em;
  text-transform: none;

  @media screen and (max-width: 768px) {
    padding: 54px 14px;
    padding-top: 35px;
    box-sizing: border-box;
    color: rgb(51, 51, 51);
    font-family: sharp-sans-semibold, fallback-font, Arial, sans-serif;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0em;
    text-transform: none;
  }
`;
export const ZoCon = styled.div`
  display: flex;
  width: auto;
  margin: -6px;
  flex-wrap: nowrap;

  @media screen and (max-width: 768px) {
    display: flex;
    width: auto;
    flex-wrap: wrap;
    margin: -6px;
  }
  @media screen and (min-width: 768px) {
  }
`;
export const ZoImgg = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
  }
  @media screen and (min-width: 768px) {
  }
`;
export const ZoHe = styled.h3`
  color: #fff;
  direction: rtl;
  padding-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-family: sharp-sans-semibold, fallback-font, Arial, sans-serif;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0em;
    text-transform: none;
    padding-bottom: 14px;
  }
  @media screen and (min-width: 768px) {
  }
`;
export const ZoRe = styled.div`
  padding: 6px;

  @media screen and (max-width: 768px) {
    flex-basis: 50%;
    padding: 6px;
  }
  @media screen and (min-width: 768px) {
    flex: 1 1 0px;
    width: 0px;
  }
`;
export const ZoPa = styled.p`
  padding: 6px;
  @media screen and (max-width: 768px) {
    padding-left: 26px;
    padding-right: 26px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 19px;
    padding-right: 19px;
  }
`;
export const ZoLo = styled.div`
  color: ${(props) => props.color || "#ec5362"};
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-family: sharp-sans-semibold, fallback-font, Arial, sans-serif;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0em;
    text-transform: none;
    white-space: nowrap;
  }
  @media screen and (min-width: 768px) {
    font-family: sharp-sans-semibold, fallback-font, Arial, sans-serif;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0em;
    text-transform: none;
    white-space: nowrap;
  }
`;
export const ZoPara = styled.p`
  color: #000;
  font-size: 15px;
  text-align: center;
  @media screen and (max-width: 768px) {
  }
  @media screen and (min-width: 768px) {
  }
`;
export const ZoImg = styled.img`
  background-color: #fff;
  border-radius: 50%;
  width: 60px;
  @media screen and (max-width: 768px) {
  }
  @media screen and (min-width: 768px) {
    font-family: sharp-sans-semibold, fallback-font, Arial, sans-serif;
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0em;
    text-transform: none;
    white-space: nowrap;
  }
`;
export const ZoAt = styled(Link)`
  display: flex;
  height: 160px;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;

  text-decoration: inherit;
  background-color: ${(props) => props.backgroundColor || "white"};
  border-radius: 4px;
  border: 1px solid rgba(58, 47, 31, 0.1);
  transition: box-shadow 0.1s ease 0s;
  padding: 23px 0px 13px;
  padding-top: 5px;

  @media screen and (max-width: 768px) {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid rgba(58, 47, 31, 0.1);
    transition: box-shadow 0.1s ease 0s;
    padding: 23px 0px 13px;
    padding-top: 5px;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 16px;
    padding-top: 17px;
  }
`;
