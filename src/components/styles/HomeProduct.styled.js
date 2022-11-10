import styled from "styled-components";
import ZX7 from "../../assets/home/desktop/image-speaker-zx7.jpg";
import MobileZX7 from "../../assets/home/mobile/image-speaker-zx7.jpg";
import Pattern from "../../assets/home/desktop/pattern-circles.svg";

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  margin-top: 7rem;
  gap: 3rem;
  margin-bottom: 15rem;
`;

export const StyledZX9Container = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  background-color: ${({ theme }) => theme.darkOrange};
  height: 57vh;
  background-image: url(${Pattern});
  background-position: -10% 20%;
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: 10px;
  @media (max-width: 1000px) {
    flex-direction: column;
    background-size: 70%;
    background-position: center;
  }
`;
export const StyledSpeakerImg = styled.img`
  width: 20rem;
  height: 24rem;
  align-self: flex-end;
  margin-bottom: -0.8rem;
  @media (max-width: 1000px) {
    width: 10rem;
    height: 13rem;
    margin: auto;
  }

  @media (max-width: 700px) {
    width: 7rem;
    height: 10rem;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  padding: 1rem;
  transform: translateX(90%);
  @media (max-width: 700px) {
    transform: translateX(30%);
  }

  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const StyledSpeakerH2 = styled.h2`
  font-size: 56px;
  margin-bottom: 2rem;
  @media (max-width: 1000px) {
    font-size: 36px;
    margin-bottom: 2rem;
  }
  @media (max-width: 700px) {
    font-size: 24px;
    margin-bottom: 1rem;
  }
`;

export const StyledSpeakerP = styled.p`
  ${({ theme }) => theme.grey};
  opacity: 0.8;
  margin-bottom: 3rem;
  @media (max-width: 1000px) {
    margin-bottom: 1rem;
    font-size: 16px;
  }
  @media (max-width: 700px) {
    font-size: 13px;
    margin-bottom: 1rem;
  }

  @media (max-width: 300px) {
    font-size: 10px;
    margin-bottom: 1rem;
  }
`;

export const StyledZX7Container = styled.div`
  display: flex;
  border-radius: 10px;
  align-items: center;
  background-image: url(${ZX7});
  height: 35vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 700px) {
    background-image: url(${MobileZX7});
  }
`;

export const StyledSecondSpeakerH3 = styled.h3`
  font-size: 28px;
  transform: translateX(50%);
  margin-bottom: 2rem;
  letter-spacing: 2px;
  @media (max-width: 1000px) {
    transform: translateX(60%);
    font-size: 24px;
  }
  @media (max-width: 700px) {
    transform: translateX(20%);
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const StyledYX1Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35vh;
  @media (max-width: 700px) {
    flex-direction: column;
    height: 50vh;
    gap: 1rem;
  }
`;

export const StyledYX1Text = styled.div`
  background-color: ${({ theme }) => theme.grey};
  width: 49%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 2rem;
  border-radius: 10px;

  @media (max-width: 700px) {
    width: 100%;
    height: 50%;
  }
`;

export const StyledEarphoneImg = styled.img`
  width: 49%;
  border-radius: 10px;
  @media (max-width: 700px) {
    width: 100%;
    height: 50%;
  }
`;

export const StyledEarphoneH3 = styled.h3`
  font-size: 28px;
  transform: translateX(30%);
  @media (max-width: 1000px) {
    transform: translateX(10%);
    font-size: 24px;
  }
  letter-spacing: 2px;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const StyledThirdButton = styled(StyledButton)`
  transform: translateX(60%);
  @media (max-width: 1000px) {
    transform: translateX(20%);
  }
`;

export const SecondStyledButton = styled.button`
  background-color: #000000;
  padding: 1rem;
  color: #ffffff;
  font-weight: 700;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #4c4c4c;
  }
`;

export const StyledTextContainer = styled.div`
  margin: auto 0;
  @media (max-width: 1000px) {
    margin: auto;
    text-align: center;
  }
`;
