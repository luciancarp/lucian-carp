import React from 'react'
import Fade from 'react-reveal/Fade'

import landingMainStyles from './landing-main.module.scss'

const LandingMain = () => {
  return (
    <section className={landingMainStyles.container}>
      <Fade bottom>
        <div className={landingMainStyles.header}>
          <h1>Lucian Carp</h1>
          <h2>Full-stack developer</h2>
        </div>
      </Fade>
    </section>
  )
}

export default LandingMain
