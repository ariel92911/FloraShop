import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  width: 50%;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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

const TextWrapper = styled.div`
  margin: 15px 0;
`;

const PostTitle = styled.h4`
  text-align: center;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

const PostDes = styled.p`
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: #333;
  margin-bottom: 12px;
`;

function Post(props) {
  const { title, text, img } = props;

  return (
    <PostContainer>
      <ImgWrapper img={img} />
      <TextWrapper>
        <PostTitle>{title}</PostTitle>
        <PostDes>{text}</PostDes>
      </TextWrapper>
    </PostContainer>
  );
}

export default Post;
