import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const BriCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0px;
  padding-inline-start: 1.25rem;
  padding-inline-end: 1.25rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  direction: rtl;
`;
export const BriSpan = styled.span`
  color: #2a46b4;
`;
export const BriSub = styled.div`
  display: flex;
  flex-direction: row;
  --chakra-space-y-reverse: 1;
  --chakra-divide-y-reverse: 1;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;
export const BriWr = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1216px;
  width: 100%;
`;
export const VidWr = styled.div`
  max-width: 593px;
  height: auto;
  width: 100%;
  overflow: hidden;
  padding: 0px;
`;
export const VidMa = styled.video`
  max-width: 100%;
  height: auto;
  display: block;
  width: 100%;
`;

export const DoWr = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  border-width: 0;
  border-color: #142563;
  gap: 42px;
  max-width: 536px;

  @media screen and (max-width: 700px) {
    gap: 24px;
  }
`;
export const DoCon = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.25rem;
`;
export const DoHe = styled.h3`
  font-size: 1.725rem;
  line-height: 1.2;

  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
    line-height: 1.625rem;
  }
`;
export const DoPa = styled.p`
  font-size: calc(min(max(16px, 1.8vw), 20px));
`;
export const DoAt = styled.a`
  display: inline-flex;
  appearance: none;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-radius: 60px;
  border: 2px solid;
  border-color: transparent;
  color-scheme: blackAlpha;
  height: 48px;
  min-width: 3rem;
  transition: none;
  background-color: #2a46b4;
  box-shadow: 0 4px 0 0 #6787fc;
  color: #ffffff;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  font-size: 1rem;
  line-height: 1.25;
  font-weight: 500;
  height: 56px;
  width: 280px;
`;
