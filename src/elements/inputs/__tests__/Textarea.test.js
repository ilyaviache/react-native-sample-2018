import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { itBehavesLike } from '../../../specs/shared_examples/index'

import Textarea from '../Textarea'

const setup = propOverrides => {
  const props = Object.assign({
    name: 'name',
    value: 'value',
    children: null,
    numberOfLines: 10,
    onChange: jest.fn()
  }, propOverrides)

  const component = <Textarea {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<Textarea />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('numberOfLines', () => {
    const { component } = setup({ numberOfLines: 15 })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})
