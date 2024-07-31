/* global ShopifyBuy */
import React from "react";
import { Link } from "react-router-dom";
import {
  AllBot,
  AllEm,
  AllForm,
  AllSub,
  AllTop,
  AllWr,
  BaForm,
  BaWr,
  CatAa,
  CatAaSp,
  CatAn,
  CatAt,
  CatLi,
  CatLiTh,
  CatLiTw,
  CatUl,
  SearAt,
  SearBot,
  SearBut,
  SearHead,
  SearIn,
  SearNon,
  SearSpan,
  SearchDiv,
  HeaderContainer,
  HeaderElements,
  HeaderList,
  ZoWr,
  ZoCon,
  ZoPa,
  ZoHe,
  ZoRe,
  ZoAt,
  ZoLo,
  ZoImg,
  ZoPara,
  ZoImgg,
} from "./Open.elements.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faPenSquare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const zoReData = [
  {
    imgSrc: "https://img.icons8.com/clouds/100/rocket.png",
    reSrc: "/train/question1",
    lo: "التعليم التفاعلي",
    para: "تعلم بطريقة تفاعلية مسلية",
    backgroundColor: "#f8d7da",
    hoverColor: "#f5c6cb",
    color: "#ec5362",
  },
  {
    imgSrc: "https://img.icons8.com/clouds/100/graduation-cap.png",
    reSrc: "/level/grade-1",
    lo: "المفردات الانجليزية",
    para: "احفظ المفردات بالبطاقات ",

    backgroundColor: "#d1ecf1",
    hoverColor: "#c3e6cb",
    color: "#05af8d",
    color: "#005dff",
  },
  {
    imgSrc: "https://img.icons8.com/clouds/100/books.png",
    reSrc: "/audio",
    lo: "القصص القصيرة",
    para: "استمتع بالقصص التعليمية",
    backgroundColor: "#d4edda",
    hoverColor: "#bee5eb",
    color: "#05af8d",
  },
  {
    imgSrc: "https://img.icons8.com/clouds/100/pen.png",
    reSrc: "/home",
    lo: "تحديد المستوى",
    para: "حدد مستواك باللغة الانجليزية",
    backgroundColor: "#fff3cd",
    hoverColor: "#ffeeba",
    color: "#ff9900",
  },
];

const Open = () => {
  return (
    <AllWr>
      <AllTop>
        <AllForm action="">
          <HeaderContainer>
            <SearHead>تعلم الانجليزية واستخدمها في حياتك اليومية</SearHead>
            <HeaderList>
              <HeaderElements>
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  style={{ color: "#ffffff", marginLeft: "0.25rem" }}
                />
                تعلم اهم الكلمات الانجليزية ببطاقة تعليمة فعالة{" "}
              </HeaderElements>
              <HeaderElements>
                <FontAwesomeIcon
                  icon={faPenSquare}
                  style={{
                    color: "#ffffff",
                    marginLeft: "0.25rem",
                  }}
                />
                اسئلة مصممة من منصة فلونت فوكس لتطور مستواك بشكل حقيقي
              </HeaderElements>
              <HeaderElements>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "#ffffff", marginLeft: "0.25rem" }}
                />
                يعلمك قدراتك في معظم الاختبارات الانجليزية
              </HeaderElements>
            </HeaderList>
          </HeaderContainer>

          <SearNon></SearNon>
        </AllForm>
      </AllTop>
      <BaWr>
        <BaForm action=""></BaForm>
      </BaWr>
      <ZoWr>
        <ZoHe>اقسام المنصة...</ZoHe>
        <ZoCon>
          {zoReData.map((item, index) => (
            <ZoRe>
              <ZoAt
                to={item.reSrc}
                backgroundColor={item.backgroundColor}
                hoverColor={item.hoverColor}
              >
                <ZoPa>
                  <ZoImg src={item.imgSrc} alt="" />
                </ZoPa>
                <ZoLo color={item.color}>{item.lo}</ZoLo>
                <ZoPara>{item.para}</ZoPara>
              </ZoAt>
            </ZoRe>
          ))}
        </ZoCon>
      </ZoWr>
    </AllWr>
  );
};

export default Open;
