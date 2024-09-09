import React from "react";
import {
  WhoContainer,
  WhoHeader,
  WhoImg,
  WhoImgContainer,
  WhoMain,
  WhoPara,
  WhoWrapper,
} from "./Who.elements";

const Who = () => {
  return (
    <WhoWrapper>
      <WhoMain>
        <WhoImgContainer>
          <WhoImg
            src={"https://alsallum.s3.eu-north-1.amazonaws.com/foxlogo.png"}
            alt="FluentFox Logo"
          />
        </WhoImgContainer>
        <WhoContainer>
          <WhoPara>
            فلونت فوكس هي شركة مبتكرة وطموحة، تعمل تحت مظلة مؤسسة سعود خالد فهد
            السلوم للتجارة، والتي تأسست في عام 2022 برؤية تهدف إلى تحويل مشهد
            تعلم اللغات. استناداً إلى قيمنا الأساسية المتمثلة في الابتكار،
            والوصول الشامل، والتصميم المرتكز على المستخدم، نلتزم بتطوير منصات
            رقمية تُمكّن الأشخاص من تعلم اللغات الجديدة بفعالية وثقة.
            <br />
            <br />
            في فلونت فوكس، ندرك أن اللغة هي بوابة للثقافات الجديدة، والفرص،
            والعلاقات. رسالتنا هي توفير الأدوات والموارد التي يحتاجها المتعلمون
            للوصول إلى الطلاقة، بغض النظر عن مستوى البداية. نحن نؤمن بأن تعلم
            اللغة لا ينبغي أن يكون مهمة شاقة، بل رحلة ممتعة. منصاتنا مصممة مع
            مراعاة احتياجات المتعلم، باستخدام أحدث التقنيات، ومسارات التعلم
            المخصصة، والمحتوى التفاعلي لخلق تجربة تعليمية سلسة وجذابة وفعالة.
            <br />
            <br />
            كجزء من مؤسسة سعود خالد فهد السلوم للتجارة، نعتمد على أساس قوي من
            التميز التجاري والالتزام بالنجاح طويل الأمد. منذ انطلاقنا في عام
            2022، نسعى جاهدين للتميز من خلال تقديم حلول تعليمية فريدة ومخصصة
            تلبي الأهداف الفردية. سواء كان ذلك من خلال التطبيقات المحمولة، أو
            الدورات التفاعلية، أو الألعاب التعليمية، فإن نهجنا مصمم لتلبية
            احتياجات المتعلمين المتنوعة في جميع أنحاء العالم.
            <br />
            <br />
            فلونت فوكس تؤمن بتعزيز مجتمع عالمي من المتعلمين. من خلال إزالة
            الحواجز اللغوية، نهدف إلى خلق عالم أكثر تواصلاً وتفهماً وشمولية. نحن
            أكثر من مجرد منصة لتعلم اللغات؛ نحن شريك في رحلة كل متعلم نحو
            الطلاقة، لمساعدتهم على استغلال إمكاناتهم الكاملة في الجوانب الشخصية
            والمهنية.
            <br />
            <br />
            مع فريق شغوف من المعلمين والتقنيين والمبتكرين، تلتزم فلونت فوكس
            باستمرار تحسين عروضنا، والبقاء في مقدمة التطورات، وتقديم نتائج ذات
            تأثير. نحن هنا لجعل تعلم اللغات متاحاً وممتعاً وذا تأثير لجميع
            المستخدمين.
            <br />
            <br />
            <strong style={{ display: "block", textAlign: "center" }}>
              DUNS Number: 448997941
            </strong>
          </WhoPara>
        </WhoContainer>
      </WhoMain>
    </WhoWrapper>
  );
};

export default Who;
