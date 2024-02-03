import React from "react";
import {
  ArContainerF,
  ArContainerFCon,
  ArContainerFHe,
  ArContainerFPara,
  ArContainerS,
  ArContainerSImg,
  ArSubContainerF,
  ArWrapper,
} from "./Article.elements";

const Article = () => {
  return (
    <ArWrapper>
      <ArContainerF>
        <ArSubContainerF>
          <ArContainerFCon>مجتمع متكامل</ArContainerFCon>
          <ArContainerFHe>تعلم اكثر مع غيرك</ArContainerFHe>
          <ArContainerFPara>
            تجاوز الكتب المدرسية. تمرن على النطق، احصل على رؤى ثقافية وتبادل
            نصائح اللغة المحلية مع مجتمعنا العالمي من المتعلمين
          </ArContainerFPara>
        </ArSubContainerF>
      </ArContainerF>
      <ArContainerS>
        <ArContainerSImg
          src={"https://alsallum.s3.eu-north-1.amazonaws.com/page.jpg"}
        />
      </ArContainerS>
    </ArWrapper>
  );
};

export default Article;
