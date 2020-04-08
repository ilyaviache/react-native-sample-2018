import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../../../utils/icon'

import { View } from '../../../elements'
import { SectionHeader } from '../../../elements'
import { Textarea } from '../../../elements'

class SeedWordInput extends PureComponent {
  render() {
    const { header, onChange, onBlur, seed_word, disabled } = this.props
    return (
      <Wrapper>
        <Icon name='password-with-asterics' size={18} />
        <WalletHeader>{header}</WalletHeader>
        <Seedarea 
          onChange={onChange} 
          onBlur={onBlur} 
          name="seed_word" 
          value={seed_word} 
          editable={!disabled}
        />
      </Wrapper>
    )
  }
}

SeedWordInput.propTypes = {
  seed_word: PropTypes.string,
  header: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool
}

SeedWordInput.defaultProps = {
  seed_word: ''
}

const Wrapper = styled(View) `

`

const WalletHeader = styled(SectionHeader) `
  color: ${ ({ theme }) => theme.colors.primary}
`

const Seedarea = styled(Textarea) `
  margin: 20px 0px;
  padding-top: 22px;
`

export default SeedWordInput
