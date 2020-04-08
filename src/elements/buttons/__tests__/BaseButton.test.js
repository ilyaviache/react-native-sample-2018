import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import BaseButton from '../BaseButton'

const setup = propOverrides => {
  const props = Object.assign({
    children: 'Test',
    rounded: false,
    size: 'small',
    enabled: true,
    onPress: jest.fn(),
  }, propOverrides)

  const component = <BaseButton {...props} />
  const wrapper = shallow(component)

  return {
    props,
    component,
    wrapper
  }
}

describe('<BaseButton />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('size: renders correctly', () => {
    const { component } = setup({ size: 'large' })
    itBehavesLike('aThemedComponent', { subject: component })
  })

  describe('rounded: renders correctly', () => {
    const { component } = setup({ rounded: true })
    itBehavesLike('aThemedComponent', { subject: component })
  })

  describe('enabled: renders correctly', () => {
    const { component } = setup({ enabled: false })
    itBehavesLike('aThemedComponent', { subject: component })
  })

  it('onPress: properly fires when button pressed', () => {
    const { props, wrapper } = setup()
    wrapper.children().simulate('press')
    expect(props.onPress).toHaveBeenCalledTimes(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('onPress: don\'t fires event when button disabled', () => {
    const { props, wrapper } = setup()
    wrapper.setProps({ enabled: false })
    wrapper.children().simulate('press')
    expect(props.onPress).toHaveBeenCalledTimes(0)
    expect(wrapper).toMatchSnapshot()
  })
})
