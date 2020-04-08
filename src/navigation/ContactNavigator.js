import { StackNavigator } from 'react-navigation'
import { getNavigationHeader } from '../utils/navigation'

import Contact from '../screens/contact/ContactScreenContainer'

export default StackNavigator({
  Contact: {
    screen: Contact
  }
},
  {
    navigationOptions: (props) => (
      getNavigationHeader(props)
    )
  })
