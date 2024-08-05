import React from "react";
import {
  ForgotContainer,
  ForgotFormContainer,
  ForgotHeader,
  ForgotSubHeader,
} from "./ForgotPassword.elements";

const ForgotPassword = () => {
  return (
    <ForgotContainer>
      <ForgotFormContainer>
        <ForgotHeader>نسيت كلمة المرور</ForgotHeader>
        <ForgotSubHeader>
          إذا نسيت كلمة المرور الخاصة بك، يرجى مراسلتنا بالضغط على الايميل
          بالاسفل
          <br />
          <br />
          <a href="mailto:fluentfox@outlook.com">fluentfox@outlook.com</a>.
        </ForgotSubHeader>
      </ForgotFormContainer>
    </ForgotContainer>
  );
};

export default ForgotPassword;
