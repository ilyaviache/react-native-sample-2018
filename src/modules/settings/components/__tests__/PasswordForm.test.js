import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import AddTokenForm from '../AddTokenForm'

const setup = propOverrides => {
  const props = Object.assign({
    onSend: jest.fn(),
    values: {
      password: '',
      password_new: '',
      password_repeat: ''
    }
  }, propOverrides)

  const component = <AddTokenForm {...props} />

  return {
    props,
    component
  }
}

describe('<AddTokenForm />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('values', () => {
    const { component } = setup({
      values: {
        password: 'testtest',
        password_new: 'testtest2',
        password_repeat: 'testtest2'
      }
    })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})
