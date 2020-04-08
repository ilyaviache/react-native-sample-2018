import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { PropTypes } from 'prop-types'

import { Text } from '../index'


const RedLabel = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

RedLabel.propTypes = {
  children: PropTypes.node
}

const Element = styled(Text) `
  color: ${ prop('theme.colors.danger')};
  font-family: ${ prop('theme.typo.condensedFont') };
  font-size: 12px;
  text-align: center;
`

export default RedLabel