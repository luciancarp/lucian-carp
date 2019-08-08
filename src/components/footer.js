import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  )
}

const Container = styled.footer`
  min-height: 10vh;
`

export default Footer
