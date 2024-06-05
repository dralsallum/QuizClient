import styled from "styled-components";

export const TermsContainer = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
  direction: rtl;
  text-align: right;
`;

export const TermsHeader = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const TermsContent = styled.div`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;

  ol {
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;
