import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import ContactForm from '../ContactForm'

const setup = propOverrides => {
  const props = Object.assign({
    onSend: jest.fn(),
    values: {
      email: '',
      title: '',
      body: ''
    }
  }, propOverrides)

  const component = <ContactForm {...props} />

  return {
    props,
    component
  }
}

describe('<ContactForm />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('values', () => {
    const { component } = setup({ values: {
      email: 'test@gmail.com',
      title: 'Test',
      body: 'test test'
    } })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})
