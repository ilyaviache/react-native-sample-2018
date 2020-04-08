import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import PercentageBadge from '../PercentageBadge'

const setup = propOverrides => {
  const props = Object.assign({
    children: '50',
    upraising: false
  }, propOverrides)

  const component = <PercentageBadge {...props} />

  return {
    props,
    component
  }
}

describe('<PercentageBadge />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('upraising: true', () => {
    const { component } = setup({ active: 'value 2' })
    itBehavesLike('aThemedComponent', { subject: component })
  })
})