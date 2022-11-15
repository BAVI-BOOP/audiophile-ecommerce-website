import styled from "styled-components";

export const StyledDetailPicture = styled.picture`
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

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

export const StyledCounterButton = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 5rem;
  background-color: ${({ theme }) => theme.grey};
  padding: 1rem 3rem;
`;

export const StyledCounterPlusMinus = styled.p`
  color: ${({ theme }) => theme.darkOrange};
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const StyledProductPrice = styled.p`
  margin-bottom: 2rem;
  letter-spacing: 2px;
  font-weight: 700;
`;

export const StyledProductDescriptionContainer = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
`;

export const StyledProductDetailP = styled.p``;

export const StyledProductContainerLeft = styled.div`
  width: 40rem;
`;

export const StyledProductContainerRight = styled.div`
  width: 40rem;
  border: 2px solid red;
`;

export const StyledProductContainerTitle = styled.h2``;

export const StyledProductContainerSpan = styled.span``;

export const StyledProductGalleryContainer = styled.div`
  display: flex;
`;

export const StyledProductGalleryContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledProductExtraContainer = styled.div`
  display: flex;
  gap: 1rem;
  border: 2px solid red;
`;

export const StyledProductExtraImg = styled.img``;

export const StyledProductExtraH3 = styled.h3``;
