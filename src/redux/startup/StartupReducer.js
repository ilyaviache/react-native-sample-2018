import { handleActions, createAction } from 'redux-actions'
import Immutable from 'seamless-immutable'

// ---
// CONSTANTS
// ---
export const REHYDRATED = 'startup/REHYDRATED'

// ---
// ACTION CREATORS
// ---
export const rehydrated = createAction(REHYDRATED)
// ---
// INITIAL STATE
// ---
export const INITIAL_STATE = Immutable({
  rehydrated: false
})

// ---
// REDUCER
// ---
export default handleActions(
  {
    [REHYDRATED]: (state) =>
      Immutable.merge(state, { rehydrated: true })
  },
  INITIAL_STATE
)
