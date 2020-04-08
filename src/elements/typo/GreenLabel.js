import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { PropTypes } from 'prop-types'

import { Text } from '../index'


const GreenLabel = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

GreenLabel.propTypes = {
  children: PropTypes.node
}

const Element = styled(Text) `
  color: ${ prop('theme.colors.success') };
  font-family: ${ prop('theme.typo.condensedFont') };
  font-size: 12px;
  text-align: center;
`

export default GreenLabel