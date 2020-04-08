import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { PropTypes } from 'prop-types'

import { Text } from '../index'


const ValidationError = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

ValidationError.propTypes = {
  children: PropTypes.node
}

const Element = styled(Text) `
  color: ${ prop('theme.colors.danger')};
  font-size: 12px;
`

export default ValidationError