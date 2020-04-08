import React, { PureComponent } from 'react'
import { Keyboard } from 'react-native'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { prop } from 'styled-tools'

import CustomIcon from '../../utils/icon'

import { View } from '../index'
import BaseInput from './BaseInput'

const inputStyles = theme => ({
  fontFamily: theme.typo.primaryFont,
  fontStyle: 'italic',
  color: theme.colors.inputSearchPlaceholder,
  fontSize: 12,
  marginLeft: 10,
  marginRight: 10
})

class SearchInput extends PureComponent {

  constructor(props) {
    super(props)
    this.handleCancelPress = this.handleCancelPress.bind(this)
  }

  handleCancelPress() {
    Keyboard.dismiss()
    this.props.onChange(this.props.name, '')
  }

  render() {
    const { theme, value, ...props } = this.props
    return (
      <Wrapper>
        <SearchIcon
          name={'search'}
          size={14}
        />
        <Input
          placeholderTextColor={theme.colors.inputSearchPlaceholder}
          underlineSize={0}
          textInputStyle={inputStyles(theme)}
          value={value}
          selectionColor={theme.colors.success}
          {...props}
        />
        {value.length > 0 &&
          <CancelIcon
            name={'cancel'}
            size={14}
            onPress={this.handleCancelPress}
          />
        }
      </Wrapper>
    )
  }
}

SearchInput.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string
}

const Wrapper = styled(View) `
  display: flex;
  flex-direction: row;
  padding: 12px 10px;
  align-items: center;
  justify-content: center;
  background: ${prop('theme.colors.inputSearchBackground')}
`

const SearchIcon = styled(CustomIcon) `
  color: ${prop('theme.colors.success')}
`

const CancelIcon = styled(CustomIcon) `
  color: ${prop('theme.colors.danger')}
`

const Input = styled(BaseInput) `
  flex: 1;
`

export default withTheme(SearchInput)
