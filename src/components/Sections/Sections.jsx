import React, { useState } from "react";
import {
  SecArt,
  SecBot,
  SecImg,
  SecMain,
  SecMem,
  SecSubArt,
  SecTab,
  SecTop,
  SectionsContainer,
  SectionsSubMain,
  SectionsWrap,
} from "./Sections.elements";
import { Link } from "react-router-dom";

const SectionMember = ({ src, title, description, link }) => (
  <SecMem>
    <Link to={link} style={{ textDecoration: "none" }}>
      <SecImg src={src} alt={title} />
      <SecTop>{title}</SecTop>
      <SecBot>{description}</SecBot>
    </Link>
  </SecMem>
);

const Sections = () => {
  const members = [
    {
      src: "https://img.icons8.com/clouds/100/books.png",
      title: "القصص القصيرة",
      description: "تحديد الوظيفة",
      link: "/audio",
    },
    {
      src: "https://img.icons8.com/clouds/100/pen.png",
      title: "اختبار تحديد المستوى",
      description: "حدد مستواك باللغة الانجليزية",
      link: "/home",
    },
    {
      src: "https://img.icons8.com/clouds/100/rocket.png",
      title: "التعلم التفاعلي",
      description: "تعلم القواعد للممارسة",
      link: "/train",
    },
    {
      src: "https://img.icons8.com/clouds/100/graduation-cap.png",
      title: "المفردات الانجليزية",
      description: "احفظ الكلمات الانجليزية بمساعدة البطاقات التعليمية",
      link: "/level/grade-5",
    },
  ];

  return (
    <SectionsWrap>
      <SectionsContainer>
        <SectionsSubMain>
          <SecMain>
            <SecArt>
              <SecSubArt>
                <SecTab>
                  {members.map((member, index) => (
                    <SectionMember key={index} {...member} />
                  ))}
                </SecTab>
              </SecSubArt>
            </SecArt>
          </SecMain>
        </SectionsSubMain>
      </SectionsContainer>
    </SectionsWrap>
  );
};

export default Sections;
