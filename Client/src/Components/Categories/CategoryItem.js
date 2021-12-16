import React from "react";
import { Link } from "react-router-dom";
import Products from "../Products/Products";
import { ItemContainer, Image, Info, Title, Button } from "./styled";

const CategoryItem = ({ item }) => {
  return (
    <ItemContainer>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </ItemContainer>
  );
};

export default CategoryItem;
