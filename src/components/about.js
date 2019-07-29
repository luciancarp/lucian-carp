import React from 'react'
import { motion } from 'framer-motion'
import { opacityVariants } from '../styles/variants'
import aboutStyles from './about.module.scss'

const About = () => {
  return (
    <motion.section
      className={aboutStyles.container}
      initial="hidden"
      animate="visible"
      variants={opacityVariants}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <p className={aboutStyles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        pharetra sagittis venenatis. Quisque tincidunt cursus est et hendrerit.
        Cras diam est, sagittis non placerat ut, consectetur in lorem. Duis id
        lorem placerat, scelerisque lorem quis, tincidunt leo. Fusce iaculis ex
        nibh, vel convallis sem malesuada pellentesque.
      </p>
    </motion.section>
  )
}

export default About
