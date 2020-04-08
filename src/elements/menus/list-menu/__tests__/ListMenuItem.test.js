import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { itBehavesLike } from '../../../../specs/shared_examples/index'

import ListMenuItem from '../ListMenuItem'

const setup = propOverrides => {
  const props = Object.assign({
    children: 'Test',
    separator: false,
    name: 'Name',
    onPress: jest.fn(),
  }, propOverrides)

  const component = <ListMenuItem {...props} />
  const wrapper = shallow(component)

  return {
    props,
    component,
    wrapper
  }
}

describe('<ListMenuItem />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('separator: true', () => {
    const { component } = setup()
    itBehavesLike('aThemedComponent', { subject: component })
  })

  describe('onPress return name props', () => {
    const { props, wrapper } = setup()
    itBehavesLike('aThemedComponent', { subject: component })
    wrapper.simulate('press')
    expect(props.onPress).toHaveBeenCalledWith(props.name)
  })
})
