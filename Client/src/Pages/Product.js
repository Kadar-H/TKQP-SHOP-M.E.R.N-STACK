import { Add, Remove } from "@material-ui/icons";

import React, { useEffect, useState } from "react";

import { useLocation } from "react-router";

import Announcement from "../Components/Announcement/Announcement";

import Footer from "../Components/Footer/Footer";

import Navbar from "../Components/Navbar/Navbar";

import Newsletter from "../Components/Newsletter/Newsletter";

import { addProduct } from "../Redux/cartRedux";

import { publicRequest } from "../requestMethods";

import { useDispatch } from "react-redux";

import {
  Desc,
  ImgContainer,
  InfoContainer,
  Price,
  ProductContainer,
  ProductTitle,
  Wrapper,
  Image,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  ProductFilterContainer,
  ProductFilter,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./styled";

const Product = () => {
  const location = useLocation();

  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});

  const [quantity, setQuantity] = useState(1);

  const [color, setColor] = useState("");

  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // Update Cart
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <ProductContainer>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} alt={product.name} />
        </ImgContainer>
        <InfoContainer>
          <ProductTitle>{product.title}</ProductTitle>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}</Price>
          <ProductFilterContainer>
            <ProductFilter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </ProductFilter>
            <ProductFilter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onClick={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </ProductFilter>
          </ProductFilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </ProductContainer>
  );
};

export default Product;
