import React, { useEffect, useRef, useState } from "react";
import {
  AdBut,
  AdSpan,
  ErFoot,
  ErFooter,
  Footer,
  FooterAt,
  FooterCon,
  FooterSpan,
  FooterSub,
  FooterSubSpan,
  FooterSvg,
  Line,
  LineHr,
  LisBl,
  LisBlCon,
  LisBlPara,
  LisBlSpan,
  LisBlSvg,
  LisCon,
  LisGm,
  LisGmBut,
  LisGmCon,
  LisGmLis,
  LisGmList,
  LisGmSpan,
  LisGmSvg,
  LisMain,
  LisRmCon,
  LisRmIb,
  LisRmImg,
  LisRmSub,
  LisRmUb,
  LisSubCon,
  LisTlCon,
  LisTlHead,
  LisTlRm,
  LisTlSpan,
  LisTlSub,
  LisWrap,
  ParagrWr,
  Sig,
  SigCon,
  SigLe,
  SigLeBut,
  SigLeCon,
  SigLeGr,
  SigLeSpan,
  SigLeSvg,
  SigSubCon,
  SigSubHd,
  SigSubHead,
  SigWrap,
  SpeField,
  SpeFieldCon,
  SpeKp,
  SpeKpIn,
  SpeKpLab,
  SpeLeg,
  SpeLegHe,
  SpeSp,
  SpeSpCon,
  SpeSpImg,
  SpeSpSuCon,
  Speaker,
  Stl,
  StlRo,
  StlRoCon,
  StlRoImg,
  StlRoLi,
  StlRoList,
  StlRoSt,
  StlRoSu,
  StlRoSub,
  StlRoTi,
  StlRoTie,
  StlRoTim,
  StlRoTimAt,
  StlRoTimHe,
  StlRoTimSvg,
  StlRoTiq,
  StlRoTiqCon,
  StlRoTiqPa,
  StlRoTiqSpan,
  StlRoTiqSvg,
  StlTo,
  StlToHead,
  StlWrap,
} from "./Listen.elements";

import story from "../../utils/story.json";
import { Link, useParams } from "react-router-dom";
import NavAud from "../NavAud/NavAud";

