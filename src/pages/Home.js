import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfoSection from "../components/InfoSection";
import carousel1 from "../images/carousel1.png";
import carousel2 from "../images/carousel2.png";
import carousel3 from "../images/carousel3.png";
import img1 from "../images/banner1.png";
import img2 from "../images/banner2.png";
import img3 from "../images/banner3.png";

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

const section1 = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: "花品",
  description:
    "不同的花束在我們生活中總是扮演不同的角色，在生日、畢業、婚禮等場合送出的花束，被賦予了獨特的意義，想說的話用花藝表達。",
  buttonLabel: "More",
  imgStart: "",
  img: img1,
  alt: "產品",
  start: "",
  path: "/products",
};

const section2 = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headline: "服務",
  description:
    "花藝教學 / 場地佈置 / 客製賀卡，不只是美觀，我們在乎得更多！讓美及生命力這份美好停留在身邊。",
  buttonLabel: "More",
  imgStart: "start",
  img: img2,
  alt: "服務",
  start: "true",
  path: "/services",
};

const section3 = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: "居家花藝課",
  description:
    "帶你創作出裝飾家中客廳、餐廳、房間等角落的花藝作品，並認識季節＆常見花材、花材養護、配色美學，在日常中與花共生，讓花點亮你的每一天",
  buttonLabel: "More",
  imgStart: "",
  img: img3,
  alt: "居家花藝課",
  start: "",
  path: "/about",
};

function Home() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const renderSlides = () =>
    [carousel1, carousel2, carousel3].map((img, index) => (
      <div>
        <BgContainer key={index} img={img}></BgContainer>
      </div>
    ));
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Slider {...settings}>{renderSlides()}</Slider>
      <InfoSection {...section1} />
      <InfoSection {...section2} />
      <InfoSection {...section3} />
    </>
  );
}

export default Home;
