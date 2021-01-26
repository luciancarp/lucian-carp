import React from 'react'
import styled from 'styled-components'
import { fontSizes, screenSizes } from '../styles/global'

const LandingMain = () => {
  return (
    <Container id={'main'}>
      <MainTitle>Lucian Carp</MainTitle>
      <h2>Full stack developer</h2>
    </Container>
  )
}

const Container = styled.section`
  padding-top: 15vh;
  height: 35vh;

  @media (min-width: 1200px) {
    scroll-snap-align: start;
  }
`

const MainTitle = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.primary};
  border-bottom: 0.15rem solid ${(props) => props.theme.text};

  font-size: 2rem;
  line-height: 3rem;
  margin-bottom: 1rem;

  @media (min-width: ${screenSizes.mobileL}) {
    font-size: ${fontSizes.xLarge};
    line-height: 4rem;
  }

  @media (min-width: ${screenSizes.laptop}) {
    font-size: 4rem;
    line-height: 5rem;
  }
`

export default LandingMain
