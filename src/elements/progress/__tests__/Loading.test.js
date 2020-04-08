import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import Loading from '../Loading'

describe('<Loading />', () => {
  itBehavesLike('aThemedComponent', { subject: <Loading /> })
})
