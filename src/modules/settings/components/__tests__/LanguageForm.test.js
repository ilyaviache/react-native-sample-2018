import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import LanguageForm from '../LanguageForm'

const setup = propOverrides => {
  const props = Object.assign({
    onSend: jest.fn(),
    values: {
      locale: ''
    }
  }, propOverrides)

  const component = <LanguageForm {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<LanguageForm />', () => {
  it('renders correctly', () => {
    const { wrapper } = setup()
    expect(wrapper).toMatchSnapshot()
  })
})
