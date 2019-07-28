import React from 'react'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import Work from '../components/work'

// import indexStyles from './index.module.scss'
import LandingMain from '../components/landing-main'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingMain />
    <Work />
  </Layout>
)

export default IndexPage
