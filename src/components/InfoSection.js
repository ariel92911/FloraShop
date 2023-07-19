import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Button } from "../styles/layout";

const InfoSec = styled.div`
  padding: 100px 0;
  background: ${({ lightBg }) => (lightBg ? "#f8f8f8" : "#ffffff")};

  @media (max-width: 960px) {
    padding: 50px 0;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  padding: 0 50px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 540px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: center;

  @media (max-width: 960px) {
    padding-bottom: 0;
  }

  @media (max-width: 540px) {
    padding-bottom: 0;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#585858ff" : "#1c2237")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 15px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#8d8d8d" : "#1c2237")};
`;

function InfoSection(props) {
  const {
    lightBg,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start,
    path,
  } = props;

  return (
    <InfoSec lightBg={lightBg}>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumn>
          <InfoColumn>
            <TextWrapper>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              <Link to={path}>
                <Button big>{buttonLabel}</Button>
              </Link>
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
}

export default InfoSection;
