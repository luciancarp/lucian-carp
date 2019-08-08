import React from 'react'

import { ThemeProvider } from './src/components/theme'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
