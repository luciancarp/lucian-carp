import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Scrollspy from 'react-scrollspy'
import { screenSizes } from '../styles/global'
import ArrowDrop from '../assets/arrow-drop.svg'

const opacityVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const transition = {
  yoyo: Infinity,
  duration: 0.75,
  ease: 'easeIn',
  delay: 0.5,
  repeatDelay: 0.25
}

const LandingArrow = () => (
  <Container
    initial="hidden"
    animate="visible"
    variants={opacityVariants}
    transition={transition}
  >
    <Scrollspy items={['work']} currentClassName="is-current" offset={250}>
      <StyledLink
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <StyledArrowDrop />
      </StyledLink>
    </Scrollspy>
  </Container>
)

const Container = styled(motion.div)`
  padding-top: 0;
  @media (min-width: ${screenSizes.laptop}) {
    padding-top: 10vh;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  .is-current {
    opacity: 0;
  }
`

const StyledLink = styled(Link)`
  transition: opacity 0.2s;
  -webkit-transition: opacity 0.2s;
  transition-timing-function: ease-out;
`

const StyledArrowDrop = styled(ArrowDrop)`
  cursor: pointer;

  height: 5rem;
  width: 5rem;
  transform: rotate(-90deg);
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

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

export default LandingArrow
