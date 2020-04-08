import 'react-native'
import React from 'react'

import { itBehavesLike } from '../../../../specs/shared_examples/index'

import Triangle from '../Triangle'

describe('<Triangle />', () => {
  itBehavesLike('aThemedComponent', { subject: <Triangle /> })
})
