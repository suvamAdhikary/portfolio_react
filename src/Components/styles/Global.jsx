import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    /* width: 100vw; */
}

html {
      box-sizing: border-box;
      /* text-align: center; */
      background-color: ${(props) => props.theme?.bg_clr};
      color: ${(props) => props.theme?.fnt_clr};
    }
    *, *::before, *::after {
      box-sizing: inherit;
      font-family: sans-serif;
    }
    body, h1, h2, h3, h4, h5, h6, p, ol, ul, div, main, nav, section, header, footer {
      margin: 0;
      padding: 0;
      font-weight: normal;
    }
    ol, ul {
      list-style: none;
    }
    /* img {
      max-width: 100%;
      height: auto;
    } */
    a, a:visited, a:hover {
      text-decoration: none;
      font-family: sans-serif;
    }
    input, &::placeholder, a, textarea {
        color: ${(props) => props.theme?.bg_clr};
    }
    input, textarea {
        background-color: ${(props) => props.theme?.fnt_clr};
    }
`;