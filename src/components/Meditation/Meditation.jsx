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
import useRequireAuth from "../../useRequireAuth";

const Meditation = () => {
  const [showComponent, setShowComponent] = useState("recent");
  const [focusTab, setFocusTab] = useState("recent");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MedWrap>
      <NavAud />
      {/* navbar ends here */}
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
            <QmHeadSpan>جرّب هيدسبيس مجاناً وافتح تأملات لأي مزاج.</QmHeadSpan>
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
                  <YsTwoQd>التامل • ٣-١٠ دقائق</YsTwoQd>
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
              <GumBiHead>استكشف الهدوء</GumBiHead>
            </GumBi>
            <GumTi>
              <GumTiWrap>
                <GumTiAt to="/popular">
                  <GumMe>
                    <GumMeOne>
                      <GumMeSubOne>الجديد والكثر شعبية</GumMeSubOne>
                      <GumMeReOne>
                        أحدث التأملات وأفضل الاختيارات من فريقنا.
                      </GumMeReOne>
                    </GumMeOne>
                    <GumMeTwo>
                      <GumMeTwoCon>
                        <GumMeImg
                          src="https://api.prod.headspace.com/content/media-items/81511/download-image?width=224"
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
                        أحدث التأملات وأفضل الاختيارات من فريقنا.
                      </GumMeReOne>
                    </GumMeOne>
                    <GumMeTwo>
                      <GumMeTwoCon>
                        <GumMeImg
                          src="https://api.prod.headspace.com/content/media-items/81511/download-image?width=224"
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
                        أحدث التأملات وأفضل الاختيارات من فريقنا.
                      </GumMeReOne>
                    </GumMeOne>
                    <GumMeTwo>
                      <GumMeTwoCon>
                        <GumMeImg
                          src="https://api.prod.headspace.com/content/media-items/81511/download-image?width=224"
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

      <Footer>
        <FooterNav>
          <FooterWrap>
            <FooterList>
              <FooterLiLe>
                <FootLiCon>
                  <FootLiIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M12.3 5.873c1.952.134 3.92.762 5.145 2.511l.007.01.008.011c.922 1.214 1.424 2.56 1.42 3.874-.037 1.188-.15 1.948-.4 2.596-.247.638-.648 1.22-1.359 2.012-.564.529-1.124 1.035-1.85 1.41-.722.372-1.637.628-2.908.577h-.01c-1.524-.039-2.545-.4-3.292-.848-.723-.434-1.22-.966-1.713-1.492l-.046-.048-.108-.154c-.646-.914-1.447-2.046-1.309-3.992.07-.928.212-1.678.495-2.373.281-.69.717-1.36 1.416-2.106 1.092-1.102 2.623-2.058 4.504-1.988zm-7.098 6.418l-.683-.051c.076-1.012.236-1.916.593-2.79.358-.877.898-1.687 1.69-2.533l.007-.007.006-.006C8.06 5.645 9.947 4.41 12.364 4.505h.01l.01.001c2.143.145 4.607.852 6.176 3.081 1.065 1.407 1.699 3.039 1.69 4.707v.018c-.038 1.245-.157 2.192-.491 3.057-.337.87-.87 1.602-1.638 2.455l-.02.022-.02.02c-.57.534-1.258 1.17-2.181 1.648-.937.483-2.087.788-3.585.729-1.74-.045-2.993-.463-3.958-1.043-.892-.535-1.508-1.195-1.99-1.71a38.284 38.284 0 00-.096-.103l-.034-.036-.028-.04-.14-.2c-.666-.936-1.722-2.424-1.55-4.869l.684.049z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </FootLiIcon>
                  <FootLiTex>الهدوء</FootLiTex>
                </FootLiCon>
              </FooterLiLe>
              <FooterLiRi>
                <FooterPin>
                  <Foot>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M4.524 12.996c.784.577 1.274.726 2.79.992l.084.003c2.085.069 3.181-.225 4.795-1.757 1.41-1.3 1.738-2.325 1.807-4.36-.102-1.938-.421-2.659-1.865-4.192-.845-.851-2.05-1.408-3.504-1.607-1.74-.306-3.405.34-4.993 1.725C2.502 4.848 1.991 6.333 2 8.017c.057 1.764.503 2.825 1.692 4.205.266.305.542.56.832.774zm-1.598-.108l-.748.642C.7 11.815.073 10.326 0 8.057c-.012-2.227.684-4.248 2.3-5.74C4.325.553 6.557-.314 8.939.105c1.835.25 3.448.996 4.636 2.193C15.357 4.19 15.87 5.351 16 7.857c-.084 2.603-.566 4.11-2.437 5.837-2.057 1.952-3.658 2.381-6.232 2.296l-.154-.005-.141-.015-.037-.006c-1.84-.323-2.54-.532-3.661-1.357a7.128 7.128 0 01-1.157-1.074l.745-.645z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M5.687 13.34c.508.373.826.471 1.852.652l.038.001c1.424.048 2.131-.142 3.225-1.18.94-.867 1.15-1.526 1.198-2.887-.07-1.319-.267-1.766-1.25-2.81-.556-.56-1.36-.931-2.352-1.067-1.144-.201-2.252.23-3.322 1.162C4.333 7.897 3.994 8.88 4 10c.039 1.195.33 1.89 1.14 2.83.176.202.358.37.547.508zm-2.063.795c-1.095-1.27-1.57-2.397-1.624-4.092-.01-1.663.515-3.184 1.743-4.317 1.504-1.312 3.18-1.963 4.967-1.648 1.37.187 2.58.746 3.481 1.655C13.507 7.13 13.904 8.026 14 9.91c-.062 1.926-.43 3.074-1.83 4.366-1.532 1.454-2.75 1.78-4.656 1.718l-.108-.004-.147-.015-.025-.005c-.808-.141-.813-.142-1.18-.252A4.991 4.991 0 014.5 14.95a5.38 5.38 0 01-.873-.81l.772-.67-.775.666z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M6.852 13.765c.228.125.37.16.91.232.765.018 1.075-.046 1.65-.456.47-.324.561-.538.588-1.054-.038-.533-.109-.653-.64-1.076-.263-.2-.663-.339-1.204-.394-.54-.072-1.09.089-1.647.452-.347.24-.512.6-.509 1.018.02.473.156.716.594 1.097.086.074.171.133.258.18zm-1.784 1.131c-.71-.72-1.032-1.39-1.068-2.37-.006-.962.346-1.856 1.188-2.536.981-.748 2.1-1.128 3.294-.944.903.108 1.711.434 2.328.978.846.786 1.127 1.342 1.19 2.445-.04 1.088-.293 1.78-1.223 2.53-1.006.836-1.844 1.033-3.076.997-.032 0-.032 0-.063-.002l-.158-.014-.014-.002c-.863-.133-1.226-.228-1.803-.6a3.501 3.501 0 01-.592-.479l.835-.633-.838.63z"
                      ></path>
                    </svg>
                  </Foot>
                  <FootCon>التركيز</FootCon>
                </FooterPin>
              </FooterLiRi>
            </FooterList>
          </FooterWrap>
        </FooterNav>
      </Footer>
    </MedWrap>
  );
};

export default Meditation;
