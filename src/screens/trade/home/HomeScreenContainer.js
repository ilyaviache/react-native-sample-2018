import { withNavigation } from 'react-navigation'
import { withTheme } from 'styled-components'
import { connect } from 'react-redux'

import {
  setActiveTab,
  setSearchText,
  setActiveOrder,
  getCurrencies,
  addFavorite,
  removeFavorite,
  currenciesData,
  getActiveTab,
  getSearchText } from '../../../redux/trade'

import TradeHome from './HomeScreen'

const mapStateToProps = (state) => ({
  currencies: currenciesData(state.trade),
  activeTab: getActiveTab(state.trade),
  search: getSearchText(state.trade)
})

const mapDispatchToProps = {
  getCurrencies,
  addFavorite,
  removeFavorite,
  setActiveTab,
  setActiveOrder,
  setSearchText
}

export default withNavigation(
  withTheme(
    connect(mapStateToProps, mapDispatchToProps)(TradeHome)
  )
)
