import React from 'react'
import styled, { withTheme } from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import defaultsDeep from 'lodash/defaultsDeep'
import { PropTypes } from 'prop-types'

import { View, Text } from '../index'
import { Textfield } from '../index'

const defaultTextStyle = (theme, size) => ({
  paddingRight: 50,
  fontFamily: theme.typo.condensedFont,
  color: theme.colors.primary,
  fontSize: size === 'small' ? 12 : 14
})

const UnitsTextfield = ({ units, size, theme, textInputStyle, ...textFieldParams }) => (
  <Wrapper>
    <Textfield
      textInputStyle={defaultsDeep(textInputStyle, defaultTextStyle(theme, size))}
      placeholderTextColor={theme.colors.inputFont}
      size={size}
      {...textFieldParams}
    />
    <Units size={size}>{units}</Units>
  </Wrapper>
)

UnitsTextfield.propTypes = {
  units: PropTypes.string,
  theme: PropTypes.object,
  textInputStyle: PropTypes.object,
  size: PropTypes.oneOf(['small', 'default'])
}

UnitsTextfield.defaultProps = {
  size: 'default'
}

const Wrapper = styled(View) `

`

const Units = styled(Text) `
  font-family: ${prop('theme.typo.condensedFont')};
  position: absolute;
  top: ${ifProp({ size: 'small' }, '0px', '8px')};
  right: 0px;
  color: ${({ theme }) => theme.colors.primary };
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.4px;
`

export default withTheme(UnitsTextfield)