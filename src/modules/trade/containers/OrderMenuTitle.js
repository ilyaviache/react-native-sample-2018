import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import OrderMenuTitle from '../components/OrderMenuTitle'
import { getSelectedPair } from '../../../redux/trade'

const mapStateToProps = () => ({
  selectedPair: getSelectedPair()
})

export default withNavigation(
  connect(mapStateToProps)(OrderMenuTitle)
)
