import 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import OrderTabHistory from '../OrderTabHistory'

const initialState = { orders: [] }
const mockStore = configureStore()

const setup = propOverrides => {
  const store = mockStore(initialState)
  const props = Object.assign({
    getTradeOrders: jest.fn(),
    orders: []
  }, propOverrides)

  const component = <Provider store={store}><OrderTabHistory {...props} /></Provider>

  return {
    props,
    component
  }
}

describe('<OrderTabHistory />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })
})
