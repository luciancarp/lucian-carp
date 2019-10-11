import React, { useState, useEffect } from 'react'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/global'

const defaultState = {
  switchTheme: () => {}
}
const ThemeContext = React.createContext(defaultState)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)

  useEffect(() => {
    const localTheme = localStorage.theme
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !localTheme
    )
      setTheme(darkTheme)
    else if (localTheme && localTheme === 'dark') setTheme(darkTheme)
  }, [])

  const switchTheme = () => {
    const newTheme = theme.name === 'light' ? darkTheme : lightTheme
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme.name)
  }

  return (
    <ThemeStyled theme={theme}>
      <ThemeContext.Provider
        value={{
          name: theme.name,
          switchTheme: switchTheme
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeStyled>
  )
}

export default ThemeContext

export { ThemeProvider }
