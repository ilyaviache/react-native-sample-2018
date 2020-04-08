import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import TransactionForm from '../TransactionForm'

const setup = propOverrides => {
  const props = Object.assign({
    type: 'buy',
    onSend: jest.fn(),
    values: {
      gasLimit: '',
      gasPrice: '',
      price: '',
      amount: '',
    }
  }, propOverrides)

  const component = <TransactionForm {...props} />
  const wrapper = shallow(<TransactionForm {...props} />)

  return {
    props,
    wrapper,
    component
  }
}

describe('<TransactionForm />', () => {
  it('renders correctly', () => {
    const { wrapper } = setup()
    expect(wrapper).toMatchSnapshot()
  })

  // describe('values', () => {
  //   const { component } = setup({
  //     values: {
  //       gasLimit: '12',
  //       gasPrice: '10',
  //       price: '5',
  //       amount: '9',
  //     }
  //   })
  //   itBehavesLike('aThemedComponent', { subject: component })
  // })

  // describe('type: sell', () => {
  //   const { component } = setup({ type: 'sell' })
  //   itBehavesLike('aThemedComponent', { subject: component })
  // })
})
