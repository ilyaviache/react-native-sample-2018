import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import P from '../P'

describe('<P />', () => {
  itBehavesLike('aThemedComponent', { subject: <P /> })
  itBehavesLike('aComponentWithChildren', { subject: <P /> })
})
