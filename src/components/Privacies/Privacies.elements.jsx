// Privacies.elements.js
import styled, { createGlobalStyle } from "styled-components";

// Container for the entire terms page with RTL support
const TermsContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.8;
  color: #333;
  background-color: #fff;
  direction: rtl; /* دعم الاتجاه من اليمين إلى اليسار */

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

// Sections within the terms
const Section = styled.section`
  margin-bottom: 60px;
`;

// Subsections within each section
const SubSection = styled.div`
  margin-bottom: 30px;
`;

// Unordered list styling
const List = styled.ul`
  list-style-type: disc;
  margin-right: 40px; /* تعديل الهوامش لدعم RTL */
  margin-top: 10px;
`;

// List item styling
const ListItem = styled.li`
  margin-bottom: 15px;
  font-size: 15px;
`;

// Bold text styling
const BoldText = styled.span`
  font-weight: bold;
  color: #222;
`;

// Link styling
const Link = styled.a`
  color: #1a73e8;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #1558b0;
    text-decoration: underline;
  }
`;

// Italic text styling
const ItalicText = styled.span`
  font-style: italic;
  color: #555;
`;

// Section header styling
const SectionHeader = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: #1a73e8;
  margin-bottom: 25px;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
`;

// Container for service cards
const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
`;

// Individual service card styling with RTL adjustments
const ServiceCard = styled.div`
  background: #f9f9f9;
  padding: 25px;
  border-radius: 10px;
  width: 48%;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Wrapper for icons within service cards
const IconWrapper = styled.div`
  margin-bottom: 15px;
`;

// Service title styling
const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

// Container for each service item
const ServiceItem = styled.div`
  margin-bottom: 15px;
`;

// Subtitle within service items
const ServiceSubTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #555;
  margin: 8px 0;
`;

// Details within service items
const ServiceDetails = styled.p`
  font-size: 14px;
  color: #666;
  margin: 4px 0;
`;

// Header section styling
const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

// Main title styling
const Title = styled.h1`
  font-size: 32px;
  color: #333;
`;

// Subtitle styling within the header
const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  max-width: 700px;
  margin: 10px auto 0 auto;
`;

// Footer styling
const Footer = styled.footer`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
`;

/* Additional Global Styles (Optional) */
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f2f5;
  }

  hr {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 40px 0;
  }

  h1,
  h2,
  h3,
  h4 {
    color: #333;
  }

  p {
    font-size: 16px;
    color: #444;
  }
`;

// Group all styled-components into a single object
const styles = {
  TermsContainer,
  Section,
  SubSection,
  List,
  ListItem,
  BoldText,
  Link,
  ItalicText,
  SectionHeader,
  ServiceContainer,
  ServiceCard,
  IconWrapper,
  ServiceTitle,
  ServiceItem,
  ServiceSubTitle,
  ServiceDetails,
  Header,
  Title,
  Subtitle,
  Footer,
  GlobalStyle,
};

export default styles;
