import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import bgImg from "../images/banner1.png";
import aboutImg from "../images/about.jpg";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 50px 20px;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
const Col = styled.div`
  width: 50%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
const TextWrapper = styled.div`
  margin-bottom: 20px;
`;
const Title = styled.h3`
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 24px;

  @media screen and (max-width: 960px) {
    margin-top: 0px;
  }
`;
const Content = styled.p`
  font-size: 15px;
  line-height: 1.5;
  text-align: justify;
  color: #333;
  margin-bottom: 12px;
`;
const ImgWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-top: 75%;
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const bannerInfo = {
  title: "關於 FLORA",
  subTitle: "",
  img: bgImg,
};

const aboutInfo = {
  title: "花的美好提醒我感受當下",
  text1: "「花」對我來說是一種生活方式",
  text2:
    "我們的生活都太忙碌，可能就連家門口的樹都沒好好欣賞過，靜靜的看你會發現：網狀的葉脈、飽滿的果實、彎曲的樹枝，這些最簡單的東西卻很神奇，我們能用雙眼能夠看到東西，卻要用心才能看見美。",
  text3:
    "也許是母親節、情人節或只是一個平常的日子，我們所經歷的一切都只有這麼一次，好好品味、認真看待它，這是花所教會我的事。",
  img: aboutImg,
};

function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Banner {...bannerInfo} />
      <AboutContainer>
        <Row>
          <Col>
            <TextWrapper>
              <Title>{aboutInfo.title}</Title>
              <Content>{aboutInfo.text1}</Content>
              <Content>{aboutInfo.text2}</Content>
              <Content>{aboutInfo.text3}</Content>
            </TextWrapper>
          </Col>
          <Col>
            <ImgWrapper img={aboutInfo.img} />
          </Col>
        </Row>
      </AboutContainer>
    </>
  );
}

export default About;
