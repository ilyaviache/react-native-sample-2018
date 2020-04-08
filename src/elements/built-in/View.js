import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'


const View = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

View.propTypes = {
  children: PropTypes.node
}

const Element = styled.View `
`

export default View
