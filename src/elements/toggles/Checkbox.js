import React from 'react'
import { MKCheckbox } from 'react-native-material-kit'
import styled, { withTheme } from 'styled-components'
import { PropTypes } from 'prop-types'

import { View, Text } from '../index'

const Checkbox = ({ checked, onCheckedChange, theme, children, inset, ...rest }) => (
  <Wrapper>
    <Input
      checked={checked}
      fillColor={theme.colors.toggleFill}
      inset={inset}
      borderOnColor={theme.colors.inputBorder}
      borderOffColor={theme.colors.inputBorder}
      rippleColor={`rgba(250,166,50,.15)`}
      onCheckedChange={onCheckedChange}
      {...rest}
    />
    { children && <Label>{ children }</Label> }
  </Wrapper>
)

const Wrapper = styled(View) `
  flex-direction: row;
  align-items: center;
`

const Input = styled(MKCheckbox) `
  borderWidth: 1;
  background-color: ${ ({ theme }) => theme.colors.inputBackground };
`

const Label = styled(Text) `
  color: ${ ({ theme }) => theme.colors.font };
  font-weight: 400;
  font-size: 10px;
  margin-left: 6px;
`

Checkbox.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool,
  inset: PropTypes.number,
  onCheckedChange: PropTypes.func,
  theme: PropTypes.object
}

Checkbox.defaultProps = {
  checked: false,
  inset: 3
}

export default withTheme(Checkbox)