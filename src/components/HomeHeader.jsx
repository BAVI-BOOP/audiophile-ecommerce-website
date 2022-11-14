import {
  StyledNav,
  StyledMobileNavContainer,
  StyledUl,
  StyledMobileMenu,
  StyledHero,
  StyledHeroText,
  StyledSubHeader,
  StyledH1,
  StyledP,
  StyledButton,
  StyledLink,
} from "./styles/HomeHeader.styled";
import StyledHeader from "./styles/HomeHeader.styled";
import Logo from "./assets/shared/desktop/logo.svg";

import { HiOutlineShoppingCart } from "react-icons/hi";

const HomeHeader = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledMobileNavContainer>
          <StyledMobileMenu />
          <img src={Logo} alt="logo" style={{ cursor: "pointer" }} />
        </StyledMobileNavContainer>

        <StyledUl>
          <StyledLink to={"/"}>HOME</StyledLink>

          <StyledLink>HEADPHONES</StyledLink>

          <StyledLink>SPEAKERS</StyledLink>

          <StyledLink>EARPHONES</StyledLink>
        </StyledUl>
        <HiOutlineShoppingCart
          style={{ fontSize: "22px", cursor: "pointer" }}
        />
      </StyledNav>
      <StyledHero>
        <StyledHeroText>
          <StyledSubHeader>NEW PRODUCT</StyledSubHeader>
          <StyledH1>
            XX99 MARK II <br /> HEADPHONES
          </StyledH1>
          <StyledP>
            Experience natural, lifelike audio and exceptional <br /> build
            quality made for the passionate music <br /> enthusiast.
          </StyledP>
          <StyledButton>SEE PRODUCT</StyledButton>
        </StyledHeroText>
      </StyledHero>
    </StyledHeader>
  );
};

export default HomeHeader;
