import { Link } from "react-router-dom";
import styled from "styled-components";

export const WhoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  direction: rtl;
  padding: 0 2rem;
  margin-bottom: 1rem;
  gap: 2rem;
  background-color: #f8f9fa;
  margin-top: 1rem;
`;

export const WhoMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

export const WhoContainer = styled.div`
  max-width: 600px;
  padding: 1rem;
`;

export const WhoHeader = styled.h3`
  color: #2946b6;
  font-size: 2.5rem;
  text-align: center;
`;

export const WhoPara = styled.p`
  color: #555;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
`;

export const WhoButton = styled.button`
  background-color: #2946b6;
  color: #fff;
  padding: 1rem 3rem;
  border: none;
  border-radius: 12px;
  font-size: 1.4rem;
  width: 200px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: #1c3a91;
  }
`;

export const WhoImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const WhoImg = styled.img`
  object-fit: cover;
  width: 200px;
`;
