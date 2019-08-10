import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import Img from 'gatsby-image'
import GalleryControls from './gallery-controls'

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
        <AnimatedContainer
          key={page}
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
          <Img fluid={{ ...images[imageIndex].fluid, aspectRatio: 1.77 }} />
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
