import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { Text } from '../index'


const SectionHeader = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

SectionHeader.propTypes = {
  children: PropTypes.node
}

const Element = styled(Text) `
  margin: 0px 0px 16px 0px;
  font-family: Open Sans;
  font-weight: 400;
  font-size: 12px;
`

export default SectionHeader