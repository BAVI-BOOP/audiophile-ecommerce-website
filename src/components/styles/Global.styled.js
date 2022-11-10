import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.font};
    }

    body {
        height: 100vh;
    }
`;
