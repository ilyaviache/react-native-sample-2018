import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import View from '../../built-in/View'
import ScrollContainer from '../ScrollContainer'

describe('<ScrollContainer />', () => {
  itBehavesLike('aThemedComponent', { subject: <ScrollContainer /> })

  describe('fullheight: true', () => {
    itBehavesLike('aThemedComponent', { subject: <ScrollContainer fullheight /> })
  })

  describe('disabled: false', () => {
    it('onPress works for passed children', () => {
      const onPress = jest.fn()
      const wrapper = shallow(<ScrollContainer>
        <View onPress={onPress} />
      </ScrollContainer>)
      wrapper.find(View).simulate('press')
      expect(onPress).toHaveBeenCalledTimes(1)
    })
  })

  describe('disabled: true', () => {
    itBehavesLike('aThemedComponent', { subject: <ScrollContainer disabled /> })
    it('onPress blocked for passed children', () => {
      const onPress = jest.fn()
      const wrapper = shallow(<ScrollContainer>
        <View onPress={onPress} />
      </ScrollContainer>)
      wrapper.find(View).simulate('press')
      expect(onPress).toHaveBeenCalledTimes(1)
    })
  })
})
