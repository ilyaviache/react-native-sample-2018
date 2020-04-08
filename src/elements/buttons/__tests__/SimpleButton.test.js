import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import SimpleButton from '../SimpleButton'

const setup = propOverrides => {
  const props = Object.assign({
    children: 'Test',
    active: true,
    enabled: true,
    onPress: jest.fn(),
  }, propOverrides)

  const component = <SimpleButton {...props} />
  const wrapper = shallow(component)

  return {
    props,
    component,
    wrapper
  }
}

describe('<SimpleButton />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  it('active: renders correctly', () => {
    const { tree } = setup({ size: false })
    expect(tree).toMatchSnapshot()
  })

  it('enabled: renders correctly', () => {
    const { tree } = setup({ enabled: false })
    expect(tree).toMatchSnapshot()
  })

  it('onPress: properly fires when button pressed', () => {
    const { props, wrapper } = setup()
    wrapper.simulate('press')
    expect(props.onPress).toHaveBeenCalledTimes(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('onPress: don\'t fires event when button disabled', () => {
    const { props, wrapper } = setup({ enabled: false })
    wrapper.simulate('press')
    expect(props.onPress).toHaveBeenCalledTimes(0)
    expect(wrapper).toMatchSnapshot()
  })
})
