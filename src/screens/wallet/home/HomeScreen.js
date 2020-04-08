import React, { PureComponent } from 'react'
import Immutable from 'seamless-immutable'


import screenDefaultPropTypes from '../../../utils/screenPropTypes'
import { t } from '../../../locales/i18n'

import { Alert } from 'react-native'
import { ScreenContainer, StickyScrollContainer, StickyButtonContainer } from '../../../elements'
import { SubmitButton } from '../../../elements'

import WalletCard from '../../../modules/wallet/components/WalletCard'

class WalletHome extends PureComponent {

  constructor(params) {
    super(params)

    this.handleCardClick = this.handleCardClick.bind(this)
    this.handleCardFavClick = this.handleCardFavClick.bind(this)
    this.setPrimaryWallet = this.setPrimaryWallet.bind(this)

    this.state = Immutable({
      wallets: [
        { id: 1, name: 'Account 1', address: '0x9651fCa0...1B185e055E', primary: true },
        { id: 2, name: 'Account 2', address: '0x9651fCa0...1B185e055E', primary: false },
        { id: 3, name: 'Account 3', address: '0x9651fCa0...1B185e055E', primary: false }
      ]
    })
  }

  handleCardClick(id) {
    console.log('id', id)
    this.props.navigation.navigate('WalletAccountHome')
  }

  handleCardFavClick(id) {
    const wallet = this.state.wallets.filter(wallet => wallet.id === id)[0]
    Alert.alert(
      t('inputs.confirm'),
      `${t('wallet.areYouSure')} ${wallet.name} ${t('wallet.makePrivate')}`,
      [
        { text: t('inputs.cancel') },
        { text: t('inputs.ok'), onPress: () => { this.setPrimaryWallet(id) } }
      ],
      { cancelable: true }
    )
  }

  setPrimaryWallet(id) {
    const wallets = Immutable.flatMap(this.state.wallets, (wallet) => {
      wallet = Immutable.merge(wallet, { primary: false })
      if (wallet.id === id) {
        wallet = Immutable.merge(wallet, { primary: true })
      }
      return wallet
    })
    this.setState(Immutable.merge(this.state, { wallets }))
  }

  render() {
    const { wallets } = this.state
    return (
      <ScreenContainer>
        <StickyScrollContainer>
          {wallets.map((wallet, i) => (
            <WalletCard
              {...wallet}
              onCardPress={this.handleCardClick}
              onFavPress={this.handleCardFavClick}
              key={i} />
          ))}
        </StickyScrollContainer>
        <StickyButtonContainer>
          <SubmitButton>Import</SubmitButton>
          <SubmitButton>Create</SubmitButton>
        </StickyButtonContainer>
      </ScreenContainer>
    )
  }
}

WalletHome.propTypes = {
  ...screenDefaultPropTypes
}

export default WalletHome
