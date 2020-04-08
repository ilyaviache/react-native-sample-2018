import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import CustomIcon from '../../utils/icon'
import { Text, View } from '../index'


const AlertLabel = ({ children, ...rest }) => (
  <Wrapper>
    <Icon name='info' size={25} />
    <Element {...rest}>
      {children}
    </Element>
  </Wrapper>
)

AlertLabel.propTypes = {
  children: PropTypes.node
}

const Element = styled(Text) `
  margin: 5px 0px;
  font-family: Lato;
  font-weight: 400;
  font-size: 12px;
`

const Wrapper = styled(View)`
  flex-direction: row;
`

const Icon = styled(CustomIcon) `
  margin-top: 8px;
  margin-right: 6px;
`

export default AlertLabel