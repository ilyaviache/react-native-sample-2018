import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import GreenLabel from '../GreenLabel'

describe('<GreenLabel />', () => {
  itBehavesLike('aThemedComponent', { subject: <GreenLabel /> })
  itBehavesLike('aComponentWithChildren', { subject: <GreenLabel /> })
})
