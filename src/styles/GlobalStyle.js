import { createGlobalStyle } from 'styled-components'
import { fontSizes, fonts } from '../styles/global'

const GlobalStyle = createGlobalStyle`
  body,
  html,
  #root {
    font-family: ${fonts.body};
    color:${(props) => props.theme.text};
    background-color: ${(props) => props.theme.background};
    font-size: ${fontSizes.regular};
    font-weight: 400;
    font-style: normal;

    transition: background-color 0.2s;
    -webkit-transition: background-color 0.2s;
    transition-timing-function: ease-out;

    scroll-snap-type: y proximity;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.header};
    text-transform: uppercase;
    font-style: normal;
    /* letter-spacing: 0.1rem; */
  }

  h1 {
    /* letter-spacing: 0.2rem; */
  }

  p {
    /* text-align: justify; */
  }
`

export default GlobalStyle
