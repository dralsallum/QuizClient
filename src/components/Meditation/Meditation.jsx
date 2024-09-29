import React, { useEffect, useState } from "react";
import {
  ArrowSvg,
  CorCon,
  CorHead,
  CorImg,
  CorImgCon,
  CorMain,
  CorSu,
  CorSub,
  CorWrap,
  Foot,
  FootCon,
  FootLiCon,
  FootLiIcon,
  FootLiTex,
  Footer,
  FooterLiLe,
  FooterLiRi,
  FooterList,
  FooterNav,
  FooterPin,
  FooterWrap,
  Gum,
  GumBi,
  GumBiHead,
  GumMe,
  GumMeImg,
  GumMeOne,
  GumMeReOne,
  GumMeSubOne,
  GumMeTwo,
  GumMeTwoCon,
  GumTi,
  GumTiAt,
  GumTiWrap,
  GumWrap,
  LockSvg,
  MedWrap,
  MugSpan,
  MugSubSpan,
  NavSvg,
  OtConOne,
  OtConReOne,
  OtConSubOne,
  OtConTwo,
  OtLi,
  OtLiBut,
  OtLiReSpan,
  OtLiSpan,
  OtLiSubSpan,
  OtOneLi,
  OtOneList,
  OtSubWrap,
  OtWrap,
  OtWrapLi,
  PmAt,
  PmHead,
  PmOne,
  PmTwo,
  PtOne,
  PtTwo,
  PtTwoSvg,
  QmAt,
  QmCon,
  QmHead,
  QmHeadSpan,
  QmSpan,
  QmSvg,
  QmWrap,
  QrCon,
  QrUli,
  QrWrap,
  Qrli,
  QrliCon,
  QrliWrap,
  SoConImg,
  SoConOne,
  SoConTwo,
  SoRoOne,
  SoRoSubOne,
  SoSuOne,
  SoSubConTwo,
  SuAt,
  SuConOne,
  SuConOneSp,
  SuConTwo,
  SuConTwoHead,
  SuConTwoSpan,
  SuSubWrap,
  SuSvg,
  SuWrap,
  SvgTwo,
  TmCon,
  TmImg,
  TmReCon,
  TmSubCon,
  UteCon,
  UteConSpan,
  UteSvg,
  UteWrap,
  WeCon,
  WeSpan,
  WeSubCon,
  WeSvg,
  WoAt,
  WoCon,
  WoHead,
  YsConOne,
  YsConTwo,
  YsHeadOne,
  YsSubWrap,
  YsTwoAt,
  YsTwoQb,
  YsTwoQd,
  YsTwoRe,
  YsTwoReSvg,
  YsTwoSub,
  YsTwoSvg,
  YsWrap,
} from "./Meditation.elements";
import feature from "../../utils/Feature.json";
import feature2 from "../../utils/Feature2.json";
import NavAud from "../NavAud/NavAud";

