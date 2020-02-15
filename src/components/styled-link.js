import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { screenSizes } from '../styles/global'

const Style = styled(Link)`
  text-decoration: none;
  h4 {
    margin: 0;
  }

  color: ${props => props.theme.text};
  transition: color 0.2s;
  -webkit-transition: color 0.2s;
  transition-timing-function: ease-out;

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`

const Right = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const StyledLink = ({ children }) => {
  return (
    <Right>
      <Style>
        <h3>{children}</h3>
      </Style>
    </Right>
  )
}

export default StyledLink
