import React from 'react'

import { ThemeProvider } from './src/components/theme'
import GlobalStyle from './src/styles/GlobalStyle'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
