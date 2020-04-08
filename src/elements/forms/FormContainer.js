import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { View } from '../index'

const FormContainer = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

FormContainer.propTypes = {
  children: PropTypes.node
}

const Element = styled(View) `
  padding: 0px 12px;
`

export default FormContainer