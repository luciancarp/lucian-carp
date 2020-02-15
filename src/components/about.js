import React from 'react'
import styled from 'styled-components'
import LandingArrow from '../components/landing-arrow'

import { spaces } from '../styles/global'

const About = () => (
  <Container>
    <Text>
      I am a developer who is just finishing his MEng Computer Science Degree at
      the University of Bristol. I like clean code and I am always ready to
      improve and learn more best practices.
    </Text>
    <LandingArrow />
  </Container>
)

const Container = styled.section`
  min-height: 60vh;
  margin: 0;
`

const Text = styled.p`
  position: -webkit-sticky;
  position: sticky;
  top: 10vh;
  z-index: 0;
  padding-top: ${spaces.wide};
  margin-bottom: 0;
`

export default About
