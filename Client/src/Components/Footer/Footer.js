import React from "react";
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Payment,
  Right,
  ShopLogo,
  SocialContainer,
  SocialIcon,
  Title,
} from "./styled";
import Logo from "../../assets/Images/Logo.jpg";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <Container>
      <Left>
        <ShopLogo src={Logo} alt="Shop Logo"></ShopLogo>
        <Desc>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </Desc>
        <SocialContainer>
          <SocialIcon color="goldenrod">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="goldenrod">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="goldenrod">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="goldenrod">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>King's Clothing</ListItem>
          <ListItem>Queen's Clothing</ListItem>
          <ListItem>High Demand</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 220 Yonge St, Toronto, ON M5B
          2H1
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 234-345-3456
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} /> Thekingsnqueenproject@tkqp.ca
        </ContactItem>
        <Payment src="https://i.imgur.com/sEpYbnR.png" alt="Payment Methods" />
      </Right>
    </Container>
  );
};

export default Footer;
