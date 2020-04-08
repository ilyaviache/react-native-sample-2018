import { StackNavigator } from 'react-navigation'
import { getHomeHeader } from '../utils/navigation'

import Home from '../screens/home/HomeScreen'

export default StackNavigator({
  Home: {
    screen: Home
  }
},
  {
    navigationOptions: (props) => (
      getHomeHeader(props)
    )
  })
