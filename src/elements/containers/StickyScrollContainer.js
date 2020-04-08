import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { ScrollContainer } from '../index'

const StickyScrollContainer = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

StickyScrollContainer.propTypes = {
  children: PropTypes.node
}

const Element = styled(ScrollContainer) `
  padding-bottom: 40px;
`

export default StickyScrollContainer
