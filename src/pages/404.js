import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import StyledLink from '../components/styled-link'

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <Text>
      <Title>NOT FOUND</Title>
      <p>You just hit a route that doesn&#39;t exist...</p>
      <StyledLink destination="/" title="home" />
    </Text>
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

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default NotFoundPage
