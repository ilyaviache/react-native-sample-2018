import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { View } from '../index'

const ButtonContainer = ({ children, ...rest }) => (
  <Element {...rest}>
    {Array.isArray(children) ? children.map( (el, i) =>
      <Cell key={i}>{el}</Cell>
    ) : children}
  </Element>
)

ButtonContainer.propTypes = {
  children: PropTypes.node
}

const Element = styled(View) `
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  flex-direction: row;
`

const Cell = styled(View) `
  flex: 1;
  borderRightWidth: 1px;
  borderRightColor: #554225;

  &:last-of-type {
    border: 0;
  }
`

export default ButtonContainer
