import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'


const ScrollView = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

ScrollView.propTypes = {
  children: PropTypes.node
}

const Element = styled.ScrollView `
`

export default ScrollView
