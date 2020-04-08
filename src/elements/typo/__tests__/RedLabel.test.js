import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import RedLabel from '../RedLabel'

describe('<RedLabel />', () => {
  itBehavesLike('aThemedComponent', { subject: <RedLabel /> })
  itBehavesLike('aComponentWithChildren', { subject: <RedLabel /> })
})
