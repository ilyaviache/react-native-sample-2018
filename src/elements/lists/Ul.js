import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { View } from '../index'

const Ul = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

Ul.propTypes = {
  children: PropTypes.node
}

const Element = styled(View) `
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`

export default Ul