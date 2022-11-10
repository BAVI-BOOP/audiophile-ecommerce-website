import {
  SecondStyledButton,
  StyledButton,
  StyledProductContainer,
  StyledSpeakerImg,
  StyledTextContainer,
  StyledYX1Container,
  StyledZX7Container,
  StyledZX9Container,
  StyledSpeakerH2,
  StyledSpeakerP,
  StyledSecondSpeakerH3,
  StyledEarphoneImg,
  StyledThirdButton,
  StyledYX1Text,
  StyledEarphoneH3,
} from "./styles/HomeProduct.styled";
import Speaker from "../assets/home/desktop/image-speaker-zx9.png";
import Earphone from "../assets/home/desktop/image-earphones-yx1.jpg";

const HomeProduct = () => {
  return (
    <StyledProductContainer>
      <StyledZX9Container>
        <StyledSpeakerImg src={Speaker} alt="speaker" />
        <StyledTextContainer>
          <StyledSpeakerH2>
            ZX9 <br /> SPEAKER
          </StyledSpeakerH2>
          <StyledSpeakerP>
            Upgrade to premium speakers that are <br /> phenomenally built to
            deliver truly remarkable <br /> sound.
          </StyledSpeakerP>
          <SecondStyledButton>SEE PRODUCT</SecondStyledButton>
        </StyledTextContainer>
      </StyledZX9Container>
      <StyledZX7Container>
        <div>
          <StyledSecondSpeakerH3>ZX7 SPEAKER</StyledSecondSpeakerH3>
          <StyledButton>SEE PRODUCT</StyledButton>
        </div>
      </StyledZX7Container>
      <StyledYX1Container>
        <StyledEarphoneImg src={Earphone} alt="Earphone" />
        <StyledYX1Text>
          <StyledEarphoneH3>YX1 EARPHONES</StyledEarphoneH3>
          <StyledThirdButton>SEE PRODUCT</StyledThirdButton>
        </StyledYX1Text>
      </StyledYX1Container>
    </StyledProductContainer>
  );
};

export default HomeProduct;
