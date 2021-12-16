import { Send } from "@material-ui/icons";
import React from "react";
import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title,
} from "./styled";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
