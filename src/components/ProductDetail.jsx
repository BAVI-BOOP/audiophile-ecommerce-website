import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  StyledGoBack,
  StyledProductPrice,
  StyledDetailContainer,
  StyledDetailPicture,
  StyledProductDetailImg,
  StyledDetailText,
  StyledProductContainerLeftInner,
  DetailQuantity,
  StyledDetailGalleryImageRight,
  StyledDetailGalleryImageLeft,
  StyledExtraImg,
} from "./styles/ProductDetail.styled";
import { useParams } from "react-router-dom";
// import { initialState, reducer } from "../reducer/reducer";

const ProductDetail = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  console.log(id);
  //! UseReducer()
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [item, SetItem] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://6370d5be0399d1995d84e8f9.mockapi.io/ecom/audiop")
      .then((response) => {
        console.log(response?.data);
        let filteredItem = response?.data.filter(
          (element) => String(element?.id) === String(id)
        );
        console.log(filteredItem);
        SetItem(...filteredItem);
        console.log(item);
      })
      .finally(() => setIsLoaded(true));
  }, []);

  return (
    <div>
      <StyledPage>
        <StyledDetailContainer key={item.id}>
          <StyledGoBack onClick={() => navigate(-1)}>Go Back</StyledGoBack>
          {isLoaded && (
            <StyledDetailPicture>
              <source
                media="(max-width: 650px)"
                srcSet={require(`${item?.image?.mobile}`)}
              />
              <source
                media="(max-width: 1000px)"
                srcSet={require(`${item?.image?.tablet}`)}
              />
              <source srcSet={require(`${item?.image?.desktop}`)} />
              <StyledProductDetailImg
                src={require(`${item?.image?.desktop}`)}
                alt="img"
              />
            </StyledDetailPicture>
          )}
          <StyledDetailText>
            <StyledCategorySubTitle>NEW PRODUCT</StyledCategorySubTitle>
            <StyledCategoryTitle>{item?.name}</StyledCategoryTitle>
            <StyledProductDetailP>{item?.description}</StyledProductDetailP>
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
          </StyledDetailText>
        </StyledDetailContainer>
        <StyledProductDescriptionContainer>
          <StyledProductContainerRight>
            <StyledProductContainerTitle>FEATURES</StyledProductContainerTitle>
            <StyledProductDetailP>{item.features}</StyledProductDetailP>
          </StyledProductContainerRight>
          <StyledProductContainerLeft>
            <StyledProductContainerLeftInner>
              <StyledProductContainerTitle align={true}>
                IN THE BOX
              </StyledProductContainerTitle>
              <div>
                {item?.includes?.map((element) => {
                  return (
                    <DetailQuantity>
                      <StyledProductContainerSpan color="darkOrange">
                        {element?.quantity}x
                      </StyledProductContainerSpan>
                      <StyledProductContainerSpan>
                        {element?.item}
                      </StyledProductContainerSpan>
                      <br />
                    </DetailQuantity>
                  );
                })}
              </div>
            </StyledProductContainerLeftInner>
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
                <StyledDetailGalleryImageLeft
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
                <StyledDetailGalleryImageLeft
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
              <StyledDetailGalleryImageRight
                src={require(`${item?.gallery?.third?.desktop}`)}
                alt="img"
              />
            </StyledPicture>
          )}
        </StyledProductGalleryContainer>

        <StyledProductExtraContainer>
          {item?.others?.map((extra) => {
            return (
              <div key={extra.slug} style={{ marginBottom: "2.2rem" }}>
                {isLoaded && (
                  <StyledPicture>
                    <source
                      media="(max-width: 650px)"
                      srcSet={require(`${extra?.image?.mobile}`)}
                    />
                    <source
                      media="(max-width: 1000px)"
                      srcSet={require(`${extra?.image?.tablet}`)}
                    />

                    <StyledExtraImg
                      src={require(`${extra?.image?.desktop}`)}
                      alt="img"
                    />
                  </StyledPicture>
                )}
                <StyledProductExtraH3>
                  {`${extra.name}`.toUpperCase()}
                </StyledProductExtraH3>
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
