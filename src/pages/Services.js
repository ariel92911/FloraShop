import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Post from "../components/Post";
import bgImg from "../images/banner2.png";
import postImg1 from "../images/design1.jpg";
import postImg2 from "../images/design2.jpg";
import postImg3 from "../images/case1.jpg";
import postImg4 from "../images/case2.jpg";
import postImg5 from "../images/case3.jpg";
import postImg6 from "../images/course2.jpg";
import postImg7 from "../images/course1.jpg";

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

const Heading = styled.h3`
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const bannerInfo = {
  title: "SERVICES 服務",
  subTitle: "不只是美觀，我們在乎得更多",
  img: bgImg,
};

const posts1 = [
  {
    title: "紋理卡片 : 再細小都是一個世界",
    text: "拓印植物的紋理，各個植物皆獨一無二的性格。",
    img: postImg1,
  },
  {
    title: "熱帶叢林 x 原木花架：",
    text: "熱帶叢林裡充滿奇花異果，樹枝上的蕨類到處蔓延，來自原始森林的生命力展現。",
    img: postImg2,
  },
];
const posts2 = [
  {
    title: "野餐派對 : 做喜歡的自己",
    text: "沒有拘謹的規矩，躺在草地上吃著三明治",
    img: postImg3,
  },
  {
    title: "森物再造計劃 ：如詩通華美的綺幻工藝！",
    text: "呈現自然生態中各生物的生活姿態，優美，剛毅，可愛，柔氣各有其韻味。",
    img: postImg4,
  },
  {
    title: "轉角餐廳 ：來自大地的感恩節",
    text: "大地給我們果實、火雞肉、葡萄酒，當然還有花朵",
    img: postImg5,
  },
];
const posts3 = [
  {
    title: "給新手的日常花藝課",
    text: "愛花，可以成為一種生活習慣。這堂課獻給所有喜愛花、欣賞美的你。",
    img: postImg6,
  },
  {
    title: "與花共生的居家花藝課",
    text: "帶你創作出裝飾客廳、餐廳、房間等的花藝作品，在日常中與花共生。",
    img: postImg7,
  },
];

function Services() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Banner {...bannerInfo} />
      <Container>
        <Heading>- DESIGN -</Heading>
        <Row>
          {posts1.map((post) => {
            return <Post key={post.index} {...post} />;
          })}
        </Row>
        <Heading>- CASES -</Heading>
        <Row>
          {posts2.map((post) => {
            return <Post key={post.index} {...post} />;
          })}
        </Row>
        <Heading>- COURSE -</Heading>
        <Row>
          {posts3.map((post) => {
            return <Post key={post.index} {...post} />;
          })}
        </Row>
      </Container>
    </>
  );
}

export default Services;
