import React from "react";
import {
  ReachContainer,
  ContactTitle,
  ContactSection,
  ContactMethod,
  ContactLink,
  ContactText,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  AdditionalContact,
  SocialDescription,
} from "./Reach.elements";
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const Reach = () => {
  return (
    <ReachContainer>
      <ContactTitle>ابقَ على تواصل معنا</ContactTitle>
      <ContactText>
        في FluentFox، نحن نؤمن بأهمية التواصل المفتوح مع عملائنا ومتابعينا. سواء
        كنت ترغب في الاستفسار عن خدماتنا، أو ترغب في مشاركة فكرة جديدة، أو تحتاج
        إلى دعم مباشر، نحن هنا لخدمتك. هناك العديد من الطرق التي يمكنك من خلالها
        الوصول إلينا.
      </ContactText>
      <ContactSection>
        <ContactMethod>
          <h3>أرسل لنا رسالة بريد إلكتروني</h3>
          <ContactLink href="mailto:no-reply@fluentfox.net">
            no-reply@fluentfox.net
          </ContactLink>
          <AdditionalContact>
            هل تفضل المحادثة المباشرة؟ لا تتردد في التواصل معنا عبر البريد
            الإلكتروني للحصول على رد سريع وشخصي. نحن هنا للمساعدة!
          </AdditionalContact>
        </ContactMethod>

        <ContactMethod>
          <h3>تابعنا على وسائل التواصل الاجتماعي</h3>
          <SocialDescription>
            ابقَ على اطلاع على آخر المستجدات، النصائح، والمحتوى المميز من
            FluentFox من خلال منصات التواصل الاجتماعي. نحن نشاركك كل ما تحتاجه
            لتحسين مهاراتك اللغوية.
          </SocialDescription>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/@dralsallum"
                target="_blank"
                aria-label="Youtube"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.tiktok.com/"
                target="_blank"
                aria-label="Tiktok"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.twitter.com/fluent_fox"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
          <AdditionalContact>
            لا تنسَ متابعة صفحاتنا لتبقى على اتصال دائم مع مجتمع FluentFox. نحن
            ننشر بانتظام محتوى تعليمي، تحديات ممتعة، ونصائح عملية لتطوير لغتك.
          </AdditionalContact>
        </ContactMethod>
      </ContactSection>
    </ReachContainer>
  );
};

export default Reach;
