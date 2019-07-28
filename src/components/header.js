import React from 'react'
import { Link } from 'react-scroll'

import headerStyles from './header.module.scss'

const Header = () => (
  <header className={headerStyles.container}>
    <nav className={headerStyles.navMenu}>
      <ul className={headerStyles.navList}>
        <li className={headerStyles.navItem}>
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <h2>Main</h2>
          </Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <h2>Work</h2>
          </Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <h2>Contact</h2>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
