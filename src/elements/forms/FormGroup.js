import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { prop } from 'styled-tools'

import { View } from '../index'

const FormGroup = ({ children, top, bottom, ...rest }) => (
  <Element top={top} bottom={bottom} {...rest}>
    {children}
  </Element>
)

FormGroup.propTypes = {
  children: PropTypes.node,
  top: PropTypes.number,
  bottom: PropTypes.number
}

const Element = styled(View) `
  margin-top: ${prop('top', '15px')};
  margin-bottom: ${prop('bottom', '0px')};
`

export default FormGroup