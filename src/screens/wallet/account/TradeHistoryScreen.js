import React, { PureComponent } from 'react'

// import { t } from '../../../locales/i18n'
import screenDefaultPropTypes from '../../../utils/screenPropTypes'

import { ScreenContainer, ScrollContainer } from '../../../elements'
import { DefaultTable } from '../../../elements'
import { GreenLabel, RedLabel } from '../../../elements'

import AccountHeaderContainer from '../../../modules/wallet/containers/AccountHeaderContainer'

class WalletTradeHistory extends PureComponent {
  render() {
    const tableHead = ['Time', 'Pair', 'Type', 'Price (WETH)', 'Total (WETH)', 'Fee (ZRX)']
    const tableData = [
      ['22/01/04 14:11:38', 'MRX/WETH', <RedLabel>Sell</RedLabel>, '0.01617607', '0.01617607', '0.00'],
      ['22/01/04 14:11:38', 'MRX/WETH', <GreenLabel>Buy</GreenLabel>, '0.01617607', '0.01617607', '0.00'],
      ['22/01/04 14:11:38', 'MRX/WETH', <GreenLabel>Buy</GreenLabel>, '0.01617607', '0.01617607', '0.00']
    ]

    return (
      <ScreenContainer>
        <ScrollContainer>
          <AccountHeaderContainer />
          <ScrollContainer horizontal>
            <DefaultTable width={540} head={tableHead} data={tableData} flexArr={[3,2,2,2,2,2]} />
          </ScrollContainer>
        </ScrollContainer>
      </ScreenContainer>
    )
  }
}

WalletTradeHistory.propTypes = {
  ...screenDefaultPropTypes
}

export default WalletTradeHistory
