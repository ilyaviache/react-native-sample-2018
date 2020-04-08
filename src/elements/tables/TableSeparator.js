import React from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { PropTypes } from 'prop-types'

import { View } from '../index'

const TableSeparator = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

TableSeparator.propTypes = {
  children: PropTypes.node
}

const Element = styled(View) `
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 11px 0px;
  background-color: ${prop('theme.colors.tableSeparator')};
`

export default TableSeparator