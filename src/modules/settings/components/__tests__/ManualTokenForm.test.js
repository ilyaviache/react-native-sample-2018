import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import ManualTokenForm from '../ManualTokenForm'

const setup = propOverrides => {
  const props = Object.assign({
    onSend: jest.fn(),
    values: {
      token_name: '',
      token_address: '',
      token_digit: ''
    }
  }, propOverrides)

  const component = <ManualTokenForm {...props} />

  return {
    props,
    component
  }
}

describe('<ManualTokenForm />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('values', () => {
    const { component } = setup({
      values: {
        token_name: 'test test',
        token_address: 'asdads',
        token_digit: 'adsasdd'
      }
    })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})
