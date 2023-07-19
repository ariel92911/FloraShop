import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 30%;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 24px;
  &:not(:nth-of-type(3n)) {
    margin-right: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

const CardImg = styled.img`
  width: 100%;
  vertical-align: middle;
  margin-bottom: 24px;
`;

const CardTitle = styled.h4`
  font-size: 25px;
`;

const CardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

const CardFeature = styled.li`
  font-size: 13px;
  margin-bottom: 10px;
`;

function Card(props) {
  const { title, des, img, productId } = props;
  const productData = { title, img };

  return (
    <ProductCard to={`/products/${productId}`} state={productData}>
      <CardInfo>
        <CardImg src={img} alt={title}></CardImg>
        <CardTitle>{title}</CardTitle>
        <CardFeatures>
          <CardFeature>{des}</CardFeature>
        </CardFeatures>
      </CardInfo>
    </ProductCard>
  );
}

export default Card;
