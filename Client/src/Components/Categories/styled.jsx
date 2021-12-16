import styled from "styled-components";
import {mobile} from '../../Responsive'

export const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({padding: '0px', flexDirection:'column' })}

`;

export const ItemContainer = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height: '55vh'})}
`;

export const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Title = styled.h1`
color: goldenrod;
margin-bottom: 20px;
`;

export const Button = styled.button`
border: none;
padding: 10px;
background-color: black;
color: #FFFFFF;
cursor: pointer;
font-weight: 600;
`;


