import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import OrderTab from '../OrderTab'

const setup = propOverrides => {
  const props = Object.assign({
    label: 'label',
    value: 'value',
    onTabPress: jest.fn(),
    active: false,
    last: false
  }, propOverrides)

  const component = <OrderTab {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<OrderTab />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('active: true', () => {
    const { component } = setup({ active: true })
    itBehavesLike('aThemedComponent', { subject: component })
  })

  describe('last: true', () => {
    const { component } = setup({ last: true })
    itBehavesLike('aThemedComponent', { subject: component })
  })

  it('onPress: properly fires when button pressed', () => {
    const { props, wrapper } = setup()
    wrapper.simulate('press')
    expect(props.onTabPress).toHaveBeenCalledTimes(1)
  })

  it('onPress: pass tab value', () => {
    const { props, wrapper } = setup()
    wrapper.simulate('press')
    expect(props.onTabPress).toHaveBeenCalledWith(props.value)
  })
})
