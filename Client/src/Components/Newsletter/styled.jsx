import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div`
height: 60vh;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const Title = styled.h1`
color: white;
font-size: 70px;
margin: 20px;
`;

export const Description = styled.div`
color: white;
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({textAlign: 'center'})}

`;

export const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color:black ;
display: flex;
justify-content: space-between;
border: 1px solid white;
${mobile({width: '80%'})}

`;

export const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`;

export const Button = styled.button`
flex: 1;
border: none;
background-color: goldenrod;
`;



