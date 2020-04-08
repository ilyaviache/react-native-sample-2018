import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import withPreventDebounce from '../../utils/HOC/withPreventDebounce'


const TouchableHighlight = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

TouchableHighlight.propTypes = {
  children: PropTypes.node
}

const Element = styled.TouchableHighlight``

export default withPreventDebounce(TouchableHighlight)