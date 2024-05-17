/* global ShopifyBuy */
import React from "react";
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
} from "./Open.elements.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faPenSquare,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

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
                اسئلة ممتعة ومتنوعة تطور مستواك بشكل حقيقي
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
      <AllBot>
        <AllSub>
          <AllEm>اقسام المنصة...</AllEm>
          <CatUl>
            <CatLi>
              <CatAt to="/train">
                <strong> تعلم الانجليزي </strong>
                <br /> بطريقة مسلية وفعالة
              </CatAt>
            </CatLi>
            <CatLiTw>
              <CatAa to="/meditation">
                <CatAaSp>
                  تعلم الانجليزي باستخدام
                  <br />
                  <strong> القصص القصيرة</strong>
                </CatAaSp>
              </CatAa>
            </CatLiTw>
            <CatLiTh>
              <CatAn to="/level/grade-5">
                احفظ الكلمات الانجليزية
                <br />
                <strong> بالبطاقات التعليمية </strong>
              </CatAn>
            </CatLiTh>
          </CatUl>
        </AllSub>
      </AllBot>
    </AllWr>
  );
};

export default Open;
