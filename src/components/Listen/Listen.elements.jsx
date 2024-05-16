import { Link } from "react-router-dom";
import styled from "styled-components";

export const LisWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: min-content;
  color: rgb(75, 76, 77);
  font-size: 16px;
  padding: 0;
  margin: 0;
  direction: rtl;
`;
export const LisMain = styled.div`
  height: 100%;
  display: block;
`;
export const LisCon = styled.div`
  margin-top: -1rem;
`;
export const LisSubCon = styled.div``;
export const LisGm = styled.div`
  margin: 0px auto;
  padding: 1.5rem 1.5rem 0 1.5rem;
  width: 100%;
  position: relative;
  @media screen and (max-width: 48rem) {
    max-width: 31rem;
  }
`;
export const LisGmCon = styled.div`
  padding: 0.5rem;
  position: absolute;
  z-index: 10;
`;
export const LisGmSpan = styled.span`
  text-align: center;
  vertical-align: text-top;
`;
export const LisGmSvg = styled.svg`
  width: 1em;
  height: 1em;
  fill: none;
`;
export const LisGmBut = styled.button`
  border: 0.125rem solid rgb(229, 231, 236);
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.1em;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  transition: color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    background-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    border-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    box-shadow 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    transform 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s;
  user-select: none;
  white-space: nowrap;
  background: rgb(255, 255, 255);
  color: rgb(68, 66, 63);
  opacity: 1;
  border-radius: 50%;
  height: 3rem;
  max-width: 3rem;
  padding: calc((2.75rem - 1.1em) / 2);
  width: 3rem;
  box-shadow: rgba(65, 61, 69, 0.2) 0px 0.125rem 0px;
`;
export const LisGmLis = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;
export const LisGmList = styled.li`
  cursor: pointer;
  list-style: none;
  min-width: 8rem;
  position: relative;
`;
export const LisRmCon = styled.div`
  margin-bottom: 1.5rem;
`;
export const LisRmSub = styled.div`
  box-sizing: inherit;
`;
export const LisRmUb = styled.div`
  margin-bottom: 0px;
`;
export const LisRmIb = styled.div`
  overflow: hidden;
  padding-bottom: 66.6667%;
  position: relative;
  border-radius: 0.5rem;
`;
export const LisRmImg = styled.img`
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
export const LisTlCon = styled.div`
  margin-bottom: 0px;
`;
export const LisTlSub = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const LisTlRm = styled.div`
  color: rgb(68, 66, 63);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-weight: bold;
  letter-spacing: -0.055em;
  line-height: 110%;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 48rem) {
    font-size: 2rem;
  }
`;
export const LisTlHead = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  line-height: 2rem;
  margin: 0px;
  width: 100%;
  text-align: center;
`;
export const LisTlSpan = styled.span`
  box-sizing: inherit;

  @media screen and (max-width: 48rem) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;
export const LisBl = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  justify-content: center;
`;
export const LisBlCon = styled.div`
  color: rgb(99, 96, 93);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 140%;
`;
export const LisBlSvg = styled.svg`
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 0.25rem;
  vertical-align: middle;
  height: 1rem;
  width: 1rem;
`;
export const LisBlSpan = styled.span`
  vertical-align: middle;
  color: rgb(99, 96, 93);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 140%;
`;
export const LisBlPara = styled.p`
  color: rgb(68, 66, 63);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 1rem;
  font-weight: normal;
  line-height: 143%;
  margin-bottom: 0px;
`;
export const Line = styled.div`
  margin: 0px auto;
  padding: 1.5rem;
  width: 100%;

  @media screen and (max-width: 48rem) {
    max-width: 31rem;
  }
`;
export const LineHr = styled.hr`
  border-right: none;
  border-bottom: none;
  border-left: none;
  border-image: initial;
  border-top: 0.0625rem solid rgb(229, 231, 236);
  margin: 1rem 0px;
  box-sizing: content-box;
  height: 0px;
  overflow: visible;
