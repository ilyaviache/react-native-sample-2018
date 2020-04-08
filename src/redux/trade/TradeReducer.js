import { handleActions, createAction } from 'redux-actions'
import Immutable from 'seamless-immutable'

// --- 
// CONSTANTS
// ---

export const GET_CURRENCIES = 'trade/GET_CURRENCIES'
export const SET_CURRENCIES = 'trade/SET_CURRENCIES'
export const ADD_FAVORITE = 'trade/ADD_FAVORITE'
export const REMOVE_FAVORITE = 'trade/REMOVE_FAVORITE'
export const SET_ACTIVE_TAB = 'trade/SET_ACTIVE_TAB'
export const SET_ACTIVE_ORDER = 'trade/SET_ACTIVE_ORDER'
export const SET_SEARCH_TEXT = 'trade/SET_SEARCH_TEXT'
export const GET_TRADE_ORDERS = 'trade/GET_TRADE_ORDERS'
export const SET_TRADE_ORDERS = 'trade/SET_TRADE_ORDERS'

// ---
// ACTION CREATORS
// ---

export const getCurrencies = createAction(GET_CURRENCIES)
export const setCurrencies = createAction(SET_CURRENCIES)
export const addFavorite = createAction(ADD_FAVORITE)
export const removeFavorite = createAction(REMOVE_FAVORITE)
export const setActiveTab = createAction(SET_ACTIVE_TAB)
export const setActiveOrder = createAction(SET_ACTIVE_ORDER)
export const setSearchText = createAction(SET_SEARCH_TEXT)
export const getTradeOrders = createAction(GET_TRADE_ORDERS)
export const setTradeOrders = createAction(SET_TRADE_ORDERS)

// ---
// INITIAL STATE
// ---

const initialState = Immutable({
  activeTab: 'fav',
  searchText: '',
  activeOrder: null,
  currencies: {},
  favorite: {},
  orders: []
})

// ---
// REDUCER
// ---

export default handleActions(
  {
    [SET_SEARCH_TEXT]: (state, action) =>
      Immutable.merge(state, { searchText: action.payload }),
    [SET_ACTIVE_TAB]: (state, action) =>
      Immutable.merge(state, { activeTab: action.payload }),
    [SET_ACTIVE_ORDER]: (state, action) =>
      Immutable.merge(state, { activeOrder: action.payload }),
    [SET_CURRENCIES]: (state, action) =>
      Immutable.merge(state, { currencies: action.payload }),
    [SET_TRADE_ORDERS]: (state, action) =>
      Immutable.merge(state, { orders: action.payload }),
    [ADD_FAVORITE]: (state, action) =>
      state.setIn(['favorite', action.payload], true),
    [REMOVE_FAVORITE]: (state, action) => {
      const favorite = { ...state.favorite }
      delete favorite[action.payload]
      return Immutable.merge(state, { favorite })
    }
  },
  initialState
)
