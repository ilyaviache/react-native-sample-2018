import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { itBehavesLike } from '../../../../specs/shared_examples/index'
import { wrapWithTheme } from '../../../../specs/utils'

import OrderTabs from '../OrderTabs'

const setup = propOverrides => {
  const props = Object.assign({
    tabs: [
      { label: 'label 1', value: 'value 1' },
      { label: 'label 2', value: 'value 2' }
    ],
    onTabPress: jest.fn(),
    active: 'value 1'
  }, propOverrides)

  const component = <OrderTabs {...props} />
  const wrapper = shallow(component)
  const tree = renderer.create(wrapWithTheme(component))

  return {
    props,
    wrapper,
    tree,
    component
  }
}

describe('<OrderTabs />', () => {
  const { props, component, wrapper, tree } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  expect(wrapper.children().length).toEqual(props.tabs.length)
  expect(tree.root.findByProps({ value: props.active }).props.active).toBeTruthy()

  describe('active: value 2', () => {
    const { component, tree } = setup({ active: 'value 2' })
    itBehavesLike('aThemedComponent', { subject: component })

    expect(tree.root.findByProps({ value: 'value 2' }).props.active).toBeTruthy()
  })
})
