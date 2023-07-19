import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Heading = styled.h1`
  margin: 0 0 20px;
  text-wrap: nowrap;
  font-size: 48px;
  font-weight: 600;
`;

const Des = styled.p`
  font-size: 18px;
  margin: 0 0 20px;
`;

const Button = styled.button`
  background: white;
  white-space: nowrap;
  padding: 10px 20px;
  color: #e2bb1bff;
  font-size: 13px;
  outline: none;
  border: 3px solid #e2bb1bff;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    color: #ffffff;
    background: #e2bb1bff;
  }
`;

function NotFoundPage() {
  return (
    <Container>
      <TextWrapper>
        <Heading>404</Heading>
        <Des>The page you're looking for doesn't exist.</Des>
        <Link to="/">
          <Button>回到首頁</Button>
        </Link>
      </TextWrapper>
    </Container>
  );
}

export default NotFoundPage;
