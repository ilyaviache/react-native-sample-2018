import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import Roboto from '../Roboto'

describe('<Roboto />', () => {
  itBehavesLike('aThemedComponent', { subject: <Roboto>Test</Roboto> })
})
