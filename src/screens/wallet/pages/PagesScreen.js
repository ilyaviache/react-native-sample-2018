import React, { PureComponent } from 'react'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ScrollContainer } from '../../../elements'
import { ListMenu, ListMenuItem } from '../../../elements'

class WalletPages extends PureComponent {

  constructor(params) {
    super(params)

    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleMenuClick(name) {
    this.props.navigation.navigate(name)
  }

  render() {
    return (
      <ScreenContainer>
        <ScrollContainer>
          <ListMenu>
            <ListMenuItem name='WalletHome' text={t('route.WalletHome')} onPress={this.handleMenuClick} />
            <ListMenuItem name='WalletCreatePassword' text={t('route.WalletCreatePassword')} onPress={this.handleMenuClick} />
            <ListMenuItem name='WalletResetPassword' text={t('route.WalletResetPassword')} onPress={this.handleMenuClick} />
            <ListMenuItem name='WalletSeedWord' text={t('route.WalletSeedWord')} onPress={this.handleMenuClick} />
            <ListMenuItem name='WalletConfirmSeedWord' text={t('route.WalletConfirmSeedWord')} onPress={this.handleMenuClick} />
            <ListMenuItem name='WalletImport' text={t('route.WalletImport')} onPress={this.handleMenuClick} />
            <ListMenuItem name='WalletTradeHistory' text={t('route.WalletTradeHistory')} onPress={this.handleMenuClick} />
            <ListMenuItem name='WalletAccountHome' text={t('route.WalletAccountHome')} onPress={this.handleMenuClick} />
          </ListMenu>
        </ScrollContainer>
      </ScreenContainer>
    )
  }
}

WalletPages.propTypes = {
  ...screenDefaultPropTypes
}

export default WalletPages
