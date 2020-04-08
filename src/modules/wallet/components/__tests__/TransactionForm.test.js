import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import TransactionForm from '../TransactionForm'

const setup = propOverrides => {
  const props = Object.assign({
    onSend: jest.fn(),
    onCancel: jest.fn(),
    values: {
      gasLimit: '',
      gasPrice: ''
    }
  }, propOverrides)

  const component = <TransactionForm {...props} />

  return {
    props,
    component
  }
}

describe('<TransactionForm />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('values', () => {
    const { component } = setup({
      values: {
        gasLimit: '16',
        gasPrice: '235'
      }
    })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})
