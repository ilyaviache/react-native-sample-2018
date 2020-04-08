import { createAction } from 'redux-actions'
import AppNavigation, { DrawerStack } from '../../navigation/AppNavigator'
import { NavigationActions } from 'react-navigation'


// ---
// CONSTANTS
// ---
export const NAVIGATE = 'navigations/NAVIGATE'

// ---
// ACTION CREATORS
// ---

export const navigate = createAction(NAVIGATE, payload => DrawerStack.router.getActionForPathAndParams(payload))


// ---
// REDUCER
// ---

// TODO: check handleActions possible solution
const initialState = AppNavigation.router.getStateForAction(
  NavigationActions.navigate({
    routeName: 'settingsHome'
  })
)

export default (state = initialState, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}
