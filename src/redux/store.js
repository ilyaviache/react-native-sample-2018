import { AsyncStorage } from 'react-native'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
// import { composeWithDevTools } from 'remote-redux-devtools'


import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import { reduxRouterMiddleware } from '../utils/redux'

// __DEV__ && NativeModules.DevSettings.setIsDebuggingRemotely(true)

// const logger = createLogger({
//   collapsed: true,
//   duration: true,
// })

import rootSaga from './saga'

// ---
// REDUCERS
// ---

import settingsReducer from './settings'
import startupReducer from './startup'
import navigationReducer from './navigation'
import tradeReducer from './trade'
import walletReducer from './wallet'

export default function configureStore(onComplete) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [ sagaMiddleware, reduxRouterMiddleware ]

  // TODO: check to disable by default on prod
  const enhancer = compose(
    applyMiddleware(...middlewares),
    // autoRehydrate()
  )

  const rootReducer = combineReducers({
    settings: settingsReducer,
    startup: startupReducer,
    navigation: navigationReducer,
    trade: tradeReducer,
    wallet: walletReducer
  })

  // Persist store
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['settings', 'trade']
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, enhancer)
  const persistor = persistStore(store, {}, onComplete)

  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
