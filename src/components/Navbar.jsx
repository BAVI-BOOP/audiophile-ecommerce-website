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

          <StyledLink>HEADPHONES</StyledLink>

          <StyledLink>SPEAKERS</StyledLink>

          <StyledLink>EARPHONES</StyledLink>
        </StyledUl>
        <HiOutlineShoppingCart
          style={{ fontSize: "22px", cursor: "pointer" }}
        />
      </StyledNavbar>
    </StyledNavbarContainer>
  );
};

export default Navbar;
