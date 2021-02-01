import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import Img from 'gatsby-image'
import GalleryControls from './gallery-controls'

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
    scale: 0.75
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0,
    scale: 0.75
  })
}

export const Gallery = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <StyledAnimatePresence initial={false} custom={direction}>
        <AnimatedContainer
          whileHover={{ scale: 1.025 }}
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 500, damping: 55 },
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
          {images[imageIndex].fluid !== null ? (
            <Img
              draggable="false"
              fluid={{ ...images[imageIndex].fluid, aspectRatio: 1.77 }}
            />
          ) : (
            // <div>
            <StyledIframe
              src={images[imageIndex].description}
              title={images[imageIndex].title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              // width="600"
              // height="337"
            />
            // </div>
          )}
        </AnimatedContainer>
      </StyledAnimatePresence>
      <GalleryControls
        images={images}
        paginate={paginate}
        imageIndex={imageIndex}
      />
    </>
  )
}

const StyledAnimatePresence = styled(AnimatePresence)`
  position: relative;
`

const StyledIframe = styled.iframe`
  display: block;
  width: 100%;
  height: 200px;

  @media (min-width: 425px) {
    height: 275px;
  }

  @media (min-width: 600px) {
    height: 337px;
  }

  border: none;
`

const AnimatedContainer = styled(motion.div)`
  position: absolute;
  width: calc(100% - 2rem);
  max-width: calc(100% - 2rem);

  @media (min-width: 600px) {
    max-width: 600px;
  }
`

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}
