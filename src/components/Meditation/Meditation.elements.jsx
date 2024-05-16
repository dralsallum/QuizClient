import { Link } from "react-router-dom";
import styled from "styled-components";

export const MedWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: min-content;
  line-height: 1.15;
  text-size-adjust: 100%;
  direction: rtl;
`;

export const Footer = styled.footer`
  display: block;
  bottom: 0px;
  left: 0px;
  position: fixed;
  width: 100%;
  z-index: 10;
`;
export const FooterNav = styled.nav`
  align-items: center;
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: rgb(255, 255, 255);
  border-top: 0.125rem solid rgb(229, 231, 236);
  height: calc(3.875rem);

  @media screen and (max-width: 48rem) {
    height: calc(3.875rem);
  }
`;
export const FooterWrap = styled.div`
  margin: 0px auto;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 48rem) {
    max-width: 38rem;
  }
`;
export const FooterList = styled.ul`
  align-items: stretch;
  display: flex;
  flex-flow: row;
  height: 100%;
  justify-content: space-around;
  list-style: none;
  margin: 0px;
  padding: 0px;
  background: rgb(255, 255, 255);
  color: rgb(99, 96, 93);
`;
export const FooterLiLe = styled(Link)`
  display: inline-flex;
  height: 100%;
  justify-content: center;
  border-top: 0.125rem solid rgb(255, 115, 0);
  background: rgb(255, 255, 255);
  color: inherit;
  text-decoration: inherit;
`;
export const FootLiCon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: calc(-0.125rem);
  cursor: pointer;
`;
export const FootLiIcon = styled.div`
  font-size: 1.25rem;
  height: 1.25rem;
  text-align: center;
  width: 1.25rem;
  background: rgb(255, 255, 255);
  color: rgb(255, 115, 0);
  margin: calc(0.125rem);
`;
export const FootLiTex = styled.div`
  color: rgb(68, 66, 63);
  line-height: 140%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: calc(0.125rem);
`;
export const FooterLiRi = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  background: rgb(255, 255, 255);
  display: inline-flex;
  height: 100%;
  justify-content: center;
`;
export const FooterPin = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: calc(-0.125rem);
  cursor: pointer;

  @media screen and (max-width: 48rem) {
    flex-direction: row;
    padding: 0px 1rem;
  }
`;

export const Foot = styled.div`
  color: rgb(68, 66, 63);
  font-size: 1.25rem;
  height: 1.25rem;
  text-align: center;
  width: 1.25rem;
`;
export const FootCon = styled.div`
  color: rgb(68, 66, 63);
  line-height: 140%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 48rem) {
    font-size: 0.875rem;
  }
`;
export const CorMain = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.15;
  text-size-adjust: 100%;
  margin-bottom: 5rem;
`;
export const CorCon = styled.div`
  margin: 0px auto;
  padding: 1.5rem;
  width: 100%;

  @media screen and (max-width: 48rem) {
    max-width: 31rem;
  }
`;
export const CorHead = styled.h1`
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-weight: bold;
  letter-spacing: -0.055em;
  color: rgb(20, 19, 19);
  line-height: 2.5rem;
  margin: 0px;

  @media screen and (max-width: 48rem) {
    font-size: 2rem;
  }
`;
export const CorWrap = styled.div`
  display: flex;
  padding-top: 1.5rem;
  gap: 1rem;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
  }
`;
export const CorSub = styled.div`
  flex-basis: 50%;
`;
export const CorSu = styled.div``;
export const CorImgCon = styled.div`
  overflow: hidden;
  padding-bottom: 66.6667%;
  position: relative;
  border-radius: 0.5rem;
`;
export const CorImg = styled.img`
  background-color: rgb(203, 203, 204);
  object-fit: cover;
  object-position: 50% 50%;
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  border-style: none;
  overflow-clip-margin: content-box;
  overflow: clip;
`;
export const SuWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 48rem) {
    align-items: flex-start;
    flex-basis: 50%;
    padding-right: 1rem;
    padding-top: 0px;
  }
`;
export const SuSubWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  align-items: flex-start;
  text-align: right;

  @media screen and (max-width: 48rem) {
    align-items: flex-start;
    text-align: right;
  }
`;
export const SuConOne = styled.div`
  border: 0.0625rem solid rgb(229, 231, 236);
  display: inline-block;
  font-size: 0.75rem;
  font-weight: bold;
  height: 1.25rem;
  line-height: 1.25em;
  overflow: hidden;
  padding: calc((1.125rem - 1.25em) / 2) 0.5rem;
  position: relative;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  background: rgb(255, 255, 255);
  border-radius: 0.25rem;
  color: rgb(68, 66, 63);
  margin-bottom: 0.5rem;
