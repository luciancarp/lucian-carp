import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import { screenSizes, spaces } from '../styles/global'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <div>
      <StyledForm
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>

        <noscript>
          <p>This form won’t work with Javascript disabled</p>
        </noscript>

        <p>
          <label>
            <StyledLabelTitle>Your name</StyledLabelTitle>
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            <StyledLabelTitle>Your email</StyledLabelTitle>
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            <StyledLabelTitle>Message</StyledLabelTitle>
            <textarea
              name="message"
              onChange={handleChange}
              style={{ minHeight: '10rem', resize: 'vertical' }}
            />
          </label>
        </p>

        <StyledButtonContainer>
          <StyledButton type="submit">
            <h3>Send</h3>
          </StyledButton>
        </StyledButtonContainer>
      </StyledForm>
    </div>
  )
}

const StyledLabelTitle = styled.div`
  padding-bottom: ${spaces.narrow};
`

const StyledButtonContainer = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const StyledButton = styled.button`
  margin-top: auto;
  margin-bottom: auto;

  padding: 0.3rem;
  padding-left: 0rem;
  padding-right: 0rem;

  border: none;
  background: none;

  cursor: pointer;
  color: ${(props) => props.theme.text};

  transition: color 0.2s;
  -webkit-transition: color 0.2s;
  transition-timing-function: ease-out;

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }

  h3 {
    display: inline-block;
  }
`

const StyledForm = styled.form`
  input,
  textarea {
    width: 100%;
    max-width: 100%;

    padding: 0.5rem;
    border-style: solid;
    border-width: 0px 0px 2px 0px;
    /* border-radius: 5px 5px 5px 5px; */
    border-color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.backgroundoppositeTransp};
    font-family: inherit;
    font-size: inherit;
    color: ${(props) => props.theme.text};

    -webkit-transition: border-color 0.2s; /* Safari */
    transition: border-color 0.2s;
    transition-timing-function: ease-out;

    &:focus {
      border-color: ${(props) => props.theme.primary};
      background: ${(props) => props.theme.backgroundoppositeTransp};
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.text};
    }

    &:hover {
      border-color: ${(props) => props.theme.primary};
    }
  }
`
