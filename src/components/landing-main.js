import React from 'react'

import landingMainStyles from './landing-main.module.scss'

const LandingMain = () => {
  return (
    <section className={landingMainStyles.container}>
      <div className={landingMainStyles.header}>
        <h1>Lucian Carp</h1>
        <h2>Full-stack developer</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        pharetra sagittis venenatis. Quisque tincidunt cursus est et hendrerit.
        Cras diam est, sagittis non placerat ut, consectetur in lorem. Duis id
        lorem placerat, scelerisque lorem quis, tincidunt leo. Fusce iaculis ex
        nibh, vel convallis sem malesuada pellentesque.
      </p>
    </section>
  )
}

export default LandingMain
