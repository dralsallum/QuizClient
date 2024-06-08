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
} from "./Divider.elements";

const Divider = () => {
  return (
    <ArWrapper>
      <ArContainerF>
        <ArSubContainerF>
          <ArContainerFCon>صنع من محترفين</ArContainerFCon>
          <ArContainerFHe>تعلم بثقة</ArContainerFHe>
          <ArContainerFPara>
            قم بتحسينات حقيقية، واحصل على نتائج حقيقية مع برنامجنا التعليمي
            المصمم من قبل محترفين. نحن نقدم لك الفرصة لبناء أساسات قوية في اللغة
            الإنجليزية من خلال مجموعة متنوعة من الأدوات التعليمية والموارد
            التفاعلية.
            <br />
            يوفر موقعنا بطاقات تعليمية لحفظ المفردات الأساسية والمتقدمة، مما
            يساعد على تعزيز ذاكرتك للمفردات واستخدامها في السياقات المختلفة.
            بالإضافة إلى ذلك، نقدم قصص قصيرة تفاعلية تشجع على الفهم القرائي
            وتحفز خيالك، وأنشطة تفاعلية تركز على مهارات التحدث والاستماع.
            <br />
            نحن هنا لنساعدك على التحضير للتفاعلات في العالم الحقيقي، سواء كنت
            تستعد للسفر، للدراسة، أو لتحسين فرصك المهنية. مع الكثير من التمارين
            على التحدث، والاستماع، والقراءة، والكتابة، ستكون مستعدًا لأي تحدٍ
            لغوي يواجهك.
          </ArContainerFPara>
        </ArSubContainerF>
      </ArContainerF>
      <ArContainerS>
        <ArContainerSImg
          src={"https://alsallum.s3.eu-north-1.amazonaws.com/Divider.jpeg"}
        />
      </ArContainerS>
    </ArWrapper>
  );
};

export default Divider;
