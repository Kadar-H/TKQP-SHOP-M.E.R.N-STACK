import { Search, ShoppingCart } from "@material-ui/icons";

import React from "react";

import {
  Center,
  Container,
  Left,
  Right,
  Wrapper,
  Language,
  SearchContainer,
  Input,
  ShopLogo,
  MenuItem,
} from "./styled";

import Logo from "../../assets/Images/Logo.jpg";

import { Badge } from "@material-ui/core";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "Black", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <ShopLogo
              className="LogoContainer"
              src={Logo}
              alt="ShopLogo"
            ></ShopLogo>
          </Link>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCart />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
