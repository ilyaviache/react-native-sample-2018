import defaultsDeep from 'lodash/defaultsDeep'

import * as common from './common'
import * as light from './themes/light'
import * as dark from './themes/dark'

const THEMES = { light, dark }

// Recursivly returns vars depends on theme.
export default function (theme = 'light') {
  const themeVars = THEMES[theme] || light
  return defaultsDeep(themeVars, common)
}