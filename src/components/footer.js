import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { fontSizes, screenSizes } from '../styles/global'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'

const Footer = () => {
  return (
    <Container>
      <Left>
        <StyledLink>
          <h4>Home</h4>
        </StyledLink>
      </Left>
      <Center>© Copyright {new Date().getFullYear()}</Center>
      <Right>
        <ExternalLink href="https://www.linkedin.com/in/lucian-carp-503840170/">
          <StyledLinkedin />
        </ExternalLink>
        <ExternalLink href="https://github.com/luciancarp">
          <StyledGithub />
        </ExternalLink>
      </Right>
    </Container>
  )
}

const ExternalLink = styled.a`
  margin-left: 0.75rem;
`

const StyledLinkedin = styled(Linkedin)`
  height: 30px;
  width: 30px;

  fill: ${props => props.theme.text};
  transition: fill 0.2s;
  -webkit-transition: fill 0.2s;
  transition-timing-function: ease-out;

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      fill: ${props => props.theme.primary};
    }
  }
`

const StyledGithub = styled(Github)`
  height: 30px;
  width: 30px;

  fill: ${props => props.theme.text};
  transition: fill 0.2s;
  -webkit-transition: fill 0.2s;
  transition-timing-function: ease-out;

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      fill: ${props => props.theme.primary};
    }
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  h4 {
    margin: 0;
  }

  color: ${props => props.theme.text};
  transition: color 0.2s;
  -webkit-transition: color 0.2s;
  transition-timing-function: ease-out;

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`

const Center = styled.div`
  opacity: 0.75;
  font-size: ${fontSizes.small};
`
const Left = styled.div``
const Right = styled.div``

const Container = styled.footer`
  min-height: 10vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default Footer
