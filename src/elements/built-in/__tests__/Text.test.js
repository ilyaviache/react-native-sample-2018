import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import Text from '../Text'

describe('<Text />', () => {
  itBehavesLike('aThemedComponent', { subject: <Text/> })
  itBehavesLike('aComponentWithChildren', { subject: <Text /> })
})