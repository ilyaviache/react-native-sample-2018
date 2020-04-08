import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { View } from '../index'

const SubmitContainer = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

SubmitContainer.propTypes = {
  children: PropTypes.node
}

const Element = styled(View) `
  margin-top: 40px;
  height: 50px;
`

export default SubmitContainer