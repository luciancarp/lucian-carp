import React from 'react'
import styled from 'styled-components'
import ContactForm from './contact-form'

const Contact = () => {
  return (
    <Container id={'contact'}>
      <h3>Let's Chat</h3>

      <ContactForm />
    </Container>
  )
}

const Container = styled.section`
  min-height: 80vh;
  margin-top: 10vh;
  h1 {
    padding-top: 5vh;
  }
`

export default Contact
