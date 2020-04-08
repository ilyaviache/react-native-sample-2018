import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { prop } from 'styled-tools'

class RobotoTextComponent extends PureComponent {
  render () {
    return (
      <RobotoText>{ this.props.children }</RobotoText>
    )
  }
}

export const RobotoText = styled.Text`
  font-family: ${ prop('theme.typo.condensedFont') };
  font-weight: 400;
`

RobotoTextComponent.propTypes = {
  children: PropTypes.node
}

export default RobotoText
