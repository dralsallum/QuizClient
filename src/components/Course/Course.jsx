import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowForwardIos, MdEdit, MdPerson } from "react-icons/md";
import {
  BotAt,
  BotAtt,
  BotWr,
  CoWr,
  CurBo,
  CurCon,
  CurLa,
  CurSp,
  CurSub,
  ExAt,
  ExKa,
  ExLe,
  ExLi,
  ExMa,
  ExMaSub,
  ExRi,
  ExSp,
  ExSpa,
  ExTi,
  ExTiHe,
  ExUl,
  GrAt,
  GrCon,
  GrLin,
  GrSp,
  GrSpa,
  GrSpan,
  GrSu,
  GrSub,
  GrWr,
  IconCon,
  MidCo,
  MidHe,
  MidPa,
  MidPar,
  MidSub,
  MidWr,
  SecFl,
  SecFlAll,
  SecWr,
  SubCon,
  SubFi,
  SubFir,
  SubFirHe,
  SubFirHea,
  SubFo,
  SubNon,
  SubSe,
  SubSeHe,
  SubTh,
  TriAt,
  TriCon,
  TriHe,
  TriSp,
  TriWr,
  ViBut,
} from "./Course.elements";

const Course = () => {
  return (
    <CoWr>
      <SecWr>
        <SecFl>
          <SubNon></SubNon>
          <SecFlAll>
            <SubCon>
              <SubFir>
                <SubFirHe>
                  <SubFirHea>اكمل تعلمك</SubFirHea>
                </SubFirHe>
                <CurCon>
                  <CurSub>
                    <CurLa htmlFor="">التقدم: 0%</CurLa>
                    <CurBo>
                      <CurSp>60%</CurSp>
                    </CurBo>
                  </CurSub>
                  <MidWr>
                    <MidCo>
                      <MidSub>
                        <MidPa>الدورة</MidPa>
                        <MidHe>تعلم الاستماع</MidHe>
                        <MidPar>المرحلة الاولى - الجزء الاستماعي</MidPar>
                      </MidSub>
                    </MidCo>
                  </MidWr>
                  <BotWr>
                    <BotAt href="">عرض المنهج الدراسي</BotAt>

                    <BotAtt to="/eng/knowledge1">
                      اكمل
                      <IconCon>
                        <FaArrowRight
                          style={{
                            width: "100%",
                            height: "100%",
                            color: "black",
                            zIndex: 0,
                            overflow: "hidden",
                            transform: "rotate(180deg)",
                          }}
                        />
                      </IconCon>
                    </BotAtt>
                  </BotWr>
                </CurCon>
                <ViBut>
                  عرض كل المنهج التعليمي
                  <MdArrowForwardIos
                    style={{
                      color: "3a10e5",
                      fontSize: "18px",
                      transform: "rotate(180deg)",
                    }}
                  />
                </ViBut>
              </SubFir>
              <SubSe>
                <SubSeHe>اعمل نحو هدفك</SubSeHe>
                <GrWr>
                  <GrSp>تطور في دورك الحالي</GrSp>
                  <GrAt href="">
                    تعديل
                    <MdEdit
                      style={{
                        color: "#3A10E5",
                        fontSize: "18px",
                        marginLeft: "2px",
                      }}
                    />
                  </GrAt>
                </GrWr>
                <GrCon>
                  <GrSub>
                    <GrSu>
                      <GrSpa>الهدف الأسبوعي</GrSpa>
                      <GrSpan>لم يتم تحديد هدف أسبوعي بعد</GrSpan>
                      <GrLin href="">تحديد الهدف</GrLin>
                    </GrSu>
                  </GrSub>
                </GrCon>
              </SubSe>
              <SubTh></SubTh>
              <SubFo>
                <ExTi>
                  <ExTiHe>اكتشف المزيد من الميزات</ExTiHe>
                </ExTi>
                <ExUl>
                  <ExLi>
                    <ExAt href="">
                      <ExMa>
                        <ExMaSub>
                          <ExLe>
                            <MdPerson
                              style={{
                                width: "40px",
                                height: "40px",
                                zIndex: 0,
                                overflow: "hidden",
                              }}
                            />
                            <ExKa>
                              <ExSp>محاكي المقابلة</ExSp>
                              <ExSpa>
                                تدرب على مهاراتك في المقابلة واحصل على ملاحظات
                                فورية مدعومة بالذكاء الاصطناعي.
                              </ExSpa>
                            </ExKa>
                          </ExLe>
                          <ExRi>
                            <MdArrowForwardIos
                              style={{
                                color: "000",
                                fontSize: "18px",
                                transform: "rotate(180deg)",
                              }}
                            />
                          </ExRi>
                        </ExMaSub>
                      </ExMa>
                    </ExAt>
                  </ExLi>
                </ExUl>
              </SubFo>
              <SubFi>
                <TriWr>
                  <TriCon>
                    <TriHe>
                      جرب الخطة المحترفة أو المميزة مع فترة تجريبية مجانية لمدة
                      7 أيام.
                    </TriHe>
                    <TriSp>
                      تعمق وتعلم مهارات جاهزة لسوق العمل. تدرب على مشاريع
                      واقعية، واجتاز التقييمات، واحصل على شهادات.
                    </TriSp>
                  </TriCon>
                  <TriAt href="">جرب مجاناً</TriAt>
                </TriWr>
              </SubFi>
            </SubCon>
          </SecFlAll>
        </SecFl>
      </SecWr>
    </CoWr>
  );
};

export default Course;
