import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { fontSizes, colors, fonts } from '../styles/global'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import Work from '../components/work'
import Header from '../components/header'
import Contact from '../components/contact'
import LandingMain from '../components/landing-main'
import About from '../components/about'

const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <LandingMain />
      <Header />
      <About />
      <Work />
      <Contact />
    </Layout>
  </React.Fragment>
)

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Arvo:400i&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:900&display=swap');

  body,
  html,
  #root {
    font-family: ${fonts.body};
    color: ${colors.text};
    background-color: ${colors.background};
    font-size: ${fontSizes.regular};
    font-weight: 400;
    font-style: italic;
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
    letter-spacing: 0.1rem;
  }

  h1 {
    letter-spacing: 0.2rem;
  }

  p {
    text-align: justify;
  }
`

export default IndexPage
