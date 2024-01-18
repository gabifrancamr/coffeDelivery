import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        //box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }

    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
        --webkit-font-smoothing: antialiased;
    }

    h1 {
        font-family: 'Baloo 2', sans-serif;
        color: ${(props) => props.theme['base-title']};
        line-height: 1.3;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    @media (max-width: 768px) {
    html {
        font-size: 87.5%;
    }}
`
