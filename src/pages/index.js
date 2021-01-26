import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Work from '../components/work'
import About from '../components/about'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Work />
    <Contact />
  </Layout>
)

export default IndexPage
