import React, { useRef, useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";
import {
  BanAt,
  BanSp,
  BanWr,
  BotCo,
  BotCon,
  BotWr,
  ElsAll,
  ElsCon,
  ElsLe,
  ElsRe,
  ElsRwe,
  ElsSub,
  OneAt,
  OnePa,
  OnePar,
  OneSp,
  OneWr,
  SecAt,
  SecCon,
  SecPa,
  SecPara,
  SecSi,
  SecVid,
  SecWr,
  VideRe,
  VidRe,
  ProEl,
  ProEle,
  ProSu,
  ProSub,
  ProWr,
  VidAll,
  VidBo,
  VidMa,
  VidNu,
  VidTi,
  VidTiPl,
  VidWr,
} from "./Elsa.elements";

const Elsa = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showElsSub, setShowElsSub] = useState(true);
  const [showSecWr, setShowSecWr] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    if (videoElement) {
      videoElement.addEventListener("play", handlePlay);
      videoElement.addEventListener("pause", handlePause);

      // Play the video immediately on page load
      videoElement.play();
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("pause", handlePause);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const increaseVolume = () => {
    if (videoRef.current && videoRef.current.volume < 1) {
      videoRef.current.volume = Math.min(1, videoRef.current.volume + 0.1);
    }
  };

  const decreaseVolume = () => {
    if (videoRef.current && videoRef.current.volume > 0) {
      videoRef.current.volume = Math.max(0, videoRef.current.volume - 0.1);
    }
  };

  const handleShowElsSub = () => {
    setShowElsSub(true);
    setShowSecWr(false);
  };

  const handleShowSecWr = () => {
    setShowElsSub(false);
    setShowSecWr(true);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && !isDragging) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleDrag(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleDrag(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDrag = (e) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newTime = (offsetX / rect.width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
      videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const calculateProgress = () => {
    if (duration > 0) {
      return (currentTime / duration) * 100;
    }
    return 0;
  };

  return (
    <>
      <BanWr>
        <BanSp>Try 3 free scenarios now</BanSp>
        <BanAt href="">Try ELSA AI</BanAt>
      </BanWr>
      <ElsAll>
        <ElsCon>
          <ElsLe htmlFor=""></ElsLe>
          <ElsRwe htmlFor=""></ElsRwe>
          {showElsSub && (
            <ElsSub>
              <ElsRe>
                <OneWr>
                  <OnePa>
                    Practice Real-World <OneSp>Conversations</OneSp>
                  </OnePa>
                  <OnePar>Try it for FREE now.</OnePar>
                  <OneAt href="">Available Now</OneAt>
                </OneWr>
                <VidRe>
                  <VidAll>
                    <VidWr>
                      <VideRe
                        ref={videoRef}
                        src="https://d1t11jpd823i7r.cloudfront.net/roleplay/CTA - Available now.mp4"
                        autoPlay
                        muted={isMuted}
                      ></VideRe>
                    </VidWr>
                    <VidBo>
                      <VidTi>
                        <VidTiPl onClick={togglePlayPause}>
                          {isPlaying ? (
                            <FaPause
                              style={{
                                color: "#fff",
                                fontSize: "24px",
                                marginLeft: "8px",
                              }}
                            />
                          ) : (
                            <FaPlay
                              style={{
                                color: "#fff",
                                fontSize: "24px",
                                marginLeft: "8px",
                              }}
                            />
                          )}
                        </VidTiPl>
                        <VidNu>
                          <time dateTime="">{formatTime(currentTime)}</time>
                        </VidNu>
                      </VidTi>
                      <ProWr
                        ref={progressBarRef}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                      >
                        <ProEl></ProEl>
                        <ProEl></ProEl>
                        <ProEle>
                          <ProSu></ProSu>
                          <ProSub
                            style={{ width: `${calculateProgress()}%` }}
                          ></ProSub>
                          <span></span>
                        </ProEle>
                        <div></div>
                      </ProWr>
                    </VidBo>
                  </VidAll>
                </VidRe>
              </ElsRe>
            </ElsSub>
          )}
          {showSecWr && (
            <SecWr>
              <SecCon>
                <SecSi>
                  <SecPa>
                    Meet ELSA - Your personal AI-powered English speaking coach
                  </SecPa>
                  <SecPara>
                    Speak English in short, fun dialogues. Get instant feedback
                    from our proprietary artificial intelligence technology.
                  </SecPara>
                  <SecAt href="">Start Learning</SecAt>
                </SecSi>
                <SecVid>
                  <VideRe
                    ref={videoRef}
                    src="https://d1t11jpd823i7r.cloudfront.net/roleplay/CTA - Available now.mp4"
                    autoPlay
                    muted={isMuted}
                  ></VideRe>
                </SecVid>
              </SecCon>
            </SecWr>
          )}
          <BotWr>
            <BotCo onClick={handleShowElsSub}></BotCo>
            <BotCon onClick={handleShowSecWr}></BotCon>
          </BotWr>
        </ElsCon>
      </ElsAll>
    </>
  );
};

export default Elsa;
