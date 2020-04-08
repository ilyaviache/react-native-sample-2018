import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import PasswordForm from '../PasswordForm'

const setup = propOverrides => {
  const props = Object.assign({
    onSend: jest.fn(),
    values: {
      passowrd: ''
    }
  }, propOverrides)

  const component = <PasswordForm {...props} />

  return {
    props,
    component
  }
}

describe('<PasswordForm />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('values', () => {
    const { component } = setup({
      values: {
        password: 'testtest'
      }
    })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})
