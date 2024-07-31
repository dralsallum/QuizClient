import { Link } from "react-router-dom";
import styled from "styled-components";

export const AllWr = styled.div`
  direction: rtl;
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
  }
`;
export const BanWr = styled.div`
  width: 100%;
  cursor: initial;

  @media screen and (max-width: 768px) {
  }
`;
export const BanDiv = styled.div`
  background: rgb(84, 56, 220);
  border-radius: 0px;
  display: flex;
  justify-content: space-between;
  color: rgb(255, 255, 255);
  padding: 0.75rem;

  @media screen and (max-width: 768px) {
  }
`;
export const BanSubDiv = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  flex: initial;
  width: 100%;
  height: initial;
  gap: initial;

  @media screen and (max-width: 768px) {
  }
`;
export const BanPaDiv = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  flex: initial;
  width: initial;
  height: initial;
  gap: initial;

  @media screen and (max-width: 768px) {
  }
`;
export const BanIcDiv = styled.div`
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const BanIcCon = styled.div`
  height: 1.125rem !important;
  width: 1.125rem !important;
  color: inherit;

  @media screen and (max-width: 768px) {
  }
`;
export const BanSvg = styled.svg`
  user-select: none;
  width: 100%;
  height: 100%;
  display: block;
  fill: currentcolor;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const BanCon = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  flex: initial;
  width: initial;
  height: initial;
  gap: 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const BanPa = styled.p`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-weight: 700;
  text-transform: none;
  line-height: 1.5em;
  text-align: center;

  @media screen and (max-width: 768px) {
  }
`;
export const MaWr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 2rem;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const MaWrBo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  margin-bottom: -5rem;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const OpWr = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
export const OpBo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 64.5625rem;
  width: 100%;
  padding: 0px 1rem;
  margin: 0px auto 3rem;
  margin-bottom: 0px;

  @media screen and (max-width: 768px) {
  }
`;
export const OpBoHe = styled.h2`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3em;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const OpBoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;

  @media screen and (max-width: 768px) {
  }
`;
export const OpBoCh = styled.div`
  position: relative;
  top: 0.25rem;
  margin-inline-end: 0.5rem;
  color: rgb(75, 87, 102);
  height: 1rem;
  width: 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const OpBoPa = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  margin-top: 0px;
  padding-top: 0px;
  font-weight: 400;
  text-transform: none;
  line-height: 1.5em;
  color: rgb(75, 87, 102);
  text-align: center;
  text-decoration: unset;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
export const MidWr = styled.div`
  margin-bottom: 3rem;
  align-self: stretch;

  @media screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
    align-self: stretch;
  }
`;
export const MidCon = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  padding: 0.5rem 1rem;
  justify-content: center;
  width: 100%;
  margin: 0px;
  overflow-x: unset;
  grid-template-columns: repeat(3, 12.5rem);
  column-gap: 1rem;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(6.875rem, 1fr));
    column-gap: 0.5rem;
    grid-auto-rows: max-content;
    overflow-x: scroll;
    padding: 0.5rem 1rem;
  }
`;
export const ElWr = styled.div`
  text-align: center;
  position: relative;
  display: contents;
  cursor: pointer;

  @media screen and (max-width: 768px) {
  }
`;
export const ElTop = styled.div`
  grid-row: 1;
  border-top: 2px solid;
  border-left: 2px solid;
  border-right: 2px solid;
  position: relative;
  border-start-end-radius: 1rem;
  border-start-start-radius: 1rem;
  padding: 1rem 0.5rem 0.25rem;
  overflow-wrap: break-word;
  border-color: ${(props) =>
    props.selected ? "#5438dc" : "rgb(218, 225, 234)"};
  background-color: rgb(255, 255, 255);

  @media screen and (max-width: 768px) {
  }
