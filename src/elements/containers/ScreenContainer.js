import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { View } from '../index'

const ScreenContainer = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

ScreenContainer.propTypes = {
  children: PropTypes.node
}

const Element = styled(View) `
  position: relative;
  flex: 1;
  display: flex;
  background-color: ${ ({ theme }) => theme.colors.background };
`

export default ScreenContainer
