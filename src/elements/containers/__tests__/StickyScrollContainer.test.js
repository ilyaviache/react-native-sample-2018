import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import StickyScrollContainer from '../StickyScrollContainer'
import StickyButtonContainer from '../StickyButtonContainer'

describe('<StickyScrollContainer />', () => {
  itBehavesLike('aThemedComponent', { subject: <StickyScrollContainer /> })
  itBehavesLike('aComponentWithChildren', { subject: <StickyScrollContainer /> })

  it('have padding equals button height', () => {
    const containerTree = renderer.create(<StickyScrollContainer />).toJSON()
    const buttonTree = renderer.create(<StickyButtonContainer />).toJSON()
    const containerPadding = containerTree.props.style[1][1][0].paddingBottom
    const buttonHeight = buttonTree.props.style[1][0].height

    expect(containerPadding).toEqual(buttonHeight)
  })
})
