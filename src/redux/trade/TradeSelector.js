import React from 'react'
import { createSelector } from 'reselect'
import Immutable from 'seamless-immutable'
import { GreenLabel, RedLabel } from '../../elements'


const state = state => state
const mapCurrencies = state => state.currencies
const getFavorite = state => state.favorite
export const getActiveTab = state => state.activeTab
export const getSearchText = state => state.searchText


const filterSearchCurrency = (currency, searchText) => {
  let { shortcut, title } = currency
  shortcut = shortcut.toLowerCase()
  title = title.toLowerCase()
  searchText = searchText.toLowerCase()
  if (searchText.length === 0 || (shortcut.indexOf(searchText) >= 0 || title.indexOf(searchText) >= 0)) {
    return true
  }
  return false
}

const prepateCurrency = (key, currencies, favorite) => {
  let currency = Immutable(currencies[key])
  currency = currency.setIn(['key'], currency.shortcut)
  return currency.setIn(['favorite'], favorite)
}

const getActiveCurrencies = (currencies, favorite, activeTab, searchText) => {
  switch (activeTab) {
  case 'fav':
    return Object.keys(favorite).map(key => prepateCurrency(key, currencies, true))
      .filter((currency) => filterSearchCurrency(currency, searchText))
  default:
    return Object.keys(currencies).map(key => prepateCurrency(key, currencies, !!favorite[key]))
      .filter((currency) => filterSearchCurrency(currency, searchText))
  }
}

export const currenciesData = createSelector(
  mapCurrencies,
  getFavorite,
  getActiveTab,
  getSearchText,
  (currencies, favorite, activeTab, getSearchText) => (
    getActiveCurrencies(currencies, favorite, activeTab, getSearchText)
  )
)

export const getSelectedPair = createSelector(() => ({
  leftPair: 'ZRX',
  rightPair: 'WETH',
  favorite: false
}))

export const selectTradeOrders = createSelector(
  state,
  state => state.orders.map((row) => (
    row.map((cell) => {
      if (cell === 'Sell') {
        return <RedLabel>{cell}</RedLabel>
      } else if (cell === 'Buy') {
        return <GreenLabel>{cell}</GreenLabel>
      }
      return cell
    })
  ))
)