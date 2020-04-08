import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Immutable from 'seamless-immutable'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ViewContainer, FormContainer, SubmitContainer } from '../../../elements'
import { SuccessButton } from '../../../elements'
import { WarningLabel } from '../../../elements'

import SeedWordInput from '../../../modules/wallet/components/SeedWordInput'

class WalletSeedWord extends PureComponent {

  constructor(params) {
    super(params)

    this.state = Immutable({
      seed_word: '',
      disabled: false
    })

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(name, value) {
    this.setState(Immutable.merge(this.state, { [name]: value }))
    if (
      value === this.props.seed_word
    ) {
      this.setState(Immutable.merge(this.state, { disabled: false }))
    }
  }

  handleSubmit() {
    // TODO: add error handling here
    const { navigation } = this.props
    this.props.getKey(
      this.state.seed_word
    )
    navigation.navigate('WalletCreatePassword')
  }

  render() {
    const { seed_word } = this.state
    return (
      <ScreenContainer>
        <ViewContainer>
          <WalletFormContainer>
            <SeedWordInput seed_word={seed_word} onChange={this.handleChange} header={t('wallet.confirm_seed.header')} />
            <WarningLabel>{t('wallet.confirm_seed.label')}</WarningLabel>
          </WalletFormContainer>
          <WalletSubmitContainer>
            <SuccessButton
              rounded
              onPress={this.handleSubmit}
              enabled={!this.state.disabled}
            >{t('inputs.confirm')}</SuccessButton>
          </WalletSubmitContainer>
        </ViewContainer>
      </ScreenContainer>
    )
  }
}

WalletSeedWord.propTypes = {
  ...screenDefaultPropTypes,
  seed: PropTypes.string,
  getSeed: PropTypes.func
}

const WalletFormContainer = styled(FormContainer)`
  padding: 32px 30px 0px 30px;
`

const WalletSubmitContainer = styled(SubmitContainer)`
  padding: 0px 20px
`

export default WalletSeedWord
