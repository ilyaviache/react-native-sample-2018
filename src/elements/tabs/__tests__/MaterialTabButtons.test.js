import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import MaterialTabButton from '../MaterialTabButton'
import MaterialTabButtons from '../MaterialTabButtons'

const setup = propOverrides => {
  const props = Object.assign({
    tabs: [
      {
        label: 'Test 1',
        value: 'test1'
      },
      {
        label: 'Test 2',
        value: 'test2'
      },
      {
        label: 'Test 3',
        value: 'test3'
      }
    ],
    active: 'test1',
    tabButtonPress: jest.fn(),
  }, propOverrides)

  const component = <MaterialTabButtons {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<MaterialTabButtons />', () => {
  const { component } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  describe('active: test2', () => {
    const { component } = setup({ active: 'test2' })
    itBehavesLike('aThemedComponent', { subject: component })
  })

  it('should render 3 nested Material Tab Button', () => {
    const { props, wrapper } = setup()
    expect(wrapper.find(MaterialTabButton)).toHaveLength(props.tabs.length)
  })

  it('should render 0 nested Material Tab Button', () => {
    const { props, wrapper } = setup({ tabs: [] })
    expect(wrapper.find(MaterialTabButton)).toHaveLength(props.tabs.length)
  })
})
