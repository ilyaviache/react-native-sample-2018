import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers'

const reduxRouterMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation,
)
const addListener = createReduxBoundAddListener('root')

export {
  reduxRouterMiddleware,
  addListener,
}
