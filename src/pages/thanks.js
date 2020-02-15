import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import StyledLink from '../components/styled-link'

const Thanks = () => (
  <Layout>
    <SEO title="Thank you!" />
    <Title>Thank you!</Title>
    <p>Thank you for contacting me. I will get in touch with you shortly.</p>
    <StyledLink>Home</StyledLink>
  </Layout>
)

const Title = styled.h1`
  margin-top: 10vh;
`

export default Thanks
