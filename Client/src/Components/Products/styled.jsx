import styled from "styled-components";



export const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`;
export const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color:rgba(0,0,0,0.0);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
transition: all 0.5s ease;
cursor: pointer;
`;

export const ProductContainer = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
position: relative;

&:hover ${Info}{
opacity: 1;
}
`;

export const Circle = styled.div`
width: 240px;
height: 240px;
border-radius: 50%;
background-color: #555555;
position: absolute;
`;

export const Image = styled.img`
height: 75%;
z-index: 2;
`;



export const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color:goldenrod;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;

&:hover{
    background-color:#ffffff;
    color: black;
    transform: scale(1.1);
}
`;

