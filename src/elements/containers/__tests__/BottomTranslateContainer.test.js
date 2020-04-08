import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import BottomTranslateContainer from '../BottomTranslateContainer'

describe('<BottomTranslateContainer />', () => {
  itBehavesLike('aThemedComponent', { subject: <BottomTranslateContainer /> })
  itBehavesLike('aComponentWithChildren', { subject: <BottomTranslateContainer /> })

  it('active: flase. Should be hidden at the bottom (translateY > height)', () => {
    const tree = renderer.create(<BottomTranslateContainer active={false} />).toJSON()
    expect(tree.props.style[1][0].transform[0].translateY).toEqual(300)
  })

  it('active: true. Should be hidden at the bottom (translateY = 0)', () => {
    const tree = renderer.create(<BottomTranslateContainer active />).toJSON()
    expect(tree.props.style[1][0].transform[0].translateY).toEqual(0)
  })
})
