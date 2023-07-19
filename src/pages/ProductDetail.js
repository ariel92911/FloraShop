import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";

const Container = styled.div`
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
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: center;
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
const PriceWrapper = styled.div`
  margin: 40px 0 20px;
  display: flex;
  justify-content: space-between;
`;
const TextWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;
const Title = styled.h3`
  text-align: center;
  font-size: 28px;
  color: #4a4a4a;
  margin-bottom: 24px;

  @media screen and (max-width: 960px) {
    margin-top: 0px;
  }
`;
const Price = styled.p`
  font-size: 23px;
  font-weight: 500;
  line-height: 1.5;
  text-align: justify;
  color: #4a4a4a;
  margin-bottom: 12px;
`;
const ImgWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const ImgWrapper2 = styled(ImgWrapper)`
  background-size: 150%;
`;

const DesSectionTitle = styled.span`
  display: inline-block;
  margin-bottom: 20px;
  color: #4a4a4a;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  text-transform: uppercase;
  letter-spacing: 9.1px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: -60px;
    top: 50%;
    width: 40px;
    border-bottom: 1px solid #878787;
  }

  &:after {
    content: "";
    position: absolute;
    right: -60px;
    top: 50%;
    width: 40px;
    border-bottom: 1px solid #878787;
  }
`;

const DesSectionSubTitle = styled.div`
  margin: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

const DesSectionContent = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
`;

function ProductDetail(props) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const location = useLocation();
  const propsData = location.state;
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

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Slider {...settings}>
              <ImgWrapper img={propsData.img} />
              <ImgWrapper2 img={propsData.img} />
            </Slider>
          </Col>
          <Col>
            <PriceWrapper>
              <Title>{propsData.title}</Title>
              <Price>NT$1,000</Price>
            </PriceWrapper>
            <TextWrapper>
              <DesSectionTitle>商品描述</DesSectionTitle>
              <DesSectionContent>
                尺寸 : 約 40(長)x24/(寬) 公分
              </DesSectionContent>
              <DesSectionContent>鑑賞期 : 鮮花保存約7天</DesSectionContent>
              <DesSectionSubTitle>▍注意事項 ▍</DesSectionSubTitle>
              <DesSectionContent>
                1.此商品為純手工製作，尺寸略有差異。
              </DesSectionContent>
              <DesSectionContent>
                2.花材若有臨時缺貨、品質不穩定時，請同意花藝師更換等價花材使用。
              </DesSectionContent>
              <DesSectionContent>
                3.作品屬於天然植物，顏色略有差異，請以實物為準。
              </DesSectionContent>
              <DesSectionSubTitle>▍保存重點 ▍</DesSectionSubTitle>
              <DesSectionContent>1.避免陽光直射</DesSectionContent>
              <DesSectionContent>2.避免大力碰撞</DesSectionContent>
              <DesSectionContent>3.避免潮濕環境</DesSectionContent>
            </TextWrapper>
          </Col>
        </Row>
        <Row>
          <TextWrapper>
            <DesSectionTitle>送貨及付款方式</DesSectionTitle>
            <DesSectionSubTitle>▍送貨方式 ▍</DesSectionSubTitle>
            <DesSectionContent>黑貓-冷藏</DesSectionContent>
            <DesSectionContent>來店領取</DesSectionContent>
            <DesSectionSubTitle>▍宅配須知 ▍</DesSectionSubTitle>
            <DesSectionContent>
              1.可選擇時段 : [ 早上8-13 ] [ 下午14-18 ] [ 不指定 ]
            </DesSectionContent>
            <DesSectionContent>2.冷藏宅配費用 : $300</DesSectionContent>
            <DesSectionSubTitle>▍付款方式 ▍</DesSectionSubTitle>
            <DesSectionContent>現金</DesSectionContent>
            <DesSectionContent>銀行轉帳／ATM</DesSectionContent>
            <DesSectionContent>黑貓宅配(貨到付款)</DesSectionContent>
          </TextWrapper>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;
