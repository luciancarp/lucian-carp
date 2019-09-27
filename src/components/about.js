import React from 'react'
import styled from 'styled-components'
import LandingArrow from '../components/landing-arrow'

import { spaces } from '../styles/global'

const About = () => (
  <Container>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      pharetra sagittis venenatis. Quisque tincidunt cursus est et hendrerit.
      Cras diam est, sagittis non placerat ut, consectetur in lorem. Duis id
      lorem placerat, scelerisque lorem quis, tincidunt leo. Fusce iaculis ex
      nibh, vel convallis sem malesuada pellentesque.
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
