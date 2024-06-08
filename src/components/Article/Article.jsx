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
          <ArContainerFHe>تعلم أكثر مع غيرك</ArContainerFHe>
          <ArContainerFPara>
            تجاوز الكتب المدرسية التقليدية وانضم إلى مجتمعنا العالمي من
            المتعلمين. هنا، يمكنك التمرن على النطق الصحيح للغة الإنجليزية،
            واكتساب رؤى ثقافية قيمة، وتبادل النصائح حول استخدام اللغة في الحياة
            اليومية. إن التفاعل مع متعلمين آخرين سيساعدك على تحسين مهاراتك
            اللغوية بشكل أسرع وأكثر فعالية.
            <br />
            يوفر موقعنا منصة شاملة تضم مجموعة متنوعة من الأدوات التعليمية بما في
            ذلك بطاقات الفلاش التي تركز على المفردات، والقصص القصيرة التفاعلية
            التي تعزز الفهم القرائي، والأنشطة التفاعلية التي تشجع على التحدث
            والاستماع. هدفنا هو جعل تعلم اللغة الإنجليزية تجربة ممتعة ومثمرة من
            خلال تقديم محتوى عالي الجودة يلبي احتياجات جميع المتعلمين.
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
