import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCategoryContainer = styled.div`
  display: flex;
  gap: 2%;
  width: 60rem;
  margin: auto;
  justify-content: center;
  margin-bottom: 5rem;
  @media (max-width: 1000px) {
    width: 20rem;
    flex-direction: column;
    gap: 7rem;
    align-items: center;
  }
  @media (max-width: 500px) {
    width: 20rem;
    flex-direction: column;
    gap: 7rem;
    align-items: center;
  }
  @media (max-width: 350px) {
    width: 15rem;
  }
`;

export const StyledCategoryBox = styled.div`
  background-color: ${({ theme }) => theme.grey};
  width: 30rem;
  padding: 3% 0;
  min-height: 10rem;
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;

  border-radius: 14px;

  @media (max-width: 600px) {
    height: 13rem;
    width: 90%;
    padding: 2rem 0;
  }
`;

export const StyledShop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 5px;
  @media (max-width: 1000px) {
    margin-top: 2rem;
  }
`;

export const StyledH3 = styled.h3`
  color: ${({ theme }) => theme.lightBlack};
  font-size: 20px;
  letter-spacing: 2px;
  margin-top: 5rem;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 15rem;

  @media (max-width: 1300px) {
    width: 12rem;
  }
`;

export const StyledP = styled(Link)`
  color: ${({ theme }) => theme.lightBlack};
  font-weight: 500;
  opacity: 0.5;
  letter-spacing: 2px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.darkOrange};
    font-weight: 700;
  }
`;
