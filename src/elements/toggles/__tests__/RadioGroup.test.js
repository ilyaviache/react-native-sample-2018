import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import View from '../../built-in/View'
import RadioGroup from '../RadioGroup'
import Radio from '../Radio'

describe('<RadioGroup />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <RadioGroup>
        {(group) => (
          <View>
            <Radio group={group}>CNY</Radio>
            <Radio group={group}>USD</Radio>
            <Radio group={group}>ETH</Radio>
          </View>
        )}
      </RadioGroup>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
