import React from 'react'
import styled from 'styled-components'

const Footer = ({ switchTheme }) => {
  return (
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      <button onClick={switchTheme}>Switch Theme</button>
    </Container>
  )
}

const Container = styled.footer`
  min-height: 10vh;
`

export default Footer
