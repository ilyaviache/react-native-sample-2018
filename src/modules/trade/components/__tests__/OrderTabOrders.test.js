import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import OrderTabOrders from '../OrderTabOrders'

const setup = propOverrides => {
  const props = Object.assign({
  }, propOverrides)

  const component = <OrderTabOrders {...props} />

  return {
    props,
    component
  }
}

describe('<OrderTabOrders />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })
})
