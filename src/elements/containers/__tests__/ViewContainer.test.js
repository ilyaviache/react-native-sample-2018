import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import ViewContainer from '../ViewContainer'

describe('<ViewContainer />', () => {
  itBehavesLike('aThemedComponent', { subject: <ViewContainer /> })
  itBehavesLike('aComponentWithChildren', { subject: <ViewContainer /> })
})
