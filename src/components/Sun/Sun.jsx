import React, { useRef, useState, useEffect } from "react";
import {
  St,
  SunConThr,
  SunIn,
  SunKo,
  SunKoCon,
  SunKoVi,
  SunMain,
  SunPa,
  SunReBut,
  SunReSpan,
  SunReSvg,
  SunReThr,
  SunSp,
  SunSr,
  SunSubOSvg,
  SunSubOn,
  SunSubThr,
  SunSubTwo,
  SunSv,
  SunTm,
  SunTmOnHe,
  SunTmOne,
  SunTmSp,
  SunTmSpa,
  SunTmSpan,
  SunTmTBut,
  SunTmTw,
  SunTmTwo,
  SunWrap,
  SunXo,
  SunXoBut,
  SunXoCon,
  SunXoOne,
  SunXoSpan,
  SunXoSvg,
  SunXoTwo,
  SunXoYa,
  SunXoYe,
  SunXoYi,
  SunXoYiRa,
  SunXoYiRe,
} from "./Sun.elements";
import Cloud from "../../assets/clouds-1282314_1280.jpg";
import Breath from "../../utils/Breath.json";
import { Link } from "react-router-dom";

const Sun = ({ audioSrc }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [audioDuration, setAudioDuration] = useState(0); // duration of the audio
  const [audioCurrentTime, setAudioCurrentTime] = useState(0); // current time of the audio
  const audioPercentage = audioDuration
    ? (audioCurrentTime / audioDuration) * 100
    : 0;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SunWrap>
      <SunMain>
        <SunSubOn>
          <SunSubOSvg>
            <img src={Cloud} alt="" />
          </SunSubOSvg>
        </SunSubOn>
        <SunSubTwo>paused</SunSubTwo>
        <SunSubThr>
          <SunConThr>
            <SunReThr>
              <Link to={"/"}>
                <SunReBut>
                  <SunReSpan>
                    <SunReSvg
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
                        d="M18.011 4.576l-6.01 6.011-6.01-6.01a.5.5 0 00-.708 0l-.707.707a.5.5 0 000 .707l6.011 6.01-6.01 6.01a.5.5 0 000 .707l.706.708a.5.5 0 00.707 0l6.011-6.01 6.01 6.01a.5.5 0 00.707 0l.708-.708a.5.5 0 000-.707l-6.01-6.01 6.01-6.01a.5.5 0 000-.707l-.708-.708a.5.5 0 00-.707 0z"
                        clip-rule="evenodd"
                      ></path>
                    </SunReSvg>
                  </SunReSpan>
                </SunReBut>
              </Link>
            </SunReThr>
            <SunTm>
              <SunTmOne>
                <SunTmOnHe>
                  <SunTmSpan>{Breath[0].name}</SunTmSpan>
                  <SunTmSpa>{Breath[0].text}</SunTmSpa>
                  <SunTmSp>Audio player</SunTmSp>
                </SunTmOnHe>
              </SunTmOne>
              <SunTmTwo>
                <SunTmTw>
                  <SunTmTBut onClick={playAudio}>
                    <SunSp>
                      <SunSv
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
                      </SunSv>
                    </SunSp>
                  </SunTmTBut>
                  <audio
                    ref={audioRef}
                    src="https://myenglevel.s3.me-south-1.amazonaws.com/dalilk-intermediate_12.mp3"
                  ></audio>
                </SunTmTw>
              </SunTmTwo>
              <SunKo>
                <SunKoCon>
                  <SunKoVi
                    data-testid="hls-player-video"
                    playsinline=""
                    preload="auto"
                    class="css-v2kfba"
                    src="blob:https://my.headspace.com/3b11d08c-9208-4132-ad16-02f2ac7e9072"
                  ></SunKoVi>
                </SunKoCon>
              </SunKo>
              <SunXo>
                <SunXoCon>
                  <SunXoOne>
                    <SunXoBut>
                      <SunXoSpan>
                        <SunXoSvg
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
                            d="M12 23a11.075 11.075 0 01-2.22-.23 1 1 0 01-.8-.93 3 3 0 00-4.25-2.55A1 1 0 013.54 19a10.92 10.92 0 01-2-3.61 1 1 0 01.32-1.09 3 3 0 000-4.65 1 1 0 01-.32-1.09 10.92 10.92 0 012-3.56 1 1 0 011.19-.27A3 3 0 009 2.15a1 1 0 01.8-.93 11.12 11.12 0 014.44 0 1 1 0 01.8.93 3 3 0 004.25 2.55 1 1 0 011.17.3 10.922 10.922 0 012 3.61 1 1 0 01-.32 1.09 3 3 0 000 4.65 1 1 0 01.32 1.09 10.922 10.922 0 01-2 3.61 1 1 0 01-1.19.27A3 3 0 0015 21.85a1 1 0 01-.8.93A11.08 11.08 0 0112 23zm-1.13-2.07c.75.095 1.51.095 2.26 0A5 5 0 0118 17c.457 0 .911.063 1.35.19a8.94 8.94 0 001-1.81 4.94 4.94 0 010-6.76 8.941 8.941 0 00-1-1.81A4.85 4.85 0 0118 7a5 5 0 01-4.87-3.93 9 9 0 00-2.26 0A5 5 0 016 7a4.85 4.85 0 01-1.35-.19 8.94 8.94 0 00-1 1.81 4.94 4.94 0 010 6.76 8.95 8.95 0 001 1.81A4.85 4.85 0 016 17a5 5 0 014.87 3.93zM12 17a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"
                            clip-rule="evenodd"
                          ></path>
                        </SunXoSvg>
                      </SunXoSpan>
                    </SunXoBut>
                  </SunXoOne>
                  <SunXoTwo>
                    <SunIn type="text" />
                    <SunXoYi>
                      <SunXoYiRe></SunXoYiRe>
                      <SunXoYiRa></SunXoYiRa>
                    </SunXoYi>
                    <SunXoYe>
                      <SunXoYa></SunXoYa>
                    </SunXoYe>
                  </SunXoTwo>
                  <SunSr>
                    <SunPa>{formatTime(audioCurrentTime)}</SunPa>
                    <SunPa>{formatTime(audioDuration)}</SunPa>
                  </SunSr>
                </SunXoCon>
              </SunXo>
            </SunTm>
          </SunConThr>
        </SunSubThr>
      </SunMain>
    </SunWrap>
  );
};

export default Sun;
