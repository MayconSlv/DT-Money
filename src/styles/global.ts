import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0,
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-green']}
  }

  body {
    background: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1.6rem 'Roboto', sans-serif;
  }
`
