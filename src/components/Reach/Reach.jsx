import React from "react";
import {
  ResetContainer,
  ContactTitle,
  ContactSection,
  ContactMethod,
  ContactLink,
} from "./Reach.elements";
import {
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
} from "../FooterMe/Footer.elements";

import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const Reach = () => {
  return (
    <ResetContainer>
      <ContactTitle>تواصل معنا</ContactTitle>
      <ContactSection>
        <ContactMethod>
          <h3>البريد الإلكتروني</h3>
          <ContactLink href="fluentfox@hotmail.com">
            fluentfox@hotmail.com
          </ContactLink>
        </ContactMethod>
        <ContactMethod>
          <h3>وسائل التواصل الاجتماعي</h3>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href={"https://www.youtube.com/@dralsallum"}
                  target="_blank"
                  aria-label="Youtube"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Tiktok">
                  <FaTiktok />
                </SocialIconLink>
                <SocialIconLink
                  href={"https://www.twitter.com/@fluent_fox"}
                  target="_blank"
                  aria-label="Twitter"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </ContactMethod>
      </ContactSection>
    </ResetContainer>
  );
};

export default Reach;
