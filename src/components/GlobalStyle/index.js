import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${({ theme }) =>
  `* {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    html,body {
        height: 100%
    }

    html {
        scroll-behaviour: smooth;
    }
    
    body {
        font-family: ${theme.font};
        background: ${theme.colors.background};
        color: ${theme.colors.text};
        line-height: 1.5;
    }
    
`}`;
