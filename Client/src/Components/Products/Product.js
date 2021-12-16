import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCart,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { Circle, Icon, Image, Info, ProductContainer } from "./styled";

const Product = ({ item }) => {
  return (
    <ProductContainer>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCart />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <Search />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </ProductContainer>
  );
};

export default Product;
