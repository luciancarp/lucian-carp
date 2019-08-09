import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { screenSizes } from '../styles/global'
import Arrow from '../assets/arrow.svg'
import Img from 'gatsby-image'

// export const images = [
//   'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
//   'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
//   'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png'
// ]

const variants = {
  enter: direction => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: direction => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
}

export const Gallery = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, images.length, page)

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <StyledAnimatePresence initial={false} custom={direction}>
        <StyledImage
          onDrag={(event, info) => console.log(info.point.x, info.point.y)}
          key={page}
          // src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <StyledImg fluid={images[imageIndex].fluid} />
        </StyledImage>
      </StyledAnimatePresence>
      <GalleryControls>
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
      </GalleryControls>

      <Img fluid={images[imageIndex].fluid} />
    </>
  )
}

const StyledAnimatePresence = styled(AnimatePresence)`
  position: relative;
`

const StyledImg = styled(Img)`
  position: absolute;

  max-width: calc(100% - 2rem);

  @media (min-width: 600px) {
    max-width: 600px;
  }
`

const StyledImage = styled(motion.div)`
  position: absolute;
  top: 0;
  /* position: relative; */

  /* max-width: calc(100% - 2rem);

  @media (min-width: 600px) {
    max-width: 600px;
  } */
`

const GalleryControls = styled.div`
  max-width: calc(100%);

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

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}