const Meditation = () => {
  const [showComponent, setShowComponent] = useState("recent");
  const [focusTab, setFocusTab] = useState("recent");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MedWrap>
      <NavAud />
      <CorMain>
        <CorCon>
          <CorHead>القصص القصيرة</CorHead>
          <CorWrap>
            <CorSub>
              <CorSu>
                <CorImgCon>
                  <CorImg
                    src="https://hs-prod-content.imgix.net/illus-single-kessonga-moving_beyond_shame-20211027-kh.png?fm=png32&w=684&fs=png&ixlib=js-1.4.1&s=0e90312e2af7c2a127ed1f6a374caaad"
                    alt=""
                  />
                </CorImgCon>
              </CorSu>
            </CorSub>
          </CorWrap>
        </CorCon>
        <OtWrap>
          <OtSubWrap>
            <OtWrap>
              <OtWrapLi>
                <OtLi>
                  <OtLiBut
                    onClick={() => {
                      setShowComponent("recent");
                      setFocusTab("recent");
                    }}
                    className={focusTab === "recent" ? "focus" : ""}
                  >
                    <OtLiSpan>
                      <OtLiSubSpan>
                        <OtLiReSpan>الاحدث</OtLiReSpan>
                      </OtLiSubSpan>
                    </OtLiSpan>
                  </OtLiBut>
                </OtLi>
                <OtLi>
                  <OtLiBut
                    onClick={() => {
                      setShowComponent("featured");
                      setFocusTab("featured");
                    }}
                    className={focusTab === "featured" ? "focus" : ""}
                  >
                    <OtLiSpan>
                      <OtLiSubSpan>
                        <OtLiReSpan>المميزات</OtLiReSpan>
                      </OtLiSubSpan>
                    </OtLiSpan>
                  </OtLiBut>
                </OtLi>
              </OtWrapLi>

              <OtSubWrap>
                {showComponent === "recent" && (
                  <OtConOne>
                    <OtConSubOne>
                      <OtConReOne>
                        <OtOneList>
                          {feature2.map((item, index) => (
                            <Qrli to={`/story/${item.storyId}`} key={index}>
                              <QrliWrap>
                                <TmCon>
                                  <TmSubCon>
                                    <TmReCon>
                                      <TmImg src={item.image} />
                                    </TmReCon>
                                  </TmSubCon>
                                </TmCon>
                              </QrliWrap>
                              <QrliCon>
                                <PtOne>
                                  <PmOne>
                                    <PmHead>
                                      <PmAt to={item.url}>{item.header}</PmAt>
                                    </PmHead>
                                  </PmOne>
                                  <WeCon>
                                    <WeSubCon>
                                      <WeSvg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        class="css-lnnzhi"
                                      >
                                        <path
                                          transform="scale(-1, 1) translate(-16, 0)"
                                          d="M12.53 12.97c-.12 0-.25-.03-.36-.09l-1.78-.99a.753.753 0 01-.29-1.02c.2-.36.66-.49 1.02-.29l1.77.98a.753.753 0 01-.36 1.41zM10.76 5.62a.753.753 0 01-.42-1.38l1.71-1.12c.35-.23.81-.13 1.04.22.23.35.13.81-.22 1.04l-1.7 1.12c-.13.08-.27.12-.41.12zM7.51 12.9a4.84 4.84 0 01-4.12-2.28H1.75c-.41 0-.75-.33-.75-.75V6.49c0-.41.34-.75.75-.75h1.44c.84-1.6 2.48-2.61 4.32-2.61.42 0 .75.34.75.75v8.26c0 .42-.34.76-.75.76zM2.5 9.12h1.32c.28 0 .54.16.67.41.46.92 1.29 1.56 2.27 1.78V4.72c-1.07.24-1.97.99-2.39 2.05-.11.29-.39.47-.7.47H2.5v1.88zM13.58 8.83h-2.83c-.42 0-.75-.33-.75-.75s.34-.75.75-.75h2.83c.41 0 .75.34.75.75s-.34.75-.75.75z"
                                          fill="#3A3938"
                                        ></path>
                                      </WeSvg>
                                      <WeSpan>{item.subheader}</WeSpan>
                                    </WeSubCon>
                                  </WeCon>
                                </PtOne>
                                <PtTwo>
                                  <PtTwoSvg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      transform="scale(-1, 1) translate(-16, 0)"
                                      fill="currentColor"
                                      fill-rule="evenodd"
                                      d="M9.56 19.71l-1.41-1.42L14.44 12 8.15 5.71l1.41-1.42 7 7a1 1 0 010 1.41l-7 7.01z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </PtTwoSvg>
                                </PtTwo>
                              </QrliCon>
                            </Qrli>
                          ))}
                        </OtOneList>
                      </OtConReOne>
                    </OtConSubOne>
                  </OtConOne>
                )}
                {showComponent === "featured" && (
                  <OtConTwo>
                    <QrWrap>
                      <QrCon>
                        <QrUli>
                          {feature.map((item, index) => (
                            <Qrli to={`/story/${item.storyId}`} key={index}>
                              <QrliWrap>
                                <TmCon>
                                  <TmSubCon>
                                    <TmReCon>
                                      <TmImg src={item.image} />
                                    </TmReCon>
                                  </TmSubCon>
                                </TmCon>
                              </QrliWrap>
                              <QrliCon>
                                <PtOne>
                                  <PmOne>
                                    <PmHead>
                                      <PmAt to={item.url}>{item.header}</PmAt>
                                    </PmHead>
                                  </PmOne>
                                  <WeCon>
                                    <WeSubCon>
                                      <WeSvg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        class="css-lnnzhi"
                                      >
                                        <path
                                          transform="scale(-1, 1) translate(-16, 0)"
                                          d="M12.53 12.97c-.12 0-.25-.03-.36-.09l-1.78-.99a.753.753 0 01-.29-1.02c.2-.36.66-.49 1.02-.29l1.77.98a.753.753 0 01-.36 1.41zM10.76 5.62a.753.753 0 01-.42-1.38l1.71-1.12c.35-.23.81-.13 1.04.22.23.35.13.81-.22 1.04l-1.7 1.12c-.13.08-.27.12-.41.12zM7.51 12.9a4.84 4.84 0 01-4.12-2.28H1.75c-.41 0-.75-.33-.75-.75V6.49c0-.41.34-.75.75-.75h1.44c.84-1.6 2.48-2.61 4.32-2.61.42 0 .75.34.75.75v8.26c0 .42-.34.76-.75.76zM2.5 9.12h1.32c.28 0 .54.16.67.41.46.92 1.29 1.56 2.27 1.78V4.72c-1.07.24-1.97.99-2.39 2.05-.11.29-.39.47-.7.47H2.5v1.88zM13.58 8.83h-2.83c-.42 0-.75-.33-.75-.75s.34-.75.75-.75h2.83c.41 0 .75.34.75.75s-.34.75-.75.75z"
                                          fill="#3A3938"
                                        ></path>
                                      </WeSvg>
                                      <WeSpan>{item.subheader}</WeSpan>
                                    </WeSubCon>
                                  </WeCon>
                                </PtOne>
                                <PtTwo>
                                  <PtTwoSvg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      transform="scale(-1, 1) translate(-16, 0)"
                                      fill="currentColor"
                                      fill-rule="evenodd"
                                      d="M9.56 19.71l-1.41-1.42L14.44 12 8.15 5.71l1.41-1.42 7 7a1 1 0 010 1.41l-7 7.01z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </PtTwoSvg>
                                </PtTwo>
                              </QrliCon>
                            </Qrli>
                          ))}
                        </QrUli>
                      </QrCon>
                    </QrWrap>
                  </OtConTwo>
                )}
              </OtSubWrap>
            </OtWrap>
          </OtSubWrap>
        </OtWrap>
        <QmWrap>
          <QmSvg
            viewBox="0 0 636 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="css-9whsf3"
          >
            <path fill="url(#paint0_linear)" d="M0 0h636v140H0z"></path>
            <mask
              id="upsell"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="636"
              height="140"
            >
              <path fill="#FAF6F4" d="M0 0h636v140H0z"></path>
            </mask>
            <g mask="url(#upsell)">
              <path
                d="M417.181 118.248c2.301 32.394-12.572 50.766-21.525 63.644-13.952 14.876-31.634 35.21-76.536 36.292-38.101 1.522-56.84-15.417-72.533-30.181-20.48-22.761-25.827-36.242-26.859-69.768-.1-20.548 7.734-41.07 21.438-59.104 19.224-27.427 49.739-36.607 77.954-38.518 29.582-1.157 53.122 13.933 69.212 30.18 20.555 21.932 26.872 40.77 28.874 67.442"
                fill="#32AAFF"
              ></path>
              <path
                d="M402.977 118.54c1.969 27.729-10.761 43.456-18.425 54.478-11.943 12.735-27.078 30.14-65.514 31.066-32.614 1.303-48.654-13.197-62.087-25.834-17.531-19.483-22.108-31.023-22.991-59.72-.085-17.589 6.621-35.156 18.35-50.592 16.456-23.477 42.577-31.335 66.728-32.971 25.322-.99 45.471 11.926 59.245 25.834 17.594 18.773 23.001 34.898 24.715 57.729"
                fill="#fff"
              ></path>
              <path
                d="M390.28 118.805c1.673 23.558-9.142 36.919-15.653 46.284-10.146 10.818-23.005 25.606-55.66 26.392-27.707 1.107-41.335-11.212-52.747-21.948-14.894-16.553-18.782-26.356-19.533-50.737-.072-14.943 5.625-29.868 15.59-42.982 13.981-19.945 36.172-26.621 56.69-28.011 21.514-.842 38.632 10.132 50.333 21.948 14.949 15.949 19.542 29.648 20.998 49.045"
                fill="#FFCE00"
              ></path>
              <path
                d="M376.083 118.982c1.341 18.854-7.333 29.548-12.555 37.042-8.137 8.659-18.45 20.494-44.64 21.123-22.222.886-33.151-8.973-42.304-17.566-11.945-13.247-15.064-21.093-15.666-40.606-.058-11.96 4.511-23.905 12.504-34.4 11.212-15.963 29.01-21.306 45.466-22.419 17.254-.673 30.984 8.11 40.368 17.566 11.989 12.765 15.673 23.729 16.841 39.253"
                fill="#F47D31"
              ></path>
              <path
                d="M306.441 77.263a5.171 5.171 0 001.876 2.5 5.098 5.098 0 005.924 0 5.175 5.175 0 001.875-2.5M320.953 77.263a5.188 5.188 0 001.878 2.499 5.108 5.108 0 002.963.948c1.06 0 2.095-.331 2.962-.948a5.188 5.188 0 001.878-2.5M296.308 81.152a32.714 32.714 0 0022.254 8.756 32.712 32.712 0 0022.254-8.756"
                stroke="#413D45"
                stroke-width="2.21"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M472.029 64.059c-7.545-3.314-15.726-4.8-23.844-4.33-8.119.47-15.934 2.88-22.782 7.025a47.839 47.839 0 00-16.549 16.786c-4.023 6.88-6.273 14.68-6.558 22.735 2.365-6.165-7.433-11.849-13.068-8.368s-6.594 11.357-5.191 17.932c-3.397-9.736-16.032-15.317-25.283-11.17-9.252 4.147-12.941 17.047-7.381 25.807-7.32-8.363-22.488-5.115-27.518 4.386-5.03 9.5-1.485 21.958 5.784 30.361 11.891 13.734 31.031 18.167 48.736 21.796 34.506 7.058 147.875 7.267 182.37 14.327 17.581 3.599 36.673 11.901 53.079 5.529 12.138-4.717 12.507-7.572 19.057-18.686 10.256-17.419 17.31-38.574 10.74-58.182-3.535-10.542-10.757-19.684-19.173-27.08-16.224-14.237-37.96-22.766-59.117-20.922-21.157 1.844-33.017 6.916-40.865 26.253l-1.973-3.043c-11.64-17.84-30.913-32.563-50.464-41.156z"
                fill="#fff"
              ></path>
              <ellipse
                cx="38.5"
                cy="150"
                rx="52.5"
                ry="46"
                fill="#fff"
              ></ellipse>
              <path
                d="M115.732 173.615c75.019 1.007 151.285 2.06 226.14-2.464 1.275-13.024-7.139-24.34-16.862-30.875-9.724-6.535-21.713-10.132-33.48-7.18 3.137-8.973-.683-17.966-7.776-24.954-3.601-3.473-8.139-6.08-13.189-7.578a35.4 35.4 0 00-15.685-.988c2.05-10.716-4.03-22.284-14.613-27.796-10.583-5.512-24.963-4.605-34.555 2.181 4.19-6.045 1.56-14.923-5.42-18.364-6.979-3.441-16.913-.736-20.494 5.587-9.29-13.235-30.206-18.939-46.282-12.58-16.076 6.358-25.253 23.932-20.306 38.89-7.702-4.413-19.304-5.038-27.644-1.657-8.34 3.38-14.534 10.48-16.44 18.435a25.497 25.497 0 00.213 12.075c1.037 3.966 3.015 7.692 5.803 10.93-8.647-4.177-21.137-1.703-27.57 4.897-6.433 6.601-7.97 16.264-5.368 24.688.856 3.069 2.463 5.935 4.708 8.394 3.945 4.096 9.928 6.147 15.786 7.557 16.367 4.006 36.49 4.192 53.034.802z"
                fill="#fff"
              ></path>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="318.848"
                y1="140"
                x2="318.848"
                y2="14"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#F5F2ED"></stop>
                <stop offset="1" stop-color="#F5F2ED" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </QmSvg>
          <QmCon>
            <QmHead>اكتشف المزيد من الوعي</QmHead>
            <QmHeadSpan>جرّب فلونت فوكس مجاناً واستمع لقصصنا.</QmHeadSpan>
          </QmCon>
          <QmAt href="">
            <QmSpan>ابدا تجربتك المجانية</QmSpan>
          </QmAt>
        </QmWrap>
        <YsWrap>
          <YsSubWrap>
            <YsConOne>
              <YsHeadOne>هدوء اليوم</YsHeadOne>
            </YsConOne>
            <YsConTwo>
              <YsTwoAt>
                <YsTwoRe>
                  <YsTwoSvg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 40 40"
                    aria-hidden="true"
                    class="css-wmnbku"
                  >
                    <path
                      fill="currentColor"
                      d="M20 36c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16zm0 2c-9.941 0-18-8.059-18-18S10.059 2 20 2s18 8.059 18 18-8.059 18-18 18zm4-21v2a2 2 0 012 2v4a2 2 0 01-2 2h-8a2 2 0 01-2-2v-4a2 2 0 012-2v-2a4 4 0 018 0zm-2 2v-2a2 2 0 10-4 0v2h4zm-2 2a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z"
                    ></path>
                  </YsTwoSvg>
                </YsTwoRe>
                <YsTwoSub>
                  <YsTwoQb>كونك حاضرًا</YsTwoQb>
                  <YsTwoQd>الاستماع • ٣-١٠ دقائق</YsTwoQd>
                </YsTwoSub>
                <YsTwoReSvg
                  width="72"
                  height="72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="css-1bz9pq5"
                >
                  <mask
                    id="illo"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="72"
                    height="72"
                  >
                    <path d="M0 0h72v72H0V0z" fill="#C4C4C4"></path>
                  </mask>
                  <g mask="url(#illo)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M72 .137V72H.137C.16 32.32 32.321.16 72 .137z"
                      fill="#FF7E1D"
                    ></path>
                    <path
                      d="M46.525 21.133a5.796 5.796 0 01-5.44-3.834.909.909 0 01.549-1.154.909.909 0 011.154.55 3.972 3.972 0 003.737 2.638 3.972 3.972 0 003.738-2.638.909.909 0 011.154-.55.909.909 0 01.55 1.154 5.796 5.796 0 01-5.442 3.834zM60.28 21.133a5.796 5.796 0 01-5.442-3.834.909.909 0 01.55-1.154.909.909 0 011.154.55 3.972 3.972 0 003.737 2.638 3.972 3.972 0 003.738-2.638.909.909 0 011.154-.55.909.909 0 01.55 1.154 5.796 5.796 0 01-5.442 3.834z"
                      fill="#5A5857"
                    ></path>
                    <path
                      d="M53.423 29.762a31.923 31.923 0 01-21.682-8.45.91.91 0 01-.055-1.278.91.91 0 011.278-.055 30.174 30.174 0 0020.473 7.97c7.612 0 14.867-2.831 20.473-7.97a.897.897 0 011.278.055.897.897 0 01-.055 1.277c-5.95 5.442-13.644 8.45-21.71 8.45z"
                      fill="#5A5857"
                    ></path>
                  </g>
                </YsTwoReSvg>
              </YsTwoAt>
            </YsConTwo>
          </YsSubWrap>
        </YsWrap>
        <Gum>
          <GumWrap>
            <GumBi>
              <GumBiHead>استكشف اللغة</GumBiHead>
            </GumBi>
            <GumTi>
              <GumTiWrap>
                <GumTiAt to="/popular">
                  <GumMe>
                    <GumMeOne>
                      <GumMeSubOne>الجديد والكثر شعبية</GumMeSubOne>
                      <GumMeReOne>
                        أحدث القصص وأفضل الاختيارات من فريقنا.
                      </GumMeReOne>
                    </GumMeOne>
                    <GumMeTwo>
                      <GumMeTwoCon>
                        <GumMeImg
                          src="https://img.icons8.com/clouds/100/books.png"
                          alt=""
                        />
                      </GumMeTwoCon>
                    </GumMeTwo>
                  </GumMe>
                </GumTiAt>
                <GumTiAt>
                  <GumMe>
                    <GumMeOne>
                      <GumMeSubOne>الجديد والاكثر شعبية</GumMeSubOne>
                      <GumMeReOne>
                        أحدث القصص وأفضل الاختيارات من فريقنا.
                      </GumMeReOne>
                    </GumMeOne>
                    <GumMeTwo>
                      <GumMeTwoCon>
                        <GumMeImg
                          src="https://img.icons8.com/clouds/100/graduation-cap.png"
                          alt=""
                        />
                      </GumMeTwoCon>
                    </GumMeTwo>
                  </GumMe>
                </GumTiAt>
                <GumTiAt>
                  <GumMe>
                    <GumMeOne>
                      <GumMeSubOne>الجديد والاكثر شعبية</GumMeSubOne>
                      <GumMeReOne>
                        أحدث القصص وأفضل الاختيارات من فريقنا.
                      </GumMeReOne>
                    </GumMeOne>
                    <GumMeTwo>
                      <GumMeTwoCon>
                        <GumMeImg
                          src="https://img.icons8.com/clouds/100/pen.png"
                          alt=""
                        />
                      </GumMeTwoCon>
                    </GumMeTwo>
                  </GumMe>
                </GumTiAt>
              </GumTiWrap>
            </GumTi>
          </GumWrap>
        </Gum>
      </CorMain>
    </MedWrap>
  );
};

export default Meditation;
