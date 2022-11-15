import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStyles } from "./components/styles/Global.styled";
import { StyledContainer } from "./components/styles/Container.styled";
import Category from "./pages/Category";
import Detail from "./pages/Detail";

const style = {
  darkOrange: "#D87D4A",
  lightOrange: "#FBAF85",
  black: "#0E0E0E",
  lightBlack: "#101010",
  grey: "#F1F1F1",
  lightGrey: "#FAFAFA",
  white: "#FFFFFF",
  font: "'Manrope', sans-serif",
};

function App() {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      <BrowserRouter>
        <StyledContainer>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="category" element={<Category />}></Route>
            <Route path="detail" element={<Detail />}></Route>
          </Routes>
        </StyledContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
