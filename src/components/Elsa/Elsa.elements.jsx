import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const ElsAll = styled.div`
  width: 100%;
  font-size: 10px;
  width: 100%;
  height: calc(100vw * (720 / 1440));
  font-size: 10px;
  background-color: #201866;

  @media screen and (max-width: 768px) {
    height: 60em;
  }
`;
export const ElsCon = styled.div`
  position: relative;
  height: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const ElsLe = styled.label`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  user-select: none;
  position: relative;
  z-index: 9;
`;
export const ElsRwe = styled.label`
  top: 38%;
  left: 5.5%;
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  user-select: none;
  position: absolute;
  z-index: 9;
`;
export const ElsSub = styled.div`
  display: flex;
  height: calc(100vw * (720 / 1440));
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 4 !important;
  width: 100%;
  overflow: hidden;
  opacity: 1;
  transition: all 0.5s ease;
  position: relative;
  font-size: 6px;
  background: url(https://d1t11jpd823i7r.cloudfront.net/homepage/elsa-ai-bg.svg);
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    z-index: 4 !important;
    width: 100%;
    overflow: hidden;
    transition: all 0.5s ease;
    position: absolute;
  }
`;
export const OneWr = styled.div`
  position: relative;
  top: -6.2em;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    position: unset;
    text-align: center;
    width: 100%;
    max-width: 343px;
    font-size: 12px !important;
  }
`;
export const OnePa = styled.p`
  font-size: 4.8em;
  line-height: 1.22em;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5em;

  @media screen and (max-width: 768px) {
    white-space: unset;
    font-size: 2.5em !important;
    line-height: 1.3em;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5em;
  }
`;
export const OneAt = styled.a`
  background: linear-gradient(150deg, #22f8e9 0%, #7f2aff 100%) !important;
  line-height: 1.6em;
  font-size: 2.2em;
  font-weight: 600;
  border-radius: 123px;
  padding: 1.04em 3.18em;
  color: #fff;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    padding: 0;
    line-height: 1.5em;
    font-size: 2em;
    width: 9em;
    height: 2.25em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 123px;
    background: linear-gradient(150deg, #22f8e9 0%, #7f2aff 100%) !important;
  }
`;
export const OneSp = styled.span`
  background: var(
    --dark-gradients-07,
    linear-gradient(314deg, #713ff4 0%, #cd55ff 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const OnePar = styled.p`
  font-size: 2.4em;
  line-height: 1.5em;
  font-weight: 400;
  opacity: 0.8;
  color: #fff;
  margin-bottom: 3em;
  padding-right: 3em;

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
    line-height: 1.4em;
    margin-bottom: 2em;
    padding: 0;
    font-weight: 400;
    opacity: 0.8;
    color: #fff;
  }
`;
export const ElsRe = styled.div`
  padding: 9.35% 4em 0 !important;
  width: 100%;
  max-width: 81vw;
  gap: 0;
  margin: 0;
  height: 100%;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    padding: 0 0 0 !important;
    align-items: center;
    flex-direction: column;
    max-width: 95vw;
    justify-content: unset;
    width: 100%;
    gap: 0;
    margin: 0;
    height: 100%;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
  }
`;
export const VidRe = styled.div`
  width: 41.5vw;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    font-size: 12px !important;
  }
`;
export const VideRe = styled.video`
  display: block;
  width: 100%;
  object-fit: contain;
  overflow-clip-margin: content-box;
  overflow: clip;
  font-size: 6px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    display: block;
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
  background: #00bfb2;
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
  margin: 3rem;
  font-size: 16px;
  overflow: hidden;
  outline: none;
  position: relative;
  background: #000;
  line-height: 1.25em;
  z-index: 1;
  margin-top: 1rem;
  border: 0.4rem solid #22f8e9;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    margin: 0rem;
  }
`;
export const VidBo = styled.div`
  background: #09a59a;
  width: 100%;
  position: unset;
  height: 55px;
  font-size: 16px;
  display: flex;
  line-height: 1.5em;

  @media screen and (max-width: 768px) {
  }
`;
export const VidTi = styled.div`
  background: #09a59a;
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
export const BotWr = styled.div`
  bottom: 1.6em;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6em;
  z-index: 9;
  gap: 1.6em;
`;
export const BotCo = styled.div`
  background: #fff !important;
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #ffffff21;
`;
export const BotCon = styled.div`
  background: #fff !important;
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #ffffff21;
`;
export const SecWr = styled.div`
  width: 100%;
  overflow: hidden;
  opacity: 1;
  transition: all 0.5s ease;
  position: relative;
  font-size: 6px;
  top: 74px;
  background: url(https://d1t11jpd823i7r.cloudfront.net/homepage/header-bg-desk.svg);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 3;
  display: flex;
  height: calc(100vw * (720 / 1440));
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
export const BanWr = styled.div`
  background: linear-gradient(180deg, #29f4ff -46.11%, #5257ff 151.97%);
  padding: 0.96% 0;
  text-align: center;
  color: #fff;
  font-weight: 700;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  row-gap: 3px;
  position: relative;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    padding: 2% 0;
  }
`;
export const BanSp = styled.div`
  font-size: 14px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  margin-right: 8px;
`;
export const BanAt = styled.div`
  color: #478dff;
  background-color: #fff;
  padding: 0.18em 1em;
  border-radius: 3em;
  font-weight: 600;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
export const SecCon = styled.div`
  width: 100%;
  max-width: 81vw;
  gap: 0;
  margin: 0;
  padding: 5.35% 4em 0;
  height: 100%;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  justify-content: space-around;
`;
export const SecSi = styled.div`
  max-width: 38vw;
`;
export const SecPa = styled.p`
  font-size: 4.8em;
  line-height: 1.22em;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5em;
`;
export const SecPara = styled.p`
  font-size: 2.4em;
  line-height: 1.5em;
  font-weight: 400;
  opacity: 0.8;
  color: #fff;
  margin-bottom: 3em;
  padding-right: 3em;
`;
export const SecAt = styled.a`
  line-height: 1.6em;
  font-size: 2.2em;
  font-weight: 600;
  background: linear-gradient(180deg, #29f4ff -46.11%, #5257ff 151.97%);
  border-radius: 123px;
  padding: 1.04em 3.18em;
`;
export const SecVid = styled.div`
  margin-right: -3.2em;
  position: relative;
  top: -3.2em;
`;
