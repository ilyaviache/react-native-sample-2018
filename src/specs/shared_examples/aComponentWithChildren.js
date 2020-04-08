import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { View } from 'react-native'

export default ({ subject }) => {
  it('renders text when passed in', () => {
    const wrapper = shallow(subject).setProps({ children: 'Test' })
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.children().text()).toEqual('Test')
  })

  it('renders component when passed in', () => {
    const wrapper = shallow(subject).setProps({ children: <View /> })
    wrapper.update()
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(View)).toHaveLength(1)
  })
}
