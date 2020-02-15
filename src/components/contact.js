import React from 'react'
import styled, { css } from 'styled-components'
import ContactForm from './contact-form'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'
import { screenSizes } from '../styles/global'

const Contact = () => {
  return (
    <Container id={'contact'}>
      <p>Get in touch!</p>
      <p>
        <ExternalLink href="https://www.linkedin.com/in/lucian-carp-503840170/">
          <StyledLinkedin />
        </ExternalLink>
        <ExternalLink href="https://github.com/luciancarp">
          <StyledGithub />
        </ExternalLink>
      </p>
      {/* <p>Or email me here.</p> */}
      <ContactForm />
    </Container>
  )
}

const Container = styled.section`
  min-height: 80vh;
  margin-top: 10vh;
  h1 {
    padding-top: 5vh;
  }
`

const ExternalLink = styled.a`
  margin-right: 0.75rem;
`

const SvgStyle = css`
  height: 35px;
  width: 35px;

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

const StyledLinkedin = styled(Linkedin)`
  ${SvgStyle}
`

const StyledGithub = styled(Github)`
  ${SvgStyle}
`

export default Contact
