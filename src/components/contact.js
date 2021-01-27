import React from 'react'
import styled from 'styled-components'
import ContactForm from './contact-form'

import { spaces } from '../styles/global'

const Contact = () => {
  return (
    <Container id={'contact'}>
      <h2>Let's Chat</h2>

      <ContactForm />
    </Container>
  )
}

const Container = styled.section`
  margin-top: ${spaces.spacer};

  h2 {
    margin-bottom: ${spaces.wide};
  }
`

export default Contact
