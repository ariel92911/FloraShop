import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/layout";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const FooterContainer = styled.div`
  background-color: #eeeeee;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: ${(props) => props.theme.fontColor};
`;

const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 20px;
`;

const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 15px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #b7b2b3ff;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: ${(props) => props.theme.fontColor};

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 13px;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 5px;
  }

  &:hover {
    color: ${(props) => props.theme.fontHoverColor};
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const WebsiteRights = styled.small`
  color: ${(props) => props.theme.fontColor};
  margin: 16px 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          你也是愛花的朋友嗎？加入電子報會員獲取最新消息與優惠
        </FooterSubHeading>
        <FooterSubText>
          「 終究有一天花會凋謝，回憶卻永遠留給我們。」
        </FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button>訂閱</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>SERVICE</FooterLinkTitle>
            <FooterLink to="/">新鮮花材製作</FooterLink>
            <FooterLink to="/">生活花藝教學</FooterLink>
            <FooterLink to="/">場地布置</FooterLink>
            <FooterLink to="/">客製賀卡</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>FLOWER</FooterLinkTitle>
            <FooterLink to="/products">CANVAS 布品花束</FooterLink>
            <FooterLink to="/products">FLORA 芙蘿拉花束</FooterLink>
            <FooterLink to="/products">NAKED 裸花束</FooterLink>
            <FooterLink to="/products">TABLE FLOWER 桌花</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>SUPPORT</FooterLinkTitle>
            <FooterLink to="/">購物須知</FooterLink>
            <FooterLink to="/">送花服務</FooterLink>
            <FooterLink to="/">常見問題</FooterLink>
            <FooterLink to="/">花朵照顧</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>SOCIAL</FooterLinkTitle>
            <FooterLink to="/">
              <FaFacebook />
              Facebook
            </FooterLink>
            <FooterLink to="/">
              <FaInstagram />
              Instagram
            </FooterLink>
            <FooterLink to="/">
              <FaYoutube />
              YouTube
            </FooterLink>
            <FooterLink to="/">
              <FaTwitter />
              Twitter
            </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>FLORA © 2023 </WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
