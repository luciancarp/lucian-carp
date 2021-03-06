import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import StyledLink from '../components/styled-link'

const Thanks = () => (
  <Container>
    <SEO title="Thank you!" />
    <Text>
      <Title>Thank you!</Title>
      <p>Thank you for contacting me. I will get in touch with you shortly.</p>
      <StyledLink destination="/" title="home" />
    </Text>
  </Container>
)

const Title = styled.h1``

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default Thanks
