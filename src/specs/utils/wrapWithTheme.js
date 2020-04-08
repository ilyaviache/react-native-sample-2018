import 'react-native'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import getStyleVars from '../../utils/styles/variables'

const wrapWithTheme = (subject, theme = 'light') => (
  <ThemeProvider theme={getStyleVars(theme)}>{subject}</ThemeProvider>
)

export default wrapWithTheme
