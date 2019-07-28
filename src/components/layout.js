/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import '../styles/reset.scss'
import layoutStyles from './layout.module.scss'
import Footer from './footer'

// import { useStaticQuery, graphql } from 'gatsby'

// import Header from './header'

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className={layoutStyles.container}>
        <main className={layoutStyles.content}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
