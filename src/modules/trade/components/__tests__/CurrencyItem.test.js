import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { itBehavesLike } from '../../../../specs/shared_examples/index'
import { wrapWithTheme } from '../../../../specs/utils'

import CurrencyItem from '../CurrencyItem'

const setup = propOverrides => {
  const props = Object.assign({
    index: 1,
    favorite: false,
    onCurrencyPress: jest.fn(),
    onFavPress: jest.fn(),
    onDeletePress: jest.fn(),
    shortcut: 'XRP',
    title: 'ZRX',
    volume: 849.12,
    price: 0.0000017823,
    equalPrice: 10,
    currency: '$',
    upraising: false,
    trendValue: 0.23
  }, propOverrides)

  const component = <CurrencyItem {...props} />
  const wrapper = shallow(component)
  const tree = renderer.create(wrapWithTheme(component))

  return {
    props,
    wrapper,
    tree,
    component
  }
}

describe('<CurrencyItem />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('upraising: true', () => {
    const { component } = setup({ upraising: true })
    itBehavesLike('aThemedComponent', { subject: component })
  })

  describe('favorite: true', () => {
    const { component } = setup({ favorite: true })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})
