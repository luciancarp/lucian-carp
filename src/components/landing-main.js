import React from 'react'
import { motion } from 'framer-motion'
import landingMainStyles from './landing-main.module.scss'
import { opacityVariants } from '../styles/variants'

const LandingMain = () => {
  return (
    <motion.section
      className={landingMainStyles.container}
      id={'main'}
      initial="hidden"
      animate="visible"
      variants={opacityVariants}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className={landingMainStyles.header}>
        <h1>Lucian Carp</h1>
        <h2>Full-stack developer</h2>
      </div>
    </motion.section>
  )
}

export default LandingMain
