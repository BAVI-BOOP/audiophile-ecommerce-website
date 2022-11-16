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
import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

const HomeHeader = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledNav>
        <StyledMobileNavContainer>
          <StyledMobileMenu />
          <img src={Logo} alt="logo" style={{ cursor: "pointer" }} />
        </StyledMobileNavContainer>

        <StyledUl>
          <StyledLink to={"/"}>HOME</StyledLink>

          <StyledLink to="./category/headphones">HEADPHONES</StyledLink>

          <StyledLink to="./category/speakers" state={{ data: "speakers" }}>
            SPEAKERS
          </StyledLink>

          <StyledLink to="./category/earphones" state={{ data: "earphones" }}>
            EARPHONES
          </StyledLink>
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
          <StyledButton onClick={() => navigate("/detail/4")}>
            SEE PRODUCT
          </StyledButton>
        </StyledHeroText>
      </StyledHero>
    </StyledHeader>
  );
};

export default HomeHeader;
