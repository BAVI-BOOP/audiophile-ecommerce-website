import styled from "styled-components";

export const StyledInfoContainer = styled.div`
  width: 60rem;
  height: 37rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row-reverse;
  margin: auto;
  gap: 1rem;
  margin-bottom: 5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 30rem;
    gap: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    width: 15rem;
    gap: 1rem;
  }
`;

export const StyledInfoImage = styled.img`
  border-radius: 10px;
  @media (max-width: 350px) {
    width: 15rem;
  }
`;

export const StyledInfoText = styled.div`
  @media (max-width: 1000px) {
    width: 30rem;
    text-align: center;
  }
  @media (max-width: 700px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 20rem;
  }
  @media (max-width: 350px) {
    width: 14rem;
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
  font-size: 16px;

  @media (max-width: 1000px) {
    width: 100%;
    font-size: 16px;
    width: 100%;
  }

  @media (max-width: 700px) {
    width: 100%;
    font-size: 15px;
    line-height: 2rem;
  }
  @media (max-width: 350px) {
    width: 15rem;
    font-size: 12px;
    text-align: center;
  }
`;

export const StyledInfoSpan = styled.span`
  color: ${({ theme }) => theme.darkOrange};
`;
