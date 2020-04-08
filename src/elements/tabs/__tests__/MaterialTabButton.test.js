import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import MaterialTabButton from '../MaterialTabButton'

const setup = propOverrides => {
  const props = Object.assign({
    children: null,
    value: 'Test',
    active: false,
    buttonPress: jest.fn(),
  }, propOverrides)

  const component = <MaterialTabButton {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<MaterialTabButton />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('active: true', () => {
    const { component } = setup({ active: true })
    itBehavesLike('aThemedComponent', { subject: component })
  })

  it('buttonPress: properly fires when button pressed', () => {
    const { props, wrapper } = setup()
    wrapper.simulate('press')
    expect(props.buttonPress).toHaveBeenCalledTimes(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('buttonPress: return value props', () => {
    const { props, wrapper } = setup({ value: 'Teeest' })
    wrapper.simulate('press')
    expect(props.buttonPress).toHaveBeenCalledWith(props.value)
  })
})
