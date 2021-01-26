import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import '../styles/reset.scss'

import Footer from './footer'
import ThemeSwitcher from './theme-switcher'

// import { useStaticQuery, graphql } from 'gatsby'

// import Header from './header'
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
        transition={{ duration: 0.3, ease: 'easeOut' }}
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

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
