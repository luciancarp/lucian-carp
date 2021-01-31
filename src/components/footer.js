import React from 'react'
import styled from 'styled-components'
import { fontSizes, spaces } from '../styles/global'

const Footer = () => {
  return (
    <Container>
      <Center>Made by Lucian Carp © {new Date().getFullYear()}</Center>
    </Container>
  )
}

const Center = styled.div`
  opacity: 0.75;
  font-size: ${fontSizes.small};
`

const Container = styled.footer`
  min-height: 5rem;
  max-width: 600px;
  margin-top: ${spaces.spacer};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export default Footer
