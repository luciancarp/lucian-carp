import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import Scrollspy from 'react-scrollspy'

import { screenSizes, spaces } from '../styles/global'

const Header = () => (
  <Container>
    <NavMenu>
      <NavList
        items={['main', 'work', 'contact']}
        currentClassName="is-current"
        offset={-100}
      >
        <NavItem>
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <h2>About Me</h2>
          </Link>
        </NavItem>
        <NavItem>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <h2>Projects</h2>
          </Link>
        </NavItem>
        <NavItem>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
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

  padding-top: ${spaces.narrow};
  padding-bottom: ${spaces.narrow};
  padding-left: ${spaces.regular};
  padding-right: ${spaces.regular};

  margin-left: -${spaces.regular};
  margin-right: -${spaces.regular};

  transition: background-color 0.2s;
  -webkit-transition: background-color 0.2s;
  transition-timing-function: ease-out;

  background-color: ${(props) => props.theme.background};
  display: flex;
  align-items: center;

  @supports (backdrop-filter: none) {
    background-color: ${(props) => props.theme.backgroundTransp};
    backdrop-filter: blur(5px);
  }
`

const NavMenu = styled.nav`
  margin-top: auto;
  margin-bottom: auto;

  .is-current {
    color: ${(props) => props.theme.primary};
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
      color: ${(props) => props.theme.primary};
    }
  }

  h2 {
    margin: 0;
    margin-right: 1rem;
    display: inline-block;

    border-bottom: 0.15rem solid ${(props) => props.theme.text};

    font-size: 1.4rem;
    line-height: 2.5rem;

    @media (max-width: ${screenSizes.mobileL}) {
      font-size: 1rem;
      line-height: 2rem;
    }

    @media (max-width: ${screenSizes.mobileM}) {
      font-size: 0.85rem;
      line-height: 1.5rem;
    }
  }
`

export default Header
