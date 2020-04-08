import React, { PureComponent } from 'react'
import { TouchableOpacity, Clipboard, Text } from 'react-native'

import styled, { withTheme } from 'styled-components'
import { prop } from 'styled-tools'
import PropTypes from 'prop-types'

import Icon from '../../utils/icon'

class CopyButton extends PureComponent {
  constructor(props) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
  }
  handlePress() {
    Clipboard.setString(this.props.value)
  }
  render() {
    const { children, ...rest } = this.props
    return (
      <Button onPress={this.handlePress} {...rest}>
        <Label>{children} <Icon name={'copy'} size={12} /></Label>
      </Button>
    )
  }
}

CopyButton.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string,
  theme: PropTypes.object
}

const Button = styled(TouchableOpacity)`
  background-color: ${prop('theme.colors.walletBorder')};
  padding: 2px 3px;
  border-radius: 2px;
`

const Label = styled(Text)`
  color: ${prop('theme.colors.listBackground')};
  font-size: 10px;
`

export default withTheme(CopyButton)