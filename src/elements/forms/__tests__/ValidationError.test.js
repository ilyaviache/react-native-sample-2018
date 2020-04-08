import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import ValidationError from '../ValidationError'

describe('<ValidationError />', () => {
  itBehavesLike('aThemedComponent', { subject: <ValidationError /> })
  itBehavesLike('aComponentWithChildren', { subject: <ValidationError /> })
})
