import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Work from '../components/work'

import indexStyles from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.header}>
      <h1>Lucian Carp</h1>
    </div>
    <h1>Lorem</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>Now go build something great.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Work />
  </Layout>
)

export default IndexPage
