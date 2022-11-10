import styled from "styled-components";

export const StyledInfoContainer = styled.div`
  width: 80%;
  height: 37rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex-direction: row-reverse;
  margin: auto;
  gap: 5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const StyledInfoImage = styled.img`
  border-radius: 10px;
`;

export const StyledInfoText = styled.div`
  @media (max-width: 1200px) {
    width: 90%;
    text-align: center;
  }
`;

export const StyledInfoH2 = styled.h2`
  font-size: 40px;
  margin-bottom: 2rem;
  @media (max-width: 1200px) {
    font-size: 32px;
  }
  @media (max-width: 450px) {
    font-size: 22px;
  }
  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

export const StyledInfoP = styled.p`
  line-height: 2rem;
  color: ${({ theme }) => theme.lightBlack};
  opacity: 0.7;
  width: 25rem;
  font-size: 24px;

  @media (max-width: 1200px) {
    width: 100%;
    font-size: 16px;
  }

  @media (max-width: 450px) {
    font-size: 14px;
    line-height: 1rem;
  }
  @media (max-width: 300px) {
    font-size: 12px;
    line-height: 1rem;
  }
`;

export const StyledInfoSpan = styled.span`
  color: ${({ theme }) => theme.darkOrange};
`;
