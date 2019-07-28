import React from 'react'
import Fade from 'react-reveal/Fade'

import aboutStyles from './about.module.scss'

const About = () => {
  return (
    <section className={aboutStyles.container}>
      <Fade bottom>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pharetra sagittis venenatis. Quisque tincidunt cursus est et
          hendrerit. Cras diam est, sagittis non placerat ut, consectetur in
          lorem. Duis id lorem placerat, scelerisque lorem quis, tincidunt leo.
          Fusce iaculis ex nibh, vel convallis sem malesuada pellentesque.
        </p>
      </Fade>
    </section>
  )
}

export default About
