import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import Radio from '../Radio'

const setup = propOverrides => {
  const props = Object.assign({
    children: null,
    checked: false,
    onChange: jest.fn(),
    onChecked: jest.fn()
  }, propOverrides)

  const component = <Radio {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<Radio />', () => {
  // react-test-renderer dosen't work with MKRadio
  it('renders correctly', () => {
    const { wrapper } = setup()
    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with children', () => {
    const { props, wrapper } = setup({ children: 'Test' })

    expect(wrapper.children().last().text()).toEqual(props.children)
  })
})
