import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import PageContainer from '../PageContainer'

describe('<PageContainer />', () => {
  itBehavesLike('aThemedComponent', { subject: <PageContainer /> })
  itBehavesLike('aComponentWithChildren', { subject: <PageContainer /> })
})
