import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { itBehavesLike } from '../../../specs/shared_examples/index'
import { wrapWithTheme } from '../../../specs/utils'

import selection from '../selection.json'
import Icon from '../index'

const setup = propOverrides => {
  const props = Object.assign({
    name: 'password',
    size: 25,
    color: null
  }, propOverrides)

  const component = <Icon {...props} />
  const tree = renderer.create(wrapWithTheme(component)).toJSON()

  return {
    props,
    tree,
    component
  }
}

describe('<Icon />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('size', () => {
    const { component } = setup({ size: 18 })
    itBehavesLike('aThemedComponent', { subject: component })
  })

  describe('name', () => {
    const { component } = setup({ name: 'cancel' })
    itBehavesLike('aThemedComponent', { subject: component })
  })

  describe('color', () => {
    const color = '#000000'
    const { tree } = setup({ color })
    it('renders passed color in icon styles', () => {
      expect(tree.props.style[1][0].color).toBe(color)
    })
  })

  selection.icons.forEach((icon) => {
    describe(`icon ${icon.properties.name} is presented and renders correctly`, () => {
      const { component } = setup({ name: icon.properties.name })
      itBehavesLike('aThemedComponent', { subject: component })
    })
  })
})
