import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Work from '../components/work'
import Header from '../components/header'
import Contact from '../components/contact'
import LandingMain from '../components/landing-main'
import About from '../components/about'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingMain />
    <Header />
    <About />
    <Work />
    <Contact />
  </Layout>
)

export default IndexPage
