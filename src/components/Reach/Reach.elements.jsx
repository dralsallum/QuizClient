import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ReachContainer = styled.div`
  padding: 40px;
  background-color: #fff;
  border-radius: 12px;
  max-width: 800px;
  margin: auto;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

export const ContactTitle = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 30px;
  color: #2946b6;
  font-weight: bold;
`;

export const ContactText = styled.p`
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #555;
  line-height: 1.6;
`;

export const ContactSection = styled.div`
  margin-bottom: 40px;
`;

export const ContactMethod = styled.div`
  margin-bottom: 40px;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 10px;
    color: #2946b6;
    font-weight: bold;
  }
`;

export const ContactLink = styled.a`
  font-size: 1.6rem;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

export const AdditionalContact = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  color: #666;
  line-height: 1.5;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const SocialIconLink = styled.a`
  color: #555;
  font-size: 32px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

export const SocialDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.5;
`;
