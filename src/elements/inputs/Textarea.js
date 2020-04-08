import React, { PureComponent } from 'react'
import { TextInput } from 'react-native'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { prop, ifProp } from 'styled-tools'

class Textarea extends PureComponent {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange(value) {
    const { onChange, name } = this.props
    if(onChange){
      onChange(name, value)
    }
  }

  handleBlur() {
    const { name, onBlur } = this.props
    if (onBlur) {
      onBlur(name, true)
    }
  }

  render() {
    const { numberOfLines, name, value, error, placeholder, height, ...rest } = this.props
    return(
      <Input
        {...rest}
        name={name}
        value={value}
        placeholder={placeholder}
        onChangeText={this.handleChange}
        onBlur={this.handleBlur}
        multiline
        numberOfLines={numberOfLines}
        error={error}
        height={height}
        placeholderTextColor={'#c1c1c1'}
      />
    )
  }

}

Textarea.propTypes = {
  error: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  numberOfLines: PropTypes.number,
  height: PropTypes.number
}

Textarea.defaultProps = {
  height: 120,
  numberOfLines: 10,
  error: false
}

const Input = styled(TextInput) `
  borderWidth: 1px;
  borderColor: ${ifProp('error', prop('theme.colors.danger'), prop('theme.colors.backgroundMenu'))}
  padding: 8px 10px;
  background: ${ ({ theme }) => theme.colors.backgroundMenu}
  min-height: ${prop('height')};
  color: #fcfcfc;
  font-style: italic;
  font-size: 14px;
`

export default Textarea