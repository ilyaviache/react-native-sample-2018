import { GET_CURRENCIES, setCurrencies, setTradeOrders, GET_TRADE_ORDERS } from './index'
import { takeEvery, put } from 'redux-saga/effects'

const MockedCurrenciesData = [
  {
    shortcut: 'XRP',
    title: 'ZRX',
    volume: 849.12,
    price: 0.0000017823,
    equalPrice: 10,
    currency: '$',
    upraising: true,
    trendValue: 0.23
  },
  {
    shortcut: 'ZRP',
    title: 'OX',
    volume: 849.12,
    price: 0.0000017823,
    equalPrice: 10,
    currency: '$',
    upraising: false,
    trendValue: 0.23,
  },
  {
    shortcut: 'STR',
    title: 'OX',
    volume: 849.12,
    price: 0.0000017823,
    equalPrice: 10,
    currency: '$',
    upraising: false,
    trendValue: 0.23,
  }
]

const MockedTradeOrdersData = [
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00'],
  ['22/01/04 14:11:38', 'MRX/WETH', 'Sell', '0.01617607', '0.01617607', '0.00']
]

const getCurrenciesMap = (ar) => {
  const currenciesMap = {}
  ar.forEach((cur) => {
    currenciesMap[cur.shortcut] = cur
  })
  return currenciesMap
}

const getCurrenceies = function* () {
  yield put(
    setCurrencies(
      getCurrenciesMap(MockedCurrenciesData)
    )
  )
}

const getTradeOrders = function* () {
  yield put(
    setTradeOrders(MockedTradeOrdersData)
  )
}

export default function* () {
  yield takeEvery(GET_CURRENCIES, getCurrenceies)
  yield takeEvery(GET_TRADE_ORDERS, getTradeOrders)
}
