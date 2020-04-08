import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import faker from 'faker'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import FormGroup from '../FormGroup'

describe('<FormGroup />', () => {
  itBehavesLike('aThemedComponent', { subject: <FormGroup /> })
  itBehavesLike('aComponentWithChildren', { subject: <FormGroup /> })

  it('renders correctly top prop', () => {
    const top = faker.random.number(300)
    const tree = renderer.create(<FormGroup top={top} />).toJSON()
    expect(tree.props.style[1][0].marginTop).toEqual(top)
  })

  it('renders correctly bottom prop', () => {
    const bottom = faker.random.number(300)
    const tree = renderer.create(<FormGroup bottom={bottom} />).toJSON()
    expect(tree.props.style[1][0].marginBottom).toEqual(bottom)
  })
})
