import { handleActions, createAction } from 'redux-actions'
import Immutable from 'seamless-immutable'
import I18n from 'react-native-i18n'

// ---
// CONSTANTS
// ---
export const CHANGE_LOCALE = 'settings/CHANGE_LOCALE'
export const CHANGE_THEME = 'settings/CHANGE_THEME'
export const CHANGE_CURRENCY = 'settings/CHANGE_CURRENCY'

// ---
// ACTION CREATORS
// ---
export const changeLocale = createAction(CHANGE_LOCALE)
export const changeTheme = createAction(CHANGE_THEME)
export const changeCurrency = createAction(CHANGE_CURRENCY)
// ---
// INITIAL STATE
// ---
export const INITIAL_STATE = Immutable({
  locale: I18n.locale.substr(0, 2) || 'en',
  currency: 'USD',
  theme: 'light'
})

// ---
// REDUCER
// ---
export default handleActions(
  {
    [CHANGE_LOCALE]: (state, action) =>
      Immutable.merge(state, { locale: action.payload }),
    [CHANGE_THEME]: (state, action) =>
      Immutable.merge(state, { theme: action.payload }),
    [CHANGE_CURRENCY]: (state, action) =>
      Immutable.merge(state, { currency: action.payload })
  },
  INITIAL_STATE
)
