import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Footer from './footer'
import ThemeSwitcher from './theme-switcher'
import LandingMain from '../components/landing-main'
import Header from '../components/header'

import { motion } from 'framer-motion'
import { opacityVariants } from '../styles/variants'

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <ThemeSwitcher />

      <Container
        initial="hidden"
        animate="visible"
        variants={opacityVariants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Align>
          <LandingMain />
          {/* <Header /> */}
          {/* <Content>{children}</Content> */}
          <Content>
            <h1>Work in progress.</h1>
          </Content>
          <Footer />
        </Align>
      </Container>
    </>
  )
}
const Align = styled.div`
  display: flex;
  flex-direction: column;

  // temp
  flex-grow: 1;
`

const Container = styled(motion.div)`
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
  padding-top: 0;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    align-items: flex-start;
  }

  min-height: 100vh;
`

const Content = styled.main`
  flex-grow: 1;
  max-width: 600px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
