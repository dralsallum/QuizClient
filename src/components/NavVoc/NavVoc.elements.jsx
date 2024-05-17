import { Link } from "react-router-dom";
import styled from "styled-components";

export const AllWr = styled.header`
  direction: rtl;
  margin: 0;
  position: fixed;
  top: 0;
  user-select: none;
  right: 0;
  width: 100%;
  z-index: 700;
  min-height: var(--page-header-height);
  transition: background-color 0.5s;
  background-color: rgba(0, 0, 0, 0);
  @media screen and (max-width: 768px) {
  }
`;
export const AllCon = styled.div`
  position: relative;
  width: 95%;
  max-width: 1025px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 768px) {
  }
`;
export const NavTop = styled.nav`
  line-height: 50px;
  height: 50px;
  z-index: 1;
  position: relative;
  width: 100%;
  text-align: left;
  @media screen and (max-width: 768px) {
  }
`;
export const NavSubAt = styled(Link)`
  background-color: #8998a6;
  color: #fff;
  text-decoration: none;
  margin: 0 5px;
  padding: 0 1.25em;
  border-radius: 3px;
  font-size: 12px;
  line-height: 2.8em;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
  }
`;
export const NavSubAa = styled(Link)`
  background-color: #36b100;
  color: #fff;
  text-decoration: none;
  margin: 0 5px;
  padding: 0 1.25em;
  border-radius: 3px;
  font-size: 12px;
  line-height: 2.8em;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -1px;

  @media screen and (max-width: 768px) {
  }
`;
export const NavSubTop = styled.div`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  vertical-align: top;
  margin-left: 35px;

  @media screen and (max-width: 768px) {
  }
`;
export const NavTopAt = styled(Link)`
  opacity: 1;
  visibility: visible;
  transition: all 0.5s;
  color: #22558a;
  cursor: pointer;
  text-decoration: underline;
  line-height: 50px;
  text-align: right;
  user-select: none;
  @media screen and (max-width: 768px) {
  }
`;
export const NavTopLogo = styled.img`
  position: absolute;
  height: 20px;
  margin-top: -10px;
  top: 50%;
  right: 5px;
  border: none;
  @media screen and (max-width: 768px) {
  }
`;
export const NavTopBut = styled.button`
  margin-left: -5px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: 50px;
  width: 40px;
  text-align: center;
  background: none;
  outline: none;
  font-size: 13px;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
  line-height: 175%;
  border-radius: 3px;
  color: #fff;
  transition: all 0.5s ease 0;
  font-family: "open sans", sans-serif;
  text-decoration: none !important;

  @media screen and (max-width: 768px) {
  }
`;

export const NavTopSp = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 3px;
  border-radius: 2px;
  background: #fff;
  font-size: 0;
  color: rgba(0, 0, 0, 0);
  transition: all 0.3s;

  @media screen and (max-width: 768px) {
  }
`;

export const NavBot = styled.nav`
  position: static;
  margin-top: 0;
  font-size: 12px;
  height: 50px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.5s;
  opacity: 1;
  visibility: visible;
  @media screen and (max-width: 768px) {
  }
`;
export const NavBotUl = styled.ul`
  font-size: 12px;
  list-style: none;
  overflow: hidden;
  padding: 0;
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
  }
`;
export const NavBotLi = styled.li`
  display: block;
  position: relative;
  cursor: pointer;
  margin: 0 2px;
  padding: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const NavBotAt = styled(Link)`
  white-space: nowrap;
  text-decoration: none;
  display: block;
  color: #fff;
  background-repeat: no-repeat;
  background-position: 16px 50%;
  background-size: 16px 16px;
  transition: all 0.3s;
  user-select: none;
  cursor: pointer;
  font-size: 14px;
  list-style: none;

  @media screen and (max-width: 768px) {
  }
`;
export const NavBotSp = styled.span`
  background-image: url(${(props) => props.icon});
  padding: 0 6px 0 0;
  background-position: 0px 50%;
  background-size: 14px 14px;
  white-space: nowrap;
  display: inline-block;
  background-repeat: no-repeat;
  user-select: none;

  @media screen and (max-width: 768px) {
  }
`;

export const NotWrap = styled.div`
  position: fixed;
  direction: rtl;
  cursor: default;
  margin-top: 5rem;
  margin-right: 2rem;
  width: 31.25rem;
  padding: 0;
  color: #252b2f;
  background-color: #fff;
  border: 1px solid #d6dee6;
  border-radius: 0.75rem;
  text-align: right;
  z-index: 998;
  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.06);
  right: 0;
  pointer-events: auto;

  @media screen and (max-width: 50rem) {
    margin-top: 4.5rem;
    margin-right: 1rem;
    width: 21.25rem;
  }
`;
export const NotCon = styled.div`
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (max-width: 50rem) {
    max-height: 100%;
  }
`;
export const NotUl = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
  padding-inline-start: 0px;
  display: block;
  color: #252b2f;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  @media screen and (max-width: 50rem) {
  }
`;

export const NotBot = styled.div`
  color: black;
  font-size: 24px;
  font-style: italic;

  @media screen and (max-width: 50rem) {
  }
`;
export const NotBotAt = styled(Link)`
  text-decoration: none;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
`;
