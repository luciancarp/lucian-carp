import React from 'react'

import headerStyles from './header.module.scss'

const Header = () => (
  <header className={headerStyles.container}>
    <nav className={headerStyles.navMenu}>
      <ul className={headerStyles.navList}>
        <li className={headerStyles.navItem}>
          <h2>Main</h2>
        </li>
        <li className={headerStyles.navItem}>
          <h2>Work</h2>
        </li>
        <li className={headerStyles.navItem}>
          <h2>Contact</h2>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
