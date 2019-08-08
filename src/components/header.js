import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import Scrollspy from 'react-scrollspy'

import { colors, screenSizes } from '../styles/global'

const Header = () => (
  <Container>
    <NavMenu>
      <NavList
        items={['main', 'work', 'contact']}
        currentClassName="is-current"
        offset={-20}
      >
        <NavItem>
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
        </NavItem>
        <NavItem>
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
        </NavItem>
        <NavItem>
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
        </NavItem>
      </NavList>
    </NavMenu>
  </Container>
)

const Container = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;

  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  margin-left: -1rem;
  margin-right: -1rem;

  background-color: ${colors.background};
  min-height: 10vh;
  display: flex;
  align-items: center;

  @supports (backdrop-filter: none) {
    background-color: ${colors.backgroundTransp};
    backdrop-filter: blur(5px);
  }
`

const NavMenu = styled.nav`
  margin-top: auto;
  margin-bottom: auto;

  .is-current {
    color: ${colors.primary};
  }
`

const NavList = styled(Scrollspy)`
  display: flex;
  list-style-type: none;
  margin: 0;
`

const NavItem = styled.li`
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;

  transition: color 0.2s;
  -webkit-transition: color 0.2s;
  transition-timing-function: ease-out;

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      color: ${colors.primary};
    }
  }

  h2 {
    margin: 0;
    margin-right: 1rem;
    display: inline-block;

    font-size: 1.2rem;
    border-bottom: 0.15rem solid ${colors.text};
    line-height: 2rem;

    @media (min-width: ${screenSizes.mobileL}) {
      font-size: 1.62671rem;
      line-height: 2.5rem;
    }
  }
`

export default Header
