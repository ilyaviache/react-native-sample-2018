import { StackNavigator } from 'react-navigation'

import { getNavigationHeader } from '../utils/navigation'

import WalletPages from '../screens/wallet/pages/PagesScreenContainer'
import WalletHome from '../screens/wallet/home/HomeScreenContainer'
import WalletCreatePassword from '../screens/wallet/create/CreatePasswordScreenContainer'
import WalletResetPassword from '../screens/wallet/reset/ResetPasswordScreenContainer'
import WalletSeedWord from '../screens/wallet/create/SeedWordScreenContainer'
import WalletConfirmSeedWord from '../screens/wallet/create/ConfirmSeedWordScreenContainer'
import WalletImport from '../screens/wallet/import/ImportScreenContainer'

import WalletTradeHistory from '../screens/wallet/account/TradeHistoryScreenContainer'
import WalletAccountHome from '../screens/wallet/account/HomeScreenContainer'

export default StackNavigator({
  WalletPages: {
    screen: WalletPages
  },
  WalletHome: {
    screen: WalletHome
  },
  WalletResetPassword: {
    screen: WalletResetPassword
  },
  WalletCreatePassword: {
    screen: WalletCreatePassword
  },
  WalletSeedWord: {
    screen: WalletSeedWord
  },
  WalletConfirmSeedWord: {
    screen: WalletConfirmSeedWord
  },
  WalletImport: {
    screen: WalletImport
  },
  // ACCOUNT
  WalletAccountHome: {
    screen: WalletAccountHome
  },
  WalletTradeHistory: {
    screen: WalletTradeHistory
  },
},
  {
    initialRouteName: 'WalletPages',
    navigationOptions: (props) => (
      getNavigationHeader(props)
    )
  })
