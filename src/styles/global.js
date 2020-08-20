import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`



  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html,
  body,
  #root {
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background:#fff;
    color:#304050;
    font-weight: 300;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    padding: 0;
    margin: 0;
    width: -webkit-fill-available;
  }
  button {
    border: 0;
    cursor: pointer;
    background-color: transparent;
  }
  
  input {
    font-family: "Chivo", sans-serif;
  }
  ul {
    list-style: none;
  }

  .toastsuccess {
    border-radius: 6px;
    background-color: #000 !important;
  }
  
  .Toastify__toast--error {
    border-radius: 6px;
    background-color: #000 !important;
  }
  
  .Toastify__toast-body {
    font-family: "CircularMedium", sans-serif !important;
    font-size: 14px;
    padding: 0 16px;
  }
`;

export default GlobalStyle;
