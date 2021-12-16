import React from "react";
import { useLocation } from "react-router";
import {
  Image,
  ImgContainer,
  SuccessButton,
  SuccessContainer,
  Text,
} from "./styled";

const Success = () => {
  const location = useLocation();

  console.log(location);
  return (
    <SuccessContainer>
      <ImgContainer>
        <Image src="https://i.imgur.com/huphzOn.png" alt="TKQP LOGO" />
      </ImgContainer>
      <SuccessButton> SUCCESSFUL. </SuccessButton>
      <Text>Your Order is being prepared. Thanks for choosing SHOP TKQP.</Text>
    </SuccessContainer>
  );
};

export default Success;
