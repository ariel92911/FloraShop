import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1080px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  background: white;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${theme.subfontColor};
  font-size: "16px";
  outline: none;
  border: 3px solid ${theme.subfontColor};
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    color: #ffffff;
    background: ${theme.subfontColor};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
