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
import MobileSpeaker from "../assets/home/mobile/image-speaker-zx9.png";
import TabletSpeaker from "../assets/home/tablet/image-speaker-zx9.png";
import DesktopSpeaker from "../assets/home/desktop/image-speaker-zx9.png";
import MobileEarphone from "../assets/home/mobile/image-earphones-yx1.jpg";
import TabletEarphone from "../assets/home/tablet/image-earphones-yx1.jpg";
import DesktopEarphone from "../assets/home/desktop/image-earphones-yx1.jpg";

const HomeProduct = () => {
  return (
    <StyledProductContainer>
      <StyledZX9Container>
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet={`${MobileSpeaker} 1280w`}
            sizes="600px"
          />
          <source
            media="(max-width: 1000px)"
            srcSet={`${TabletSpeaker} 1280w`}
            sizes="75vw"
          />
          <source srcSet={`${DesktopSpeaker} 1280w`} sizes="780px" />
          <StyledSpeakerImg src={DesktopSpeaker} alt="speaker" />
        </picture>
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
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet={`${MobileEarphone} 1280w`}
            sizes="600px"
          />
          <source
            media="(max-width: 1000px)"
            srcSet={`${MobileEarphone} 1280w`}
          />
          <source srcSet={`${DesktopEarphone} 1280w`} />
          <StyledEarphoneImg src={DesktopEarphone} alt="Earphone" />
        </picture>
        <StyledYX1Text>
          <StyledEarphoneH3>YX1 EARPHONES</StyledEarphoneH3>
          <StyledThirdButton>SEE PRODUCT</StyledThirdButton>
        </StyledYX1Text>
      </StyledYX1Container>
    </StyledProductContainer>
  );
};

export default HomeProduct;
