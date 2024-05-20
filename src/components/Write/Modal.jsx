import { RButton, RCon, RHeader, RWrap } from "./Write.elements";

const Modal = ({ resetQuiz }) => {
  return (
    <RCon>
      <RWrap>
        <RHeader>You Lost</RHeader>
        <RButton onClick={resetQuiz}>Take the quiz again</RButton>
      </RWrap>
    </RCon>
  );
};

export default Modal;
