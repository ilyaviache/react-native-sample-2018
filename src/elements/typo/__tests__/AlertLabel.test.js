import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import AlertLabel from '../AlertLabel'

describe('<AlertLabel />', () => {
  itBehavesLike('aThemedComponent', { subject: <AlertLabel>Test</AlertLabel> })
})
