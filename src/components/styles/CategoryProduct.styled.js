import styled from "styled-components";

export const StyledCategoryContainer = styled.div`
  width: 60rem;
  display: flex;
  justify-content: space-around;
  margin: auto;
  flex-direction: ${({ flexId }) => (flexId % 2 === 0 ? "row-reverse" : "row")};
  @media screen and (max-width: 1000px) {
    flex-direction: column;

    width: 37rem;
  }
  @media screen and (max-width: 600px) {
    width: 30rem;
  }
  @media screen and (max-width: 500px) {
    width: 20rem;
  }
`;

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  gap: 8rem;
  margin-bottom: 10rem;
  border: 5px solid orange;
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
  @media screen and (max-width: 1000px) {
    text-align: center;
    width: 70%;
  }
`;

export const StyledCategoryImage = styled.img`
  width: 30rem;
  margin: auto;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const StyledPicture = styled.picture`
  margin: auto;

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: auto;
  }
  @media screen and (max-width: 500px) {
    width: 19rem;
  }
  @media screen and (max-width: 350px) {
    width: 15rem;
  }
`;

export const StyledCategorySubTitle = styled.h3`
  color: ${({ theme }) => theme.darkOrange};
  font-weight: 300;
  letter-spacing: 7px;
  margin: 8px 0;
`;

export const StyledCategoryTitle = styled.h2`
  font-size: 56px;
  margin-bottom: 2rem;
  @media screen and (max-width: 1000px) {
    font-size: 40px;
  }
  @media screen and (max-width: 500px) {
    font-size: 36px;
  }
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
