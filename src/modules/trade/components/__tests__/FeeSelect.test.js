import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import FeeSelect from '../FeeSelect'

const setup = propOverrides => {
  const props = Object.assign({
    gasPrice: 1
  }, propOverrides)

  const component = <FeeSelect {...props} />
  const wrapper = shallow(<FeeSelect {...props} />)

  return {
    props,
    wrapper,
    component
  }
}

describe('<FeeSelect />', () => {
  it('renders correctly', () => {
    const { wrapper } = setup()
    expect(wrapper).toMatchSnapshot()
  })
})
