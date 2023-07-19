import React from "react";
import styled from "styled-components";
import bgImg from "../images/banner1.png";

const BgContainer = styled.div`
  width: 100%;
  height: 0;
  padding-top: 40%;
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const Mask = styled.div`
  background-color: rgba(0,0,0,0.5);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
  
}
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0 50px;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Heading = styled.h1`
  margin: 0;
  text-wrap: nowrap;
  font-size: 48px;
  line-height: 2;
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #eeeeee;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

function Banner(props) {
  const { title, subTitle, img } = props;

  return (
    <BgContainer img={img}>
      <Mask></Mask>

      <TextWrapper>
        <Heading>{title}</Heading>
        <Subtitle>{subTitle}</Subtitle>
      </TextWrapper>
    </BgContainer>
  );
}

Banner.defaultProps = {
  title: "",
  subTitle: "",
  img: bgImg,
};

export default Banner;
