import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { View } from '../index'

const ViewContainer = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

ViewContainer.propTypes = {
  children: PropTypes.node
}

const Element = styled(View) `
  padding: 10px 15px;
`

export default ViewContainer