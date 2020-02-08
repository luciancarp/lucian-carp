import React from 'react'
import { navigate } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'
import styled from 'styled-components'
import ThemeContext from './theme'
import { screenSizes } from '../styles/global'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === 'undefined') {
  throw new Error(`
  Env var SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  Note this demo is specifically for Recaptcha v2
  `)
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm() {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <div>
      <StyledForm
        name="contact-recaptcha"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        <noscript>
          <p>This form won’t work with Javascript disabled</p>
        </noscript>
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" onChange={handleChange} />
          </label>
        </p>

        <ThemeContext.Consumer>
          {theme =>
            theme.name === 'light' ? (
              <Recaptcha
                ref={recaptchaRef}
                sitekey={RECAPTCHA_KEY}
                theme="light"
              />
            ) : (
              <Recaptcha
                ref={recaptchaRef}
                sitekey={RECAPTCHA_KEY}
                theme="dark"
              />
            )
          }
        </ThemeContext.Consumer>

        <p>
          <StyledButton type="submit">
            <h2>Send</h2>
          </StyledButton>
        </p>
      </StyledForm>
    </div>
  )
}

const StyledButton = styled.button`
  padding-top: 1rem;
  margin-top: auto;
  margin-bottom: auto;

  border: none;
  background: none;

  cursor: pointer;
  color: ${props => props.theme.text};

  transition: color 0.2s;
  -webkit-transition: color 0.2s;
  transition-timing-function: ease-out;

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      color: ${props => props.theme.primary};
    }
  }

  h2 {
    display: inline-block;

    @media (min-width: ${screenSizes.mobileL}) {
      font-size: 1.62671rem;
      line-height: 2.5rem;
    }
  }
`

const StyledForm = styled.form`
  input,
  textarea {
    width: 100%;
    max-width: 100%;

    padding: 0.5rem;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-radius: 5px 5px 5px 5px;
    border-color: ${props => props.theme.text};
    background: ${props => props.theme.background};
    font-family: inherit;
    font-size: inherit;
    color: ${props => props.theme.text};

    -webkit-transition: border-color 0.2s; /* Safari */
    transition: border-color 0.2s;
    transition-timing-function: ease-out;

    &:focus {
      border-color: ${props => props.theme.primary};
      background: ${props => props.theme.background};
      outline: none;
    }

    &::placeholder {
      color: ${props => props.theme.text};
    }

    &:hover {
      border-color: ${props => props.theme.primary};
    }
  }
`
