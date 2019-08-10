import React from 'react'
import styled from 'styled-components'
import { screenSizes } from '../styles/global'
import Arrow from '../assets/arrow.svg'

const GalleryControls = ({ images, paginate, imageIndex }) => {
  return (
    <GalleryControlsContainer>
      <ButtonLeft onClick={() => paginate(-1)}>
        <StyledArrow />
      </ButtonLeft>
      {images.map(image => {
        let index = images.findIndex(i => i.fluid.src === image.fluid.src)
        return <Bullet displayed={imageIndex === index}>•</Bullet>
      })}
      <ButtonRight onClick={() => paginate(1)}>
        <StyledArrow />
      </ButtonRight>
    </GalleryControlsContainer>
  )
}

const GalleryControlsContainer = styled.div`
  max-width: 100%;
  margin-top: 200px;

  @media (min-width: ${screenSizes.mobileS}) {
    margin-top: 250px;
  }
  @media (min-width: ${screenSizes.mobileL}) {
    margin-top: 300px;
  }
  @media (min-width: 540px) {
    margin-top: 330px;
  }
  @media (min-width: 600px) {
    margin-top: 360px;
    max-width: 600px;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const StyledArrow = styled(Arrow)`
  height: 1.5rem;
  width: 1.5rem;
  margin: 0.5rem;
`

const Button = styled.div`
  cursor: pointer;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

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

const ButtonLeft = styled(Button)`
  transform: scale(-1);
`
const ButtonRight = styled(Button)``

const Bullet = styled.div`
  transition: color 0.2s;
  -webkit-transition: color 0.2s;
  transition-timing-function: ease-out;
  color: ${props => (props.displayed ? props.theme.primary : props.theme.text)};
`

export default GalleryControls
