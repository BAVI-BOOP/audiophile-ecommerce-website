import {
  StyledInfoContainer,
  StyledInfoH2,
  StyledInfoImage,
  StyledInfoP,
  StyledInfoSpan,
  StyledInfoText,
} from "./styles/HomeInfo.styled";

import MobileMan from "./assets/shared/mobile/image-best-gear.jpg";
import TabletMan from "./assets/shared/tablet/image-best-gear.jpg";
import Man from "./assets/shared/desktop/image-best-gear.jpg";

const HomeInfo = () => {
  return (
    <StyledInfoContainer>
      <picture>
        <source
          media="(max-width: 600px)"
          srcSet={`${MobileMan} 1280w`}
          sizes="36rem"
        />
        <source
          media="(max-width: 1000px)"
          srcSet={`${TabletMan} 1280w`}
          sizes="30rem"
        />
        <source srcSet={`${Man} 1280w`} sizes="1080px" />
        <StyledInfoImage src={`${Man} 1280w`} alt="img" />
      </picture>

      <StyledInfoText>
        <StyledInfoH2>
          BRINGING YOU THE
          <br />
          <StyledInfoSpan> BEST&nbsp;</StyledInfoSpan>
          AUDIO GEAR
        </StyledInfoH2>
        <StyledInfoP>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </StyledInfoP>
      </StyledInfoText>
    </StyledInfoContainer>
  );
};

export default HomeInfo;
