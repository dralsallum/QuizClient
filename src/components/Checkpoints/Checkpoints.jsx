import React, { useState, useEffect } from "react";
import {
  AllWr,
  BanCon,
  BanDiv,
  BanIcCon,
  BanIcDiv,
  BanPa,
  BanPaDiv,
  BanSubDiv,
  BanSvg,
  BanWr,
  ButBot,
  ButMa,
  ButMaAt,
  ButTop,
  ButWr,
  ElBot,
  ElBotCon,
  ElEx,
  ElMid,
  ElMidPa,
  ElMidPar,
  ElPa,
  ElSp,
  ElTop,
  ElTopPa,
  ElWr,
  FeCon,
  FeEl,
  FeRi,
  FeRiImg,
  FeRiPa,
  FeRiPar,
  FeWr,
  MaWr,
  MaWrBo,
  MidCon,
  MidWr,
  OpBo,
  OpBoCh,
  OpBoDiv,
  OpBoHe,
  OpBoPa,
  OpTop,
  OpTopHe,
  OpWr,
} from "./Checkpoints.elements.jsx";
import { FaCrown } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import features from "../../utils/checkpoint.json";
import { Link } from "react-router-dom";

const Checkpoints = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AllWr>
      <BanWr>
        <BanDiv>
          <BanSubDiv>
            <BanIcDiv>
              <BanIcCon>
                <BanSvg>
                  <FaCrown />
                </BanSvg>
              </BanIcCon>
            </BanIcDiv>
            <BanCon>
              <BanPaDiv>
                <BanPa>منطقة راحة لتحفيزك</BanPa>
              </BanPaDiv>
            </BanCon>
          </BanSubDiv>
        </BanDiv>
      </BanWr>
      <MaWr>
        <div></div>
        <MaWrBo>
          <div></div>
          <OpWr>
            <OpTop>
              <OpTopHe>اشتعل بالحماس</OpTopHe>
              <FeWr>
                <FeCon>
                  {features.map((feature) => (
                    <FeEl key={feature.id}>
                      <FeRiImg src={feature.image} alt="" />
                      <FeRi>
                        <FeRiPa>{feature.title}</FeRiPa>
                        <FeRiPar>{feature.description}</FeRiPar>
                      </FeRi>
                    </FeEl>
                  ))}
                  <ButMa>
                    <ButMaAt to="/train/question1">ارجع للصفحة السابقة</ButMaAt>
                  </ButMa>
                </FeCon>
              </FeWr>
            </OpTop>
          </OpWr>
        </MaWrBo>
      </MaWr>
    </AllWr>
  );
};

export default Checkpoints;
