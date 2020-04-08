import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import CurrencyForm from '../CurrencyForm'

const setup = propOverrides => {
  const props = Object.assign({
    onSend: jest.fn(),
    values: {
      currency: ''
    }
  }, propOverrides)

  const component = <CurrencyForm {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<CurrencyForm />', () => {
  it('renders correctly', () => {
    const { wrapper } = setup()
    expect(wrapper).toMatchSnapshot()
  })
})
