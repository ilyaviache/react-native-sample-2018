import React, { PureComponent } from 'react'
import { TextInput } from 'react-native'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'

class SimpleTextfield extends PureComponent {

  constructor(props) {
    super(props)

    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(value) {
    const { onChange } = this.props
    if (onChange) {
      onChange({
        value,
        name: this.props.name
      })
    }
  }

  render() {
    const { name, value, ...rest } = this.props
    return (
      <Input
        {...rest}
        name={name}
        value={value}
        onChange={this.handleTextChange}
      />
    )
  }

}

SimpleTextfield.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

const Input = styled(TextInput) `
  border: 1px solid ${prop('theme.colors.inputLightBorder')}
  padding: 2px 5px;
  flex: 1;
  max-width: 120px;
  font-size: 11px;
`

export default SimpleTextfield