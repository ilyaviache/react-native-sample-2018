import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { itBehavesLike } from '../../../../specs/shared_examples/index'
import { wrapWithTheme } from '../../../../specs/utils'

import OrderMenuTitle from '../OrderMenuTitle'

const setup = propOverrides => {
  const props = Object.assign({
    selectedPair: {
      leftPair: 'ZRX',
      rightPair: 'WETH',
      favorite: false
    },
    navigation: { navigate: jest.fn() }
  }, propOverrides)

  const component = <OrderMenuTitle {...props} />
  const tree = renderer.create(wrapWithTheme(component))

  return {
    props,
    tree,
    component
  }
}

describe('<OrderMenuTitle />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('favorite: true', () => {
    const { component } = setup({ selectedPair: {
      leftPair: 'ZRX',
      rightPair: 'WETH',
      favorite: true
    } })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})
