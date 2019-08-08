import React from 'react'
import styled from 'styled-components'
import ThemeContext from '../components/theme'

const Footer = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Container>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <button onClick={theme.switchTheme}>Switch Theme</button>
        </Container>
      )}
    </ThemeContext.Consumer>
  )
}

const Container = styled.footer`
  min-height: 10vh;
`

export default Footer
