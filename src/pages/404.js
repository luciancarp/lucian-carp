import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Title>NOT FOUND</Title>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
)

const Title = styled.h1`
  margin-top: 10vh;
`

export default NotFoundPage
