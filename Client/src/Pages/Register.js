import React from "react";
import {
  Agreement,
  Form,
  RegisterButton,
  RegisterContainer,
  RegisterInput,
  RegisterTitle,
  RegisterWrapper,
} from "./styled";

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterTitle>CREATE AN ACCOUNT</RegisterTitle>
        <Form>
          <RegisterInput placeholder="name" />
          <RegisterInput placeholder="last name" />
          <RegisterInput placeholder="email" />
          <RegisterInput placeholder="username" />
          <RegisterInput placeholder="password" />
          <RegisterInput placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with <b>PRIVACY POLICY.</b>
          </Agreement>
          <RegisterButton>CREATE</RegisterButton>
        </Form>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default Register;
