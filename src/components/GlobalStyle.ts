import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        outline: none;
        border: none;
    }

    body {
        background: rgba(239, 239, 239, 1);
    }

    h1, h2, h3, h4 {
        color: white;
    }
`