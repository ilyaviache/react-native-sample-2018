import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { itBehavesLike } from '../../../../../specs/shared_examples/index'
import { wrapWithTheme } from '../../../../../specs/utils'

import Drawer from '../Drawer'

const setup = propOverrides => {
  const props = Object.assign({
    navigation: {
      navigate: jest.fn()
    },
  }, propOverrides)

  const component = <Drawer {...props} />
  const tree = renderer.create(wrapWithTheme(component))

  return {
    props,
    tree,
    component
  }
}

describe('<Drawer />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })
})
