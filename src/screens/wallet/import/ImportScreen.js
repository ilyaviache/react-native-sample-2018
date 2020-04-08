import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Immutable from 'seamless-immutable'

import { t } from '../../../locales/i18n'

import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ViewContainer, FormContainer, SubmitContainer } from '../../../elements'
import { SubmitButton } from '../../../elements'

import SeedWordInput from '../../../modules/wallet/components/SeedWordInput'

class WalletImport extends PureComponent {

  constructor(params) {
    super(params)

    this.state = Immutable({
      seed_word: ''
    })

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(name, value) {
    this.setState(Immutable.merge(this.state, { [name]: value }))
  }

  render() {
    const { seed_word }  = this.state
    return (
      <ScreenContainer>
        <ViewContainer>
          <WalletFormContainer>
            <SeedWordInput seed_word={seed_word} onChange={this.handleChange} header={t('wallet.import.header')} />
          </WalletFormContainer>
          <WalletSubmitContainer>
            <SubmitButton rounded onPress={this.handleSubmit}>{t('wallet.import.button')}</SubmitButton>
          </WalletSubmitContainer>
        </ViewContainer>
      </ScreenContainer>
    )
  }
}

WalletImport.propTypes = {
  ...screenDefaultPropTypes
}

const WalletFormContainer = styled(FormContainer) `
  padding: 22px 30px 0px 30px;
`

const WalletSubmitContainer = styled(SubmitContainer) `
  padding: 0px 20px
`

export default WalletImport
