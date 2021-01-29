import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg-primary: #f6f6f6;

    font-size: 16px;
  }

  html, body {
    height: 100%;
    width: 100%;

    background-color: var(--bg-primary);
  }


  #root {
    height: 100%;
    width: 100%;
  }

`;
