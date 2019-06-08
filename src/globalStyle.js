import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    /* --text-color-normal: #0a244d;
    --text-color-light: #8cabd9; */
  }

  html[data-theme='dark'] {
    /* --text-color-normal: hsl(210, 10%, 62%);
    --text-color-light: hsl(210, 15%, 35%);
    --text-color-richer: hsl(210, 50%, 72%);
    --text-color-highlight: hsl(25, 70%, 45%); */
  }

  body {
    font-size: 16px;
    color: ${props => props.theme.colors.dark};
    background-color: ${props => props.theme.colors.snow}
  }
`

export default GlobalStyle
