import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMagento, FaYoutube } from "react-icons/fa";

export const ResetContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 600px;
  margin: auto;
  text-align: center;
`;

export const ContactTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

export const ContactSection = styled.div`
  margin-bottom: 20px;
`;

export const ContactMethod = styled.div`
  margin-bottom: 10px;
`;

export const ContactLink = styled.a`
  font-weight: bold;
  font-size: 20px;
  color: #007bff;
  margin-top: 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const SocialMediaLink = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
`;

export const SocialMediaIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  background-color: #f9f9f9;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  background-color: #f9f9f9;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #000;
  justify-content: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  background-color: #f9f9f9;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
  background-color: #f9f9f9;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  background-color: #f9f9f9;
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
  background-color: #f9f9f9;
`;
