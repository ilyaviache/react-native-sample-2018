import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import PropTypes from 'prop-types'

import { t } from '../../../locales/i18n'
import CustomIcon from '../../../utils/icon'

import { View, Roboto } from '../../../elements'

class OrderCoinDescription extends PureComponent {
  render() {
    const { price, percentageChange, trend, vol, high, low, contract } = this.props
    return (
      <Container trend={trend} no-padding={'true'}>
        <Cell max-width='50%'>
          <Price>{price + ' '}
            <Percentage trend={trend}>
              ({percentageChange}%
              <Arrow name='arrow-up' size={12} trend={trend} />)
            </Percentage>
          </Price>
          <FiatPrice numberOfLines={1}>{t('trade.contract')}: {contract}</FiatPrice>
        </Cell>
        <Cell flex-direction={'row'} no-padding={!!true}>
        </Cell>
        <Cell margin-left='auto'>
          <View>
            <MarketLabel>{t('trade.vol')} {vol}</MarketLabel>
          </View>
          <View>
            <MarketLabel>{t('trade.high')} {high}</MarketLabel>
          </View>
          <View>
            <MarketLabel>{t('trade.low')} {low}</MarketLabel>
          </View>
        </Cell>
      </Container>
    )
  }
}

const Container = styled(View)`
  display: flex;
  borderColor: ${ifProp({ trend: true }, prop('theme.colors.success'), prop('theme.colors.danger'))}
  borderTopWidth: 1px;
  background-color: ${prop('theme.colors.simpleButtonBackground')};
  flex-direction: row;
  align-items: center;
  padding: 5px 0 5px 10px;
`

const Cell = styled(View)`
  margin-left: ${ifProp({ 'margin-left': 'auto' }, prop('margin-left'), 0)};
  align-items: ${ifProp({ center: 'true' }, 'center', 'flex-start')};
  padding: ${ifProp('no-padding', 0, '0 10px ')};
  display: flex;
  flex-direction: ${ifProp({ 'flex-direction': 'row' }, 'row', 'column')}
  width: ${ifProp('max-width', prop('max-width'),  'auto')};
`

const TrendText = styled(Roboto)`
  color: ${ifProp({ trend: true }, prop('theme.colors.success'), prop('theme.colors.danger'))}
`

const Price = styled(TrendText)`
  font-size: 15px;
  line-height: 16px;
  color: ${prop('theme.colors.accountHeaderColor')}
`

const FiatPrice = styled(Roboto)`
  font-size: 12px;
  color: ${prop('theme.colors.accountHeaderColor')}
`
const Arrow = styled(CustomIcon)`
  margin-right: 5px;
  ${ifProp('trend',
    css`
      color: ${prop('theme.colors.success')};
    `,
    css`
      color: ${prop('theme.colors.danger')};
      transform: rotate(180deg);
    `
  )}
`

const Percentage = styled(TrendText)`
  font-size: 14px;
  font-weight: bold;
`

const MarketLabel = styled(Roboto)`
  color: ${prop('theme.colors.tradeBrightTextColor')}
  font-size: 13px;
  line-height: 14px;
`


OrderCoinDescription.propTypes = {
  price: PropTypes.number,
  trend: PropTypes.bool,
  percentageChange: PropTypes.number,
  vol: PropTypes.number,
  high: PropTypes.number,
  low: PropTypes.number,
  contract: PropTypes.string
}

export default OrderCoinDescription
