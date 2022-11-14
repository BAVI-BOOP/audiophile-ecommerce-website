import styled from "styled-components";

export const StyledCategoryContainer = styled.div`
  width: 60rem;
  display: flex;
  justify-content: space-around;

  flex-direction: ${({ flexId }) => (flexId % 2 === 0 ? "row-reverse" : "row")};
`;

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  gap: 8rem;
  margin-bottom: 10rem;
`;

export const StyledCategoryHeader = styled.header`
  background-color: #1a1a1a;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
`;

export const StyledCategoryHeaderTitle = styled.h1`
  color: white;
`;

export const StyledCategoryText = styled.div`
  width: 30%;
  margin: auto;
`;

export const StyledCategoryImage = styled.img`
  width: 30rem;
  margin: auto;
`;

export const StyledCategorySubTitle = styled.h3`
  color: ${({ theme }) => theme.darkOrange};
  font-weight: 300;
  letter-spacing: 7px;
`;

export const StyledCategoryTitle = styled.h2`
  font-size: 56px;
  margin-bottom: 2rem;
`;

export const StyledCategoryP = styled.p`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.lightBlack};
  opacity: 0.7;
`;

export const StyledCategoryButton = styled.button`
  background-color: ${({ theme }) => theme.darkOrange};
  padding: 1rem;

  border: none;
  color: white;

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.lightOrange};
    color: white;
  }
`;
