import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'


const Image = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

Image.propTypes = {
  children: PropTypes.node
}

const Element = styled.Image`
`

export default Image
