import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: black;
position: relative;
overflow: hidden;
${mobile({display: 'none'})}
`;

export const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #FFF;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute; 
top: 0;
bottom: 0;
margin: auto;
left: ${props => props.direction === 'left' && '10px'};
right: ${props => props.direction === 'right' && '10px'};
cursor: pointer;
opacity: 0.5;
z-index:2;
`;

export const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
display: flex;
background-color: #${props => props.bg};
`;

export const ImgContainer = styled.div`
flex: 1;
height: 100%;
`;

export const InfoContainer = styled.div`
flex: 1;
padding: 50px;
color: #FFF;
`;

export const Image = styled.img `
height: 80%;
`;

export const Title = styled.h1`
font-size: 78px;
color: #FFF;
`

export const Desc = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
color: #FFF;
letter-spacing: 3px;
`;

export const Button = styled.button`
padding: 10;
font-size: 20px;
font-family: Unbuntu;
background-color: #FFFFFF;
border: 2px solid goldenrod;
cursor: pointer;
`;


