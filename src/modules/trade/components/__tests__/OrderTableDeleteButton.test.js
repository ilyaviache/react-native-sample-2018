import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import OrderTableDeleteButton from '../OrderTableDeleteButton'

const setup = propOverrides => {
  const props = Object.assign({
    data: [
      ['table line 1'],
      ['table line 2'],
      ['table line 3']
    ]
  }, propOverrides)

  const component = <OrderTableDeleteButton {...props} />

  return {
    props,
    component
  }
}

describe('<OrderTableDeleteButton />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })
})
