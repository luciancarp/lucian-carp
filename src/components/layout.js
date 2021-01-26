import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import '../styles/reset.scss'

import Footer from './footer'
import ThemeSwitcher from './theme-switcher'
import LandingMain from '../components/landing-main'
import Header from '../components/header'

import { motion } from 'framer-motion'
import { opacityVariants } from '../styles/variants'

import { screenSizes } from '../styles/global'

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <ThemeSwitcher />

      <Container
        initial="hidden"
        animate="visible"
        variants={opacityVariants}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Align>
          <LandingMain />
          <Header />
          <Content>{children}</Content>
          <Footer />
        </Align>
      </Container>
    </>
  )
}
const Align = styled.div`
  display: flex;
  flex-direction: column;
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
  @media (min-width: ${screenSizes.laptop}) {
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
