import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { View } from '../../../elements'
import { ScreenContainer, StickyButtonContainer } from '../../../elements'
import { DangerButton, SuccessButton } from '../../../elements'

import OrderMenuTitle from '../../../modules/trade/containers/OrderMenuTitle'
import OrderCoinDescription from '../../../modules/trade/components/OrderCoinDescription'
import TradingView from '../../../modules/trade/components/TradingView'
import OrderTabs from '../../../modules/trade/components/OrderTabs'
import OrderTabsContainer from '../../../modules/trade/components/OrderTabContainer'

class TradeOrder extends PureComponent {

  static navigationOptions = { // eslint-disable-line no-undef
    headerTitle: <OrderMenuTitle />
  }

  constructor(props) {
    super(props)
    this.state = {
      coinDescription: {
        price: 0.1112323,
        trend: true,
        percentageChange: 0.18,
        vol: 64.23232,
        high: 0.01212,
        low: 0.011111,
        fiatPrice: 10.22,
        contract: '0x932432432432432432432432432',
        currency: '$',
        logoUrl: 'https://s3-ap-southeast-1.amazonaws.com/tokenjar/zrx.png'
      },
      tradingViewUrl: '',
      orderTabs: [
        {
          label: t('trade.orderTabs.book'),
          value: 'fav'
        },
        {
          label: t('trade.orderTabs.history'),
          value: 'history'
        },
        {
          label: t('trade.orderTabs.orders'),
          value: 'orders'
        }
      ],
      activeOrderTab: 'history'
    }

    this.handleTabPress = this.handleTabPress.bind(this)
    this.handleBuyPress = this.handleBuyPress.bind(this)
    this.handleSellPress = this.handleSellPress.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { themeValue } = nextProps
    this.tradingViewUrl = this.getTradingViewUrl(themeValue)
  }

  getTradingViewUrl(themeValue) {
    if (themeValue === 'light') {
      return 'https://s3-ap-southeast-1.amazonaws.com/tokenjar/mobile_white.html'
    }
    return 'https://s3-ap-southeast-1.amazonaws.com/tokenjar/mobile_black.html'
  }

  handleTabPress(tab) {
    this.setState({
      activeOrderTab: tab
    })
  }

  handleBuyPress() {
    const { navigation } = this.props
    navigation.navigate('TradeBuy')
  }

  handleSellPress() {
    const { navigation } = this.props
    navigation.navigate('TradeSell')
  }

  render() {
    return (
      <ScreenContainer>
        <StickyScrollContainer>
          <OrderCoinDescription {...this.state.coinDescription} />
          <TradingView url={this.tradingViewUrl} />
          <OrderTabs
            tabs={this.state.orderTabs}
            active={this.state.activeOrderTab}
            onTabPress={this.handleTabPress}
          />
          <OrderTabsContainer activeTab={this.state.activeOrderTab} />
        </StickyScrollContainer>
        <StickyButtonContainer>
          <SuccessButton onPress={this.handleBuyPress}>{t('trade.buy')}</SuccessButton>
          <DangerButton onPress={this.handleSellPress}>{t('trade.sell')}</DangerButton>
        </StickyButtonContainer>
      </ScreenContainer>
    )
  }
}


TradeOrder.propTypes = {
  ...screenDefaultPropTypes,
  themeValue: PropTypes.string
}

const StickyScrollContainer = styled(View) `
  flex: 1;
  padding-bottom: 40px;
`

export default TradeOrder