`;

export const SuConOneSp = styled.span`
  text-align: center;
  vertical-align: text-top;
`;
export const SuConTwo = styled.div`
  color: rgb(68, 66, 63);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-weight: bold;
  letter-spacing: -0.055em;
  line-height: 110%;
  font-size: 2rem;

  @media screen and (max-width: 48rem) {
    font-size: 1.2rem;
  }
`;
export const SuConTwoHead = styled.h2`
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-weight: bold;
  letter-spacing: -0.055em;
  line-height: 3rem;
  margin-bottom: 0px;
  margin-top: 0px;
`;
export const SuConTwoSpan = styled.span`
  vertical-align: middle;
  font-size: 2.4rem;

  @media screen and (max-width: 48rem) {
    max-width: 31rem;
    font-size: 1.7rem;
  }
`;
export const UteWrap = styled.div`
  margin-bottom: 0px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const UteCon = styled.div`
  color: rgb(99, 96, 93);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 140%;
`;
export const UteConSpan = styled.span`
  vertical-align: middle;
`;
export const UteSvg = styled.svg`
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 0.25rem;
  vertical-align: middle;
  height: 1rem;
  width: 1rem;
`;
export const SuSvg = styled.svg`
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 0.25rem;
  vertical-align: middle;
`;
export const SuAt = styled(Link)`
  margin-bottom: 0px;
  display: inline-block;
  text-decoration: none;
  border: 0.125rem solid transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  height: 3rem;
  line-height: 1.1em;
  max-width: 20.4375rem;
  overflow: hidden;
  padding: calc((2.75rem - 1.1em) / 2) 1.5rem;
  position: relative;
  text-overflow: ellipsis;
  transition: color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    background-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    border-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    box-shadow 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    transform 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s;
  user-select: none;
  white-space: nowrap;
  background: rgb(0, 97, 239);
  border-radius: 2rem;
  color: rgb(255, 255, 255);
  opacity: 1;
`;

export const MugSpan = styled.span`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;
export const MugSubSpan = styled.span`
  margin-left: 0px;
`;

export const OtWrap = styled.div`
  margin: 0px auto;
  padding: 0.5rem;
  width: 100%;

  @media screen and (max-width: 48rem) {
    max-width: 31rem;
  }
`;
export const OtWrapLi = styled.ul`
  align-items: stretch;
  display: flex;
  flex-flow: wrap;
  height: 100%;
  list-style: none;
  margin: 0px;
  padding: 0px;
  background: rgb(255, 255, 255);
  color: rgb(99, 96, 93);
  justify-content: flex-start;
  list-style: none;
  transform: translate(-0.5rem, -0.5rem);
`;
export const OtLi = styled.li`
  flex: unset;
  display: list-item;
  text-align: -webkit-match-parent;
`;
export const OtLiBut = styled.button`
  border: 0.125rem solid transparent;
  cursor: pointer;
  max-width: 20.4375rem;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    background-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    border-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    box-shadow 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    transform 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s;
  user-select: none;
  white-space: nowrap;
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.03em;
  display: block;
  height: unset;
  line-height: 110%;
  padding: 0.5rem;
  position: relative;
  background: transparent;
  border-radius: 0px;
  color: rgb(68, 66, 63);
  opacity: 1;
  appearance: button;
  padding-right: 0rem;

  &.focus {
    border-bottom: 2px solid orange;
  }
`;

export const OtLiSpan = styled.span`
  text-align: center;
  vertical-align: text-top;
`;

export const OtLiSubSpan = styled.span`
  display: block;
  position: relative;
`;
export const OtLiReSpan = styled.span`
  display: block;
`;
export const OtSubWrap = styled.div`
  margin-bottom: 0px;
`;
export const OtConOne = styled.div`
  color: rgb(99, 96, 93);
`;
export const OtConSubOne = styled.div`
  margin-bottom: 0px;
`;
export const OtConReOne = styled.div`
  margin-bottom: 0px;
`;
export const OtOneList = styled.ul`
  place-items: stretch;
  display: grid;
  list-style: none;
  margin: 0px;
  padding: 0px;
  gap: 1.5rem;

  @media screen and (max-width: 48rem) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1.5rem;
  }
`;

export const OtOneLi = styled(Link)`
  // Current styles
  display: flex;
  flex-flow: row;
  justify-content: center;
  min-width: 15rem;
  position: relative;
  grid-column: 1 / -1;
  text-decoration: none;
  color: inherit;
`;

export const SoConOne = styled.div`
  flex-grow: 1;
  min-width: 5.125rem;
  width: 25%;
  margin-left: 0.5rem;
`;
export const SoSuOne = styled.div``;
export const SoRoOne = styled.div`
  margin-bottom: 0px;
