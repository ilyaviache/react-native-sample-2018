import { DrawerNavigator, StackNavigator } from 'react-navigation'

// import MainNavigator from './MainNavigator'
import TradeNavigator from './TradeNavigator'
import WalletNavigator from './WalletNavigator'
import SettingsNavigator from './SettingsNavigator'
import ContactNavigator from './ContactNavigator'

import PasswordScreen from '../screens/password/PasswordScreenContainer'
import WalletResetPassword from '../screens/wallet/reset/ResetPasswordScreenContainer'

import DrawerContainer from '../modules/navigation/menu/containers/Drawer'

export const DrawerStack = DrawerNavigator({
  Trade: { screen: TradeNavigator },
  Wallet: { screen: WalletNavigator },
  Settings: { screen: SettingsNavigator },
  Contact: { screen: ContactNavigator },
  // MainNavigator: { screen: MainNavigator }
},
  {
    initialRouteName: 'Wallet',
    drawerPosition: 'right',
    contentComponent: DrawerContainer,
    headerMode: 'none'
  }
)

export const PasswordNavigator = StackNavigator(
  {
    Home: { screen: PasswordScreen },
    PasswordReset: { screen: WalletResetPassword }
  },
  {
    headerMode: 'none'
  }
)

export default StackNavigator(
  {
    Home: { screen: DrawerStack }
  },
  {
    headerMode: 'none'
  }
)