const Listen = () => {
  const { storyUrl } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const audioPercentage = audioDuration
    ? (audioCurrentTime / audioDuration) * 100
    : 0;

  const playAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setAudioDuration(audioRef.current.duration);
      });

      audioRef.current.addEventListener("timeupdate", () => {
        setAudioCurrentTime(audioRef.current.currentTime);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("loadedmetadata", () => {});
        audioRef.current.removeEventListener("timeupdate", () => {});
      }
    };
  }, []);

  const selectedStory = story.find(
    (story) => story.url === `meditation/listen/${storyUrl}`
  );

  if (!selectedStory) {
    return (
      <LisWrap>
        <NavAud />
        <LisMain>
          <LisCon>
            <LisSubCon>
              <p>Story not found.</p>
            </LisSubCon>
          </LisCon>
        </LisMain>
      </LisWrap>
    );
  }

  return (
    <LisWrap>
      <NavAud />
      <LisMain>
        <LisCon>
          <LisSubCon>
            <LisGm>
              <LisGmCon>
                <LisGmBut>
                  <LisGmSpan>
                    <Link to="/meditation">
                      <LisGmSvg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                        ></path>
                      </LisGmSvg>
                    </Link>
                  </LisGmSpan>
                </LisGmBut>
              </LisGmCon>
              <LisGmLis>
                <LisGmList>
                  <LisRmCon>
                    <LisRmSub>
                      <LisRmUb>
                        <LisRmIb>
                          <LisRmImg
                            src={selectedStory.image}
                            alt={selectedStory.header}
                          />
                        </LisRmIb>
                      </LisRmUb>
                    </LisRmSub>
                  </LisRmCon>
                  <LisTlCon>
                    <LisTlSub>
                      <LisTlRm>
                        <LisTlHead>
                          <LisTlSpan>{selectedStory.header}</LisTlSpan>
                        </LisTlHead>
                      </LisTlRm>
                    </LisTlSub>
                  </LisTlCon>
                </LisGmList>
              </LisGmLis>
            </LisGm>
            <Speaker>
              <SpeKp>
                <ParagrWr>
                  {selectedStory
                    ? selectedStory.mainText.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))
                    : "Story not found."}
                </ParagrWr>
              </SpeKp>
            </Speaker>
            <Line>
              <LineHr></LineHr>
            </Line>

            <Sig>
              <SigWrap>
                <SigCon>
                  <SigSubCon>
                    <SigSubHead>تعلم</SigSubHead>
                    <SigSubHd>تعلم ١</SigSubHd>
                  </SigSubCon>
                  <SigLe>
                    <SigLeGr>
                      <SigLeCon>
                        <SigLeBut>
                          <SigLeSpan>
                            <SigLeSvg
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
                                d="M6 8a6 6 0 1112 0v2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8zm10 0v2H8V8a4 4 0 118 0zm-3 8.732A2 2 0 0012 13a2 2 0 00-.964 3.753L11 19h2v-2.268z"
                                clip-rule="evenodd"
                              ></path>
                            </SigLeSvg>
                          </SigLeSpan>
                        </SigLeBut>
                      </SigLeCon>
                      <SigLeCon>
                        <SigLeBut>
                          <SigLeSpan>
                            <SigLeSvg
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
                                d="M6 8a6 6 0 1112 0v2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8zm10 0v2H8V8a4 4 0 118 0zm-3 8.732A2 2 0 0012 13a2 2 0 00-.964 3.753L11 19h2v-2.268z"
                                clip-rule="evenodd"
                              ></path>
                            </SigLeSvg>
                          </SigLeSpan>
                        </SigLeBut>
                      </SigLeCon>
                      <SigLeCon>
                        <SigLeBut>
                          <SigLeSpan>
                            <SigLeSvg
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
                                d="M6 8a6 6 0 1112 0v2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8zm10 0v2H8V8a4 4 0 118 0zm-3 8.732A2 2 0 0012 13a2 2 0 00-.964 3.753L11 19h2v-2.268z"
                                clip-rule="evenodd"
                              ></path>
                            </SigLeSvg>
                          </SigLeSpan>
                        </SigLeBut>
                      </SigLeCon>
                      <SigLeCon>
                        <SigLeBut>
                          <SigLeSpan>
                            <SigLeSvg
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
                                d="M6 8a6 6 0 1112 0v2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8zm10 0v2H8V8a4 4 0 118 0zm-3 8.732A2 2 0 0012 13a2 2 0 00-.964 3.753L11 19h2v-2.268z"
                                clip-rule="evenodd"
                              ></path>
                            </SigLeSvg>
                          </SigLeSpan>
                        </SigLeBut>
                      </SigLeCon>
                      <SigLeCon>
                        <SigLeBut>
                          <SigLeSpan>
                            <SigLeSvg
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
                                d="M6 8a6 6 0 1112 0v2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8zm10 0v2H8V8a4 4 0 118 0zm-3 8.732A2 2 0 0012 13a2 2 0 00-.964 3.753L11 19h2v-2.268z"
                                clip-rule="evenodd"
                              ></path>
                            </SigLeSvg>
                          </SigLeSpan>
                        </SigLeBut>
                      </SigLeCon>
                      <SigLeCon>
                        <SigLeBut>
                          <SigLeSpan>
                            <SigLeSvg
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
                                d="M6 8a6 6 0 1112 0v2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8zm10 0v2H8V8a4 4 0 118 0zm-3 8.732A2 2 0 0012 13a2 2 0 00-.964 3.753L11 19h2v-2.268z"
                                clip-rule="evenodd"
                              ></path>
                            </SigLeSvg>
                          </SigLeSpan>
                        </SigLeBut>
                      </SigLeCon>

                      <SigLeCon>
                        <SigLeBut>
                          <SigLeSpan>
                            <SigLeSvg
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
                                d="M6 8a6 6 0 1112 0v2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8zm10 0v2H8V8a4 4 0 118 0zm-3 8.732A2 2 0 0012 13a2 2 0 00-.964 3.753L11 19h2v-2.268z"
                                clip-rule="evenodd"
                              ></path>
                            </SigLeSvg>
                          </SigLeSpan>
                        </SigLeBut>
                      </SigLeCon>

                      <SigLeCon>
                        <SigLeBut>
                          <SigLeSpan>
                            <SigLeSvg
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
                                d="M6 8a6 6 0 1112 0v2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8zm10 0v2H8V8a4 4 0 118 0zm-3 8.732A2 2 0 0012 13a2 2 0 00-.964 3.753L11 19h2v-2.268z"
                                clip-rule="evenodd"
                              ></path>
                            </SigLeSvg>
                          </SigLeSpan>
                        </SigLeBut>
                      </SigLeCon>

                      <SigLeCon>
                        <SigLeBut>
                          <SigLeSpan>
                            <SigLeSvg
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
                                d="M6 8a6 6 0 1112 0v2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8zm10 0v2H8V8a4 4 0 118 0zm-3 8.732A2 2 0 0012 13a2 2 0 00-.964 3.753L11 19h2v-2.268z"
                                clip-rule="evenodd"
                              ></path>
                            </SigLeSvg>
                          </SigLeSpan>
                        </SigLeBut>
                      </SigLeCon>
                      <SigLeCon>
                        <SigLeBut>
                          <SigLeSpan>
                            <SigLeSvg
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
                                d="M6 8a6 6 0 1112 0v2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8zm10 0v2H8V8a4 4 0 118 0zm-3 8.732A2 2 0 0012 13a2 2 0 00-.964 3.753L11 19h2v-2.268z"
                                clip-rule="evenodd"
                              ></path>
                            </SigLeSvg>
                          </SigLeSpan>
                        </SigLeBut>
                      </SigLeCon>
                    </SigLeGr>
                  </SigLe>
                </SigCon>
              </SigWrap>

              <div></div>
              <div></div>
            </Sig>
            <Line>
              <LineHr></LineHr>
            </Line>
            <Stl>
              <StlWrap>
                <StlTo>
                  <StlToHead>مهارات</StlToHead>
                </StlTo>
                <StlRo>
                  <StlRoList>
                    <StlRoLi>
                      <StlRoCon>
                        <StlRoSub>
                          <StlRoSu>
                            <StlRoSt>
                              <StlRoImg
                                src="https://hs-prod-content.imgix.net/illus_animation_technique_bodyscan_library-tile_20180726_rc__1533244943427.png?fm=png32&w=701&fs=png&ixlib=js-1.4.1&s=0b841bc31e1f913e902e9c5d6ba4513a"
                                alt=""
                              />
                            </StlRoSt>
                          </StlRoSu>
                        </StlRoSub>
                      </StlRoCon>
                      <StlRoTi>
                        <StlRoTie>
                          <StlRoTim>
                            <StlRoTimHe>
                              <StlRoTimSvg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                class="css-1gt6gfb"
                              >
                                <path
                                  fill="currentColor"
                                  fill-rule="evenodd"
                                  d="M6 8a6 6 0 1112 0v2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8zm10 0v2H8V8a4 4 0 118 0zm-3 8.732A2 2 0 0012 13a2 2 0 00-.964 3.753L11 19h2v-2.268z"
                                  clip-rule="evenodd"
                                ></path>
                              </StlRoTimSvg>
                              <StlRoTimAt>تعلم الكتابة</StlRoTimAt>
                            </StlRoTimHe>
                          </StlRoTim>
                          <StlRoTiq>
                            <StlRoTiqCon>
                              <StlRoTiqSvg
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                class="css-lnnzhi"
                              >
                                <path
                                  d="M7.78 6.15l1.87 1.07c.51.29.51 1.04-.01 1.32L7.77 9.58a.758.758 0 01-1.13-.66v-2.1c0-.59.63-.95 1.14-.67z"
                                  fill="#3A3938"
                                ></path>
                                <path
                                  d="M5.06 12.73c-.81 0-1.57-.31-2.14-.88-.58-.57-.9-1.33-.9-2.15L2 6.08a3.047 3.047 0 013.03-3.06L11 3h.01c.81 0 1.57.31 2.14.88.58.57.9 1.33.9 2.15l.01 3.62c0 .81-.31 1.58-.88 2.15-.57.58-1.33.9-2.15.9l-5.96.03h-.01zm5.95-8.23c-.01 0-.01 0 0 0l-5.97.02c-.85 0-1.54.7-1.54 1.55l.01 3.63c0 .85.69 1.54 1.54 1.54h.01l5.96-.02c.85 0 1.54-.7 1.54-1.55l-.01-3.62c0-.86-.7-1.55-1.54-1.55z"
                                  fill="#3A3938"
                                ></path>
                              </StlRoTiqSvg>
                              <StlRoTiqSpan>
                                تعلم من مختصين • ٣ دقائق
                              </StlRoTiqSpan>
                            </StlRoTiqCon>
                            <StlRoTiqPa>
                              تعلم الطريقة الصحيحة للكتابة
                            </StlRoTiqPa>
                          </StlRoTiq>
                        </StlRoTie>
                      </StlRoTi>
                    </StlRoLi>
                    <StlRoLi>
                      <StlRoCon>
                        <StlRoSub>
                          <StlRoSu>
                            <StlRoSt>
                              <StlRoImg
                                src="https://api.prod.headspace.com/content/media-items/8063/download-image?width=701"
                                alt=""
                              />
                            </StlRoSt>
                          </StlRoSu>
                        </StlRoSub>
                      </StlRoCon>
                      <StlRoTi>
                        <StlRoTie>
                          <StlRoTim>
                            <StlRoTimHe>
                              <StlRoTimSvg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                class="css-1gt6gfb"
                              >
                                <path
                                  fill="currentColor"
                                  fill-rule="evenodd"
                                  d="M6 8a6 6 0 1112 0v2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8zm10 0v2H8V8a4 4 0 118 0zm-3 8.732A2 2 0 0012 13a2 2 0 00-.964 3.753L11 19h2v-2.268z"
                                  clip-rule="evenodd"
                                ></path>
                              </StlRoTimSvg>
                              <StlRoTimAt>تعلم القراءة</StlRoTimAt>
                            </StlRoTimHe>
                          </StlRoTim>
                          <StlRoTiq>
                            <StlRoTiqCon>
                              <StlRoTiqSvg
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                class="css-lnnzhi"
                              >
                                <path
                                  d="M7.78 6.15l1.87 1.07c.51.29.51 1.04-.01 1.32L7.77 9.58a.758.758 0 01-1.13-.66v-2.1c0-.59.63-.95 1.14-.67z"
                                  fill="#3A3938"
                                ></path>
                                <path
                                  d="M5.06 12.73c-.81 0-1.57-.31-2.14-.88-.58-.57-.9-1.33-.9-2.15L2 6.08a3.047 3.047 0 013.03-3.06L11 3h.01c.81 0 1.57.31 2.14.88.58.57.9 1.33.9 2.15l.01 3.62c0 .81-.31 1.58-.88 2.15-.57.58-1.33.9-2.15.9l-5.96.03h-.01zm5.95-8.23c-.01 0-.01 0 0 0l-5.97.02c-.85 0-1.54.7-1.54 1.55l.01 3.63c0 .85.69 1.54 1.54 1.54h.01l5.96-.02c.85 0 1.54-.7 1.54-1.55l-.01-3.62c0-.86-.7-1.55-1.54-1.55z"
                                  fill="#3A3938"
                                ></path>
                              </StlRoTiqSvg>
                              <StlRoTiqSpan>
                                تعلم من مختصين • ٣ دقائق
                              </StlRoTiqSpan>
                            </StlRoTiqCon>
                            <StlRoTiqPa>
                              تعلم الطريقة الصحيحة للقراءة
                            </StlRoTiqPa>
                          </StlRoTiq>
                        </StlRoTie>
                      </StlRoTi>
                    </StlRoLi>
                  </StlRoList>
                </StlRo>
              </StlWrap>
            </Stl>
            <Line>
              <LineHr></LineHr>
            </Line>

            <ErFoot>
              <ErFooter>
                <Footer>
                  <FooterCon>
                    <FooterSub>
                      <FooterAt onClick={playAudio}>
                        <FooterSpan>
                          <FooterSubSpan>استمع للقصة</FooterSubSpan>
                          <audio
                            ref={audioRef}
                            src={selectedStory.audio}
                          ></audio>
                          <FooterSvg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="none"
                            viewBox="0 0 32 32"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M8 6.422v19.156c.076.95.659 1.785 1.522 2.182a2.616 2.616 0 002.64-.267l13.8-9.518a2.397 2.397 0 000-3.95l-13.8-9.518a2.616 2.616 0 00-2.64-.267A2.634 2.634 0 008 6.422z"
                              clip-rule="evenodd"
                            ></path>
                          </FooterSvg>
                        </FooterSpan>
                      </FooterAt>
                    </FooterSub>
                  </FooterCon>
                </Footer>
              </ErFooter>
            </ErFoot>
          </LisSubCon>
        </LisCon>
      </LisMain>
    </LisWrap>
  );
};

export default Listen;
