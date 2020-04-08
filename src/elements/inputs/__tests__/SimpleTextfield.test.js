import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { itBehavesLike } from '../../../specs/shared_examples/index'

import SimpleTextfield from '../SimpleTextfield'

const setup = propOverrides => {
  const props = Object.assign({
    name: 'name',
    value: 'value',
    children: null,
    onChange: jest.fn()
  }, propOverrides)

  const component = <SimpleTextfield {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<SimpleTextfield />', () => {
  const { props, component, wrapper } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  it('properly fires `onChange` when input changes', () => {
    const value = 'Test'
    wrapper.simulate('change', value)
    expect(props.onChange).toHaveBeenCalledWith({ name: props.name, value })
  })
})
