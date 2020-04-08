import React, { PureComponent } from 'react'
import { MKRadioButton } from 'react-native-material-kit'
import styled, { withTheme } from 'styled-components'
import { PropTypes } from 'prop-types'
import defaultsDeep from 'lodash/defaultsDeep'


import { View, Text } from '../index'

const defaultTextStyle = (theme) => ({
  color: theme.colors.font,
  fontWeight: '600',
  marginLeft: 4
})

class Radio extends PureComponent {

  constructor(params) {
    super(params)

    this.handleChange = this.handleChange.bind(this)
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress() {
    this.handleChange({ checked: true })
  }

  handleChange({ checked }) {
    const { onChecked, onChange, name, value } = this.props
    if (checked && onChecked){
      onChecked(name, value)
    }
    if (onChange) { onChange(name, value) }
  }

  render() {
    const { children, checked, group, theme, textStyle, className, ...rest } = this.props
    return (
      <Wrapper>
        <Input
          checked={checked}
          group={group}
          fillColor={theme.colors.toggleFill}
          borderOnColor={theme.colors.font}
          borderOffColor={theme.colors.font}
          rippleColor={`rgba(250,166,50,.15)`}
          onCheckedChange={this.handleChange}
          className={className}
          {...rest}
        />
        <Text
          style={defaultsDeep(textStyle, defaultTextStyle(theme))}
          onPress={this.handlePress}>{children}</Text>
      </Wrapper>
    )
  }
}

const Wrapper = styled(View) `
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`

const Input = styled(MKRadioButton) `
  borderWidth: 3;
`

Radio.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  onChecked: PropTypes.func,
  onChange: PropTypes.func,
  group: PropTypes.object,
  textStyle: PropTypes.object,
  className: PropTypes.string,
  theme: PropTypes.object
}

Radio.defaultProps = {
  checked: false
}

export default withTheme(Radio)