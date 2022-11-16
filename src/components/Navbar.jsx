import {
  StyledMobileNavContainer,
  StyledUl,
  StyledMobileMenu,
  StyledLink,
} from "./styles/HomeHeader.styled";
import Logo from "./assets/shared/desktop/logo.svg";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { StyledNavbar, StyledNavbarContainer } from "./styles/Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbarContainer>
      <StyledNavbar>
        <StyledMobileNavContainer>
          <StyledMobileMenu />
          <img src={Logo} alt="logo" style={{ cursor: "pointer" }} />
        </StyledMobileNavContainer>

        <StyledUl>
          <StyledLink to={"/"}>HOME</StyledLink>

          <StyledLink to="/category/headphones" state={{ data: "headphones" }}>
            HEADPHONES
          </StyledLink>

          <StyledLink to="/category/speakers" state={{ data: "speakers" }}>
            SPEAKERS
          </StyledLink>

          <StyledLink to="/category/earphones" state={{ data: "earphones" }}>
            EARPHONES
          </StyledLink>
        </StyledUl>
        <HiOutlineShoppingCart
          style={{ fontSize: "22px", cursor: "pointer" }}
        />
      </StyledNavbar>
    </StyledNavbarContainer>
  );
};

export default Navbar;
