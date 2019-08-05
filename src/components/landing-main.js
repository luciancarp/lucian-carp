import React from 'react'
import landingMainStyles from './landing-main.module.scss'

const LandingMain = () => {
  return (
    <section className={landingMainStyles.container} id={'main'}>
      <div className={landingMainStyles.header}>
        <h1>Lucian Carp</h1>
        <h2>Full-stack developer</h2>
      </div>
    </section>
  )
}

export default LandingMain
