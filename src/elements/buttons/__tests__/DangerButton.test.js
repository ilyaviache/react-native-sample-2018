import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import DangerButton from '../DangerButton'

const setup = propOverrides => {
  const props = Object.assign({
    children: 'Test',
    rounded: false,
    size: 'small',
    enabled: true,
    onPress: jest.fn(),
  }, propOverrides)

  const component = <DangerButton {...props} />
  const wrapper = shallow(component)

  return {
    props,
    component,
    wrapper
  }
}

describe('<DangerButton />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })
})
