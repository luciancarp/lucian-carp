import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import StyledLink from '../components/styled-link'

const Thanks = () => (
  <Container>
    <SEO title="Thank you!" />
    <Title>Thank you!</Title>
    <p>Thank you for contacting me. I will get in touch with you shortly.</p>
    <StyledLink destination="/" title="home" />
  </Container>
)

const Title = styled.h1`
  margin-top: 10vh;
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default Thanks
