import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import ScreenContainer from '../ScreenContainer'

describe('<ScreenContainer />', () => {
  itBehavesLike('aThemedComponent', { subject: <ScreenContainer /> })
  itBehavesLike('aComponentWithChildren', { subject: <ScreenContainer /> })
})
