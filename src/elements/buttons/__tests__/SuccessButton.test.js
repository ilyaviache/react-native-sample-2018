import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import SuccessButton from '../SuccessButton'

const setup = propOverrides => {
  const props = Object.assign({
    children: 'Test',
    rounded: false,
    size: 'small',
    enabled: true,
    onPress: jest.fn(),
  }, propOverrides)

  const component = <SuccessButton {...props} />
  const wrapper = shallow(component)

  return {
    props,
    component,
    wrapper
  }
}

describe('<SuccessButton />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })
})
