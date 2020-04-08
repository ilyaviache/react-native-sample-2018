import React, { PureComponent } from 'react'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'
import errorService from '../../../services/ErrorService'

import { ScreenContainer, ScrollContainer } from '../../../elements'
import { ListMenu, ListMenuItem } from '../../../elements'

class TradePages extends PureComponent {

  constructor(params) {
    super(params)

    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleErrorClick = this.handleErrorClick.bind(this)
  }

  handleMenuClick(name) {
    this.props.navigation.navigate(name)
  }

  handleErrorClick() {
    console.log(errorService, 'errorService')
    errorService.notify(new Error('Test'))
  }

  render() {
    return (
      <ScreenContainer>
        <ScrollContainer>
          <ListMenu>
          <ListMenuItem name='TradeHome' text={t('route.TradeHome')} onPress={this.handleMenuClick} />
            <ListMenuItem name='TradeOrder' text={t('route.TradeOrder')} onPress={this.handleMenuClick} />
            <ListMenuItem name='TradeBuy' text={t('route.TradeBuy')} onPress={this.handleMenuClick} />
            <ListMenuItem name='TradeSell' text={t('route.TradeSell')} onPress={this.handleMenuClick} />
            <ListMenuItem text='Error' onPress={this.handleErrorClick} />
          </ListMenu>
        </ScrollContainer>
      </ScreenContainer>
    )
  }
}

TradePages.propTypes = {
  ...screenDefaultPropTypes
}

export default TradePages
