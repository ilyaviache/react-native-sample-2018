import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'

import { currenciesData, getCurrencies } from '../../../redux/trade'

import WalletAccountHome from './HomeScreen'

const mapStateToProps = (state) => ({
  currencies: currenciesData(state.trade),
})

const mapDispatchToProps = {
  getCurrencies
}

export default withNavigation(
  withTheme(connect(mapStateToProps, mapDispatchToProps)(WalletAccountHome))
)
