import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import LandingArrow from '../components/landing-arrow'

import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'

import { spaces, screenSizes } from '../styles/global'

const About = () => {
  const [arrow, setArrow] = useState(true)

  useEffect(() => {
    const showArrow = () => {
      if (window.innerWidth < 1024) {
        setArrow(false)
      } else {
        setArrow(true)
      }
    }

    window.addEventListener('resize', showArrow)
    return () => window.removeEventListener('resize', showArrow)
  }, [arrow])

  return (
    <Container>
      <Text>
        <Line>A CS graduate of the University of Bristol.</Line>
        <Line>
          Has developed multiple full stack applications and websites.
        </Line>
        <Line>
          Always strives to improve by staying up to date on the best practices
          and technologies.
        </Line>
        <Links>
          <ExternalLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/lucian-carp-503840170/"
          >
            <StyledLinkedin />
          </ExternalLink>
          <ExternalLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/luciancarp"
          >
            <StyledGithub />
          </ExternalLink>
          <ExternalLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://assets.ctfassets.net/9xmdi7tzsga7/4bt4ADkjC1sRlpSg4q3g0O/5d63490356e82076d7e491616b8e2ea2/lucian-carp.pdf"
          >
            <h3>CV</h3>
          </ExternalLink>
        </Links>
      </Text>
      {arrow && <LandingArrow />}
    </Container>
  )
}
const ExternalLink = styled.a`
  margin-right: ${spaces.wide};
  padding: 0;
  margin-bottom: -0.5rem;
  text-decoration: none;

  h3 {
    text-decoration: none;

    margin: 0;
    font-size: 2rem;

    color: ${(props) => props.theme.text};
    transition: color 0.2s;
    -webkit-transition: color 0.2s;
    transition-timing-function: ease-out;

    @media (min-width: ${screenSizes.laptop}) {
      &:hover {
        color: ${(props) => props.theme.primary};
      }
    }
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-top: ${spaces.wide};
`

const Line = styled.p`
  margin-bottom: 0.25rem;
`

const Container = styled.section`
  margin: 0;
`

const Text = styled.p`
  z-index: 0;
  padding-top: ${spaces.wide};
  padding-bottom: ${spaces.wide};
  margin-bottom: 0;
`

const SvgStyle = css`
  height: 35px;
  width: 35px;

  fill: ${(props) => props.theme.text};
  transition: fill 0.2s;
  -webkit-transition: fill 0.2s;
  transition-timing-function: ease-out;

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      fill: ${(props) => props.theme.primary};
    }
  }
`

const StyledLinkedin = styled(Linkedin)`
  ${SvgStyle}
`

const StyledGithub = styled(Github)`
  ${SvgStyle}
`

export default About
