import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { screenSizes } from '../styles/global'

const Style = styled(Link)`
  text-decoration: none;
  h3 {
    border-bottom: 0.15rem solid ${(props) => props.theme.text};
  }

  color: ${(props) => props.theme.text};
  transition: color 0.2s;
  -webkit-transition: color 0.2s;
  transition-timing-function: ease-out;

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }
`

const Right = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLink = ({ title, destination }) => (
  <Right>
    <Style to={destination}>
      <h3>{title}</h3>
    </Style>
  </Right>
)

export default StyledLink
