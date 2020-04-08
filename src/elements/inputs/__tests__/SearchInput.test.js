import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../specs/shared_examples/index'

import SearchInput from '../SearchInput'

const setup = propOverrides => {
  const props = Object.assign({
    name: 'name',
    value: '',
    children: null,
    onChange: jest.fn()
  }, propOverrides)

  const component = <SearchInput {...props} />

  return {
    props,
    component
  }
}

describe('<SearchInput />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('shows close icon if val non null', () => {
    const { component } = setup({ value: 'Test' })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})
