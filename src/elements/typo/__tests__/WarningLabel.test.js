import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import WarningLabel from '../WarningLabel'

describe('<WarningLabel />', () => {
  itBehavesLike('aThemedComponent', { subject: <WarningLabel>Test</WarningLabel> })
})
