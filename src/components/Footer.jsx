import {
  FooterBottom,
  FooterIcon,
  FooterIcons,
  FooterTop,
  FooterLi,
  FooterLogo,
  FooterP,
  FooterCopy,
  FooterUl,
  StyledFooter,
} from "./styles/Footer.styled";
import Logo from "../assets/shared/desktop/logo.svg";
import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterTop>
        <FooterLogo src={Logo} />
        <FooterUl>
          <FooterLi>HOME</FooterLi>
          <FooterLi>HEADPHONES</FooterLi>
          <FooterLi>SPEAKERS</FooterLi>
          <FooterLi>EARPHONES</FooterLi>
        </FooterUl>
      </FooterTop>
      <FooterBottom>
        <FooterP>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </FooterP>

        <FooterCopy>Copyright 2021. All Rights Reserved</FooterCopy>
        <FooterIcons>
          <FooterIcon src={Facebook} />
          <FooterIcon src={Twitter} />
          <FooterIcon src={Instagram} />
        </FooterIcons>
      </FooterBottom>
    </StyledFooter>
  );
};

export default Footer;
