import React, { useState } from "react";

import login from "../../src/Redux/apiCalls";

import { useDispatch, useSelector } from "react-redux";

import {
  Error,
  Link,
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginWrapper,
} from "./styled";

const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>SIGN IN</LoginTitle>
        <LoginForm>
          <LoginInput
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <LoginInput
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton onClick={handleClick} disabled={isFetching}>
            LOGIN
          </LoginButton>
          {error && <Error>Something went wrong...</Error>}
          <Link>FORGOT YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
