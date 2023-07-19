import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Operation = styled.button`
  width: 34px;
  height: 34px;
  line-height: 30px;
  margin: 0;
  padding: 0;
  border: 2px solid #333333;
  border-radius: 50%;
  background-color: #ffffff;
  text-align: center;
  font-size: 28px;
  color: #333;
  vertical-align: middle;
`;

const Number = styled.div`
  color: #333;
  width: 90px;
  padding: 5px 10px;
  text-align: center;
  font-size: 23px;
  font-weight: 500;
`;

function Counter() {
  return (
    <Container>
      <Operation>-</Operation>
      <Number>1</Number>
      <Operation>+</Operation>
    </Container>
  );
}

export default Counter;
