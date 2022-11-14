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
  StyledCategoryHeader,
  StyledCategoryHeaderTitle,
  StyledPage,
  StyledPicture,
} from "./styles/CategoryProduct.styled";
import HomeCategory from "./HomeCategory";
import HomeInfo from "./HomeInfo";
// import { initialState, reducer } from "../reducer/reducer";

const CategoryProduct = () => {
  //! UseReducer()
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6370d5be0399d1995d84e8f9.mockapi.io/ecom/audiop")
      .then((response) => {
        let filteredData = response["data"].filter(
          (item) => item.category === "headphones"
        );
        setCategoryData(filteredData);
        console.log(categoryData);
      });
  }, []);

  return (
    <div>
      <StyledCategoryHeader>
        <StyledCategoryHeaderTitle>HEADPHONES</StyledCategoryHeaderTitle>
      </StyledCategoryHeader>
      <StyledPage>
        {categoryData.map((product) => {
          return (
            <StyledCategoryContainer key={product.id} flexId={product.id}>
              <StyledPicture>
                <source
                  media="(max-width: 600px)"
                  srcSet={require(`${product.categoryImage.mobile}`)}
                />
                <source
                  media="(max-width: 1000px)"
                  srcSet={require(`${product.categoryImage.tablet}`)}
                />
                <source srcSet={require(`${product.categoryImage.desktop}`)} />
                <StyledCategoryImage
                  src={require(`${product.categoryImage.desktop}`)}
                  alt="img"
                />
              </StyledPicture>
              <StyledCategoryText>
                <StyledCategorySubTitle>NEW PRODUCT</StyledCategorySubTitle>
                <StyledCategoryTitle>{product.name}</StyledCategoryTitle>
                <StyledCategoryP>{product.description}</StyledCategoryP>
                <StyledCategoryButton>SEE PRODUCT</StyledCategoryButton>
              </StyledCategoryText>
            </StyledCategoryContainer>
          );
        })}
      </StyledPage>
      <HomeCategory />
      <HomeInfo />
    </div>
  );
};

export default CategoryProduct;
