import { ArrowBack, ArrowForward } from "@material-ui/icons";
import React, { useState } from "react";
import { SliderItems } from "../../assets/Data/Data";
import {
  Container,
  Arrow,
  Wrapper,
  InfoContainer,
  ImgContainer,
  Image,
  Slide,
  Title,
  Desc,
  Button,
} from "./styled";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBack />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt="" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button> SHOP NOW </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForward />
      </Arrow>
    </Container>
  );
};

export default Slider;
