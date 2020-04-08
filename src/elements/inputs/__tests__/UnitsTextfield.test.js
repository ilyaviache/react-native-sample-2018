import 'react-native'
import React from 'react'

import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import { wrapWithTheme } from '../../../specs/utils'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import UnitsTextfield from '../UnitsTextfield'

const setup = propOverrides => {
  const props = Object.assign({
    units: null,
    children: null,
    name: 'name',
    value: 'value',
    onChange: jest.fn(),
    error: false,
    placeholder: 'Test Placeholder',
    type: 'text',
    size: 'default',
    onBlur: jest.fn(),
  }, propOverrides)

  const component = <UnitsTextfield {...props} />
  const wrapper = shallow(component)
  const tree = renderer.create(wrapWithTheme(component)).toJSON()

  return {
    props,
    component,
    wrapper,
    tree
  }
}

describe('<UnitsTextfield />', () => {
  const { props, component, wrapper } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  it('properly fires `onChange` when input changes', () => {
    const event = { target: { value: 'Here is a value' } }
    wrapper.simulate('change', event)
    expect(props.onChange).toHaveBeenCalledWith(event)
  })

  describe('units: ETH', () => {
    const { tree, component } = setup({ units: 'ETH' })
    itBehavesLike('aThemedComponent', { subject: component })

    it('renders units inside input', () => {
      const units = tree.children[1]
      expect(units.type).toEqual('Text')
      expect(units.children[0]).toBe('ETH')
    })

    it('renders input with padding on the icon place', () => {
      expect(tree.children[0].children[0].props.style[2].paddingRight).toEqual(50)
    })
  })

  describe('error: true', () => {
    const { component } = setup({ error: true })
    itBehavesLike('aThemedComponent', { subject: component })
  })

  describe('size: small', () => {
    const { component } = setup({ size: 'small' })
    itBehavesLike('aThemedComponent', { subject: component })
  })

  describe('type: number', () => {
    const { component, tree } = setup({ type: 'number' })
    itBehavesLike('aThemedComponent', { subject: component })

    it('renders BaseInput with correct props', () => {
      expect(tree.children[0].children[0].props.keyboardType).toBe('numeric')
    })
  })

  describe('type: password', () => {
    const { component, tree } = setup({ type: 'password' })
    itBehavesLike('aThemedComponent', { subject: component })

    it('renders BaseInput with correct props', () => {
      expect(tree.children[0].children[0].props.password).toBeTruthy()
    })
  })
})
