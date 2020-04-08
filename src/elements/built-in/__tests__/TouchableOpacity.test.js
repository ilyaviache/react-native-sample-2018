import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import TouchableOpacity from '../TouchableOpacity'

describe('<TouchableOpacity />', () => {
  itBehavesLike('aThemedComponent', { subject: <TouchableOpacity /> })
  itBehavesLike('aComponentWithChildren', { subject: <TouchableOpacity /> })
})
