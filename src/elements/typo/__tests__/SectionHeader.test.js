import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import SectionHeader from '../SectionHeader'

describe('<SectionHeader />', () => {
  itBehavesLike('aThemedComponent', { subject: <SectionHeader /> })
  itBehavesLike('aComponentWithChildren', { subject: <SectionHeader /> })
})
