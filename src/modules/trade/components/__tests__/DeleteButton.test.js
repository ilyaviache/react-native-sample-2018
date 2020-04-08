import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import DeleteButton from '../DeleteButton'

const setup = propOverrides => {
  const props = Object.assign({
    onDeletePress: jest.fn()
  }, propOverrides)

  const component = <DeleteButton {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<DeleteButton />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  it('onPress: properly fires when button pressed', () => {
    const { props, wrapper } = setup()
    wrapper.children().simulate('press')
    expect(props.onDeletePress).toHaveBeenCalledTimes(1)
  })
})
