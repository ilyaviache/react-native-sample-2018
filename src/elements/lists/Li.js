import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { ifProp, prop } from 'styled-tools'

import { View } from '../index'

const Li = ({ children, border, ...rest }) => (
  <Element border={border} {...rest}>
    {children}
  </Element>
)

Li.propTypes = {
  children: PropTypes.node,
  border: PropTypes.bool
}

Li.defaultProps = {
  border: true
}

const Element = styled(View) `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 6px 0;
  borderBottomWidth: ${ifProp('border', '1px', '0px')};
  borderBottomColor: ${prop('theme.colors.listBorder')};
`

export default Li