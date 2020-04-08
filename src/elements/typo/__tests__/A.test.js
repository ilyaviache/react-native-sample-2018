import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import A from '../A'

describe('<A />', () => {
  itBehavesLike('aThemedComponent', { subject: <A /> })
  itBehavesLike('aComponentWithChildren', { subject: <A /> })
})
