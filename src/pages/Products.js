import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Banner from "../components/Banner";
import bannerImg from "../images/banner3.png";
import CANVAS from "../images/CANVAS.jpg";
import FLORA from "../images/FLORA.jpg";
import NAKED from "../images/NAKED.jpg";
import TABLE from "../images/TABLE.jpg";
import WREATH from "../images/WREATH.jpg";

const ProductsSection = styled.div`
  padding: 0 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 50px;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const bannerInfo = {
  title: "FLORA 花品",
  subTitle: "感受當下花的美好",
  img: bannerImg,
};

function Products() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const cards = [
    {
      title: "CANVAS 布品花束",
      des: "打開衣櫃，為花穿上一件衣服",
      img: CANVAS,
      productId: 1,
    },
    {
      title: "FLORA 經典花束",
      des: "花藝師與設計師共同合作，簡約至極",
      img: FLORA,
      productId: 2,
    },
    {
      title: "NAKED 裸花束",
      des: "在很久以前，人們在鄉野間採集著野花",
      img: NAKED,
      productId: 3,
    },
    {
      title: "TABLE 桌花",
      des: "慢慢品味新的一天，這才是生活該有的樣子",
      img: TABLE,
      productId: 4,
    },
    {
      title: "WREATH 花圈",
      des: "匆匆忙忙的一天，何不給自己多一點溫柔",
      img: WREATH,
      productId: 5,
    },
  ];
  return (
    <ProductsSection>
      <Banner {...bannerInfo} />
      <ProductWrapper>
        <ProductContainer>
          {cards.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </ProductContainer>
      </ProductWrapper>
    </ProductsSection>
  );
}

export default Products;
