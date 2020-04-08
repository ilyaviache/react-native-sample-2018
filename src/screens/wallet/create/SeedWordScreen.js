import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Immutable from 'seamless-immutable'
import PropTypes from 'prop-types'

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
      seed_word: ''
    })

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    this.props.getSeed()
  }

  handleChange(name, value) {
    this.setState(Immutable.merge(this.state, { [name]: value }))
  }

  handleSubmit() {
    this.props.navigation.navigate('WalletConfirmSeedWord')
  }

  render() {
    const { seed } = this.props
    return (
      <ScreenContainer>
        <ViewContainer>
          <WalletFormContainer>
            <SeedWordInput 
              seed_word={seed}   
              onChange={this.handleChange} 
              header={t('wallet.seed.header')} 
              disabled
            />
            <WarningLabel>{t('wallet.seed.label')}</WarningLabel>
          </WalletFormContainer>
          <WalletSubmitContainer>
            <SuccessButton rounded onPress={this.handleSubmit}>{t('inputs.confirm')}</SuccessButton>
          </WalletSubmitContainer>
        </ViewContainer>
      </ScreenContainer>
    )
  }
}

WalletSeedWord.propTypes = {
  ...screenDefaultPropTypes,
  getSeed: PropTypes.func,
  seed: PropTypes.string
}

const WalletFormContainer = styled(FormContainer)`
  padding: 32px 30px 0px 30px;
`

const WalletSubmitContainer = styled(SubmitContainer)`
  padding: 0px 20px
`

export default WalletSeedWord
