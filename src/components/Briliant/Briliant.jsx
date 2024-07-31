import React from "react";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  BriCon,
  BriSpan,
  BriSub,
  BriWr,
  DoAt,
  DoCon,
  DoHe,
  DoPa,
  DoWr,
  VidMa,
  VidWr,
} from "./Briliant.elements";

const Briliant = () => {
  return (
    <BriCon>
      <BriWr>
        <BriSub>
          <DoWr>
            <DoCon>
              <DoHe>
                تعلم <BriSpan>تفاعلياً</BriSpan>
              </DoHe>
              <DoPa>
                تعليمنا تفاعلي، يجمع بين التعلم التقليدي والتقنيات الحديثة لضمان
                تجربة تعليمية ممتعة وفعالة. نوفر أنشطة واختبارات تفاعلية،
                ومنتديات نقاش لتعزيز الفهم وتحفيز الفضول. هدفنا بيئة تعليمية
                مشوقة تدعم التعلم النشط.
              </DoPa>
            </DoCon>
          </DoWr>
          <VidWr>
            <VidMa
              src="https://alsallum.s3.eu-north-1.amazonaws.com/frame.mp4"
              autoPlay
              muted
              loop
            ></VidMa>
          </VidWr>
        </BriSub>
        <div></div>
      </BriWr>
    </BriCon>
  );
};

export default Briliant;
