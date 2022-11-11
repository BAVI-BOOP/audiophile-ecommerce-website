import styled from "styled-components";
import { StyledUl } from "./HomeHeader.styled";

export const StyledFooter = styled.div`
  background-color: #101010;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  position: relative;
  @media (max-width: 550px) {
    gap: 5rem;
  }
`;
//FOOTER TOP
export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 87%;
  margin: 0 auto;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 2rem;
    width: 80%;
    margin: 0 auto;
    height: 8rem;
  }
  @media (max-width: 550px) {
    margin: auto;
  }
`;
export const FooterLogo = styled.img`
  @media (max-width: 1000px) {
    width: 10rem;
  }
`;
export const FooterP = styled.p`
  color: ${({ theme }) => theme.grey};
  opacity: 0.7;
`;
export const FooterCopy = styled.p`
  color: ${({ theme }) => theme.grey};
  opacity: 0.7;
  line-height: 5rem;
`;
//FOOTER BOTTOM
export const FooterBottom = styled.div`
  width: 35rem;
  margin-left: 6.5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1000px) {
    margin-left: 5rem;
  }
  @media (max-width: 700px) {
    width: 30em;

    font-size: 15px;
    width: 20rem;

    gap: 0rem;
    padding-bottom: 2rem;
  }
  @media (max-width: 550px) {
    margin-left: 3rem;
  }

  @media (max-width: 450px) {
    width: 17em;
  }
`;
export const FooterLi = styled.li`
  color: ${({ theme }) => theme.grey};
`;
export const FooterUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    width: 10rem;
  }
`;
export const FooterIcons = styled.div`
  position: absolute;
  right: 20rem;
  bottom: 8rem;
  display: flex;
  gap: 1rem;
  @media (max-width: 1000px) {
    right: 1rem;
    bottom: 1rem;
  }
  @media (max-width: 1000px) {
    left: 20%;
  }
`;
export const FooterIcon = styled.img``;
