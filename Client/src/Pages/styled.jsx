import styled from "styled-components";
import Galaxy from '../assets/Images/Galaxy.jpg'
import { mobile } from "../Responsive";

export const Container = styled.div``;

export const Title = styled.h1`
margin: 20px;
`;

export const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

export const Filter = styled.div`
margin: 20px;
${mobile({width: '0px, 20px', display:'flex', flexDirection: 'column'})}
`;

export const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight: '0px'})}
`;

export const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin: '10px 0px'})}
`;

export const Option = styled.option``;

export const ProductContainer = styled.div``;

export const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding: '10px', flexDirection:'column'})}
`;

export const ImgContainer = styled.div`
flex: 1;
`;

export const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: contain ;
${mobile({height: '50vh'})}
`;

export const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({padding: '10px'})}
`;

export const ProductTitle = styled.h1`
font-weight: 600;
`;

export const Desc = styled.p`
margin: 20px 0px;
`;

export const Price = styled.span`
font-weight: 500;
font-size: 40px;
`;

export const ProductFilterContainer = styled.div`
width: 50%;
margin: 30px;
display: flex;
justify-content: space-between;
${mobile({width: '90%'})}
`;

export const ProductFilter = styled.div`
display: flex;
align-self: center;
`;

export const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;
`;

export const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;

export const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
display: flex;
width: 50%;
align-items: center;
justify-content: space-between;
${mobile({width: '100%'})}
`;

export const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;

`;

export const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid goldenrod;
align-items: center;
justify-content: center;
margin: 0px 5px;
display: flex;
`;

export const Button = styled.button`
padding: 15px;
border: 2px solid goldenrod;
background-color: black;
color: white;
cursor: pointer;
font-weight: 600;

&:hover{
    background-color: white;
    color: black;
}

`;


export const RegisterContainer = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),
 rgba(255,255,255,0.5)), url(${Galaxy}) center;
 display: flex;
 align-items: center;
 justify-content: center;
 background-size: cover;
`;

export const RegisterWrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
${mobile({width: '75%'})}
`;

export const RegisterTitle = styled.h1`
font-size: 24px;
font-weight: 600;
`;

export const Form = styled.form`
display: flex;
flex-wrap: wrap;

`;

export const RegisterInput = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

export const Agreement = styled.span`

font-size: 12px;
margin: 20px 0px;
`;

export const RegisterButton = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: black;
color: white;
cursor: pointer;
font-weight: 600;
`;

export const LoginContainer = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),
 rgba(255,255,255,0.5)), url(${Galaxy}) center;
 display: flex;
 align-items: center;
 justify-content: center;
 background-size: cover;
 `;

export const LoginWrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
${mobile({width: '75%'})}
`;

export const LoginTitle = styled.h1`
font-size: 24px;
font-weight: 600;
`;

export const LoginForm = styled.form`
display: flex;
flex-direction: column;

`;

export const LoginInput = styled.input`
flex:1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`;



export const LoginButton = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: black;
color: white;
cursor: pointer;
font-weight: 600;
margin-bottom: 10px;
&:disabled{
    color:goldenrod;
    cursor: not-allowed;
}
`;

export const Link = styled.a`
margin: 10px 0px;
font-size: 15px;
text-decoration: underline;
cursor: pointer;
`;

export const CartContainer = styled.div`

`;

export const CartWrapper = styled.div`
padding: 20px;
${mobile({padding: '10px'})}
`

export const CartTitle = styled.h1`
font-weight: 500;
text-align: center;
`;

export const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

export const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === 'filled' && 'none'};
background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
color: ${props => props.type === 'filled' && 'white'};

`;

export const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: 'column'})}
`;

export const TopTexts = styled.text`
${mobile({display: 'none'})}
`;

export const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

export const CartInfo = styled.div`
flex: 3;
`;

export const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: 'column'})}
`;

export const ProductDetail = styled.div`
flex: 2;
display: flex;
`;

export const ProductImage = styled.img`
width: 350px;
// might need to remove
${mobile({width: '50%'})}
`;

export const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`;

export const ProductSize = styled.div``;


export const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: '5px 15px'})}
`;

export const ProductPrice = styled.div`
font-size: 30px;
font-weight: 400;
${mobile({marginBottom: '20px'})}
`;

export const Hr = styled.hr`
background-color: #eee;
/* border: none; */
height: 1px;
`;

export const Summery = styled.div`
flex:1;
border: 0.5px solid goldenrod;
border-radius: 10px;
padding: 20px;
height: 62vh;
`;

export const SummeryTitle = styled.h1`
font-weight: 400;
`;

export const SummeryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === 'total' && 500};
font-size: ${props => props.type === 'total' && '24px'};
`;

export const SummeryItemText = styled.span`

`;
export const SummeryItemPrice = styled.span`

`;

export const CheckOutButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;

export const SuccessContainer = styled.div`
justify-content: center;
align-items: center;
align-self: center;
align-content: center;
`;

export const SuccessButton = styled.button`
background-color: black;
color: white;
font-size: 15px;
font-family: Lato;
width: 100px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
align-self: center;
border-radius: 5px;
`;

export const Text = styled.text`
font-size: 20px;
font-weight: 600;
`;

export const SuccessImage = styled.img`
width: 15%;
height: 15%;


`;

export const SuccessImgContainer = styled.div`
right: 50%;
justify-content: center;
align-items: center;
align-self: center;
align-content: center;

`;

export const Error = styled.span`
color: red;
`;