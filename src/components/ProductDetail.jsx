import axios from "axios";
import { useEffect, useState } from "react";

import {
  StyledCategoryButton,
  StyledCategoryImage,
  StyledCategoryP,
  StyledCategorySubTitle,
  StyledCategoryText,
  StyledCategoryTitle,
  StyledCategoryContainer,
  StyledPage,
  StyledPicture,
} from "./styles/CategoryProduct.styled";
import HomeCategory from "./HomeCategory";
import HomeInfo from "./HomeInfo";
import {
  StyledButtonContainer,
  StyledCounterButton,
  StyledCounterPlusMinus,
  StyledProductContainer,
  StyledProductContainerLeft,
  StyledProductContainerRight,
  StyledProductContainerSpan,
  StyledProductContainerTitle,
  StyledProductDescriptionContainer,
  StyledProductDetailP,
  StyledProductExtraContainer,
  StyledProductExtraH3,
  StyledProductExtraImg,
  StyledProductGalleryContainer,
  StyledProductGalleryContainerLeft,
  StyledProductPrice,
} from "./styles/ProductDetail.styled";
// import { initialState, reducer } from "../reducer/reducer";

const ProductDetail = () => {
  //! UseReducer()
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [item, SetItem] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://6370d5be0399d1995d84e8f9.mockapi.io/ecom/audiop")
      .then((response) => {
        SetItem(response?.data[3]);
      })
      .finally(() => setIsLoaded(true));
    console.log(item?.image?.desktop);
  }, []);

  return (
    <div>
      <StyledPage>
        <StyledCategoryContainer key={item.id} flexId={item.id}>
          {isLoaded && (
            <StyledPicture>
              <source
                media="(max-width: 600px)"
                srcSet={require(`${item?.categoryImage?.mobile}`)}
              />
              <source
                media="(max-width: 1000px)"
                srcSet={require(`${item?.categoryImage?.tablet}`)}
              />
              <source srcSet={require(`${item?.image?.desktop}`)} />
              <StyledCategoryImage
                src={require(`${item?.categoryImage?.desktop}`)}
                alt="img"
              />
            </StyledPicture>
          )}

          <StyledCategoryText>
            <StyledCategorySubTitle>NEW PRODUCT</StyledCategorySubTitle>
            <StyledCategoryTitle>{item?.name}</StyledCategoryTitle>
            <StyledCategoryP>{item?.description}</StyledCategoryP>
            <StyledProductPrice>${item?.price}</StyledProductPrice>
            <StyledButtonContainer>
              <StyledCounterButton>
                <StyledCounterPlusMinus
                  onClick={() =>
                    productCount > 0 && setProductCount(productCount - 1)
                  }
                >
                  -
                </StyledCounterPlusMinus>
                <p>{productCount}</p>
                <StyledCounterPlusMinus
                  onClick={() =>
                    productCount > setProductCount(productCount + 1)
                  }
                >
                  +
                </StyledCounterPlusMinus>
              </StyledCounterButton>
              <StyledCategoryButton>ADD TO CART</StyledCategoryButton>
            </StyledButtonContainer>
          </StyledCategoryText>
        </StyledCategoryContainer>
        <StyledProductDescriptionContainer>
          <StyledProductContainerRight>
            <StyledProductContainerTitle>FEATURES</StyledProductContainerTitle>
            <StyledProductDetailP>{item.features}</StyledProductDetailP>
          </StyledProductContainerRight>
          <StyledProductContainerLeft>
            <StyledProductContainerTitle>
              IN THE BOX
            </StyledProductContainerTitle>
            {item?.includes?.map((element) => {
              return (
                <>
                  <StyledProductContainerSpan>
                    {element?.quantity}
                  </StyledProductContainerSpan>
                  <StyledProductContainerSpan>
                    {element?.item}
                  </StyledProductContainerSpan>
                  <br />
                </>
              );
            })}
          </StyledProductContainerLeft>
        </StyledProductDescriptionContainer>

        <StyledProductGalleryContainer>
          <StyledProductGalleryContainerLeft>
            {isLoaded && (
              <StyledPicture>
                <source
                  media="(max-width: 600px)"
                  srcSet={require(`${item?.gallery?.first?.mobile}`)}
                />
                <source
                  media="(max-width: 1000px)"
                  srcSet={require(`${item?.gallery?.first?.tablet}`)}
                />
                <source srcSet={require(`${item?.gallery?.first?.desktop}`)} />
                <StyledCategoryImage
                  src={require(`${item?.gallery?.first?.desktop}`)}
                  alt="img"
                />
              </StyledPicture>
            )}
            {isLoaded && (
              <StyledPicture>
                <source
                  media="(max-width: 600px)"
                  srcSet={require(`${item?.gallery?.second?.mobile}`)}
                />
                <source
                  media="(max-width: 1000px)"
                  srcSet={require(`${item?.gallery?.second?.tablet}`)}
                />
                <source srcSet={require(`${item?.gallery?.second?.desktop}`)} />
                <StyledCategoryImage
                  src={require(`${item?.gallery?.second?.desktop}`)}
                  alt="img"
                />
              </StyledPicture>
            )}
          </StyledProductGalleryContainerLeft>
          {isLoaded && (
            <StyledPicture>
              <source
                media="(max-width: 600px)"
                srcSet={require(`${item?.gallery?.third?.mobile}`)}
              />
              <source
                media="(max-width: 1000px)"
                srcSet={require(`${item?.gallery?.third?.tablet}`)}
              />
              <source srcSet={require(`${item?.gallery?.third?.desktop}`)} />
              <StyledCategoryImage
                src={require(`${item?.gallery?.third?.desktop}`)}
                alt="img"
              />
            </StyledPicture>
          )}
        </StyledProductGalleryContainer>
        <StyledProductExtraContainer>
          {item?.others?.map((extra) => {
            return (
              <div key={extra.slug}>
                {isLoaded && (
                  <StyledPicture>
                    <source
                      media="(max-width: 600px)"
                      srcSet={require(`${extra?.image?.mobile}`)}
                    />
                    <source
                      media="(max-width: 600px)"
                      srcSet={require(`${extra?.image?.tablet}`)}
                    />
                    <source
                      media="(max-width: 600px)"
                      srcSet={require(`${extra?.image?.desktop}`)}
                    />
                    <StyledProductExtraImg
                      src={require(`${extra?.image?.desktop}`)}
                      alt="img"
                    />
                  </StyledPicture>
                )}
                <StyledProductExtraH3>{extra.name}</StyledProductExtraH3>
                <StyledCategoryButton>SEE PRODUCT</StyledCategoryButton>
              </div>
            );
          })}
        </StyledProductExtraContainer>
      </StyledPage>
      <HomeCategory />

      <HomeInfo />
    </div>
  );
};

export default ProductDetail;