`;
export const SoRoSubOne = styled.div`
  overflow: hidden;
  padding-bottom: 68.2927%;
  position: relative;
  border-radius: 0.25rem;
`;
export const SoConImg = styled.img`
  background-color: rgb(203, 203, 204);
  object-fit: cover;
  object-position: 50% 50%;
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  border: none;
`;
export const SoConTwo = styled.div`
  margin-right: 0px;
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  justify-content: space-between;
  padding: 0.5rem;
  width: calc(75%);
`;
export const SoSubConTwo = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const WoCon = styled.div`
  color: rgb(68, 66, 63);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 1rem;
  font-weight: bold;
  line-height: 150%;
`;
export const WoHead = styled.h3`
  align-items: center;
  display: flex;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0px;
`;
export const WoAt = styled(Link)`
  color: rgb(20, 19, 19);
  text-decoration: none;
  background-color: transparent;
`;
export const WeCon = styled.div`
  margin-bottom: 0px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const WeSubCon = styled.div`
  margin-bottom: 0px;
  color: rgb(99, 96, 93);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 0.75rem;
  line-height: 140%;
`;
export const WeSpan = styled.span`
  color: rgb(99, 96, 93);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 0.75rem;
  line-height: 140%;
  cursor: pointer;
`;
export const WeSvg = styled.svg`
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 0.25rem;
  vertical-align: middle;
  height: 1rem;
  width: 1rem;
`;
export const SvgTwo = styled.div`
  margin-left: 0px;
`;
export const ArrowSvg = styled.svg`
  width: 1em;
  height: 1em;
  fill: none;
  overflow-clip-margin: content-box;
  overflow: hidden;
  cursor: pointer;
`;
export const OtConTwo = styled.div`
  color: rgb(99, 96, 93);
`;
export const QrWrap = styled.div`
  margin-bottom: 0px;
`;
export const QrCon = styled.div`
  margin-bottom: 0px;
`;
export const QrUli = styled.ul`
  place-items: stretch;
  display: grid;
  list-style: none;
  margin: 0px;
  padding: 0px;
  gap: 1.5rem;

  @media screen and (max-width: 48rem) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    gap: 1.5rem;
  }
`;
export const Qrli = styled.li`
  align-items: center;
  display: flex;
  flex-flow: row;
  justify-content: center;
  min-width: 15rem;
  position: relative;
  grid-column: 1 / -1;
`;
export const QrliWrap = styled.div`
  flex-grow: 1;
  min-width: 5.125rem;
  width: 25%;
  margin-left: 0.5rem;
`;
export const TmCon = styled.div``;
export const TmSubCon = styled.div`
  margin-bottom: 0px;
`;
export const TmReCon = styled.div`
  overflow: hidden;
  padding-bottom: 68.2927%;
  position: relative;
  border-radius: 0.25rem;
`;
export const TmImg = styled.img`
  background-color: rgb(203, 203, 204);
  object-fit: cover;
  object-position: 50% 50%;
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  border-style: none;
`;
export const QrliCon = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-flow: row;
  margin-right: 0px;
  flex-grow: 1;
  justify-content: space-between;
  padding: 0.5rem;
  width: calc(75%);
`;
export const PtOne = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5rem;
`;
export const PmOne = styled.div`
  color: rgb(68, 66, 63);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 1rem;
  font-weight: bold;
  line-height: 150%;
`;
export const PmHead = styled.h3`
  align-items: center;
  display: flex;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0px;
`;
export const PmAt = styled(Link)`
  color: rgb(20, 19, 19);
  text-decoration: none;
  background-color: transparent;
`;
export const PmTwo = styled.div`
  margin-bottom: 0px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const PtTwo = styled.div`
  margin-left: 0px;
`;
export const PtTwoSvg = styled.svg`
  width: 1em;
  height: 1em;
  fill: none;
  cursor: pointer;
`;
export const QrliOne = styled.div``;
export const LockSvg = styled.svg`
  width: 1em;
  height: 1em;
  fill: none;
  margin-left: 0.75rem;
`;
export const QmWrap = styled.div`
  margin: 0px auto;
  padding: 1.5rem;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 48rem) {
    max-width: 31rem;
  }
`;
export const QmSvg = styled.svg`
  max-width: 100%;
  margin-bottom: 0.125rem;
`;
export const QmCon = styled.div`
  line-height: 1.5rem;
  margin: 0px auto;
  max-width: 18rem;
`;
export const QmHead = styled.header`
  color: rgb(252, 85, 0);
`;
export const QmHeadSpan = styled.span`
  line-height: 1.5rem;
  text-align: center;
  color: rgb(75, 76, 77);
  font-size: 16px;
