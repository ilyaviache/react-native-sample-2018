import React from 'react'
import { PropTypes } from 'prop-types'
import defaultsDeep from 'lodash/defaultsDeep'
import { withTheme } from 'styled-components'

import BaseInput from './BaseInput'

const defaultTextStyle = (theme, size, error) => ({
  color: error ? theme.colors.danger : theme.colors.inputFont,
  fontFamily: 'Open Sans',
  fontSize: size === 'small' ? 10 : 14,
  paddingTop: size === 'small' ? 2 : 6,
  paddingBottom: size === 'small' ? 2 : 6,
  fontWeight: '300'
})

const Textfield = ({ name, value, error, placeholder, onChange, textInputStyle, type, size, theme, ...rest }) => (
  <BaseInput
    name={name}
    value={value}
    error={error}
    tintColor={theme.colors.inputBorder}
    placeholderTextColor={theme.colors.inputFont}
    highlightColor={theme.colors.primary}
    textInputStyle={defaultsDeep(textInputStyle, defaultTextStyle(theme, size, error))}
    placeholder={placeholder}
    onChange={onChange}
    keyboardType={type === 'number' ? 'numeric' : null}
    password={ type === 'password' }
    {...rest}
  />
)

Textfield.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  textInputStyle: PropTypes.object,
  onBlur: PropTypes.func,
  size: PropTypes.oneOf(['small', 'default']),
  theme: PropTypes.object
}

Textfield.defaultProps = {
  type: 'text',
  value: '',
  error: false,
  size: 'default'
}

export default withTheme(Textfield)