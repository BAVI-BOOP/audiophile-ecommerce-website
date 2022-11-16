import styled from "styled-components";
import { StyledCategoryContainer } from "./HomeCategory.styled";

export const StyledDetailContainer = styled.div`
  width: 60rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 1000px) {
    width: 37rem;
  }
  @media screen and (max-width: 650px) {
    width: 30rem;
    flex-direction: column;
    text-align: center;
    gap: 0;
  }
  @media screen and (max-width: 500px) {
    width: 20rem;
  }
  @media screen and (max-width: 350px) {
    width: 15rem;
  }
`;

export const StyledDetailText = styled.div`
  width: 26rem;
  @media screen and (max-width: 400px) {
    width: 15rem;
  }
`;

export const StyledDetailPicture = styled.picture`
  margin: auto 0;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    margin: auto;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 650px) {
    justify-content: center;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const StyledCounterButton = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  width: 5rem;
  background-color: ${({ theme }) => theme.grey};
  padding: 0.8rem 3.5rem;
`;

export const StyledCounterPlusMinus = styled.p`
  color: ${({ theme }) => theme.darkOrange};
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const StyledProductPrice = styled.p`
  margin: 2rem;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 20px;
`;

export const StyledProductDescriptionContainer = styled.div`
  display: flex;

  justify-content: space-between;

  margin: auto;

  width: 60rem;
  @media screen and (max-width: 1000px) {
    width: 37rem;
    flex-direction: column;
    gap: 2rem;
  }
  @media screen and (max-width: 650px) {
    width: 20rem;
  }

  @media screen and (max-width: 350px) {
    width: 15rem;
  }
`;

export const StyledProductDetailP = styled.p`
  margin-bottom: 2rem;
  @media screen and (max-width: 450px) {
    width: 80%;
    margin: auto;
  }
`;

export const StyledProductContainerLeft = styled.div`
  width: 25rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 650px) {
    width: 20rem;

    margin: auto;
  }
  @media screen and (max-width: 450px) {
    width: 16rem;
  }
`;

export const StyledProductContainerLeftInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 37rem;
  gap: 0;
  @media screen and (max-width: 1000px) {
    width: 35rem;
    flex-direction: row;
    gap: 4rem;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;

    gap: 0;
  }
`;

export const StyledProductContainerRight = styled.div`
  width: 34rem;
  line-height: 1.5rem;
  @media screen and (max-width: 1000px) {
    width: 35rem;
  }
  @media screen and (max-width: 650px) {
    margin: auto;
    width: 20rem;
  }
  @media screen and (max-width: 350px) {
    width: 16rem;
    font-size: 14px;
  }
`;

export const StyledProductContainerTitle = styled.h2`
  margin-bottom: 1rem;
  align-self: flex-start;
  align-self: ${({ align }) => (align ? "center" : "flex-start")};
  @media screen and (max-width: 1000px) {
    align-self: flex-start;
  }
`;

export const StyledProductContainerSpan = styled.p`
  color: ${({ theme, color }) => (color ? theme.darkOrange : theme.lightBlack)};
`;

export const DetailQuantity = styled.div`
  display: flex;
  margin-bottom: 1rem;
  gap: 8px;
`;

export const StyledProductGalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 60rem;
  gap: 1rem;
  @media screen and (max-width: 1000px) {
    width: 37rem;
  }
  @media screen and (max-width: 600px) {
    width: 22rem;

    flex-direction: column;
    gap: 2rem;
  }
  @media screen and (max-width: 350px) {
    width: 15rem;

    flex-direction: column;
    gap: 2rem;
  }
`;

export const StyledProductGalleryContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 600px) {
    gap: 2rem;
  }
`;

export const StyledDetailGalleryImageRight = styled.img`
  width: 34rem;
  object-fit: cover;
  @media screen and (max-width: 1000px) {
    width: 21rem;
  }
  @media screen and (max-width: 600px) {
    width: 21rem;
  }
  @media screen and (max-width: 350px) {
    width: 15rem;
  }
`;

export const StyledDetailGalleryImageLeft = styled.img`
  width: 23.3rem;

  object-fit: cover;
  @media screen and (max-width: 1000px) {
    width: 14rem;
  }
  @media screen and (max-width: 600px) {
    width: 21rem;
  }
  @media screen and (max-width: 350px) {
    width: 15rem;
  }
`;

export const StyledProductExtraContainer = styled.div`
  display: flex;
  margin: auto;

  width: 60rem;
  justify-content: space-between;
  text-align: center;
  @media screen and (max-width: 1000px) {
    width: 37rem;
  }
  @media screen and (max-width: 650px) {
    width: 20rem;
    flex-direction: column;
  }
  @media screen and (max-width: 350px) {
    width: 16rem;
  }
`;

export const StyledExtraImg = styled.img`
  width: 19rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 1000px) {
    width: 11.2rem;
  }
  @media screen and (max-width: 650px) {
    width: 19rem;
  }
  @media screen and (max-width: 350px) {
    width: 15rem;
  }
`;

export const StyledProductDetailImg = styled.img`
  width: 28rem;
  @media screen and (max-width: 1000px) {
    width: 14.6rem;
  }
  @media screen and (max-width: 650px) {
    width: 18rem;
  }
  @media screen and (max-width: 350px) {
    width: 13rem;
  }
`;

export const StyledProductExtraImg = styled.img``;

export const StyledProductExtraH3 = styled.h3`
  margin-bottom: 1rem;
`;

export const StyledGoBack = styled.p`
  position: absolute;
  left: 2rem;
  top: 4rem;
  cursor: pointer;
  color: ${({ theme }) => theme.lightBlack};
  opacity: 0.5;
  font-weight: 700;
`;