`;
export const Speaker = styled.div`
  margin: 0px auto;
  max-width: 100%;
  padding: 1rem;
  width: 100%;
`;
export const SpeField = styled.fieldset`
  border: 0px;
  padding: 0px;
`;
export const SpeLeg = styled.legend`
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0px;
  white-space: normal;
  width: 100%;
`;
export const SpeLegHe = styled.h2`
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.03em;
  color: rgb(20, 19, 19);
  line-height: 1.1;

  margin-top: 0px;
  text-align: center;
`;
export const SpeFieldCon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 48rem) {
  }
`;
export const SpeSp = styled.div`
  display: grid;
  column-gap: 0.5rem;
  grid-template-columns: 3rem minmax(max-content, 20rem);
`;
export const SpeSpCon = styled.div`
  display: inherit;
`;
export const SpeSpSuCon = styled.div`
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
  border-radius: 50%;
  filter: grayscale(100%);
`;
export const SpeSpImg = styled.img`
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
export const SpeKp = styled.div`
  display: block;
`;
export const SpeKpIn = styled.input`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  width: 1px;
`;
export const SpeKpLab = styled.div`
  border: 0.125rem solid rgb(229, 231, 236);
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
  background: rgb(255, 255, 255);
  border-radius: 2rem;
  color: rgb(68, 66, 63);
  opacity: 1;
  display: block;
  width: 100%;
  text-align: center;

  &:active {
    background-color: black;
  }
`;

export const ParagrWr = styled.div`
  direction: ltr;
  color: #4e4e4f;
  border: 0.125rem solid rgb(229, 231, 236);
  font-size: 1rem;
  font-weight: bold;
  height: auto; /* Adjust height to accommodate multiline text */
  line-height: 1.1em;
  overflow: hidden; /* Allow text to be hidden if overflowing vertically */
  padding: 10px 10px 10px 10px;
  position: relative;
  text-overflow: ellipsis; /* Remove this if you want text to wrap */
  transition: color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    background-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    border-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    box-shadow 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    transform 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s;
  white-space: normal;
  background: rgb(255, 255, 255);
  border-radius: 2rem;
  opacity: 1;
  display: block;
  width: 100%;
  text-align: center;
`;

export const AdBut = styled.button`
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
  background: rgb(249, 244, 242);
  border-radius: 2rem;
  color: rgb(68, 66, 63);
  opacity: 1;
  display: block;
  width: 100%;
  margin: 0px auto;
`;

export const AdSpan = styled.span`
  text-align: center;
  vertical-align: text-top;
`;
export const Sig = styled.section`
  text-align: center;
  vertical-align: text-top;
  margin-right: 2rem;
  margin-left: 2rem;

  @media screen and (max-width: 48rem) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;
export const SigWrap = styled.div`
  margin: 0px auto;
  padding: 1.5rem;
  width: 100%;
  background: rgb(255, 255, 255);
  border: 0.0625rem solid rgb(229, 231, 236);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 48rem) {
    max-width: 31rem;
  }
`;
export const SigCon = styled.div`
  display: block;
`;
export const SigSubCon = styled.div`
  color: rgb(68, 66, 63);
  margin-bottom: 1rem;
`;
export const SigSubHead = styled.h2`
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.03em;
  line-height: 110%;
  margin-top: 0px;
  margin-bottom: 0.75rem;
`;
export const SigSubHd = styled.div`
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 140%;
  margin-bottom: 0px;
`;
export const SigLe = styled.div`
  margin-bottom: 0px;
`;
export const SigLeGr = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  gap: 0.75rem calc((100% - 15rem) / 4);
  width: 100%;
  grid-template-columns: repeat(5, max-content);
  @media screen and (max-width: 48rem) {
    column-gap: calc((100% - 15rem) / 4);
    grid-template-columns: repeat(5, max-content);
  }
`;
export const SigLeCon = styled.div`
  text-align: center;
