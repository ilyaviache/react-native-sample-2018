import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import ScrollView from '../ScrollView'

describe('<ScrollView />', () => {
  itBehavesLike('aThemedComponent', { subject: <ScrollView /> })
  itBehavesLike('aComponentWithChildren', { subject: <ScrollView /> })
})
