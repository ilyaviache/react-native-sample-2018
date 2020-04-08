import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import AddTokenForm from '../AddTokenForm'

const setup = propOverrides => {
  const props = Object.assign({
    onSend: jest.fn(),
    values: {
      token_name: ''
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
        token_name: 'testtest'
      }
    })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})
