import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import Checkbox from '../Checkbox'

const setup = propOverrides => {
  const props = Object.assign({
    children: null,
    checked: false,
    onCheckedChange: jest.fn(),
  }, propOverrides)

  const component = <Checkbox {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<Checkbox />', () => {
  // react-test-renderer dosen't work with MKCheckbox
  it('renders correctly', () => {
    const { wrapper } = setup()
    expect(wrapper).toMatchSnapshot()
  })


  it('renders correctly with children', () => {
    const { props, wrapper } = setup({ children: 'Test' })

    expect(wrapper.children().last().text()).toEqual(props.children)
  })
})
