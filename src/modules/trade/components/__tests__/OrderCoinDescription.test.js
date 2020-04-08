import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import OrderCoinDescription from '../OrderCoinDescription'

const setup = propOverrides => {
  const props = Object.assign({
    price: 0.1112323,
    trend: false,
    percentageChange: 0.18,
    vol: 64.23232,
    high: 0.01212,
    low: 0.011111,
    fiatPrice: 10.22,
    currency: '$',
    logoUrl: 'https://s3-ap-southeast-1.amazonaws.com/tokenjar/zrx.png'
  }, propOverrides)

  const component = <OrderCoinDescription {...props} />

  return {
    props,
    component
  }
}

describe('<OrderCoinDescription />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('trend: true', () => {
    const { component } = setup({ trend: true })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})
