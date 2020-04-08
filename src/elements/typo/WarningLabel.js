import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import CustomIcon from '../../utils/icon'
import { Text, View } from '../index'


const WarningLabel = ({ children, ...rest }) => (
  <Wrapper>
    <Icon name='warning' size={25} />
    <Element {...rest}>
      {children}
    </Element>
  </Wrapper>
)

WarningLabel.propTypes = {
  children: PropTypes.node
}

const Element = styled(Text) `
  flex: 1;
  flex-wrap: wrap;
  margin: 5px 0px;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 11px;
`

const Wrapper = styled(View) `
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`

const Icon = styled(CustomIcon) `
  margin-right: 15px;
  color: ${ ({ theme }) => theme.colors.primary }
`

export default WarningLabel