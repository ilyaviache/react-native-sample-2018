import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import styled from 'styled-components'

import icoMoonConfig from './selection.json'
const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig)

export default styled(CustomIcon) `
  color: ${ ({ theme, color }) => color || theme.colors.border };
`

// IMPORTANT
// If you want to add/remove icons please read this first
// https://www.reactnative.guide/12-svg-icons-using-react-native-vector-icons/12.1-creating-custom-iconset.html