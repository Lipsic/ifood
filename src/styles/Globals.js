import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f2f2f2;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  section{
    margin-bottom: 50px;
  }
  a{
    text-decoration: none;
  }
`;
export default GlobalStyles;
