import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import TouchableHighlight from '../TouchableHighlight'

describe('<TouchableHighlight />', () => {
  itBehavesLike('aComponentWithChildren', { subject: <TouchableHighlight /> })
})
