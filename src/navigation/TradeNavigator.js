import { StackNavigator } from 'react-navigation'
import { getNavigationHeader } from '../utils/navigation'

import TradePages from '../screens/trade/pages/PagesScreenContainer'
import TradeHome from '../screens/trade/home/HomeScreenContainer'
import TradeOrder from '../screens/trade/order/OrderScreenContainer'
import TradeBuy from '../screens/trade/order/BuyScreenContainer'
import TradeSell from '../screens/trade/order/SellScreenContainer'

export default StackNavigator({
  TradePages: {
    screen: TradePages
  },
  TradeHome: {
    screen: TradeHome
  },
  TradeOrder: {
    screen: TradeOrder
  },
  TradeBuy: {
    screen: TradeBuy
  },
  TradeSell: {
    screen: TradeSell
  },
},
  {
    navigationOptions: (props) => (
      getNavigationHeader(props)
    )
  })
