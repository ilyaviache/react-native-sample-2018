import { handleActions, createAction } from 'redux-actions'
import Immutable from 'seamless-immutable'

// ----
// CONSTANTS
// ----

export const CHECK_PASSWORD = 'wallet/CHECK_PASSWORD'
export const SET_PASSWORD = 'wallet/SET_PASSWORD'
export const HASH_PASSWORD = 'wallet/HASH_PASSWORD'
export const LOGIN = 'wallet/LOGIN'
export const LOGOUT = 'wallet/LOGOUT'
export const GET_SEED = 'wallet/GET_SEED'
export const SET_SEED = 'wallet/SET_SEED'
export const GET_KEY = 'wallet/GET_KEY'
export const SET_KEY = 'wallet/SET_KEY'
export const RESET_PASSWORD = 'wallet/RESET_PASSWORD'
export const CLEAN_WALLET = 'wallet/CLEAN_WALLET'
export const PASSWORD_ERROR = 'wallet/PASWORD_ERROR'
export const CLEAN_ERROR = 'wallet/CLEAN_ERROR'
export const CHECK_PASSWORD_SET = 'wallet/CHECK_PASSWORD_SET'
export const SET_PASSWORD_SET = 'wallet/SET_PASSWORD_SET'

// ---
// ACTION CREATORS 
// ---

export const checkPassword = createAction(CHECK_PASSWORD)
export const setPassword = createAction(SET_PASSWORD)
export const hashPassword = createAction(HASH_PASSWORD)
export const getSeed = createAction(GET_SEED)
export const setSeed = createAction(SET_SEED)
export const getKey = createAction(GET_KEY)
export const setKey = createAction(SET_KEY)
export const resetPassword = createAction(RESET_PASSWORD)
export const cleanWallet = createAction(CLEAN_WALLET)
export const passwordError = createAction(PASSWORD_ERROR)
export const cleanError = createAction(CLEAN_ERROR)
export const setPasswordSet = createAction(SET_PASSWORD_SET)
export const checkPasswordSet = createAction(CHECK_PASSWORD_SET)

// ---
// INITIAL STATE 
// ---

const initialState = Immutable({
  loggedIn: false,
  passwordSet: false,
  password: '',
  key: '',
  seed: '',
  error: ''
})

// --- 
// REDUCER
// ---

export default handleActions(
  {
    [LOGIN]: (state) =>
      Immutable.merge(state, { loggedIn: true }),
    [LOGOUT]: (state) =>
      Immutable.merge(state, { loggedIn: false }),
    [SET_PASSWORD]: (state, { payload }) => (
      Immutable.merge(state,
        {
          password: payload,
          loggedIn: true,
          error: ''
        }
      )
    ),
    [SET_PASSWORD_SET]: (state, { payload }) => (
      Immutable.merge(state, {
        passwordSet: payload
      })
    ),
    [SET_SEED]: (state, { payload }) => (
      Immutable.merge(state, { seed: payload })
    ),
    [SET_KEY]: (state, { payload }) => (
      Immutable.merge(state, { key: payload })
    ),
    [CLEAN_ERROR]: (state) => (
      Immutable.merge(state, { error: '' })
    ), 
    [PASSWORD_ERROR]: (state, { payload }) => (
      Immutable.merge(state, { error: payload })
    ),
    [CLEAN_WALLET]: () => (
      initialState
    )
  },
  initialState
)