`;
export const ElMid = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 1px;
  grid-row: 2;
  border-left: 2px solid;
  border-right: 2px solid;
  padding: 0px 0.5rem 0.25rem;
  border-color: rgb(218, 225, 234);
  background-color: rgb(255, 255, 255);

  @media screen and (max-width: 768px) {
  }
`;
export const ElMidPa = styled.p`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-weight: 400;
  text-transform: none;
  font-size: 0.75rem;
  line-height: 1.5em;
  color: rgb(75, 87, 102);
  text-align: center;
  text-decoration: line-through;

  @media screen and (max-width: 768px) {
  }
`;
export const ElMidPar = styled.p`
  margin-right: 0.125rem;
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-weight: 700;
  text-transform: none;
  font-size: 0.75rem;
  line-height: 1.5em;
  color: rgb(14, 190, 117);
  text-align: right;
  text-decoration: unset;

  @media screen and (max-width: 768px) {
  }
`;
export const ElBot = styled.div`
  grid-row: 4;
  border-left: 2px solid;
  border-right: 2px solid;
  position: relative;
  padding: 0.5rem 0.5rem 0px;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
  }
`;
export const ElBotCon = styled.div`
  display: inline-flex;
  align-items: center;
  line-height: 1.3em;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: unset;
  margin-left: unset;
  background-color: rgb(14, 190, 117);
  color: rgb(255, 255, 255);
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  position: relative;
  z-index: 20;
  text-transform: none;

  @media screen and (max-width: 768px) {
  }
`;
export const ElSp = styled.div`
  font-size: 0.75rem;
  text-transform: none;

  @media screen and (max-width: 768px) {
  }
`;
export const ElEx = styled.div`
  grid-row: 5;
  border-color: rgb(218, 225, 234);
  background-color: rgb(255, 255, 255);
  line-height: 1.125rem;
  border-left: 2px solid;
  border-right: 2px solid;
  border-bottom: 2px solid;
  border-end-start-radius: 1rem;
  border-end-end-radius: 1rem;
  padding: 0.25rem 0.5rem 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const ElTopPa = styled.p`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-weight: 700;
  text-transform: none;
  font-size: 1rem;
  line-height: 1.5em;
  color: rgb(30, 45, 64);
  text-align: center;
  text-decoration: unset;
  font-size: 1.125rem;

  @media screen and (max-width: 768px) {
  }
`;
export const ElPa = styled.p`
  font-size: 0.875rem;
  border-color: rgb(218, 225, 234);
  background-color: rgb(255, 255, 255);
  grid-row: 3;
  border-left: 2px solid;
  border-right: 2px solid;
  padding: 0px 0.5rem 0.25rem;
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-weight: 700;
  text-transform: none;
  line-height: 1.5em;
  color: rgb(30, 45, 64);
  text-align: center;
  text-decoration: unset;

  @media screen and (max-width: 768px) {
  }
`;
export const ButWr = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: min(21.4375rem, 100%);
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
  }
`;
export const ButTop = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.625rem;
  border-width: 0.125rem;
  border-style: solid;
  cursor: pointer;
  text-align: center;
  line-height: 1.5rem;
  overflow-wrap: break-word;
  transition: all 0.2s ease-in-out 0s;
  min-width: 6.25rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  opacity: 1;
  pointer-events: auto;
  text-decoration: none;
  position: relative;
  background-color: rgb(17, 238, 146);
  color: rgb(30, 45, 64);
  border-color: rgb(17, 238, 146);
  margin-bottom: 10px;
  margin-right: initial;

  @media screen and (max-width: 768px) {
  }
`;
export const ButBot = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.625rem;
  border-width: 0.125rem;
  border-style: solid;
  cursor: pointer;
  text-align: center;
  line-height: 1.5rem;
  overflow-wrap: break-word;
  transition: all 0.2s ease-in-out 0s;
  min-width: 6.25rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  opacity: 1;
  pointer-events: auto;
  text-decoration: none;
  position: relative;
  background-color: transparent;
  color: rgb(75, 87, 102);
  border-color: rgb(218, 225, 234);
  text-transform: none;
  overflow: visible;
  font-family: inherit;
  margin: 0;
  text-decoration: none;

  @media screen and (max-width: 768px) {
  }
`;

export const OpTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  max-width: 64.5625rem;
  margin-top: 5rem;
  width: 100%;
  padding: 0px 1rem;
  margin: 0px auto 3rem;
  @media screen and (max-width: 768px) {
  }
`;
export const OpTopHe = styled.h2`
  margin-top: 0px;
  padding-top: 0px;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3em;
  text-align: center;
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;
export const FeWr = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  padding: 0px;
  max-width: none;
  width: unset;
  border: none;
  align-self: center;

  @media screen and (max-width: 768px) {
  }
`;
export const FeCon = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 2rem;
  }
`;
export const FeEl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0px;
  margin: 0px;

  @media screen and (max-width: 768px) {
  }
`;
export const FeRi = styled.div`
  margin-inline-start: 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const FeRiPa = styled.p`
  color: rgb(30, 45, 64);
  font-weight: 700;
  margin: 0px;
  text-align: right;
  font-size: 1.125rem;
  padding-top: 0px;
  text-transform: none;
  line-height: 1.5em;
  text-decoration: unset;

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const ButMa = styled.button`
  background-color: #5438dc;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3d2bb3;
  }

  @media screen and (max-width: 759px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
export const ButMaAt = styled(Link)`
  text-decoration: none;
  color: #fff;

  @media screen and (max-width: 759px) {
  }
`;

export const FeRiImg = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  border-style: none;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    height: 3rem;
    width: 3rem;
  }
`;
export const FeRiPar = styled.p`
  font-size: 1rem;
  color: rgb(75, 87, 102);
  text-align: right;
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-weight: 400;
  text-transform: none;
  line-height: 1.5em;
  text-decoration: unset;

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
