import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg-primary: #f6f6f6;
  }

  body {
    background-color: var(--bg-primary);
  }

`;
