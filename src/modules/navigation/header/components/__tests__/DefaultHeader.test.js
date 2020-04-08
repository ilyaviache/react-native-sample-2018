import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../../specs/shared_examples/index'

import DefaultHeader from '../DefaultHeader'

const setup = propOverrides => {
  const props = Object.assign({
    title: 'Test',
  }, propOverrides)

  const component = <DefaultHeader {...props} />

  return {
    props,
    component
  }
}

describe('<DefaultHeader />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })
})
