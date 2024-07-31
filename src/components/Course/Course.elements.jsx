import { Link } from "react-router-dom";
import styled from "styled-components";

export const CoWr = styled.div`
  direction: rtl;
  position: relative;
  z-index: 1;
  background-color: #fff0e5;
`;
export const CoCon = styled.div`
  display: block;
  background-color: #fff0e5;
  position: relative;
  top: 2rem;
  z-index: 2;
`;
export const CoNav = styled.nav`
  display: block;
`;
export const CoBut = styled.button`
  width: calc(100vw - 8rem);
  margin-right: 4rem;
  cursor: pointer;
  background: none;
  padding: 0;
  text-decoration: none;
  box-shadow: none;
  transition: border-color 150ms ease-in, color 150ms ease-in,
    background-color 150ms ease-in, box-shadow 150ms ease-in;
  border: 2px solid #10162f;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  position: relative;
  border-radius: 4px;
  font-weight: 700;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 1rem;
  min-width: 40px;
  height: 40px;
  border-color: #10162f;
  color: #10162f;
  background-color: transparent;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  overflow: visible;
`;

export const SecWr = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  color: #10162f;
  font-weight: 400;
  line-height: 1.5;
  text-align: right;

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const SecCon = styled.div`
  margin-bottom: 0.75rem;
`;
export const SecGr = styled.div`
  grid-template-columns: repeat(12, minmax(0, 1fr));
  display: grid;
  width: 100%;
`;
export const SecFl = styled.div`
  display: flex;
`;
export const SecFlAll = styled.div`
  width: 100%;
`;
export const SubCon = styled.div`
  min-height: calc(100vh - 4rem);
  @media screen and (max-width: 900px) {
  }
`;
export const SubNon = styled.div`
  display: block;
  unicode-bidi: isolate;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  text-align: right;
`;

export const SubFir = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    margin-top: 2.5rem;
  }
`;
export const CurCon = styled.div`
  color: #10162f;
  border: none;
  border-color: #10162f;
  padding: 0;
  background-color: #ffffff;
  margin-bottom: 1rem;
  border-radius: 16px;
`;
export const CurSub = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: #10162f;
  overflow: hidden;
  display: flex;
  position: relative;
  height: 36px;
  border-radius: 18px;
  background-color: transparent;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;
export const CurBo = styled.div`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 60%;
  box-shadow: 0.5px 0 0 0.5px #10162f;
  transition: width 0.5s;
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
  color: #10162f;
  background-color: #ffd300;
`;
export const MidWr = styled.div`
  border: 1px solid #10162f;
  border-top: none;
  border-bottom: none;
  padding: 0;
  width: 100%;
`;
export const MidCo = styled.div`
  display: grid;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  grid-template-rows: repeat(3, min-content);
`;
export const MidSub = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;
export const BotWr = styled.div`
  display: flex;
  border: 1px solid #10162f;
  width: 100%;
  border-radius: 0 0 16px 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BotAt = styled.a`
  cursor: pointer;
  background: none;
  padding: 0;
  text-decoration: none;
  box-shadow: none;
  transition: border-color 150ms ease-in, color 150ms ease-in,
    background-color 150ms ease-in, box-shadow 150ms ease-in;
  border: 2px solid var(--color-secondary);
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  position: relative;
  border-radius: 4px;
  border-color: transparent;
  color: #10162f;
  font-weight: 700;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  min-width: 40px;
  height: 40px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 100%;
  margin-right: 0;

  @media screen and (max-width: 768px) {
  }
`;

export const BotAtt = styled(Link)`
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
  font-weight: 700;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  min-width: 40px;
  height: 40px;
  color: #ffffff;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 100%;
  background: none;
  text-decoration: none;
  transition: border-color 150ms ease-in 0s, color 150ms ease-in 0s,
    background-color 150ms ease-in 0s, box-shadow 150ms ease-in 0s;
  border-color: transparent;
  white-space: nowrap;
  border-radius: 0px 0px 16px;
  background-color: #3a10e5;
  border-radius: 0 0 16px 16px;

  @media screen and (max-width: 768px) {
  }
`;
export const IconCon = styled.div`
  display: flex;
  padding: 0.25rem;
  margin-right: 0.75rem;
  border-radius: 50%;
  background-color: #ffffff;
`;
export const MidPa = styled.p`
  font-weight: 400;
  line-height: 1.5;
  font-size: 0.875rem;
  margin: 0;
`;
export const MidPar = styled.p`
  font-weight: 400;
  line-height: 1.5;
  font-size: 1rem;
  margin: 0;
`;
export const MidHe = styled.h3`
  font-weight: 700;
  line-height: 1.3;
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;
export const CurSp = styled.span`
  font-weight: bold;
  padding: 0.5rem;
  text-align: right;
  width: 100%;
`;
export const CurLa = styled.label`
  border: none;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  width: 1px;
  height: 1px;
  position: absolute;
  right: -9999px;
  color: transparent;
  margin: 0;
`;
export const SubFirHe = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;
export const SubFirHea = styled.h2`
  font-weight: 700;
  line-height: 1.3;
  font-size: 1.625rem;
  margin: 0;
  margin-bottom: 0.5rem;
  color: black;
`;
export const ViBut = styled.button`
  cursor: pointer;
  background: none;
  padding: 0;
  text-decoration: none;
  box-shadow: none;
  color: var(--color-text);
  transition: border-color 150ms ease-in, color 150ms ease-in,
    background-color 150ms ease-in, box-shadow 150ms ease-in;
  border: 2px solid var(--color-secondary);
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  position: relative;
  border-radius: 4px;
  border-color: transparent;
  color: #3a10e5;
  font-weight: 700;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 1rem;
  min-width: 40px;
  height: 40px;
  width: fit-content;
  column-gap: 0.5rem;
