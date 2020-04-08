import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import BaseForm from '../BaseForm'
import FormContainer from '../FormContainer'

const setup = propOverrides => {
  const props = Object.assign({
    initialValues: {},
    validationSchema: jest.fn(),
    validate: jest.fn(),
    render: () => (<FormContainer></FormContainer>),
    onSubmit: jest.fn()
  }, propOverrides)

  const component = <BaseForm {...props} />
  const wrapper = shallow(component)

  return {
    props,
    wrapper,
    component
  }
}

describe('<BaseForm />', () => {
  const { props, component, wrapper } = setup()
  itBehavesLike('aThemedComponent', { subject: component })

  it('pass props correctly', () => {
    expect(wrapper.prop('initialValues')).toEqual(props.initialValues)
    expect(wrapper.prop('validationSchema')).toEqual(props.validationSchema)
    expect(wrapper.prop('validate')).toEqual(props.validate)
    expect(wrapper.prop('render')).toEqual(props.render)
    expect(wrapper.prop('onSubmit')).toEqual(props.onSubmit)
  })
})
