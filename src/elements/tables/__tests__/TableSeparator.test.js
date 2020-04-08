import 'react-native'
import React from 'react'
import { itBehavesLike } from '../../../specs/shared_examples/index'

import TableSeparator from '../TableSeparator'

describe('<TableSeparator />', () => {
  itBehavesLike('aThemedComponent', { subject: <TableSeparator /> })
})
