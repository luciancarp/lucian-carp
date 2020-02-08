import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Thanks = () => (
  <Layout>
    <SEO title="Thank you!" />
    <Title>Thank you!</Title>
    <p>Thank you for contacting me. I will get in touch with you shortly.</p>
  </Layout>
)

const Title = styled.h1`
  margin-top: 10vh;
`

export default Thanks
