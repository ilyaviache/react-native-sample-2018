import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { itBehavesLike } from '../../../../../specs/shared_examples/index'

import MenuItem from '../MenuItem'

const setup = propOverrides => {
  const props = Object.assign({
    children: 'trade',
    icon: 'trade',
    route: 'Trade',
    onPress: jest.fn()
  }, propOverrides)

  const component = <MenuItem {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<MenuItem />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  it('onPress: properly fires when button pressed', () => {
    const { props, wrapper } = setup()
    wrapper.simulate('press')
    expect(props.onPress).toHaveBeenCalledTimes(1)
    expect(props.onPress).toHaveBeenCalledWith(props.route)
  })
})
