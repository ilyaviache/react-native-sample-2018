import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

// import AppWithNavigationState from './navigation/AppNavigator'
import configureStore from './redux/store'
import AppWithRedux from './navigation/ReduxNavigation'
import { REHYDRATED } from './redux/startup'
import { checkPasswordSet } from './redux/wallet'

export default function bootstrap() {

  // Additional initialization
  // Somemodule.init()

  class Root extends PureComponent {

    //   AsyncStorage.removeItem('password')
    // }
    render() {
      const { store, persistor } = configureStore(() => {
        store.dispatch({ type: REHYDRATED })
        store.dispatch(checkPasswordSet())
      })
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppWithRedux />
          </PersistGate>
        </Provider>
      )
    }
  }

  return Root
}