`;
export const QmSpan = styled.span`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;
export const QmAt = styled(Link)`
  display: inline-block;
  text-decoration: none;
  border: 0.125rem solid transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  height: 3rem;
  line-height: 1.1em;
  max-width: 20.4375rem;
  overflow: hidden;
  padding: calc((2.75rem - 1.1em) / 2) 1.5rem;
  position: relative;
  text-overflow: ellipsis;
  transition: color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    background-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    border-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    box-shadow 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    transform 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s;
  user-select: none;
  white-space: nowrap;
  background: rgb(255, 115, 0);
  border-radius: 2rem;
  color: rgb(255, 255, 255);
  opacity: 1;
  margin-top: 1rem;
  margin-bottom: 0px;
`;
export const YsWrap = styled.div`
  margin: 0px auto;
  max-width: 100%;
  padding: 1.5rem;
  width: 100%;

  @media screen and (max-width: 48rem) {
    max-width: 31rem;
  }
`;
export const YsSubWrap = styled.div`
  color: rgb(75, 76, 77);
  font-size: 16px;
`;
export const YsConOne = styled.div`
  color: rgb(68, 66, 63);
  margin-bottom: 1rem;
`;
export const YsHeadOne = styled.h2`
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.03em;
  line-height: 110%;
  margin-top: 0px;
  margin-bottom: 0px;
`;
export const YsConTwo = styled.div`
  margin-bottom: 0px;
`;
export const YsTwoAt = styled(Link)`
  background-color: rgb(255, 206, 0);
  border-radius: 0.5rem;
  color: inherit;
  display: grid;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  grid-template-columns: 4rem 1fr;
  min-height: 5rem;
  overflow: hidden;

  @media screen and (max-width: 48rem) {
    grid-template-columns: 5rem 1fr;
    min-height: 7rem;
  }
`;
export const YsTwoRe = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const YsTwoSvg = styled.svg`
  width: 1em;
  height: 1em;
  overflow-clip-margin: content-box;
  overflow: hidden;
`;
export const YsTwoReSvg = styled.svg`
  bottom: 0px;
  position: absolute;
  right: 0px;
  width: 72;
  height: 72;
  fill: none;
`;
export const YsTwoSub = styled.div`
  background: transparent;
  border-radius: 0.5rem;
  color: rgb(68, 66, 63);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.75rem 3.5rem 0.75rem 0px;
`;
export const YsTwoQb = styled.div`
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-weight: bold;
  letter-spacing: -0.03em;
  line-height: 1.5rem;
  margin: 0px 0px 0.25rem;

  @media screen and (max-width: 48rem) {
    font-size: 1.25rem;
  }
`;
export const YsTwoQd = styled.div`
  margin-bottom: 0px;
`;
export const Gum = styled.div`
  margin: 0px auto;
  max-width: 100%;
  padding: 1.5rem;
  width: 100%;

  @media screen and (max-width: 48rem) {
    max-width: 31rem;
  }
`;
export const GumWrap = styled.div`
  margin-bottom: 0px;
`;
export const GumBi = styled.div`
  color: rgb(68, 66, 63);
  margin-bottom: 1rem;
`;
export const GumBiHead = styled.h2`
  color: rgb(68, 66, 63);
  margin-bottom: 1rem;
`;
export const GumTi = styled.div`
  margin-bottom: 0px;
`;
export const GumTiWrap = styled.div`
  display: grid;
  row-gap: 1.5rem;
`;
export const GumTiAt = styled(Link)`
  display: block;
  position: relative;
  color: inherit;
  text-decoration: inherit;
  background-color: transparent;
`;
export const GumMe = styled.div`
  align-items: flex-end;
  border-radius: 0.75rem;
  display: grid;
  grid-template-columns: 1fr minmax(0px, 7rem);
  overflow: hidden;
  background-color: rgb(249, 244, 242);
`;
export const GumMeOne = styled.div`
  background: transparent;
  border-radius: 0.5rem;
  color: rgb(68, 66, 63);
  padding: 1.5rem;
  align-self: flex-start;
`;
export const GumMeSubOne = styled.div`
  line-height: 120%;
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-weight: bold;
  letter-spacing: -0.03em;
  margin-bottom: 0.25rem;
`;
export const GumMeReOne = styled.div`
  margin-bottom: 0px;
  @media screen and (max-width: 48rem) {
    font-size: 1rem;
  }
`;
export const GumMeTwo = styled.div`
  display: block;
`;
export const GumMeTwoCon = styled.div`
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
`;
export const GumMeImg = styled.img`
  background-color: transparent;
  object-fit: cover;
  object-position: 50% 50%;
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  border-style: none;
`;
