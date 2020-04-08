import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import Immutable from 'seamless-immutable'

import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { View, Text } from '../../../elements'
import { ScreenContainer, ScrollContainer } from '../../../elements'
import { DefaultTable, TableSeparator } from '../../../elements'
import { GreenLabel, RedLabel } from '../../../elements'

import OrderMenuTitle from '../../../modules/trade/containers/OrderMenuTitle'
import TradeHeader from '../../../modules/trade/components/TradeHeader'
import TransactionForm from '../../../modules/trade/components/TransactionForm'

class TradeBuy extends PureComponent {

  static navigationOptions = { // eslint-disable-line no-undef
    headerTitle: <OrderMenuTitle />
  }

  constructor(params) {
    super(params)

    this.handleTransactionSend = this.handleTransactionSend.bind(this)
    this.handleOrderPress = this.handleOrderPress.bind(this)

    this.state = new Immutable({
      formValues: {
        price: '0.0161760',
        amount: '0'
      }
    })
  }

  handleTransactionSend(params) {
    // TODO: handle buy submit here
    console.log('params', params, 'asdsadsadsadsd')
  }

  handleOrderPress(params) {
    this.setState(Immutable.merge(this.state, {
      formValues: {
        price: params[0],
        amount: params[1]
      }
    }))
  }

  render() {
    const { formValues } = this.state

    const tableHead = ['Price (WETH)', 'Amount (ZRX)']
    const buyData = [
      [<GreenLabel>0.01617607</GreenLabel>, '34157.216'],
      [<GreenLabel>0.01617607</GreenLabel>, '34157.216'],
      [<GreenLabel>0.01617607</GreenLabel>, '34157.216'],
      [<GreenLabel>0.01617607</GreenLabel>, '34157.216'],
      [<GreenLabel>0.01617607</GreenLabel>, '34157.216'],
      [<GreenLabel>0.01617607</GreenLabel>, '34157.216'],
      [<GreenLabel>0.01617607</GreenLabel>, '34157.216'],
      [<GreenLabel>0.01617607</GreenLabel>, '34157.216']
    ]
    const sellData = [
      [<RedLabel>0.01617607</RedLabel>, '34157.216'],
      [<RedLabel>0.01617607</RedLabel>, '34157.216'],
      [<RedLabel>0.01617607</RedLabel>, '34157.216'],
      [<RedLabel>0.01617607</RedLabel>, '34157.216'],
      [<RedLabel>0.01617607</RedLabel>, '34157.216'],
      [<RedLabel>0.01617607</RedLabel>, '34157.216'],
      [<RedLabel>0.01617607</RedLabel>, '34157.216']
    ]

    return (
      <ScreenContainer>
        <TradeHeader>
          <TradeHeaderText>{t('inputs.buy')}</TradeHeaderText>
        </TradeHeader>
        <Row>
          <Cell bordered>
            <ScrollContainer fullheight>
              <TransactionForm
                type='buy'
                onSend={this.handleTransactionSend}
                values={formValues}
              />
            </ScrollContainer>
          </Cell>
          <Cell>
            <ScrollContainer>
              <DefaultTable
                onRowPress={this.handleOrderPress}
                head={tableHead}
                data={sellData}
                flexArr={[1,1]}
              />
              <TableSeparator>
                <CurrentPrice>0.01617607</CurrentPrice>
              </TableSeparator>
              <DefaultTable
                onRowPress={this.handleOrderPress}
                data={buyData}
                flexArr={[1, 1]}
              />
            </ScrollContainer>
          </Cell>
        </Row>
      </ScreenContainer>
    )
  }
}

const TradeHeaderText = styled(Text) `
  font-size: 14px;
  font-weight: 400;
  color: ${prop('theme.colors.primary')};
`

const CurrentPrice = styled(Text) `
  font-family: ${prop('theme.typo.condensedFont')}
`

const Row = styled(View) `
  flex-direction: row;
  flex: 1;
`

const Cell = styled(View) `
  flex-direction: column;
  flex: 1;
  borderColor: ${prop('theme.colors.tradeSeparator')}
  borderRightWidth: ${ifProp('bordered', '1px', '0px')}
`

TradeBuy.propTypes = {
  ...screenDefaultPropTypes
}

export default TradeBuy
