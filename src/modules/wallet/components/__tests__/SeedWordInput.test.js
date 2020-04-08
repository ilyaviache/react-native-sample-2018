import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import SeedWordInput from '../SeedWordInput'

const setup = propOverrides => {
  const props = Object.assign({
    header: 'test',
    seed_word: 'test word',
    onChange: jest.fn()
  }, propOverrides)

  const component = <SeedWordInput {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<SeedWordInput />', () => {
  const { props, component, wrapper } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  it('properly fires `onChange` when input changes', () => {
    const input = wrapper.find({ name: 'seed_word' })
    const event = { target: { value: 'Here is a value' } }
    input.simulate('change', event)
    expect(props.onChange).toHaveBeenCalledWith(event)
  })

  it('pass val to input', () => {
    const input = wrapper.find({ name: 'seed_word' })
    expect(input.props().value).toBe(props.seed_word)
  })

  it('header to input', () => {
    const header = wrapper.children().get(1)
    expect(header.props.children).toBe(props.header)
  })
})
