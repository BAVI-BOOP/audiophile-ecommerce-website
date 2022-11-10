import {
  StyledCategoryContainer,
  StyledCategoryBox,
  StyledH3,
  StyledP,
  StyledShop,
  StyledImg,
} from "./styles/Category.styled";
import Headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../assets/shared/desktop/Speakers.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ArrowIcon from "../assets/shared/desktop/icon-arrow-right.svg";

const HomeCategory = () => {
  return (
    <StyledCategoryContainer>
      <StyledCategoryBox>
        <StyledImg src={Headphones} alt="Headphones" />
        <StyledH3>HEADPHONES</StyledH3>
        <StyledShop>
          <StyledP to="">SHOP</StyledP>
          <img src={ArrowIcon} alt="ArrowIcon" />
        </StyledShop>
      </StyledCategoryBox>
      <StyledCategoryBox>
        <StyledImg src={Speakers} alt="Speakers" />
        <StyledH3>SPEAKERS</StyledH3>
        <StyledShop>
          <StyledP to="/">SHOP</StyledP>
          <img src={ArrowIcon} alt="ArrowIcon" />
        </StyledShop>
      </StyledCategoryBox>
      <StyledCategoryBox>
        <StyledImg src={Earphones} alt="Earphones" />
        <StyledH3>EARPHONES</StyledH3>
        <StyledShop>
          <StyledP to="">SHOP</StyledP>
          <img src={ArrowIcon} alt="ArrowIcon" />
        </StyledShop>
      </StyledCategoryBox>
    </StyledCategoryContainer>
  );
};

export default HomeCategory;