`;
export const SubSe = styled.div`
  margin-bottom: 4rem;
`;
export const SubSeHe = styled.h2`
  line-height: 1.3;
  font-size: 1.625rem;
  margin: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const GrWr = styled.div`
  display: block;
  unicode-bidi: isolate;

  @media screen and (max-width: 768px) {
  }
`;
export const GrCon = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
  }
`;
export const GrSub = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
  }
`;
export const GrSpa = styled.span`
  display: inline-block;
  margin: 0;
  font-family: "Suisse", "Apercu", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const GrSpan = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  margin-right: 1rem;

  @media screen and (max-width: 768px) {
  }
`;
export const GrLin = styled.a`
  cursor: pointer;
  background: none;
  padding: 0;
  text-decoration: none;
  box-shadow: none;
  transition: border-color 150ms ease-in, color 150ms ease-in,
    background-color 150ms ease-in, box-shadow 150ms ease-in;
  border: 2px solid #10162f;
  border-color: transparent;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  position: relative;
  border-radius: 4px;
  font-weight: 700;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 1rem;
  min-width: 40px;
  height: 40px;
  border-color: #3a10e5;
  color: #3a10e5;
  background-color: transparent;

  @media screen and (max-width: 768px) {
  }
`;
export const GrSu = styled.div`
  display: flex;
  border-width: 1px;
  border-style: solid;
  border-color: #10162f;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  position: relative;
  flex-direction: column;
  align-items: start;

  @media screen and (max-width: 768px) {
  }
`;
export const GrSp = styled.span`
  font-size: inherit;
  display: inline-block;
  margin: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const GrAt = styled.a`
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  text-decoration: none;
  box-shadow: none;
    background-color 150ms ease-in, box-shadow 150ms ease-in;
  transition: border-color 150ms ease-in, color 150ms ease-in,
    background-color 150ms ease-in, box-shadow 150ms ease-in;
  border: 2px solid var(--color-secondary);
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  position: relative;
  border-radius: 4px;
  border-color: transparent;
  color: #3A10E5;
  font-weight: 700;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 1rem;
  min-width: 40px;
  height: 40px;
  margin-right: 0.25rem;

  @media screen and (max-width: 768px) {
  }
`;
export const SubTh = styled.div``;
export const SubFo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;
export const ExTi = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;
export const ExLi = styled.li`
  grid-template-columns: minmax(0, 1fr);
  display: -ms-grid;
  display: grid;
  grid-column-end: span 12;
`;
export const ExAt = styled.a`
  border: none;
  padding: 0;
  font-size: inherit;
  white-space: initial;
  box-shadow: none;
  display: inline-block;
  position: relative;
  color: #10162f;
  background-color: transparent;
  text-decoration: none;
`;
export const ExMa = styled.div`
  border: 1px solid #10162f;
  border-color: rgba(16, 22, 47, 0.86);
  padding: 1.5rem;
  color: #10162f;
  background-color: #ffffff;
  transition: box-shadow 200ms ease, transform 200ms ease;
  box-shadow: 0px 0px 0 currentColor;
  position: relative;
`;
export const ExLe = styled.div`
  display: flex;
`;
export const ExRi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;
export const ExSp = styled.span`
  font-size: inherit;
  display: inline-block;
  margin: 0;
  font-weight: bold;
  text-align: right;
  margin-right: 1rem;
`;
export const ExSpa = styled.span`
  font-size: inherit;
  text-overflow: ellipsis;
  margin: 0;
  text-align: right;
  overflow: hidden;
  margin-right: 1rem;
`;
export const ExKa = styled.div`
  display: flex;
  max-width: 500px;
  flex-direction: column;
  max-width: 340px;
`;
export const ExMaSub = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ExTiHe = styled.h2`
  font-weight: 700;
  line-height: 1.3;
  font-size: 1.625rem;
  margin: 0;
  margin-bottom: 0.5rem;
`;
export const ExUl = styled.ul`
  grid-template-columns: repeat(12, minmax(0, 1fr));
  display: -ms-grid;
  display: grid;
  width: 100%;
  padding: 0;
  row-gap: 1rem;
  grid-column-gap: 1rem;
  column-gap: min(calc(100% / 11), 1rem);
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    display: grid;
    width: 100%;
    padding: 0;
    row-gap: 1rem;
    grid-column-gap: 1rem;
    column-gap: min(calc(100% / 11), 1rem);
    margin-top: 1rem;
  }
`;
export const SubFi = styled.div`
  margin-bottom: 1.5rem;
  display: block;
  width: 100%;
`;
export const TriWr = styled.div`
  display: flex;
  border: solid;
  border-width: 1px;
  border-color: #10162f;
  background: #fffae5;
  padding: 1.5rem;
  gap: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 4rem;
  border-radius: 8px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;
export const TriCon = styled.div`
  display: flex;
  gap: 0.25rem;
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const TriHe = styled.h2`
  font-weight: 700;
  line-height: 1.3;
  font-size: 1.25rem;
  margin: 0;
`;
export const TriSp = styled.span`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  font-size: 0.875rem;
  margin: 0;
`;
export const TriAt = styled.a`
  cursor: pointer;
  background: none;
  padding: 0;
  text-decoration: none;
  box-shadow: none;
  transition: border-color 150ms ease-in, color 150ms ease-in,
    background-color 150ms ease-in, box-shadow 150ms ease-in;
  border: 2px solid var(--color-secondary);
  border-color: transparent;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  position: relative;
  border-radius: 4px;
  font-weight: 700;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 1rem;
  min-width: 40px;
  height: 40px;
  color: #ffffff;
  background-color: #10162f;
  align-self: stretch;
`;
