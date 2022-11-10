import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import HeroHeadphone from "../../assets/home/desktop/image-hero.jpg";
import MobileHeroHeadphone from "../../assets/home/mobile/image-header.jpg";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  /* background-color: ${({ theme }) => theme.lightBlack}; */
  background: url(${HeroHeadphone});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 76% 70%;
  height: 100vh;
  margin-bottom: 15rem;
  @media (max-width: 570px) {
    background: url(${MobileHeroHeadphone});
    background-position: center;
    background-size: 85%;
    background-repeat: no-repeat;
    background-color: #1a1a1a;
  }
`;

export default StyledHeader;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.font};
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  padding: 2.5rem 0;
  width: 85%;
  margin: auto;
  border-bottom: 1px solid #fafafa50;
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 36px;

  cursor: pointer;
  @media (max-width: 900px) {
    display: none;
  }
`;

// export const StyledLi = styled.li`
//   letter-spacing: 2px;
//   &:hover {
//     color: ${({ theme }) => theme.lightOrange};
//   }
// `;

export const StyledMobileNavContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const StyledMobileMenu = styled(AiOutlineMenu)`
  display: block;
  font-size: 20px;
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;

export const StyledHero = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 80%;
  height: 85%;
`;

export const StyledHeroText = styled.div`
  color: white;

  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1000px) {
    text-align: center;
    margin: auto;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 56px;
  @media (max-width: 470px) {
    font-size: 38px;
  }
  @media (max-width: 290px) {
    font-size: 24px;
  }
`;

export const StyledSubHeader = styled.h3`
  letter-spacing: 10px;
  opacity: 0.6;
  font-weight: 400;
  @media (max-width: 470px) {
    font-size: 14px;
  }
`;

export const StyledP = styled.p`
  opacity: 0.7;
  @media (max-width: 470px) {
    font-size: 12px;
  }
  @media (max-width: 290px) {
    font-size: 8px;
  }
`;

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  width: 40%;
  padding: 1rem;
  color: ${({ theme }) => theme.grey};
  font-weight: 700;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.darkOrange};
  @media (max-width: 900px) {
    margin: auto;
  }
  @media (max-width: 470px) {
    font-size: 8px;
    padding: 0.8rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.lightOrange};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  letter-spacing: 2px;
  &:hover {
    color: ${({ theme }) => theme.lightOrange};
  }
`;
