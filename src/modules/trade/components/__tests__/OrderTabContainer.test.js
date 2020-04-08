import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import OrderTabContainer from '../OrderTabContainer'

const setup = propOverrides => {
  const props = Object.assign({
    activeTab: 'fav'
  }, propOverrides)

  const component = <OrderTabContainer {...props} />

  return {
    props,
    component
  }
}

describe('<OrderTabContainer />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  // describe('activeTab: history', () => {
  //   const { component } = setup({ activeTab: 'history' })
  //   itBehavesLike('aThemedComponent', { subject: component })
  // })

  describe('activeTab: orders', () => {
    const { component } = setup({ activeTab: 'orders' })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})
