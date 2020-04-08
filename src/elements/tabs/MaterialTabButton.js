import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'
import PropTypes from 'prop-types'

import { Text } from '../index'

class MaterialTabButton extends PureComponent {

  constructor (props) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress () {
    this.props.buttonPress(this.props.value)
  }

  render() {
    const { children, ...rest } = this.props
    return (
      <ButtonContainer {...rest} onPress={this.handlePress}>
        <ButtonText {...rest}>
          {children}
        </ButtonText>
      </ButtonContainer>
    )
  }
}

MaterialTabButton.propTypes = {
  children: PropTypes.string,
  active: PropTypes.bool,
  buttonPress: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

const ButtonContainer = styled.TouchableOpacity `
  flex: 1;
  padding: 13px 0;
  borderBottomWidth: 4px;
  ${ifProp('active',
    css`
    background: ${ prop('theme.colors.tabActiveBackground')};
    borderColor: ${prop('theme.colors.success')}
  `,
    css`
    background: ${ prop('theme.colors.tabBackground')};
    borderColor: ${prop('theme.colors.tabBackground')}
  `)}
`
const ButtonText = styled(Text) `
  text-align: center;
  ${ifProp('active',
      css`
    color: ${ prop('theme.colors.tabActiveColor')};
  `,
      css`
    color: ${prop('theme.colors.headerContrastColor')}
  `)}
`

export default MaterialTabButton