`;
export const SigLeBut = styled.button`
  border: 0.125rem solid rgb(229, 231, 236);
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.1em;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  transition: color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    background-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    border-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    box-shadow 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    transform 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s;
  user-select: none;
  white-space: nowrap;
  height: 3rem;
  max-width: 3rem;
  padding: calc((2.75rem - 1.1em) / 2);
  width: 3rem;
  border-radius: 50%;
`;

export const SigLeSpan = styled.span`
  text-align: center;
  vertical-align: text-top;
  opacity: 0.5;
`;
export const SigLeSvg = styled.svg`
  width: 1em;
  height: 1em;
  fill: none;
`;
export const Stl = styled.div`
  margin: 0px auto;
  max-width: 100%;
  padding: 1.5rem;
  width: 100%;
`;
export const StlWrap = styled.div`
  display: block;
`;
export const StlTo = styled.div`
  color: rgb(68, 66, 63);
  margin-bottom: 1rem;
`;
export const StlToHead = styled.h2`
  margin-bottom: 0px;
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: -0.03em;
  line-height: 110%;
  margin-top: 0px;
`;
export const StlRo = styled.div`
  margin-bottom: 0px;
`;
export const StlRoList = styled.ul`
  place-items: stretch;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  list-style: none;
  margin: 0px;
  padding: 0px;
`;
export const StlRoLi = styled.li`
  cursor: pointer;
  list-style: none;
  min-width: 8rem;
  position: relative;
`;
export const StlRoCon = styled.div`
  margin-bottom: 0.5rem;
`;
export const StlRoSub = styled.div`
  display: block;
`;
export const StlRoSu = styled.div`
  margin-bottom: 0px;
`;
export const StlRoSt = styled.div`
  overflow: hidden;
  padding-bottom: 66.6667%;
  position: relative;
  border-radius: 0.25rem;
`;
export const StlRoImg = styled.img`
  background-color: rgb(203, 203, 204);
  object-fit: cover;
  object-position: 50% 50%;
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
`;
export const StlRoTi = styled.div`
  margin-bottom: 0px;
`;
export const StlRoTie = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StlRoTim = styled.div`
  color: rgb(68, 66, 63);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 1rem;
  font-weight: bold;
  line-height: 150%;
  margin-bottom: 0.125rem;
`;
export const StlRoTimHe = styled.h3`
  align-items: center;
  display: flex;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
export const StlRoTimSvg = styled.svg`
  width: 1em;
  height: 1em;
  fill: none;
`;
export const StlRoTimAt = styled.a`
  color: rgb(20, 19, 19);
  text-decoration: none;
  background-color: transparent;
`;
export const StlRoTiq = styled.div`
  margin-bottom: 0px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StlRoTiqCon = styled.div`
  color: rgb(99, 96, 93);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 0.75rem;
  line-height: 140%;
`;
export const StlRoTiqSvg = styled.svg`
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 0.25rem;
  vertical-align: middle;
  height: 1rem;
  width: 1rem;
`;
export const StlRoTiqSpan = styled.span`
  vertical-align: middle;
  color: rgb(99, 96, 93);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 0.75rem;
  line-height: 140%;
`;
export const StlRoTiqPa = styled.p`
  color: rgb(68, 66, 63);
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 0.75rem;
  line-height: 140%;
`;
export const ErFoot = styled.div`
  margin: 0px auto;
  max-width: 100%;
  padding: 1.5rem;
  width: 100%;
  position: relative;
`;
export const ErFooter = styled.footer`
  bottom: 0px;
  left: 0px;
  position: fixed;
  width: 100%;
  z-index: 10;
`;
export const Footer = styled.div`
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
`;
export const FooterCon = styled.div`
  margin: 0px auto;
  max-width: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: min-content;
  padding: 1.5rem;
`;
export const FooterSub = styled.div`
  display: block;
`;
export const FooterAt = styled.button`
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
export const FooterSpan = styled.span`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;
export const FooterSubSpan = styled.span`
  margin-right: 0px;
  background-color: transparent;
  border: none;
  color: inherit;
`;
export const FooterSvg = styled.svg`
  margin-right: 0.75rem;
`;
