import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../styles/layout";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LogoSrc from "../images/logo.jpg";
import CANVAS from "../images/CANVAS.jpg";
import FLORA from "../images/FLORA.jpg";
import NAKED from "../images/NAKED.jpg";
import TABLE from "../images/TABLE.jpg";
import WREATH from "../images/WREATH.jpg";

const Nav = styled.nav`
  background: ${(props) => props.theme.navbarColor};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  position: relative;

  ${Container}
`;

const NavLogo = styled(Link)`
  color: ${(props) => props.theme.titleColor};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const NavIcon = styled.img`
  margin-right: 0.5rem;
  width: 20px;
  height: 20px;
`;

const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    opacity: 1;
    transition: all 0.5s ease;
    background-color: ${(props) => props.theme.navbarColor};
    left: ${({ click }) => (click ? 0 : "-100%")};
  }
`;

const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const NavLinks = styled(NavLink)`
  color: ${(props) => props.theme.fontColor};

  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &.active {
    font-weight: 500;
    color: ${(props) => props.theme.fontHoverColor};
    pointer-events: none;
  }

  &:hover {
    color: ${(props) => props.theme.fontHoverColor};
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;

const DropdownMenu = styled.div`
  width: 100%;
  background: #333333;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100%;
  left: 0;
  transform: translate(0, 0);
  font-size: 1rem;

  a {
    color: #ffffff;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [homeClick, setHomeClick] = useState(false);
  const [servicesClick, setServicesClick] = useState(false);
  const [productsClick, setProductsClick] = useState(false);

  const handleHomeClick = () => {
    setHomeClick(true);
    setProductsClick(false);
    setServicesClick(false);
  };
  const handleServicesClick = () => {
    setHomeClick(false);
    setProductsClick(false);
    setServicesClick(true);
  };
  const handleProductsClick = () => {
    setHomeClick(false);
    setProductsClick(true);
    setServicesClick(false);
  };

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerwidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const products = [
    {
      title: "CANVAS 布品花束",
      img: CANVAS,
      productId: 1,
    },
    {
      title: "FLORA 經典花束",
      img: FLORA,
      productId: 2,
    },
    {
      title: "NAKED 裸花束",
      img: NAKED,
      productId: 3,
    },
    {
      title: "TABLE 桌花",
      img: TABLE,
      productId: 4,
    },
    {
      title: "WREATH 花圈",
      img: WREATH,
      productId: 5,
    },
  ];

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src={LogoSrc} />
            FLORA
          </NavLogo>
          <HamburgerIcon onClick={handleClick}>
            {click ? <AiOutlineClose /> : <AiOutlineMenu />}
          </HamburgerIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem onClick={handleHomeClick} homeClick={homeClick}>
              <NavLinks to="/about" onClick={closeMobileMenu}>
                關於
              </NavLinks>
            </NavItem>
            <NavItem
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              onClick={handleProductsClick}
              productsClick={productsClick}
            >
              <NavLinks to="/products" onClick={closeMobileMenu}>
                花品
              </NavLinks>
              {isOpen && (
                <DropdownMenu>
                  {products.map((product, index) => {
                    return (
                      <NavLinks
                        to={`/products/${product.productId}`}
                        state={product}
                        key={index}
                      >
                        {product.title}
                      </NavLinks>
                    );
                  })}
                </DropdownMenu>
              )}
            </NavItem>
            <NavItem
              onClick={handleServicesClick}
              servicesClick={servicesClick}
            >
              <NavLinks to="/services" onClick={closeMobileMenu}>
                服務
              </NavLinks>
            </NavItem>
            <NavItem onClick={handleHomeClick} homeClick={homeClick}>
              <NavLinks to="/contact" onClick={closeMobileMenu}>
                聯絡
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
