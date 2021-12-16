import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

import Announcement from "../Components/Announcement/Announcement";

import Footer from "../Components/Footer/Footer";

import Navbar from "../Components/Navbar/Navbar";

import { useSelector } from "react-redux";

import StripeCheckout from "react-stripe-checkout";

import { userRequest } from "../requestMethods";

import { useHistory } from "react-router";

import {
  Bottom,
  CartContainer,
  CartInfo,
  CartTitle,
  CartWrapper,
  CheckOutButton,
  Details,
  Hr,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductSize,
  Summery,
  SummeryItem,
  SummeryItemPrice,
  SummeryItemText,
  SummeryTitle,
  Top,
  TopButton,
  TopText,
  TopTexts,
} from "./styled";

// const KEY = "process.env.STRIPE_KEY_TEST";

// const stripe = require("stripe")(process.env.STRIPE_KEY);

const KEY = "pk_test_M5h8HxKQ0kRrC1d038brenxZ00x65j1FnF";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [stripeToken, setStripeToken] = useState(null);

  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/Success", { data: res.data });
      } catch (error) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <CartContainer>
      <Navbar />
      <Announcement />
      <CartWrapper>
        <CartTitle>YOUR BAG</CartTitle>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <CartInfo>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <ProductImage src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}

            <Hr />
          </CartInfo>
          <Summery>
            <SummeryTitle>ORDER SUMMERY</SummeryTitle>
            <SummeryItem>
              <SummeryItemText>Subtotal</SummeryItemText>
              <SummeryItemPrice>$ {cart.total}</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Estimated Shipping</SummeryItemText>
              <SummeryItemPrice>$ 5.90</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Shipping Discount</SummeryItemText>
              <SummeryItemPrice>$ -5.90</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem type="total">
              <SummeryItemText>Total</SummeryItemText>
              <SummeryItemPrice>$ {cart.total}</SummeryItemPrice>
            </SummeryItem>
            <StripeCheckout
              name="THE KINGS & QUEENS PROJECT"
              image="https://i.imgur.com/huphzOn.png"
              billingAddress
              shippingAddress
              description="your total is $100"
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <CheckOutButton>CHECKOUT NOW</CheckOutButton>
            </StripeCheckout>
          </Summery>
        </Bottom>
      </CartWrapper>
      <Footer />
    </CartContainer>
  );
};

export default Cart;
