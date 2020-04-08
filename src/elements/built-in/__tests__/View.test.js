import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import View from '../View'

describe('<View />', () => {
  itBehavesLike('aThemedComponent', { subject: <View /> })
  itBehavesLike('aComponentWithChildren', { subject: <View /> })
})
