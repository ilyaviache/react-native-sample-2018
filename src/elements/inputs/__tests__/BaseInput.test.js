import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { itBehavesLike } from '../../../specs/shared_examples/index'

import BaseInput from '../BaseInput'

const setup = propOverrides => {
  const props = Object.assign({
    name: 'name',
    value: 'value',
    children: null,
    onChange: jest.fn()
  }, propOverrides)

  const component = <BaseInput {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<BaseInput />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })
})
