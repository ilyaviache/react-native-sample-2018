import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { Text } from '../index'


const A = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

A.propTypes = {
  children: PropTypes.node
}

const Element = styled(Text) `
  color: ${ ({ theme }) => theme.colors.primary }
  font-family: Open Sans;
  font-weight: 400;
`

export default A