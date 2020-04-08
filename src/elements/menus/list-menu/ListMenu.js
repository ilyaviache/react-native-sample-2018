import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import { View } from '../../index'

const ListMenu = ({ children, ...rest }) => (
  <Element {...rest}>
    {children}
  </Element>
)

ListMenu.propTypes = {
  children: PropTypes.node
}

const Element = styled(View) ``
         
export default ListMenu