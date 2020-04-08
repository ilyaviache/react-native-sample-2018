import React, { PureComponent } from 'react'
import { MKTextField } from 'react-native-material-kit'
import { PropTypes } from 'prop-types'
import { withTheme } from 'styled-components'

class BaseInput extends PureComponent {

  constructor (props) {
    super(props)

    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleBlur() {
    const { name, onBlur } = this.props
    if (onBlur) {
      onBlur(name, true)
    }
  }

  handleTextChange(value) {
    this.props.onChange(this.props.name, value)
  }

  render() {
    const {
      placeholder,
      textInputStyle,
      tintColor,
      highlightColor,
      underlineSize,
      selectionColor,
      theme,
      ...rest } = this.props // eslint-disable-line no-unused-vars
    return (
      <MKTextField
        {...rest}
        tintColor={tintColor}
        highlightColor={highlightColor}
        underlineSize={underlineSize}
        textInputStyle={textInputStyle}
        placeholder={placeholder}
        onTextChange={this.handleTextChange}
        onBlur={this.handleBlur}
        selectionColor={selectionColor || theme.colors.primary}
      />
    )
  }
}

BaseInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  textInputStyle: PropTypes.object,
  tintColor: PropTypes.string,
  keyboardType: PropTypes.string,
  highlightColor: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  underlineSize: PropTypes.number,
  selectionColor: PropTypes.string,
  theme: PropTypes.object
}

BaseInput.defaultProps = {
  underlineSize: 1
}

export default withTheme(BaseInput)
