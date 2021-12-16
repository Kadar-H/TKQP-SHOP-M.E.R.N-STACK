import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div`
height: 60px;
${mobile({height: '50px'})}
`;

export const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({padding: '10px 0px'})};
`;

export const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

export const Center = styled.div`
flex: 1;
text-align: center;
`;

export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex: 2, justifyContent: 'center'})}
`;

export const Language = styled.text`
font-size: 14;
cursor: pointer;
${mobile({display: 'none'})}
`;

export const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

export const Input = styled.input`
border: none;
${mobile({width: '50px'})}
`;

export const ShopLogo = styled.img`
width: 70px;
height: 30px;
${mobile({width: '50px'})}


.LogoContainer {
    display: flex;
align-items: center;
margin: 0;
padding: 0;
}
`;

export const MenuItem = styled.div`
font-size: 14;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: '12px', marginLeft:'10px'})}
`;