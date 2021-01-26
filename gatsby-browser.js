import React from 'react'

import { ThemeProvider } from './src/components/theme'
import GlobalStyle from './src/styles/GlobalStyle'

import './src/styles/reset.scss'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
