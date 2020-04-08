import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { itBehavesLike } from '../../../specs/shared_examples/index'

import Switch from '../Switch'

const setup = propOverrides => {
  const props = Object.assign({
    children: null,
    checked: false,
    onCheckedChange: jest.fn(),
  }, propOverrides)

  const component = <Switch {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<Switch />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  it('renders correctly with children', () => {
    const { props, wrapper } = setup({ children: 'Test' })

    expect(wrapper.children().children().last().text()).toEqual(props.children)
  })
})
