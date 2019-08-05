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
import { motion } from 'framer-motion'
import { opacityVariants } from '../styles/variants'

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
      <motion.div
        className={layoutStyles.container}
        initial="hidden"
        animate="visible"
        variants={opacityVariants}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <main className={layoutStyles.content}>{children}</main>
        <Footer />
      </motion.div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
