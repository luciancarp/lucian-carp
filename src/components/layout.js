import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

import '../styles/reset.scss'
import { fontSizes, colors, fonts } from '../styles/global'
import Footer from './footer'

// import { useStaticQuery, graphql } from 'gatsby'

// import Header from './header'
import { motion } from 'framer-motion'
import { opacityVariants } from '../styles/variants'

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <GlobalStyle />
      <Container
        initial="hidden"
        animate="visible"
        variants={opacityVariants}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  )
}

const Container = styled(motion.div)`
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
  padding-top: 0;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.main`
  flex-grow: 1;
  max-width: 600px;
`

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

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
