import React from 'react'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'
import PropTypes from 'prop-types'

import { View } from '../index'

const BottomTranslateContainer = ({ children, active, ...rest }) => (
  <Element {...rest} active={active}>
    {children}
  </Element>
)

BottomTranslateContainer.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool
}

BottomTranslateContainer.propTypes = {
  active: false
}

const Element = styled(View) `
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(${ifProp('active', '0px', '300px')});
`

export default BottomTranslateContainer